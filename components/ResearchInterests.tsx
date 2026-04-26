const interests = [
  {
    number: "01",
    title: "Clustering and Pattern Discovery in Economic Data",
    description:
      "Uncovering hidden structure in economic data using unsupervised learning methods such as clustering and dimensionality reduction to identify meaningful patterns and group-level insights.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" />
        <path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        <line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Machine Learning for Economic Forecasting",
    description:
      "Applying supervised and ensemble methods — Random Forest, gradient boosting, and regularized regression — to predict macroeconomic indicators and financial outcomes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Behavioral Economics and Digital Platforms",
    description:
      "Investigating how algorithmic design, recommendation systems, and platform incentives shape user decisions, attention allocation, and economic behavior at scale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

export default function ResearchInterests() {
  return (
    <section id="research" className="py-20 border-t" style={{ borderColor: "var(--c-border)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "var(--c-text-1)" }}>Research Interests</h2>
          <p className="text-sm" style={{ color: "var(--c-text-3)" }}>Topics I think about and want to explore further.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {interests.map((item) => (
            <div
              key={item.number}
              className="group flex flex-col border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-200"
              style={{ background: "var(--c-card)", borderColor: "var(--c-border)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className="p-2 rounded-lg border"
                  style={{
                    background: "var(--c-icon-bg)",
                    borderColor: "var(--c-icon-border)",
                    color: "var(--c-icon)",
                  }}
                >
                  {item.icon}
                </div>
                <span className="font-mono text-xs" style={{ color: "var(--c-text-4)" }}>{item.number}</span>
              </div>
              <h3
                className="text-sm font-bold leading-snug mb-3 group-hover:text-blue-500 transition-colors duration-200"
                style={{ color: "var(--c-text-1)" }}
              >
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--c-text-2)" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
