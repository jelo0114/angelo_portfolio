import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const CONTACT_INFO = {
  email: "angelocu80@gmail.com",
  github: "https://github.com/jelo0114",
  linkedin: "https://linkedin.com/in/yourusername",
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — just acknowledge the submission locally
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-bg-alt">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent text-sm mb-2">// contact</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          Let&apos;s Work Together
        </h2>
        <p className="text-text-secondary max-w-xl mb-12">
          Have a project or opportunity? Feel free to reach out — I&apos;d
          love to hear from you.
        </p>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12">
          <div className="animate-fade-up">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  <FiMail size={20} /> {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  <FiGithub size={20} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  <FiLinkedin size={20} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
