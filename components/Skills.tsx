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
    <section id="skills" className="py-16 border-t border-neutral-100 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-1">Skills</h2>
          <p className="text-sm text-neutral-400">Tools and methods I work with.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-neutral-200 rounded-xl p-4"
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                {group.category}
              </h3>
              <ul className="space-y-1.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-neutral-700 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 inline-block shrink-0" />
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
