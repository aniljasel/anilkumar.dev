import React, { useEffect, useRef } from "react";
import "./ElectricBorderCard.css";

const ElectricBorderCard = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let animationFrame;

    const drawLightningBorder = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#5227FF";
      // ctx.shadowColor = "#5227FF";
      ctx.shadowBlur = 15;
      ctx.lineWidth = 2;

      const jitter = 6;      // jaggedness
      const spacing = 12;    // segment length

      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let x = 0; x < canvas.width; x += spacing)
        ctx.lineTo(x, Math.sin(x * 0.3 + Date.now() * 0.01) * jitter);
      for (let y = 0; y < canvas.height; y += spacing)
        ctx.lineTo(
          canvas.width - Math.sin(y * 0.3 + Date.now() * 0.01) * jitter,
          y
        );
      for (let x = canvas.width; x > 0; x -= spacing)
        ctx.lineTo(
          x,
          canvas.height -
            Math.sin(x * 0.3 + Date.now() * 0.01 + 10) * jitter
        );
      for (let y = canvas.height; y > 0; y -= spacing)
        ctx.lineTo(Math.sin(y * 0.3 + Date.now() * 0.01 + 20) * jitter, y);
      ctx.closePath();
      ctx.stroke();

      animationFrame = requestAnimationFrame(drawLightningBorder);
    };
    drawLightningBorder();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="electric-card">
      <canvas ref={canvasRef} className="electric-border"></canvas>
      <div className="electric-content">{children}</div>
    </div>
  );
};

export default ElectricBorderCard;
