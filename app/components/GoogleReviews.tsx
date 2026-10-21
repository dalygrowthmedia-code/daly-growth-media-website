import { Reveal } from "./Reveal";
import { ReviewStars } from "./ReviewStars";
import { ReviewsSlider } from "./ReviewsSlider";
import { googleBusiness, type GoogleReview } from "../config/google-business";

interface ReviewsData {
  rating?: number;
  count?: number;
  reviews: GoogleReview[];
  profileUrl: string;
  writeReviewUrl: string;
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    rating: number;
    text?: { text: string };
    originalText?: { text: string };
    authorAttribution?: { displayName?: string };
  }[];
}

async function getReviewsData(): Promise<ReviewsData | null> {
  const { placeId, apiKey, profileUrl, manualReviews, manualRating, manualCount } =
    googleBusiness;
  if (!placeId && !profileUrl && manualReviews.length === 0 && !manualRating) return null;

  const writeReviewUrl = placeId
    ? `https://search.google.com/local/writereview?placeid=${placeId}`
    : profileUrl;

  // Live reviews straight from Google when a Place ID and API key are set.
  if (placeId && apiKey) {
    try {
      const response = await fetch(
        `https://places.googleapis.com/v1/places/${placeId}`,
        {
          headers: {
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri"
          },
          next: { revalidate: 60 * 60 * 24 }
        }
      );
      if (response.ok) {
        const place = (await response.json()) as PlacesResponse;
        const live = (place.reviews ?? [])
          .filter((review) => review.rating >= 4)
          .map((review) => ({
            author: review.authorAttribution?.displayName ?? "Google user",
            rating: review.rating,
            text: review.text?.text ?? review.originalText?.text ?? ""
          }))
          .filter((review) => review.text.trim().length > 0);
        if (live.length > 0) {
          return {
            rating: place.rating,
            count: place.userRatingCount,
            reviews: live,
            profileUrl: place.googleMapsUri ?? profileUrl,
            writeReviewUrl
          };
        }
      }
    } catch {
      // fall through to the saved reviews
    }
  }

  return {
    rating: manualRating,
    count: manualCount,
    reviews: manualReviews,
    profileUrl,
    writeReviewUrl
  };
}

export async function GoogleReviews() {
  const data = await getReviewsData();

  if (!data) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <section id="reviews" className="section-shell">
        <p className="rounded-md border border-brand-line bg-brand-mist px-4 py-3 text-sm text-brand-ink">
          <strong>Google Reviews (dev notice):</strong> add a profile link or
          reviews in app/config/google-business.ts.
        </p>
      </section>
    );
  }

  return (
    <section id="reviews" className="section-band">
      <div className="section-shell reviews-shell">
        <div className="reviews-head">
          <Reveal as="div">
            <p className="eyebrow">Google Reviews</p>
            <h2 className="section-title">What clients say on Google.</h2>
          </Reveal>

          <Reveal as="div" delay={80} className="review-summary review-summary-inline">
            {data.rating ? (
              <div className="review-score-row">
                <p className="review-score">{data.rating.toFixed(1)}</p>
                <div>
                  <ReviewStars rating={data.rating} size={22} />
                  {data.count ? (
                    <p className="review-count">
                      {data.count} Google review{data.count === 1 ? "" : "s"}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : (
              <p className="text-lg font-semibold text-brand-ink">Rated by clients on Google</p>
            )}
            <div className="review-actions">
              <a className="button button-small" href={data.profileUrl} target="_blank" rel="noopener noreferrer">
                See all reviews
              </a>
              {data.writeReviewUrl ? (
                <a className="button button-small button-secondary" href={data.writeReviewUrl} target="_blank" rel="noopener noreferrer">
                  Leave a review
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>

        {data.reviews.length > 0 ? (
          <ReviewsSlider reviews={data.reviews.slice(0, 6)} profileUrl={data.profileUrl} />
        ) : null}
      </div>
    </section>
  );
}

/** Google Maps embed for the Business Profile — rendered at the bottom of the page. */
export function GoogleMapSection() {
  const { placeId, mapsEmbedKey, searchQuery, profileUrl } = googleBusiness;
  const mapSrc =
    placeId && mapsEmbedKey
      ? `https://www.google.com/maps/embed/v1/place?key=${mapsEmbedKey}&q=place_id:${placeId}`
      : `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&output=embed`;

  return (
    <section id="find-us" className="map-section">
      <div className="map-section-inner">
        <Reveal as="div" className="map-section-head">
          <div>
            <p className="eyebrow">Find us</p>
            <p className="map-address">67 O&apos;Connell Street, Clonrad Beg, Ennis, Co. Clare, V95 KT26</p>
          </div>
          <a className="button button-small button-secondary" href={profileUrl} target="_blank" rel="noopener noreferrer">
            View on Google
          </a>
        </Reveal>
        <Reveal as="div" delay={80} className="review-map">
          <iframe
            title="Daly Growth Media on Google Maps"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
