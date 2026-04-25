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
              <span className="font-mono text-xs text-gray-700 mb-4">{item.number}</span>
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
