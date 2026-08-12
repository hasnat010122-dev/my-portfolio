import { useState } from "react";
import { profile } from "../data";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("Your email client will open with the message prepared.");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    setStatus("Opening your email client…");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__shell" data-reveal>
          <div className="contact__copy">
            <span className="section-index section-index--light">05 / Contact</span>
            <h2>Let’s build something<br /><em>worth using.</em></h2>
            <p>
              I’m interested in AI product collaborations, software projects, internships, and conversations with people solving meaningful operational problems.
            </p>

            <div className="contact__channels">
              <button type="button" onClick={copyEmail}>
                <span>Email</span><strong>{profile.email}</strong><i>{copied ? "Copied" : "Copy"}</i>
              </button>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <span>Phone</span><strong>{profile.phone}</strong><i>Call ↗</i>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span>GitHub</span><strong>hasnat010122-dev</strong><i>Open ↗</i>
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={submit}>
            <div className="contact__form-head"><span>PROJECT ENQUIRY</span><i>AVAILABLE / 2026</i></div>
            <label><span>Your name</span><input name="name" type="text" required placeholder="Name" /></label>
            <label><span>Your email</span><input name="email" type="email" required placeholder="you@company.com" /></label>
            <label><span>What should we discuss?</span><textarea name="message" rows="6" required placeholder="Tell me about the product, workflow, or opportunity…" /></label>
            <div className="contact__form-footer"><small role="status">{status}</small><button className="button button--light" type="submit">Prepare email <span>→</span></button></div>
          </form>
        </div>

        <div className="contact__availability" data-reveal>
          <span><i /> Open to thoughtful opportunities</span>
          <strong>{profile.location}</strong>
          <a href={profile.nextGenAI} target="_blank" rel="noreferrer">Next Gen AI ↗</a>
        </div>
      </div>
    </section>
  );
}
