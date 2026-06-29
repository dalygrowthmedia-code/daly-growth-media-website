import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "About Sean Daly | Daly Growth Media" },
  description:
    "16-year-old Meta ads specialist from Co. Clare. Running businesses since age 10."
};

export default function StoryPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section id="story" className="section-band">
        <div className="section-shell">
          <div className="story-page-grid grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="reveal" aria-label="Photo of Sean Daly">
              <figure className="story-page-photo">
                <div
                  className="photo-slot photo-two story-page-photo-image"
                  role="img"
                  aria-label="Sean Daly in studio at Clare FM"
                />
                <figcaption>In studio at Clare FM</figcaption>
              </figure>
            </div>

            <div className="reveal">
              <h2 className="section-title">
                I&apos;m Sean Daly, from Ennis, Co. Clare. I&apos;ve been
                running businesses since I was 10.
              </h2>
              <div className="story-placeholder mt-8">
                <p>
                  I started my first business at 10 &mdash; selling eggs door to
                  door in Clare. That&apos;s where it started.
                </p>
                <p>
                  At 15 I co-founded JSU Marketing, where over nine months we
                  worked with over 20 businesses across Clare and beyond on
                  websites, social media, and content. JSU won the County Clare
                  Student Enterprise Competition and took the Sales and
                  Marketing Award at the National Student Enterprise Programme,
                  competing against businesses from all over Ireland. The
                  business was also featured on Clare FM.
                </p>
                <p>
                  Earlier this year I was selected for the Patch x OpenAI Young
                  Builders Week &mdash; a five-day invite-only programme at
                  Dogpatch Labs in Dublin for ambitious teenagers from across
                  Ireland building with AI tools.
                </p>
                <p>
                  I also made the Clare Minor Hurling panel in 2026 &mdash;
                  while running a business full-time at 16.
                </p>
                <p>
                  I&apos;m now focused entirely on one thing: running trackable
                  Meta ads for Irish e-commerce stores. One offer, one focus,
                  results you can actually see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
