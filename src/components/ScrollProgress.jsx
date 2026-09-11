import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? scrollTop / max : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-comet" aria-hidden="true">
      <div className="scroll-comet-track" />
      <div
        className="scroll-comet-head"
        style={{ top: `${progress * 100}%` }}
      >
        <span className="scroll-comet-glow" />
      </div>
    </div>
  );
}
