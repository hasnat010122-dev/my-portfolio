import { useEffect, useState } from "react";
import { navigation, profile } from "../data";
import "./Navbar.css";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" aria-label="Hasnat Ahmed home">
          <span className="navbar__monogram">HA</span>
          <span className="navbar__brand-copy">
            <strong>Hasnat Ahmed</strong>
            <small>AI Developer · Founder</small>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span className="theme-toggle__track">
              <i className={theme === "dark" ? "theme-toggle__dot theme-toggle__dot--right" : "theme-toggle__dot"} />
            </span>
            <span>{theme === "dark" ? "Dark" : "Light"}</span>
          </button>

          <a className="navbar__company" href={profile.nextGenAI} target="_blank" rel="noreferrer">
            Next Gen AI <span>↗</span>
          </a>

          <button
            className={`navbar__burger ${open ? "navbar__burger--open" : ""}`}
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`} aria-label="Mobile navigation">
        <div className="navbar__mobile-index">Navigation / 2026</div>
        {navigation.map((link, index) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>{link.label}<i>→</i>
          </a>
        ))}
        <a className="navbar__mobile-company" href={profile.nextGenAI} target="_blank" rel="noreferrer">
          Visit Next Gen AI <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
