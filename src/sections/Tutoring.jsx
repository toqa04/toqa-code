import Reveal from "../components/Reveal";
import "./Tutoring.css";

const TOPICS = [
  "Java",
  "Software Architecture",
  "Data Structures & Algorithms",
  "Course materials",
  "Exam preparation",
  "Difficult concepts",
];

export default function Tutoring() {
  return (
    <section id="tutoring" className="section tutoring">
      <div className="container">
        <Reveal className="tutoring-panel">
          <div className="tutoring-text">
            <p className="eyebrow">One-on-one</p>
            <h2>Need private tutoring?</h2>
            <p>
              Get personalized explanations tailored to your course, topics,
              and pace. Sessions focus on helping you understand and prepare
              — not on doing assignments for you.
            </p>

            <ul className="tutoring-topics">
              {TOPICS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <a href="#booking-form" className="btn btn-primary">
              Request a Session
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
