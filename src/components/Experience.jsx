// Easy to edit timeline data
const TIMELINE = [
  {
    year: "2026 — Present",
    title: "Freelance Web Developer",
    subtitle: "Self-employed",
    description:
      "Designing and building responsive websites and web apps for small businesses using React, Tailwind CSS, HTML, MySQL.",
  },
  {
    year: "2023 -2024",
    title: "BS Information Technology",
    subtitle: "University",
    description:
      "Focused coursework on web development, databases, and basic fundamentals.",
  },
  {
    year: "2022",
    title: "Started Learning to Code",
    subtitle: "Self-taught",
    description:
      "Began learning HTML, CSS, and JavaScript, then progressed into modern frameworks and tooling.",
  },
  {
    year: "Milestone",
    title: "Shipped First Full-Stack App",
    subtitle: "Personal Project",
    description:
      "Built and deployed a complete application connecting a React frontend to a database-backed API.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent text-sm mb-2">// experience</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">
          Experience &amp; Education
        </h2>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-2 sm:left-3 top-1 bottom-1 w-px bg-border" />

          <div className="flex flex-col gap-10">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative animate-fade-up">
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-bg" />
                <p className="font-mono text-xs text-accent-2 mb-1">
                  {item.year}
                </p>
                <h3 className="font-display font-semibold text-lg text-text">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mb-2">
                  {item.subtitle}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
