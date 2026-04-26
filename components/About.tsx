export default function About() {
  return (
    <section id="about" className="pt-36 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold text-blue-500 mb-5 tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1
          className="font-bold tracking-tight mb-4 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "var(--c-text-1)" }}
        >
          Siyu Zhou
        </h1>
        <p className="text-lg font-medium max-w-2xl leading-relaxed mb-2" style={{ color: "var(--c-text-2)" }}>
          Senior Economics student at Northeastern University
        </p>
        <p className="text-xs font-mono max-w-2xl mb-6" style={{ color: "var(--c-text-4)" }}>
          ECON3916 33674 — Statistical &amp; Machine Learning · SEC 01 · Spring 2026 [BOS-1-TR]
        </p>
        <p className="text-base max-w-2xl leading-relaxed mb-10" style={{ color: "var(--c-text-3)" }}>
          I am a senior Economics student interested in data analysis, machine learning, and applied
          economic research. My portfolio highlights coursework and projects that connect economic
          reasoning with Python-based statistical and machine learning methods.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-150 shadow-lg shadow-blue-600/20"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-2.5 border text-sm font-semibold rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors duration-150"
            style={{ borderColor: "var(--c-border)", color: "var(--c-text-2)" }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
