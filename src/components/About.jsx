import { profile } from "../data";
import "./About.css";

const principles = [
  ["01", "Useful before impressive", "The strongest AI feature is the one that makes a real task clearer, faster, or more reliable."],
  ["02", "Systems over isolated features", "I think about users, data, exceptions, interfaces, and operations as one connected product."],
  ["03", "Ambition with accountability", "Intelligent software should remain understandable, reviewable, and honest about its limits."],
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-intro" data-reveal>
          <div>
            <span className="section-index">01 / About</span>
            <h2>Founder mindset.<br /><em>Engineer’s discipline.</em></h2>
          </div>
          <p>{profile.bio}</p>
        </div>

        <div className="about__grid">
          <div className="about__portrait" data-reveal>
            <div className="about__portrait-grid" aria-hidden="true" />
            <div className="about__monogram">HA</div>
            <div className="about__portrait-label">
              <span>Hasnat Ahmed</span>
              <small>AI / PRODUCT / SOFTWARE</small>
            </div>
            <div className="about__coordinate">30.1575° N / 71.5249° E</div>
          </div>

          <div className="about__story" data-reveal style={{ "--delay": "100ms" }}>
            <span className="about__story-label">Current focus</span>
            <h3>Building at the point where intelligence meets operations.</h3>
            <p>
              I’m developing my craft through a BS in Artificial Intelligence while shipping real products. That combination matters to me: theory creates better judgment, but products reveal whether an idea is actually useful.
            </p>
            <p>
              Through Next Gen AI, I’m exploring healthcare systems first—pharmacy operations, clinical workflows, and document intelligence—while expanding toward industrial vision and enterprise automation.
            </p>
            <div className="about__facts">
              <div><span>Education</span><strong>{profile.education}</strong></div>
              <div><span>Role</span><strong>{profile.founderRole}</strong></div>
              <div><span>Base</span><strong>{profile.location}</strong></div>
            </div>
          </div>
        </div>

        <div className="about__principles">
          {principles.map(([number, title, text], index) => (
            <article key={number} data-reveal style={{ "--delay": `${index * 80}ms` }}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
