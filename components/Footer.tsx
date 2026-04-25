export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-sm font-medium text-slate-500 dark:text-gray-600">© 2026 Siyu Zhou</p>
        <p className="text-sm text-slate-400 dark:text-gray-700">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
