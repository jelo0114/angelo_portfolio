import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: SiPhp },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent text-sm mb-2">// skills</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">
          What I Work With
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="bg-card border border-border rounded-xl p-6 animate-fade-up"
            >
              <h3 className="font-display font-semibold text-lg mb-5 text-accent-2">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-bg-alt border border-border rounded-lg px-3 py-2.5 hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Icon className="text-accent shrink-0" size={18} />
                      <span className="text-sm text-text-secondary">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;