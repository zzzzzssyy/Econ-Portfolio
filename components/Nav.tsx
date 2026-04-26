"use client";

import { useState } from "react";
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

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ background: "var(--c-nav)", borderColor: "var(--c-border)" }}
    >
      {/* Main bar */}
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="text-sm font-bold tracking-tight hover:text-blue-500 transition-colors duration-150"
          style={{ color: "var(--c-text-1)" }}
        >
          Siyu Zhou
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile: toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg transition-all duration-150 hover:text-blue-500"
            style={{ color: "var(--c-text-3)", background: "var(--c-tag-bg)" }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg transition-all duration-150 hover:text-blue-500"
            style={{ color: "var(--c-text-3)", background: "var(--c-tag-bg)" }}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ background: "var(--c-nav)", borderColor: "var(--c-border)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-medium hover:text-blue-500 transition-colors duration-150 py-1"
              style={{ color: "var(--c-text-2)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
