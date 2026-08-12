import { useState } from "react";
import { projects } from "../data";
import "./Projects.css";

function ProjectVisual({ id }) {
  if (id === "medstock") {
    return (
      <div className="project-visual project-visual--medstock" aria-hidden="true">
        <div className="medstock-ui">
          <div className="medstock-ui__top"><i /><i /><i /><span>MedStock Pro</span></div>
          <div className="medstock-ui__body">
            <div className="medstock-ui__side"><b /><b /><b /><b /></div>
            <div className="medstock-ui__content">
              <div className="medstock-ui__metrics"><i /><i /><i /></div>
              <div className="medstock-ui__chart">
                <svg viewBox="0 0 360 120" preserveAspectRatio="none"><path d="M0 91C45 77 60 91 95 58s63-4 97-30 62 57 100 12 45-7 68-31" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "nextgen") {
    return (
      <div className="project-visual project-visual--nextgen" aria-hidden="true">
        <div className="nextgen-orbit"><span>AI</span><i /><i /><i /></div>
        <div className="nextgen-label">NEXT GEN / APPLIED INTELLIGENCE</div>
      </div>
    );
  }

  if (id === "clinic-os") {
    return (
      <div className="project-visual project-visual--clinic" aria-hidden="true">
        <div className="clinic-column"><span>QUEUE</span><i /><i /><i /></div>
        <div className="clinic-column"><span>CONSULT</span><i /><i /></div>
        <div className="clinic-column"><span>PROCEDURE</span><i /><i /><i /></div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--documents" aria-hidden="true">
      <div className="document-page"><i /><i /><i /><i /><b /></div>
      <div className="extraction-panel"><span>MEDICINE</span><strong>Detected</strong><span>STRENGTH</span><strong>Verify</strong><span>EXPIRY</span><strong>Detected</strong></div>
      <div className="document-scan" />
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const active = projects.find((project) => project.id === activeProject) || projects[0];

  return (
    <section id="work" className="section projects">
      <div className="container">
        <div className="section-intro" data-reveal>
          <div>
            <span className="section-index">02 / Selected work</span>
            <h2>Products built around<br /><em>real operational stakes.</em></h2>
          </div>
          <p>
            My portfolio begins in healthcare and expands toward industry and enterprise systems. I label each project honestly—live, in development, or research—because trust is part of good product design.
          </p>
        </div>

        <div className="projects__selector" data-reveal>
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={activeProject === project.id ? "is-active" : ""}
              onClick={() => setActiveProject(project.id)}
            >
              <span>{project.number}</span>
              <strong>{project.title}</strong>
              <small>{project.status}</small>
              <i>→</i>
            </button>
          ))}
        </div>

        <article className={`projects__featured projects__featured--${active.accent}`} data-reveal>
          <div className="projects__featured-copy">
            <div className="projects__featured-top">
              <div className="project-status-row">
                <span className={`project-status project-status--${active.statusTone}`}><i />{active.status}</span>
                <span>{active.category}</span>
              </div>
              <span className="projects__code">NGAI / {active.number}</span>
            </div>

            <div className="projects__featured-main">
              <span className="projects__featured-number">{active.number}</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="projects__outcome"><span>Product intention</span><strong>{active.outcome}</strong></div>
              <div className="projects__tags">
                {active.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>

            <div className="projects__featured-actions">
              {active.liveUrl ? (
                <a className="button button--primary" href={active.liveUrl} target="_blank" rel="noreferrer">Visit project <span>↗</span></a>
              ) : (
                <span className="projects__private">Private development / details available on request</span>
              )}
              <a className="project-github-link" href="https://github.com/hasnat010122-dev" target="_blank" rel="noreferrer">GitHub profile ↗</a>
            </div>
          </div>

          <ProjectVisual id={active.id} />
        </article>

        <div className="projects__all">
          {projects.map((project, index) => (
            <article key={project.id} data-reveal style={{ "--delay": `${index * 70}ms` }}>
              <div className="projects__all-head"><span>{project.number}</span><small>{project.category}</small></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
              <button type="button" onClick={() => { setActiveProject(project.id); document.querySelector(".projects__featured")?.scrollIntoView({ behavior: "smooth", block: "center" }); }}>View case summary <i>→</i></button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
