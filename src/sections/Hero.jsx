import { useEffect, useRef, useState } from "react";
import "./Hero.css";

function AnimatedNumber({ end, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId;

    const animate = () => {
      if (reduceMotion) {
        setValue(end);
        return;
      }

      const duration = 1800;
      const startTime = performance.now();

      const update = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        setValue(end * easedProgress);

        if (progress < 1) {
          frameId = requestAnimationFrame(update);
        }
      };

      frameId = requestAnimationFrame(update);
    };

    if (typeof IntersectionObserver === "undefined") {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [end]);

  return (
    <strong ref={ref}>
      {value.toFixed(decimals)}{suffix}
    </strong>
  );
}

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

        <div className="hero-visual">
          <div className="experience-stats" aria-label="Private tutoring experience">
            <div className="experience-stat experience-stat-primary">
              <AnimatedNumber end={2.5} decimals={1} suffix="+" />
              <span>Years of private tutoring for university students</span>
            </div>
            <div className="experience-stat">
              <AnimatedNumber end={50} suffix="+" />
              <span>University students privately tutored</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
