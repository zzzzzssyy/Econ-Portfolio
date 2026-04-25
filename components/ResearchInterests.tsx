const interests = [
  {
    number: "01",
    title: "Labor Economics and Family Decisions",
    description:
      "Interested in how family structure, childcare, and household composition shape labor market outcomes — particularly for women's participation and hours worked.",
  },
  {
    number: "02",
    title: "Digital Platforms and Algorithmic Influence",
    description:
      "Curious about how recommendation systems and platform design affect user behavior, information exposure, and the economics of attention.",
  },
  {
    number: "03",
    title: "Economic Data Science and Causal Thinking",
    description:
      "Focused on applying regression, selection correction, and reproducible data workflows to draw credible causal conclusions from observational economic data.",
  },
];

export default function ResearchInterests() {
  return (
    <section id="research" className="py-20 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Research Interests</h2>
          <p className="text-sm text-slate-400">Topics I think about and want to explore further.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((item) => (
            <div
              key={item.number}
              className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 transition-all duration-200"
            >
              <span className="font-mono text-xs text-slate-300 mb-4">{item.number}</span>
              <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
