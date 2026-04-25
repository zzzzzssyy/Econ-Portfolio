const projects = [
  {
    number: "01",
    title: "IMF Early Warning System (EWS)",
    description:
      "Built a machine learning pipeline to replicate and extend the IMF's Early Warning System for financial crises. Applied classification models to macroeconomic panel data to predict crisis onset across countries.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"],
    repoUrl: "https://github.com/zzzzssyy/Econ-Portfolio",
  },
  {
    number: "02",
    title: "Causal Inference & Non-Parametric Statistics",
    description:
      "Explored causal identification strategies and non-parametric methods applied to economic data. Topics include kernel density estimation, regression discontinuity, and permutation-based hypothesis testing.",
    tags: ["Python", "Statsmodels", "Causal Inference", "Non-Parametric"],
    repoUrl: "https://github.com/zzzzssyy/Econ-Portfolio",
  },
  {
    number: "03",
    title: "Female Labor Supply Analysis",
    description:
      "Studied how having young children affects women's annual working hours using the Mroz labor supply dataset. Used OLS regression with robust standard errors and compared full-sample and working-women-only results to discuss selection bias.",
    tags: ["Python", "Pandas", "Statsmodels", "Regression"],
    repoUrl: "https://github.com/zzzzssyy/Econ-Portfolio",
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
