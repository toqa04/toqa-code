import HeroArt from "../components/HeroArt";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Taqa Al-Zoubi · Software Engineering Graduate</p>
          <h1 className="hero-title">
            Learn Java.
            <br />
            Understand.
            <br />
            Build with confidence.
          </h1>
          <p className="hero-subtitle">
            I’m Taqa Al-Zoubi, a Software Engineering graduate who creates
            friendly, structured explanations to make Java and software
            engineering easier to understand — one beautiful lesson at a time.
          </p>
          <div className="hero-actions">
            <a href="#materials" className="btn btn-primary">
              Explore Materials
            </a>
            <a href="#contact" className="btn btn-ghost">
              Talk to me
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
