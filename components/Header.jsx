"use client";
import { useState, useEffect } from "react";
import { NAV, SITE } from "@/lib/data";


function SocialIcon({ name }) {
  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.5 15.4V8.6l6 3.4-6 3.4Z" />
      </svg>
    );
  }

  return null;
}


export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 const socialIcons = [
  { name: "Facebook" },
  { name: "Instagram" },
  { name: "YouTube" },
];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_2px_20px_rgba(11,31,58,.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5">
        <a href="#home" aria-label={`${SITE.name} home`} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.logo} alt={SITE.name} className="h-10 w-auto" />
        </a>

        {/* Center navigation */}
        <nav
          className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-8"
          aria-label="Main"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="whitespace-nowrap text-[15px] font-medium text-ink transition hover:text-sky"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-deep"
          >
            Get Started
          </a>
        </nav>

        {/* Right-side social icons */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          {socialIcons.map(({ name, icon: Icon }) => {
            const social = SITE.social?.find(
              (item) => item.name.toLowerCase() === name.toLowerCase()
            );

            if (!social) return null;

            return (
              <a
                key={name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="grid h-9 w-9 place-items-center rounded-full border border-sky/20 text-navy transition hover:bg-navy hover:text-white"
              >
                <SocialIcon name={name} />
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 space-y-1.5">
            <span
              className={`block h-0.5 bg-navy transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-navy transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-navy transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Responsive mobile menu */}
      {open && (
        <nav
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-sky-soft bg-white px-5 pb-5 lg:hidden"
          aria-label="Mobile"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-sky-soft py-3.5 text-base font-medium text-ink hover:text-sky"
            >
              {n.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-navy py-3 text-center font-semibold text-white hover:bg-sky-deep"
          >
            Get Started
          </a>

         <div className="mt-5 flex justify-center gap-5">
  {socialIcons.map(({ name }) => {
    const social = SITE.social?.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (!social) return null;

    return (
      <a
        key={name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="grid h-10 w-10 place-items-center rounded-full border border-sky/20 text-navy hover:bg-navy hover:text-white"
      >
        <SocialIcon name={name} />
      </a>
    );
  })}
</div>
        </nav>
      )}
    </header>
  );
}