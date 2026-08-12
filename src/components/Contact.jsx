import { useState } from "react";
import { profile } from "../data";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState("");

  const copy = (value, key) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="eyebrow">03 / contact</p>
        <h2 className="section-heading contact__heading">Let's build something.</h2>
        <p className="contact__sub">
          Open to internships, freelance work, and full-stack or AI roles. Reach out directly —
          I usually reply within a day.
        </p>

        <div className="contact__row">
          <button className="contact__item" onClick={() => copy(profile.email, "email")}>
            <span className="contact__label">Email</span>
            <span className="contact__value">{profile.email}</span>
            <span className="contact__hint">{copied === "email" ? "Copied!" : "Click to copy"}</span>
          </button>

          <button className="contact__item" onClick={() => copy(profile.phone, "phone")}>
            <span className="contact__label">Phone</span>
            <span className="contact__value">{profile.phone}</span>
            <span className="contact__hint">{copied === "phone" ? "Copied!" : "Click to copy"}</span>
          </button>
        </div>

        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} className="btn btn--solid contact__cta" target="_blank" rel="noopener noreferrer">Send an Email</a>
      </div>
    </section>
  );
}