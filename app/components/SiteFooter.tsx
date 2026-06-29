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
        <a
          className="contact-link text-sm"
          href="mailto:dalygrowthmedia@gmail.com"
        >
          dalygrowthmedia@gmail.com
        </a>
      </div>
    </footer>
  );
}
