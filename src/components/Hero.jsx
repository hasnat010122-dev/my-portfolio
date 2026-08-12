import { useEffect, useRef } from "react";
import { profile, proofPoints } from "../data";
import "./Hero.css";

function NeuralField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext("2d");
    let frame;
    let nodes = [];
    let width = 0;
    let height = 0;
    const pointer = { x: -1000, y: -1000 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const createNodes = () => {
      const count = Math.max(24, Math.min(58, Math.floor(width / 18)));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: index % 11 === 0 ? 2.6 : Math.random() * 1.2 + 0.6,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createNodes();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const color = getComputedStyle(document.documentElement).getPropertyValue("--canvas-rgb").trim() || "185,221,200";

      nodes.forEach((node, index) => {
        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        const pointerDistance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
        if (pointerDistance < 130 && pointerDistance > 0 && !reduceMotion) {
          node.x += ((node.x - pointer.x) / pointerDistance) * 0.25;
          node.y += ((node.y - pointer.y) / pointerDistance) * 0.25;
        }

        for (let next = index + 1; next < nodes.length; next += 1) {
          const other = nodes[next];
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < 115) {
            context.beginPath();
            context.strokeStyle = `rgba(${color},${(1 - distance / 115) * 0.2})`;
            context.lineWidth = 0.65;
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        context.beginPath();
        context.fillStyle = `rgba(${color},${node.r > 2 ? 0.9 : 0.52})`;
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", () => {
      pointer.x = -1000;
      pointer.y = -1000;
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-field" aria-hidden="true" />;
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />

      <div className="container hero__layout">
        <div className="hero__copy" data-reveal>
          <div className="hero__availability">
            <i /> Building products through Next Gen AI
          </div>

          <p className="hero__role">{profile.title}</p>
          <h1>
            I build intelligent
            <span>systems with consequence.</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#work">
              Explore selected work <span>↓</span>
            </a>
            <a className="button button--secondary" href={`mailto:${profile.email}`}>
              Start a conversation <span>↗</span>
            </a>
          </div>

          <div className="hero__proof">
            {proofPoints.map((point) => (
              <div key={point.label}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" data-reveal style={{ "--delay": "120ms" }}>
          <NeuralField />
          <div className="hero__visual-header">
            <span>HAS-NAT / INTELLIGENCE FIELD</span>
            <span className="hero__visual-live"><i /> ACTIVE</span>
          </div>

          <div className="hero__core">
            <div className="hero__core-ring hero__core-ring--outer" />
            <div className="hero__core-ring hero__core-ring--inner" />
            <div className="hero__core-mark">
              <span>HA</span>
              <small>BUILD / THINK / SHIP</small>
            </div>
          </div>

          <div className="hero__signal hero__signal--top">
            <span>01</span><strong>Applied AI</strong><small>Model → workflow</small>
          </div>
          <div className="hero__signal hero__signal--right">
            <span>02</span><strong>Product</strong><small>Problem → system</small>
          </div>
          <div className="hero__signal hero__signal--bottom">
            <span>03</span><strong>Engineering</strong><small>Prototype → production</small>
          </div>

          <div className="hero__visual-footer">
            <span>FOCUS / HEALTHCARE + OPERATIONS</span>
            <a href={profile.medStock} target="_blank" rel="noreferrer">MEDSTOCK PRO ↗</a>
          </div>
        </div>
      </div>

      <div className="hero__ticker" aria-label="Areas of expertise">
        <div>
          <span>Applied artificial intelligence</span><i />
          <span>Product engineering</span><i />
          <span>Healthcare systems</span><i />
          <span>Full-stack development</span><i />
          <span>Human-centered automation</span><i />
          <span>Applied artificial intelligence</span><i />
          <span>Product engineering</span><i />
        </div>
      </div>
    </section>
  );
}
