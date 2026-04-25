const projects = [
  {
    number: "01",
    title: "Random Forest vs. OLS: California Housing Prediction",
    description:
      "Compared Decision Tree, Ridge Regression, and Random Forest on 20,640 housing observations. Random Forest achieved strong generalization (Test R² ≈ 0.81 vs Ridge ≈ 0.58), highlighting non-linear relationships and feature importance.",
    tags: ["Python", "scikit-learn", "Random Forest", "Regression"],
    repoUrl: "https://github.com/zzzzssyy/ECON3916-33674-Statistical-Machine-Learning/tree/main/Lab%2019",
  },
  {
    number: "02",
    title: "Clustering World Economies with K-Means & PCA",
    description:
      "Applied unsupervised learning to cluster ~160 countries using World Bank indicators. Used standardization, PCA, and K-Means to uncover global development patterns aligned with income classifications.",
    tags: ["Python", "scikit-learn", "K-Means", "PCA"],
    repoUrl: "https://github.com/zzzzssyy/ECON3916-33674-Statistical-Machine-Learning/tree/main/Lab%2022",
  },
  {
    number: "03",
    title: "FOMC Text Analysis: Sentiment & Clustering",
    description:
      "Built an NLP pipeline on FOMC meeting transcripts using TF-IDF and sentiment analysis. Identified shifts in Fed communication across economic cycles and clustered policy regimes.",
    tags: ["Python", "NLP", "TF-IDF", "Clustering"],
    repoUrl: "https://github.com/zzzzssyy/ECON3916-33674-Statistical-Machine-Learning/tree/main/Lab%2023",
  },
  {
    number: "04",
    title: "Causal ML: Double Machine Learning for Policy Evaluation",
    description:
      "Estimated the causal effect of 401(k) eligibility using Double Machine Learning (DML). Demonstrated how naive methods are biased and applied cross-fitting for robust treatment effect estimation.",
    tags: ["Python", "Causal ML", "DML", "Econometrics"],
    repoUrl: "https://github.com/zzzzssyy/ECON3916-33674-Statistical-Machine-Learning/tree/main/Lab%2024",
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
