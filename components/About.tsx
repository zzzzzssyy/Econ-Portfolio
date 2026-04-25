export default function About() {
  return (
    <section id="about" className="pt-36 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold text-blue-500 mb-5 tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1
          className="font-bold tracking-tight text-gray-100 mb-4 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
        >
          Siyu Zhou
        </h1>
        <p className="text-lg font-medium text-gray-300 max-w-2xl leading-relaxed mb-2">
          Senior Economics student at Northeastern University
        </p>
        <p className="text-xs font-mono text-gray-600 max-w-2xl mb-6">
          ECON3916 33674 — Statistical &amp; Machine Learning · SEC 01 · Spring 2026 [BOS-1-TR]
        </p>
        <p className="text-base text-gray-400 max-w-2xl leading-relaxed mb-10">
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
            className="inline-flex items-center px-6 py-2.5 border border-gray-700 text-gray-300 text-sm font-semibold rounded-lg hover:border-gray-500 hover:text-gray-100 transition-colors duration-150"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
