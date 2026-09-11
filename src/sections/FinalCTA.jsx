import Reveal from "../components/Reveal";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="container">
        <Reveal className="final-cta-inner">
          <h2>Ready to understand it better?</h2>
          <p>Explore the materials, or request a private tutoring session.</p>
          <div className="final-cta-actions">
            <a href="#materials" className="btn btn-primary">
              Explore Materials
            </a>
            <a href="#contact" className="btn btn-ghost">
              Request Private Tutoring
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
