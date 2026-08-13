import { FiGithub, FiExternalLink } from "react-icons/fi";
import casaCloudsLogo from "../assets/CASA CLOUDS LOGO.png";
import jbr7Logo from "../assets/JBR7 LOGO.jpg";

// Easy to edit project data
const PROJECTS = [
  {
    title: "CasaClouds",
    description:
      "A management system that streamlines internal workflows and record tracking for daily operations.",
    image: casaCloudsLogo,
    technologies: ["React", "Node.js", "Firebase", "CSS"],
    github: "https://github.com/jelo0114/casaclouds",
    demo: "https://casaclouds-6911e.web.app",
  },
  {
    title: "JBR7 Bags",
    description:
      "An E-Commerce for bags product only",
    image: jbr7Logo,
    technologies: ["Javascript", "PHP", "PostgreSQL", "CSS", "HTML", "SupaBase"], 
    github: "https://github.com/jelo0114/jbr7new",
    demo: "https://jbr7new.vercel.app/",
  },
  {
    title: "iManage",
    description:
      "A professional business website built to showcase services, attorneys, and case consultations.",
    image: "https://noohgpmjyowtrmymvydp.supabase.co/storage/v1/object/public/system-media/logo.png",
    technologies: ["Vite React", "Tailwind CSS", "PostgreSQL", "SupaBase"],
    github: "https://github.com/AngelineFloresDeGuzman/iManage",
    demo: "https://imanage-sdo.vercel.app/",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="bg-card border border-border rounded-xl overflow-hidden group hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 animate-fade-up">
      <div className="overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={`Preview of ${project.title} project`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl mb-2">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-accent-2 border border-accent-2/30 rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-bg-alt">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent text-sm mb-2"></p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">
          Selected Work
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;