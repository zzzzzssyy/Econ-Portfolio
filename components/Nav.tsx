"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="text-sm font-bold tracking-tight text-gray-100 hover:text-blue-400 transition-colors duration-150"
        >
          Siyu Zhou
        </a>
        <ul className="flex gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-100 transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
