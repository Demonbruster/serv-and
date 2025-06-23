
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import sectionImage from '../assets/images/sectionImg.png';

const WhyUsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);
  
  const features = [
    {
      title: "Innovative Approach",
      description: "We embrace cutting-edge technologies and methodologies to deliver forward-thinking solutions."
    },
    {
      title: "Client-Centric Philosophy",
      description: "Your success is our priority. We work closely with you to understand your unique needs."
    },
    {
      title: "Technical Excellence",
      description: "Our team of experts brings deep technical knowledge and experience to every project."
    },
    {
      title: "Scalable Solutions",
      description: "We build systems that grow with your business, preparing you for future challenges."
    }
  ];
  
  return (
    <section id="why-us" className="py-24 px-6 relative">
      <div className="wave-bg"></div>
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "section-heading",
            inView ? "after:scale-x-100" : "after:scale-x-0"
          )}>
            Why SERVAND?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-pearl-dark">
            We blend technical expertise, creative thinking, and business acumen to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card overflow-hidden rounded-xl">
            <img
              src={sectionImage}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features side */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-8">
              {features.map((feature, index) => (
                <li 
                  key={feature.title}
                  className={cn(
                    "flex items-start transition-all duration-700",
                    inView 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-12"
                  )}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="mr-4 mt-1">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={cn(
                        "text-coral stroke-current",
                        inView ? "animate-draw-check" : ""
                      )}
                      style={{ strokeDasharray: "100", strokeDashoffset: inView ? "0" : "100", transitionDelay: `${index * 200 + 500}ms` }}
                    >
                      <path 
                        d="M5 13L9 17L19 7" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 relative">
                      {feature.title}
                      <span className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-coral transition-all duration-700",
                        inView ? "w-12" : "w-0"
                      )} style={{ transitionDelay: `${index * 200 + 300}ms` }}></span>
                    </h3>
                    <p className="text-pearl-dark">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
