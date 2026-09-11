import { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#materials", label: "Materials" },
  { href: "#tutoring", label: "Private Tutoring" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          <span className="navbar-logo-mark" aria-hidden="true">✦</span>
          <span>
            Taqa<span className="navbar-logo-dim">&amp;</span>Code
          </span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary navbar-cta">
          Request Private Tutoring
        </a>

        <button
          className={`navbar-burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`navbar-mobile ${open ? "is-open" : ""}`}>
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>
              Request Private Tutoring
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
