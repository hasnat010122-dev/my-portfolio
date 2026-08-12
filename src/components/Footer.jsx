import { navigation, profile } from "../data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href="#home" className="footer__brand"><span>HA</span><div><strong>Hasnat Ahmed</strong><small>AI Developer & Product Builder</small></div></a>
          <p>Designing practical intelligence for healthcare, industry, and ambitious digital products.</p>
          <a href={profile.medStock} target="_blank" rel="noreferrer">MedStock Pro <span>↗</span></a>
        </div>

        <div className="footer__grid">
          <div><span>Navigate</span>{navigation.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
          <div><span>Products</span><a href={profile.nextGenAI} target="_blank" rel="noreferrer">Next Gen AI ↗</a><a href={profile.medStock} target="_blank" rel="noreferrer">MedStock Pro ↗</a><a href="#work">Clinical Operations OS</a></div>
          <div><span>Connect</span><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${profile.email}`}>Email</a><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>Phone</a></div>
        </div>

        <div className="footer__bottom"><span>© {new Date().getFullYear()} Hasnat Ahmed</span><span>Designed and built with intent · Pakistan</span><a href="#home">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
