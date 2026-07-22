export function SiteFooter() {
  return (
    <footer className="border-t border-brand-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a className="brand-lockup" href="/" aria-label="Daly Growth Media home">
          <span className="brand-logo" aria-hidden="true" />
          <span className="brand-wordmark">Daly Growth Media</span>
        </a>
        <p className="text-sm text-slate-600">
          Meta ads for Irish e-commerce brands. Built from Ireland.
        </p>
        <div className="flex items-center gap-5">
          <a
            className="contact-link text-sm"
            href="mailto:sean@dalygrowthmedia.com"
          >
            sean@dalygrowthmedia.com
          </a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        className="social-link"
        href="https://www.instagram.com/dalygrowthmedia/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Daly Growth Media on Instagram"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        className="social-link"
        href="https://www.facebook.com/profile.php?id=61591304975543"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Daly Growth Media on Facebook"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.6c0-.93.26-1.56 1.6-1.56h1.7V3.14C15.98 3.06 15.03 3 13.9 3c-2.35 0-3.96 1.44-3.96 4.07v2.53H7.18v3.2h2.76V21h3.56z" />
        </svg>
      </a>
    </div>
  );
}
