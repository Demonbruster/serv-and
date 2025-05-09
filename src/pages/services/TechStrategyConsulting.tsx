
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Check } from 'lucide-react';

const TechStrategyConsulting = () => {
  const services = [
    {
      title: "Technology Strategy",
      description: "Comprehensive technology roadmapping aligned with your business goals.",
      offerings: [
        "Digital transformation planning",
        "Technology stack assessment",
        "IT infrastructure modernization",
        "Cloud migration strategy"
      ]
    },
    {
      title: "Product Strategy",
      description: "Strategic guidance for product development and market positioning.",
      offerings: [
        "Product vision & roadmap development",
        "Feature prioritization frameworks",
        "Go-to-market strategy",
        "Competitive analysis"
      ]
    },
    {
      title: "Security Consulting",
      description: "Robust security practices to protect your business and customer data.",
      offerings: [
        "Security architecture review",
        "Compliance & regulatory guidance",
        "Penetration testing",
        "Security training programs"
      ]
    },
    {
      title: "Technical Due Diligence",
      description: "Comprehensive assessment of technical assets and capabilities.",
      offerings: [
        "Codebase quality assessment",
        "Architecture evaluation",
        "Technical debt analysis",
        "Team capability assessment"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "SERVAND's strategic guidance transformed our approach to technology. Their expertise helped us modernize our platforms and accelerate our digital transformation initiatives.",
      author: "Sarah Johnson",
      title: "CTO, Enterprise Solutions Inc.",
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png"
    },
    {
      quote: "The strategic roadmap SERVAND created for our product has been instrumental in our success. They understood both the technology and business aspects, delivering a practical plan we could execute on.",
      author: "Michael Chen",
      title: "VP of Product, TechStart AI",
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png"
    },
    {
      quote: "Their security consulting helped us identify critical vulnerabilities before they became problems. The preventative measures they recommended saved us from potentially devastating breaches.",
      author: "Rebecca Torres",
      title: "CISO, FinSecure Bank",
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png"
    }
  ];

  return (
    <PageLayout 
      title="Tech Strategy & Consulting" 
      description="Expert technology consulting and strategic guidance to help your business navigate digital transformation and achieve your goals."
    >
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="wave-bg"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Strategic <span className="text-coral">Technology</span> Expertise
              </h1>
              <p className="text-pearl-dark text-lg mb-8 max-w-lg">
                We provide expert guidance and strategic consulting to help your business navigate the complex technology landscape and make informed decisions.
              </p>
              <a href="#services" className="btn btn-primary inline-flex items-center gap-2">
                Explore Our Services <ArrowRight size={18} />
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png" 
                  alt="SERVAND Tech Strategy" 
                  className="w-full h-auto object-cover rounded-xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-16">Our Consulting Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="glass-card p-8 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-pearl-dark mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.offerings.map((offering) => (
                    <li key={offering} className="flex items-start gap-3">
                      <span className="text-coral mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-pearl-dark">{offering}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="mt-auto text-coral hover:text-coral/80 flex items-center gap-2 font-medium transition-colors">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-16">Our Consulting Approach</h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="space-y-8">
                <div className="bg-charcoal-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">1. Understand</h3>
                  <p className="text-pearl-dark">We begin by deeply understanding your business, objectives, challenges, and current technology landscape through comprehensive assessments and stakeholder interviews.</p>
                </div>
                
                <div className="bg-charcoal-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">2. Analyze</h3>
                  <p className="text-pearl-dark">Our experts analyze your technical needs, market position, and competitive landscape to identify gaps, opportunities, and potential risks in your current approach.</p>
                </div>
                
                <div className="bg-charcoal-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">3. Strategize</h3>
                  <p className="text-pearl-dark">We develop a tailored strategic roadmap with clear recommendations, prioritized initiatives, and actionable steps to achieve your technology and business goals.</p>
                </div>
                
                <div className="bg-charcoal-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">4. Support</h3>
                  <p className="text-pearl-dark">Our team provides ongoing guidance and support during implementation, helping you navigate challenges and adjust the strategy as needed to ensure success.</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="glass-card p-1 rounded-xl overflow-hidden mb-8">
                  <img 
                    src="/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png" 
                    alt="SERVAND Consulting Approach" 
                    className="w-full h-auto rounded-xl" 
                  />
                </div>
                
                <div className="bg-charcoal-light p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Why Our Approach Works</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-coral mt-1">
                        <Check size={18} />
                      </span>
                      <span className="text-pearl-dark">Holistic view of technology and business needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-coral mt-1">
                        <Check size={18} />
                      </span>
                      <span className="text-pearl-dark">Practical, implementable recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-coral mt-1">
                        <Check size={18} />
                      </span>
                      <span className="text-pearl-dark">Focus on measurable business outcomes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-coral mt-1">
                        <Check size={18} />
                      </span>
                      <span className="text-pearl-dark">Adaptable to changing market conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-16">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="glass-card p-8 flex flex-col h-full">
                <div className="text-3xl text-coral mb-4">"</div>
                <p className="text-pearl-dark text-lg italic mb-8">{testimonial.quote}</p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-coral/20 flex items-center justify-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-pearl-dark text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-16">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-charcoal-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How long does a typical consulting engagement last?</h3>
              <p className="text-pearl-dark">Our engagements typically range from 4 weeks for focused assessments to 6+ months for comprehensive digital transformation initiatives. We tailor the timeline to your specific needs and goals.</p>
            </div>
            
            <div className="bg-charcoal-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Who will be working on my project?</h3>
              <p className="text-pearl-dark">You'll work directly with our senior consultants who have extensive experience in your industry. We don't delegate to junior staff – our experts stay involved throughout the engagement.</p>
            </div>
            
            <div className="bg-charcoal-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How do you measure the success of your consulting services?</h3>
              <p className="text-pearl-dark">We establish clear, measurable KPIs at the beginning of each engagement that align with your business objectives. We regularly track progress against these metrics and provide transparent reporting.</p>
            </div>
            
            <div className="bg-charcoal-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Can you help with implementation after the strategy is developed?</h3>
              <p className="text-pearl-dark">Absolutely. Many clients continue with us for implementation support. We can provide ongoing guidance, build technical solutions, or help you assemble the right team to execute the strategy.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-coral/20 to-coral/5 rounded-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your technology strategy?</h2>
              <p className="text-pearl-dark text-lg mb-8">
                Schedule a consultation with our expert team to discuss how we can help you achieve your technology and business goals.
              </p>
              <a href="/contact" className="btn btn-primary">Book a Free Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechStrategyConsulting;
