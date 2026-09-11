import Reveal from "../components/Reveal";
import MaterialCard from "../components/MaterialCard";
import { subjects } from "../data/subjects";
import "./Materials.css";

export default function Materials() {
  return (
    <section id="materials" className="section materials">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Study materials</p>
          <h2>Small cards. Big understanding.</h2>
          <p>
            Choose a topic below to open its explanation and study materials in
            Google Drive. Start wherever your course currently is.
          </p>
        </Reveal>

        <div className="material-grid">
          {subjects.map((s, i) => (
            <Reveal as="div" delay={Math.min(i, 4) * 60} key={s.id}>
              <MaterialCard {...s} />
            </Reveal>
          ))}
        </div>

        <Reveal className="materials-note">
          <p>هذا الشرح لوجه الله تعالى، لا تنسونا من صالح دعائكم.</p>
          <p>لا أسمح للفرق الطلابية بضم الشرح إلى ملخصاتهم أو مواقعهم الإلكترونية أبدًا.</p>
        </Reveal>
      </div>
    </section>
  );
}
