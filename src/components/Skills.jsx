import { useState } from "react";
import { capabilityGroups } from "../data";
import "./Skills.css";

export default function Skills() {
  const [active, setActive] = useState(0);
  const capability = capabilityGroups[active];

  return (
    <section id="capabilities" className="section capabilities">
      <div className="container">
        <div className="section-intro section-intro--light" data-reveal>
          <div>
            <span className="section-index">03 / Capabilities</span>
            <h2>Technical range,<br /><em>product focus.</em></h2>
          </div>
          <p>
            I’m building breadth across AI and software while learning to make disciplined product decisions. The goal is not to collect technologies—it is to choose the right system for the problem.
          </p>
        </div>

        <div className="capabilities__console" data-reveal>
          <div className="capabilities__nav" role="tablist" aria-label="Capability areas">
            {capabilityGroups.map((group, index) => (
              <button
                key={group.title}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? "is-active" : ""}
                onClick={() => setActive(index)}
              >
                <span>{group.number}</span><strong>{group.title}</strong><i>→</i>
              </button>
            ))}
          </div>

          <div className="capabilities__panel" role="tabpanel" key={capability.title}>
            <div className="capabilities__panel-head">
              <span>CAPABILITY / {capability.number}</span>
              <span>ACTIVE LAYER</span>
            </div>
            <div className="capabilities__panel-main">
              <span className="capabilities__panel-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <div className="capabilities__items">
                {capability.items.map((item, index) => (
                  <div key={item}><span>0{index + 1}</span><strong>{item}</strong><i /></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="capabilities__stack" data-reveal>
          <span>Working stack</span>
          <div>
            {["Python", "JavaScript", "React", "Java", "C++", "HTML/CSS", "Vite", "PWA", "Git/GitHub", "Applied OCR"].map((tool) => <i key={tool}>{tool}</i>)}
          </div>
        </div>
      </div>
    </section>
  );
}
