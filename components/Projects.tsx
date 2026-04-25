const projects = [
  {
    number: "01",
    title: "Random Forest vs OLS — California Housing Price Prediction",
    description:
      "Compared Decision Trees, Ridge Regression, and Random Forest on California housing data. Random Forest significantly improved test performance, highlighting nonlinear relationships and feature interactions missed by OLS.",
    tags: ["Python", "scikit-learn", "Random Forest", "OLS"],
    repoUrl: "https://github.com/zzzzzssyy/ECON3916-33674-Statistical-Machine-Learning/tree/main/Lab%2019",
  },
  {
    number: "02",
    title: "Clustering World Economies with K-Means & PCA",
    description:
      "Applied unsupervised learning to group ~160 countries using World Bank indicators. PCA visualization revealed clear economic clusters aligned with global development patterns.",
    tags: ["Python", "scikit-learn", "K-Means", "PCA"],
    repoUrl: "https://github.com/zzzzzssyy/ECON3916-33674-Statistical-Machine-Learning/tree/main/Lab%2022",
  },
  {
    number: "03",
    title: "FOMC Text Analysis — Sentiment and Clustering",
    description:
      "Built an NLP pipeline to analyze Federal Reserve meeting minutes. Extracted sentiment and identified structural shifts in communication across economic cycles.",
    tags: ["Python", "NLP", "TF-IDF", "Clustering"],
    repoUrl: "https://github.com/zzzzzssyy/ECON3916-33674-Statistical-Machine-Learning/tree/main/Lab%2023",
  },
  {
    number: "04",
    title: "Causal ML — Double Machine Learning for 401(k) Policy Evaluation",
    description:
      "Estimated causal effects of 401(k) eligibility using Double Machine Learning. Demonstrated how ML can improve causal inference under high-dimensional confounding.",
    tags: ["Python", "Causal Inference", "Double ML", "Econometrics"],
    repoUrl: "https://github.com/zzzzzssyy/ECON3916-33674-Statistical-Machine-Learning/tree/main/Lab%2024",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-1">Projects</h2>
          <p className="text-sm text-neutral-400">Selected research and analysis work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex flex-col border border-neutral-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-neutral-300">{project.number}</span>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-neutral-400 hover:text-neutral-700 transition-colors"
                >
                  GitHub →
                </a>
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 leading-snug mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-500 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
