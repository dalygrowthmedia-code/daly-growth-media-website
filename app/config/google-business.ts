// Google Business Profile (GMB) settings used by the reviews section, the
// profile map and the structured data.
//
// Optional upgrades via Vercel -> Project -> Settings -> Environment Variables:
//   NEXT_PUBLIC_GOOGLE_PLACE_ID   Place ID (starts "ChIJ") — enables the direct "Leave a review" link
//   GOOGLE_PLACES_API_KEY         Places API (New) key — pulls live reviews (server-side only)
//   NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY  Maps Embed API key for the profile map

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  /** Review is cut off on Google ("View full review"). */
  truncated?: boolean;
  /** Owner reply, exactly as posted. */
  reply?: string;
}

export const googleBusiness = {
  placeId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "",
  apiKey: process.env.GOOGLE_PLACES_API_KEY ?? "",
  mapsEmbedKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY ?? "",
  profileUrl:
    process.env.NEXT_PUBLIC_GOOGLE_PROFILE_URL ??
    "https://share.google/XvIQjZ5sb4WwTByPW",
  searchQuery: "Daly Growth Media, 67 O'Connell Street, Ennis, Co. Clare",
  // Genuine reviews, copied exactly as posted on the Google Business Profile.
  manualReviews: [
    {
      author: "roofingcontractor",
      rating: 5,
      text: "Fantastic experience working with Sean! Honest, reliable, and seriously good at paid social advertising. If you're looking to scale your business in Ireland, give them a call."
    },
    {
      author: "Josh O Mahony",
      rating: 5,
      text: "Sean and his team have been a delight to work with. They have always been really clear on what's happening and the…",
      truncated: true,
      reply: "Thanks Josh you were a pleasure to work with"
    },
    {
      author: "evelyn sorohan",
      rating: 4,
      text: "Daly Growth Media enabled me to get more customers and new viewers. Sean is a pleasure to deal with for my marketing campaign",
      reply: "Thanks Evelyn, Always great to get a positive compliment."
    },
    {
      author: "Richard Woods",
      rating: 5,
      text: "Very professional 👏 did a super job advertising and promoting the business GA sports. Would highly recommend 🥇 Daly Growth Media",
      reply: "Thanks Richard, It is a pleasure working with you."
    }
  ] as GoogleReview[],
  // Rating and count as shown on the Google Business Profile.
  manualRating: 4.8 as number | undefined,
  manualCount: 4 as number | undefined
};
