export default function About() {
  return (
    <section id="about" className="pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-mono text-indigo-500 mb-4 tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900 mb-4 leading-tight">
          Siyu Zhou
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed mb-4">
          Senior Economics student focused on data analysis, economic research, and machine learning.
        </p>
        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed mb-8">
          I&apos;m a senior Economics student at Northeastern University. My work connects economic
          reasoning with Python-based data analysis to explore real-world questions and communicate
          findings clearly.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center px-5 py-2 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors duration-150"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 border border-neutral-300 text-neutral-600 text-sm font-medium rounded-full hover:border-neutral-500 hover:text-neutral-900 transition-colors duration-150"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
