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
    <section id="research" className="py-16 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-1">Research Interests</h2>
          <p className="text-sm text-neutral-400">Topics I think about and want to explore further.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {interests.map((item) => (
            <div
              key={item.number}
              className="flex flex-col border border-neutral-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md transition-all duration-200"
            >
              <span className="font-mono text-xs text-neutral-300 mb-4">{item.number}</span>
              <h3 className="text-sm font-semibold text-neutral-900 leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
