
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  return (
    <div 
      ref={ref}
      className={cn(
        "glass-card p-8 flex flex-col items-center text-center transition-all duration-700",
        inView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 text-coral">
        {icon === "innovation" && (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 8C19.85 8 10 17.85 10 30C10 37.5 13.8 44.15 19.6 47.75V54C19.6 55.65 21.05 57 22.8 57H41.2C42.95 57 44.4 55.65 44.4 54V47.75C50.2 44.05 54 37.5 54 30C54 17.85 44.15 8 32 8ZM41.2 51H22.8V49H41.2V51ZM41.2 45H22.8V43H41.2V45ZM40.2 39.5L38.45 40.55C37.95 40.85 37.6 41.35 37.6 42V40H26.4V42C26.4 41.35 26.05 40.85 25.55 40.55L23.8 39.5C19.6 37.15 16.8 33.05 16.8 28.4C16.8 21.5 23.7 14.8 32 14.8C40.3 14.8 47.2 21.5 47.2 28.4C47.2 33.05 44.4 37.15 40.2 39.5Z" fill="currentColor"/>
            <path d="M35.2 27.0001H28.8V30.0001H25.6V33.0001H28.8V36.0001H35.2V33.0001H38.4V30.0001H35.2V27.0001Z" fill="currentColor"/>
          </svg>
        )}
        {icon === "custom" && (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48 8H16C13.2 8 11 10.2 11 13V51C11 53.8 13.2 56 16 56H48C50.8 56 53 53.8 53 51V13C53 10.2 50.8 8 48 8ZM16 13H29.5V33.5L22.75 29.75L16 33.5V13Z" fill="currentColor"/>
          </svg>
        )}
        {icon === "consulting" && (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 14H14C11.8 14 10 15.8 10 18V46C10 48.2 11.8 50 14 50H50C52.2 50 54 48.2 54 46V18C54 15.8 52.2 14 50 14ZM26 42H18V36H26V42ZM26 32H18V26H26V32ZM38 42H30V36H38V42ZM38 32H30V26H38V32ZM50 42H42V36H50V42ZM50 32H42V26H50V32Z" fill="currentColor"/>
          </svg>
        )}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-pearl-dark leading-relaxed">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const services = [
    {
      title: "In-House Innovations",
      description: "We build our own products with cutting-edge technology, pushing boundaries and setting new standards in the digital landscape.",
      icon: "innovation"
    },
    {
      title: "Custom Client Solutions",
      description: "Tailored software development services designed to transform your vision into elegant, scalable, and high-performing digital products.",
      icon: "custom"
    },
    {
      title: "Tech Strategy & Consulting",
      description: "Strategic guidance and technical expertise to help you navigate the complex technology landscape and make informed decisions.",
      icon: "consulting"
    }
  ];
  
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="wave-bg"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "section-heading",
            inView ? "after:scale-x-100" : "after:scale-x-0"
          )}>
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-pearl-dark">
            Elevating digital experiences through innovation, expertise, and relentless pursuit of excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
