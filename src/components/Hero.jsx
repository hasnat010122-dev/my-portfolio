import { useState, useEffect } from "react";
import { profile } from "../data";
import "./Hero.css";

function useTypewriter(words, typingSpeed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">// {profile.education}</p>

        <h1 className="hero__name">{profile.name}</h1>

        <div className="hero__terminal">
          <span className="hero__prompt">const role =</span>
          <span className="hero__typed">
            "{typed}
            <span className="hero__cursor" aria-hidden="true">
              |
            </span>
            "
          </span>
        </div>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} className="btn btn--solid" target="_blank" rel="noopener noreferrer">Email Me</a>
          <a className="btn btn--outline" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}