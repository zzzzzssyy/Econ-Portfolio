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
    <section id="skills" className="py-20 border-t border-slate-100 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Skills</h2>
          <p className="text-sm text-slate-400">Tools and methods I work with.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
            >
              <h3 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block shrink-0" />
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
