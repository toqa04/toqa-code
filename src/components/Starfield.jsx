import { useEffect, useRef } from "react";

const STAR_COUNT_DESKTOP = 160;
const STAR_COUNT_MOBILE = 80;

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width, height, dpr;
    let stars = [];
    let scrollY = window.scrollY;
    let raf;
    let nextComet = performance.now() + 4000 + Math.random() * 6000;
    let comet = null;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 640 ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.35,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.006,
        depth: Math.random() * 0.5 + 0.15,
      }));
    }

    function drawStar(s, t) {
      const twinkle = reduceMotion ? s.baseAlpha : s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.3;
      const parallaxY = (s.y + scrollY * s.depth * 0.12) % (height + 40);
      ctx.beginPath();
      ctx.fillStyle = `rgba(244, 241, 251, ${Math.max(0, Math.min(1, twinkle))})`;
      ctx.arc(s.x, parallaxY < 0 ? parallaxY + height : parallaxY, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    function maybeSpawnComet(now) {
      if (reduceMotion) return;
      if (!comet && now > nextComet) {
        const startX = Math.random() * width * 0.6;
        comet = {
          x: startX,
          y: -20,
          vx: 3.2 + Math.random() * 1.5,
          vy: 2.2 + Math.random() * 1,
          life: 0,
        };
      }
    }

    function drawComet(now) {
      if (!comet) return;
      comet.x += comet.vx;
      comet.y += comet.vy;
      comet.life += 1;

      const grad = ctx.createLinearGradient(comet.x, comet.y, comet.x - comet.vx * 14, comet.y - comet.vy * 14);
      grad.addColorStop(0, "rgba(240, 193, 92, 0.9)");
      grad.addColorStop(1, "rgba(240, 193, 92, 0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(comet.x, comet.y);
      ctx.lineTo(comet.x - comet.vx * 14, comet.y - comet.vy * 14);
      ctx.stroke();

      if (comet.x > width + 40 || comet.y > height + 40) {
        comet = null;
        nextComet = now + 6000 + Math.random() * 8000;
      }
    }

    function loop(t) {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((s) => drawStar(s, t));
      maybeSpawnComet(t);
      drawComet(t);
      raf = requestAnimationFrame(loop);
    }

    function onScroll() {
      scrollY = window.scrollY;
    }

    resize();
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
