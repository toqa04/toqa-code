import Reveal from "../components/Reveal";
import "./About.css";

const FEATURES = [
  {
    title: "Simple, clear lessons",
    text: "Complex ideas become friendly explanations you can understand and remember.",
  },
  {
    title: "Made for students",
    text: "Explanations are shaped around the questions students ask in class and before exams.",
  },
  {
    title: "Learn at your pace",
    text: "Need more support? Book a private session focused on exactly what feels difficult.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-intro">
            <p className="eyebrow">A little about me</p>
            <h2>
              Hi, I’m Taqa.
            </h2>
            <p>
              I’m a Software Engineering graduate passionate about helping
              students feel less overwhelmed by programming and more confident
              in their understanding. I share practical explanations for Java,
              software architecture, and core computer science topics in a warm,
              organized way.
            </p>
          </Reveal>

          <div className="feature-grid">
            {FEATURES.map((f, i) => (
              <Reveal as="div" delay={i * 80} key={f.title} className="feature-card">
                <span className="feature-card-mark" aria-hidden="true" />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
