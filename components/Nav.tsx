"use client";

import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ background: "var(--c-nav)", borderColor: "var(--c-border)" }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="text-sm font-bold tracking-tight hover:text-blue-500 transition-colors duration-150"
          style={{ color: "var(--c-text-1)" }}
        >
          Siyu Zhou
        </a>
        <div className="flex items-center gap-6">
          <ul className="flex gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium hover:text-blue-500 transition-colors duration-150"
                  style={{ color: "var(--c-text-3)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg transition-all duration-150 hover:text-blue-500"
            style={{ color: "var(--c-text-3)", background: "var(--c-tag-bg)" }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
