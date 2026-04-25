"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-slate-100 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Get in touch</h2>
          <p className="text-sm text-slate-400">
            Open to opportunities, research collaborations, and conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              { label: "Email", display: "zhou.siyu4@northeastern.edu", href: "mailto:zhou.siyu4@northeastern.edu" },
              { label: "GitHub", display: "github.com/zzzzssyy", href: "https://github.com/zzzzssyy/Econ-Portfolio" },
            ].map(({ label, display, href }) => (
              <div key={label}>
                <p className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-1.5">
                  {label}
                </p>
                <a
                  href={href}
                  className="text-sm font-medium text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {display}
                </a>
              </div>
            ))}
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white shadow-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-600 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="What would you like to discuss?"
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none bg-white shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-150 shadow-sm"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
