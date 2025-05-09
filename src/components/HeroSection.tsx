
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Animation for the wave lines in the background
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let time = 0;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw multiple wave lines
      for (let i = 0; i < 5; i++) {
        const verticalPosition = canvas.height * (0.3 + i * 0.1);
        const amplitude = 30 - i * 3;
        const period = 200 + i * 50;
        const phaseShift = time * (0.1 + i * 0.01);
        
        ctx.beginPath();
        ctx.moveTo(0, verticalPosition);
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = verticalPosition + 
            Math.sin((x / period) * Math.PI * 2 + phaseShift) * amplitude;
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = `rgba(255, 107, 107, ${0.1 - i * 0.02})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      time += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in-up [animation-delay:0.2s] opacity-0">
          <img 
            src="/public/lovable-uploads/e51813d9-9b7a-4e77-a99b-b17f11a87e04.png" 
            alt="SERVAND Logo" 
            className="h-24 md:h-32 mx-auto mb-6"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up [animation-delay:0.4s] opacity-0">
          Where <span className="text-coral">Vision</span> Meets <span className="text-coral">Code</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-pearl-dark animate-fade-in-up [animation-delay:0.6s] opacity-0">
          A cutting-edge software studio delivering exceptional digital experiences 
          through innovation, craftsmanship, and strategic expertise.
        </p>
        
        <a 
          href="#services"
          className="btn btn-primary group inline-flex items-center gap-2 animate-fade-in-up animate-pulse-soft [animation-delay:0.8s] opacity-0"
        >
          Explore Services
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
