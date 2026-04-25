"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-gray-800 bg-[#0d1117]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-100 mb-1">Get in touch</h2>
          <p className="text-sm text-gray-500">
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
                  className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {display}
                </a>
              </div>
            ))}
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-500 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="What would you like to discuss?"
                className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-150 shadow-lg shadow-blue-600/20"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
