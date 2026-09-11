import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";
import { faqs } from "../data/faq";
import "./FAQ.css";

export default function FAQ() {
  return (
    <section id="faq" className="section faq">
      <div className="container faq-inner">
        <Reveal className="section-head">
          <p className="eyebrow">Questions</p>
          <h2>Frequently asked</h2>
        </Reveal>

        <Reveal className="faq-body">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
