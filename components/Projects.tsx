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
    <section id="projects" className="py-20 border-t" style={{ borderColor: "var(--c-border)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "var(--c-text-1)" }}>Projects</h2>
          <p className="text-sm" style={{ color: "var(--c-text-3)" }}>Selected coursework and research analysis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex flex-col border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-200"
              style={{ background: "var(--c-card)", borderColor: "var(--c-border)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs" style={{ color: "var(--c-text-4)" }}>{project.number}</span>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors"
                >
                  GitHub →
                </a>
              </div>
              <h3
                className="text-sm font-bold leading-snug mb-3 group-hover:text-blue-500 transition-colors duration-200"
                style={{ color: "var(--c-text-1)" }}
              >
                {project.title}
              </h3>
              <p className="text-xs leading-relaxed mb-5 flex-1" style={{ color: "var(--c-text-2)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md border"
                    style={{
                      background: "var(--c-tag-bg)",
                      color: "var(--c-tag-text)",
                      borderColor: "var(--c-border)",
                    }}
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
