import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Get In Touch | Daly Growth Media" },
  description:
    "Talk through your Meta ads account with Sean Daly. Irish e-commerce specialists."
};

export default function ContactPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section id="contact" className="section-band">
        <div className="section-shell pb-20 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="reveal">
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Ready to talk through the account?</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Send a note with where the brand is at, what you sell and what
                you want Meta ads to do next.
              </p>
              <div className="mt-9 space-y-5 text-base text-slate-700">
                <p>
                  <span className="contact-label">Email</span>
                  <a className="contact-link" href="mailto:dalygrowthmedia@gmail.com">
                    dalygrowthmedia@gmail.com
                  </a>
                </p>
                <p>
                  <span className="contact-label">Location</span>
                  Co. Clare, Ireland
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
