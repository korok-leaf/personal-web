"use client";
import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; radius: number; dx: number; dy: number }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: Math.random() * 1.5 - 0.75,
        dy: Math.random() * 1.5 - 0.75,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        ctx.shadowBlur = 10;
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      requestAnimationFrame(drawParticles);
    };

    drawParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800"></div>

      {/* Abstract Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-0.5 bg-gray-600 opacity-20 rotate-45"></div>
        <div className="absolute top-1/2 left-2/3 w-96 h-0.5 bg-gray-600 opacity-20 -rotate-45"></div>
      </div>

      {/* Canvas for Particles */}
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>
    </div>
  );
};

export default Background;
