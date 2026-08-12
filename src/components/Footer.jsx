import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiArrowUp } from "react-icons/fi";

const NAME = "Your Name";
const SOCIALS = [
  { icon: FiGithub, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: FiFacebook, href: "https://facebook.com/yourusername", label: "Facebook" },
  { icon: FiMail, href: "mailto:you@example.com", label: "Email" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-bg py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-text-secondary text-center sm:text-left">
          © 2026 {NAME}. All Rights Reserved.
        </p>

        <div className="flex items-center gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 font-mono text-xs text-text-secondary border border-border rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors duration-200"
        >
          <FiArrowUp /> Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
