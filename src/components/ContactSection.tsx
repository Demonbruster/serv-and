
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };
  
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "contact@servand.com",
      href: "mailto:contact@servand.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+94 (767) 617-597",
      href: "tel:+94767617597"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      value: "Start a conversation",
      href: "#"
    },
  ];
  
  return (
    <section 
      id="contact" 
      className="py-24 px-6 relative overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      {/* Animated background that shifts with mouse movement */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-1000 ease-out" 
        style={{ 
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,107,107,0.4) 0%, rgba(28,28,30,0) 50%)`,
        }}
      ></div>
      
      <div className="wave-bg"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "section-heading",
            inView ? "after:scale-x-100" : "after:scale-x-0"
          )}>
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-pearl-dark">
            Ready to transform your vision into reality? Reach out to us and let's start a conversation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div 
            className={cn(
              "glass-card p-8 rounded-xl transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-pearl-dark mb-8">
                We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={method.title}
                    className={cn(
                      "flex items-center transition-all duration-700",
                      inView 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-12"
                    )}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="p-3 bg-coral/20 rounded-full mr-4">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-pearl-dark">
                        {method.title}
                      </h4>
                      <a
                        href={method.href}
                        className="text-lg font-semibold hover:text-coral transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={cn(
              "glass-card p-6 rounded-xl mt-auto transition-all duration-700",
              inView 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: "600ms" }}
            >
              <h4 className="font-semibold mb-2">Our Location</h4>
              <address className="not-italic text-pearl-dark">
                No.255, Main Street,<br />
                Kuttikarach, Kinniya - 04<br />
                Sri Lanka
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
