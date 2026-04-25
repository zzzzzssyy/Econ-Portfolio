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
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-gray-100 mb-1">Projects</h2>
          <p className="text-sm text-slate-500 dark:text-gray-500">Selected coursework and research analysis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex flex-col bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-400/60 dark:hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs text-slate-300 dark:text-gray-700">{project.number}</span>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub →
                </a>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-gray-100 leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 rounded-md border border-slate-200 dark:border-gray-700"
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
