import { skillGroups } from "../data";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="eyebrow">02 / skills</p>
        <h2 className="section-heading">What I work with</h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills__card">
              <h3 className="skills__card-title">{group.label}</h3>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}