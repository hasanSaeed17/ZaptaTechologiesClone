import React, { useEffect, useRef } from "react";
import "./ContactHero.css";

const ContactHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const PARTICLE_COUNT = 80;
    const MAX_DISTANCE = 120;

    let mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 450;
    };
    resizeCanvas();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
      }

      move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "#66d9ff";
        ctx.shadowColor = "#66d9ff";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_DISTANCE) {
            ctx.strokeStyle = `rgba(102, 217, 255, ${1 - distance / MAX_DISTANCE})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

if (mouse.x !== null && mouse.y !== null) {
  const dx = particles[a].x - mouse.x;
  const dy = particles[a].y - mouse.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < mouse.radius) {
    const opacity = 1 - distance / mouse.radius;

    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.lineWidth = 1;      // slightly stronger but still sharp
    ctx.shadowBlur = 0;       // ❌ remove glow

    ctx.beginPath();
    ctx.moveTo(particles[a].x, particles[a].y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
  }
}
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.move();
        p.draw();
      });

      connect();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <section className="projects-hero">
      {/* Background Decorations */}
      <div className="bg-decor">
        <div className="dots"></div>

        {/* Top Right Decor */}
        <div className="top-right-decor">
          <div className="top-glow"></div>
          <div className="top-dots"></div>
        </div>

        <div className="triangle"></div>
        <div className="circle"></div>
        <div className="arrow">››</div>
        <div className="wave"></div>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="canvas-bg"></canvas>

      {/* Content */}
      <div className="hero-content">
        <h1>Contact Us</h1>

        <div className="breadcrumb">
          <span>Home</span>
          <span className="arrow-icon"> › </span>
          <span className="active">Contact</span>
        </div>

        <p>
          We are seeking a talented individual to join our team in the software industry. Our dynamic 
          work environment offers competitive compensation and ample opportunities for career 
          advancement. If you are a self-motivated professional who is passionate about growth and development, 
          we encourage you to apply for these exciting opportunities.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;