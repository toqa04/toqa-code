import { useState } from "react";
import Reveal from "../components/Reveal";
import FeedbackForm from "../components/FeedbackForm";
import BookingForm from "../components/BookingForm";
import "./Contact.css";

export default function Contact() {
  const [mode, setMode] = useState("booking"); // "booking" | "feedback"

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Let’s connect</p>
          <h2>Need help with a topic?</h2>
          <p>
            Leave a note or book a private session. I’d love to hear what
            you’re learning and help you move forward.
          </p>
        </Reveal>

        <Reveal className="contact-panel" id="booking-form">
          <div className="contact-tabs" role="tablist" aria-label="Contact options">
            <button
              type="button"
              role="tab"
              id="tab-booking"
              aria-selected={mode === "booking"}
              aria-controls="panel-booking"
              className={`contact-tab ${mode === "booking" ? "is-active" : ""}`}
              onClick={() => setMode("booking")}
            >
              Book a Private Session
            </button>
            <button
              type="button"
              role="tab"
              id="tab-feedback"
              aria-selected={mode === "feedback"}
              aria-controls="panel-feedback"
              className={`contact-tab ${mode === "feedback" ? "is-active" : ""}`}
              onClick={() => setMode("feedback")}
            >
              Send Feedback
            </button>
          </div>

          <div
            role="tabpanel"
            id="panel-booking"
            aria-labelledby="tab-booking"
            hidden={mode !== "booking"}
          >
            <h3 className="contact-form-title">Request Private Tutoring</h3>
            <BookingForm />
          </div>

          <div
            role="tabpanel"
            id="panel-feedback"
            aria-labelledby="tab-feedback"
            hidden={mode !== "feedback"}
          >
            <h3 className="contact-form-title">Send Your Feedback</h3>
            <FeedbackForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
