import { profile } from "../data";
import "./About.css";

const facts = [
  { label: "Education", value: profile.education },
  { label: "Focus", value: "AI & Full-Stack Development" },
  { label: "Status", value: "Open to opportunities" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="eyebrow">01 / about</p>
        <h2 className="section-heading">Who I am</h2>

        <div className="about__grid">
          <p className="about__bio">{profile.bio}</p>

          <div className="about__facts">
            {facts.map((fact) => (
              <div key={fact.label} className="about__fact">
                <span className="about__fact-label">{fact.label}</span>
                <span className="about__fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}