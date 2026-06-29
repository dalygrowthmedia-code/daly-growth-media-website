"use client";

import { useState } from "react";

const navItems = [
  { href: "/story", label: "Story" },
  { href: "/results", label: "Results" },
  { href: "/services", label: "Services" },
  { href: "/why-me", label: "Why me" },
  { href: "/#contact", label: "Contact" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b bg-white/92 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8"
      >
        <a
          className="brand-lockup"
          href="/"
          aria-label="Daly Growth Media home"
          onClick={() => setIsOpen(false)}
        >
          <span className="brand-logo" aria-hidden="true" />
          <span className="brand-wordmark">Daly Growth Media</span>
        </a>

        <div className="desktop-nav hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta button button-small" href="/#contact">
          Book a call
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="mobile-menu"
          className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="nav-link"
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button button-small"
            href="/#contact"
            onClick={() => setIsOpen(false)}
          >
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}
