import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NAME = "Angelo Cu";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a href="#home" className="font-display font-bold text-lg text-text tracking-tight">
          {NAME}
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-muted hover:text-text transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-blue transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-blue text-bg text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors duration-200"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-text p-2 -mr-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 border-t border-border" : "max-h-0"
        } bg-bg/95 backdrop-blur-md`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className="block text-muted hover:text-text transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="inline-flex items-center bg-blue text-bg text-sm font-semibold px-5 py-2.5 rounded-lg mt-1"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;