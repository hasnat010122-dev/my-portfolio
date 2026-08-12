import { journey } from "../data";
import "./Journey.css";

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div className="section-intro" data-reveal>
          <div>
            <span className="section-index">
              04 / Journey
            </span>

            <h2>
              Learning by building.
              <br />
              <em>Building to learn.</em>
            </h2>
          </div>

          <p>
            My path is still being written. What connects each
            stage is a preference for ambitious problems,
            practical systems, and steady technical growth.
          </p>
        </div>

        <div className="journey__timeline">
          {journey.map((item, index) => (
            <article
              key={`${item.period}-${item.role}`}
              data-reveal
              style={{
                "--delay": `${index * 70}ms`,
              }}
            >
              <span className="journey__period">
                {item.period}
              </span>

              <div className="journey__marker">
                <i />
              </div>

              <div className="journey__role">
                <h3>{item.role}</h3>
                <span>{item.organization}</span>
              </div>

              <p>{item.detail}</p>

              <span className="journey__index">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>

        <div className="journey__quote" data-reveal>
          <span>Working principle</span>

          <blockquote>
            “Make the system understandable. Make the outcome
            useful. Then make it better.”
          </blockquote>

          <small>Hasnat Ahmed · 2026</small>
        </div>
      </div>
    </section>
  );
}
