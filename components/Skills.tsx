const skillGroups = [
  {
    category: "Languages & Tools",
    skills: ["Python", "Google Colab", "GitHub"],
  },
  {
    category: "Data Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Statistics & ML",
    skills: ["Statsmodels", "Scikit-Learn", "Regression Analysis", "Machine Learning Basics"],
  },
  {
    category: "Domain",
    skills: ["Economic Analysis", "Data Visualization", "Research Writing"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 border-t"
      style={{ background: "var(--c-bg-alt)", borderColor: "var(--c-border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "var(--c-text-1)" }}>Skills</h2>
          <p className="text-sm" style={{ color: "var(--c-text-3)" }}>Tools and methods I work with.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border rounded-2xl p-5"
              style={{ background: "var(--c-card)", borderColor: "var(--c-border)" }}
            >
              <h3 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm flex items-center gap-2" style={{ color: "var(--c-text-2)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
