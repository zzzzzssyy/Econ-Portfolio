"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-1">Get in touch</h2>
          <p className="text-sm text-neutral-400">
            Open to opportunities, research collaborations, and conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { label: "Email", display: "your@email.com", href: "#" },
              { label: "GitHub", display: "github.com/siyuzhou", href: "#" },
              { label: "LinkedIn", display: "linkedin.com/in/siyuzhou", href: "#" },
            ].map(({ label, display, href }) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-1">
                  {label}
                </p>
                <a
                  href={href}
                  className="text-sm text-neutral-800 hover:text-indigo-600 transition-colors font-medium"
                >
                  {display}
                </a>
              </div>
            ))}
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-neutral-600 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-neutral-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-neutral-600 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="What would you like to discuss?"
                className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-150"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
