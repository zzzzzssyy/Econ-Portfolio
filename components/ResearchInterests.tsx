const interests = [
  {
    number: "01",
    title: "Clustering and Pattern Discovery in Economic Data",
    description:
      "Uncovering hidden structure in economic data using unsupervised learning methods such as clustering and dimensionality reduction to identify meaningful patterns and group-level insights.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

export default function ResearchInterests() {
  return (
    <section id="research" className="py-20 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-100 mb-1">Research Interests</h2>
          <p className="text-sm text-gray-500">Topics I think about and want to explore further.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {interests.map((item) => (
            <div
              key={item.number}
              className="group flex flex-col bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-2 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-500/20">
                  {item.icon}
                </div>
                <span className="font-mono text-xs text-gray-700">{item.number}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-100 leading-snug mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
