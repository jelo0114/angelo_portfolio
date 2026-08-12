import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import angeloImg from "../assets/Angelo.jpg";

// Easy to edit
const NAME = "Angelo Cu";
const ROLES = ["Web Developer", "Software Developer", "Problem Solver"];
const SOCIALS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:you@example.com",
};

function useTypedRole(roles) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

function Hero() {
  const typedRole = useTypedRole(ROLES);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 bg-bg"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-accent text-sm mb-4">
            <span className="text-text-secondary">// </span>hello world, it's me
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            Hi, I&apos;m <span className="text-accent">{NAME}</span>
          </h1>

          <div className="font-mono text-xl sm:text-2xl text-accent-2 mb-6 h-8">
            {typedRole}
            <span className="animate-blink text-accent-2">|</span>
          </div>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            I build modern, responsive, and user-friendly web applications
            using contemporary technologies, with a focus on clean code and
            thoughtful interfaces.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 hover:scale-[1.03] transition-all duration-200"
            >
              View My Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-text font-semibold px-6 py-3 rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href={SOCIALS.email}
              aria-label="Send an email"
              className="text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <FiMail size={22} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end animate-fade-up">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-2xl border border-accent/30" />
            <div className="absolute inset-3 rounded-2xl bg-card border border-border flex items-center justify-center overflow-hidden">
              <img
                src={angeloImg}
                alt={`Portrait of ${NAME}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-bg border border-border rounded-lg px-3 py-1.5 font-mono text-xs text-accent-2">
              status: available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;