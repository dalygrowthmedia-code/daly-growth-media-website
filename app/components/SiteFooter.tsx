export function SiteFooter() {
  return (
    <footer className="border-t border-brand-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a className="brand-lockup" href="/" aria-label="Daly Growth Media home">
          <span className="brand-logo" aria-hidden="true" />
          <span className="brand-wordmark">Daly Growth Media</span>
        </a>
        <p className="text-sm text-slate-600">
          Meta ads lead generation for trades &amp; service businesses. Built
          from Ireland.
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
      <a
        className="social-link"
        href="https://www.linkedin.com/in/sean-daly-a02362378/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sean Daly on LinkedIn"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
          <path d="M5.25 3.5C4.14 3.5 3.25 4.4 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.36 7.5 7.25 6.6 7.25 5.5C7.25 4.4 6.36 3.5 5.25 3.5Z" />
          <path d="M9.5 8.5H12.72V10.02H12.77C13.22 9.17 14.32 8.27 15.96 8.27C19.36 8.27 20 10.5 20 13.4V20.5H16.63V14.08C16.63 12.58 16.6 10.66 14.55 10.66C12.46 10.66 12.14 12.28 12.14 13.97V20.5H8.77V8.5H9.5Z" />
        </svg>
      </a>
    </div>
  );
}
