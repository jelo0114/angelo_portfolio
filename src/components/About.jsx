// Easy to edit stats
const STATS = [
  { value: "3", label: "Projects" },
  { value: "5", label: "Years Learning" },
  { value: "5+", label: "Technologies" },
];

const INTERESTS = ["Software Development", "Designing",  "Learning"];

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-bg-alt">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent text-sm mb-2">// about</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-up">
            <p className="text-text-secondary leading-relaxed mb-4">
  I&apos;m a 21-year-old BSIT student currently studying at Bulacan State
  University – Bustos Campus. I&apos;m passionate about technology and enjoy
  turning ideas into functional software and web applications.
</p>

<p className="text-text-secondary leading-relaxed mb-4">
  I enjoy creating and exploring new ideas, especially when developing
  software projects. I also use modern AI tools to help me work more
  efficiently, speed up development, solve problems, and turn concepts into
  working projects while continuously improving my programming skills.
</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="font-display font-semibold text-text mb-1">
                  Education
                </h3>
                <p className="text-text-secondary text-sm">
                  BS in Information Technology
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-text mb-1">
                  Focus
                </h3>
                <p className="text-text-secondary text-sm">
                  Front-End Web Development
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-display font-semibold text-text mb-2">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="font-mono text-xs border border-border text-text-secondary px-3 py-1 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 animate-fade-up">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-accent/50 transition-colors duration-200"
              >
                <p className="font-display font-bold text-3xl text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-text-secondary text-xs font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
