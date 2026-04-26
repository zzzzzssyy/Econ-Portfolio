export default function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: "var(--c-border)", background: "var(--c-bg)" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-sm font-medium" style={{ color: "var(--c-text-3)" }}>© 2026 Siyu Zhou</p>
        <p className="text-sm" style={{ color: "var(--c-text-4)" }}>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
