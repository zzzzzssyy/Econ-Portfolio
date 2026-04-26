"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 border-t"
      style={{ background: "var(--c-bg-alt)", borderColor: "var(--c-border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "var(--c-text-1)" }}>Get in touch</h2>
          <p className="text-sm" style={{ color: "var(--c-text-3)" }}>
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
                <p className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-1.5">{label}</p>
                <a
                  href={href}
                  className="text-sm font-medium hover:text-blue-500 transition-colors"
                  style={{ color: "var(--c-text-2)" }}
                >
                  {display}
                </a>
              </div>
            ))}
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "var(--c-text-3)" }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className="w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    style={{
                      background: "var(--c-input-bg)",
                      borderColor: "var(--c-border-input)",
                      color: "var(--c-text-1)",
                    }}
                  />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--c-text-3)" }}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="What would you like to discuss?"
                className="w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                style={{
                  background: "var(--c-input-bg)",
                  borderColor: "var(--c-border-input)",
                  color: "var(--c-text-1)",
                }}
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
