
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Check } from 'lucide-react';

const CustomClientSolutions = () => {
  const serviceAreas = [
    {
      name: "Custom Software Development",
      description: "Tailored applications built from the ground up to address your specific business needs.",
      capabilities: [
        "Web applications",
        "Mobile apps (iOS, Android)",
        "Desktop software",
        "Enterprise solutions"
      ]
    },
    {
      name: "Digital Transformation",
      description: "Modernize legacy systems and processes with cutting-edge digital solutions.",
      capabilities: [
        "Legacy system migration",
        "Process automation",
        "Cloud migration",
        "Digital workplace solutions"
      ]
    },
    {
      name: "UX/UI Design",
      description: "User-centered design that creates intuitive, engaging digital experiences.",
      capabilities: [
        "User research & testing",
        "Interface design",
        "Design systems",
        "Prototyping & validation"
      ]
    }
  ];

  const caseStudies = [
    {
      client: "FinTech Innovator",
      title: "Rebuilding a Financial Platform for Scale",
      description: "We helped a growing fintech company rebuild their platform to handle 10x more users while improving the user experience.",
      results: [
        "Increased platform capacity by 1000%",
        "Reduced load times by 70%",
        "Improved user engagement by 45%",
        "Cut infrastructure costs by 30%"
      ],
      image: "/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png"
    },
    {
      client: "Healthcare Provider",
      title: "Streamlining Patient Care Management",
      description: "Created an integrated system that helps healthcare providers manage patient data, appointments, and care plans more efficiently.",
      results: [
        "Reduced administrative time by 40%",
        "Decreased appointment no-shows by 35%",
        "Improved patient satisfaction scores by 28%",
        "Enhanced data security and HIPAA compliance"
      ],
      image: "/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png"
    }
  ];

  return (
    <PageLayout 
      title="Custom Client Solutions" 
      description="Tailored software development and digital solutions for businesses of all sizes. We bring your vision to reality."
    >
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="wave-bg"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-coral">Custom Solutions</span> for Unique Challenges
              </h1>
              <p className="text-pearl-dark text-lg mb-8 max-w-lg">
                We design and develop bespoke software solutions tailored to your specific business challenges, helping you innovate and stay ahead of the competition.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="btn btn-primary inline-flex items-center gap-2">
                  Explore Services <ArrowRight size={18} />
                </a>
                <a href="#case-studies" className="btn border border-coral text-coral hover:bg-coral/10 transition-colors">
                  View Case Studies
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png" 
                  alt="SERVAND Custom Solutions" 
                  className="w-full h-auto object-cover rounded-xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-16">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((service) => (
              <div key={service.name} className="glass-card p-8 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-pearl-dark mb-6">{service.description}</p>
                
                <h4 className="text-lg font-medium mb-3 text-coral">Capabilities:</h4>
                <ul className="space-y-2 mb-8">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <span className="text-coral mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-pearl-dark">{capability}</span>
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

      {/* Development Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-16">Our Development Process</h2>
          
          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-coral/30 transform md:-translate-x-px"></div>
            
            <div className="space-y-16">
              {/* Discovery Phase */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-3">Discovery</h3>
                  <p className="text-pearl-dark">We start by understanding your business, challenges, and objectives through in-depth research and stakeholder interviews.</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-coral rounded-full transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-charcoal-light p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">What to expect:</h4>
                    <ul className="space-y-1 text-pearl-dark">
                      <li>• Stakeholder interviews</li>
                      <li>• Requirements gathering</li>
                      <li>• Market & competitor research</li>
                      <li>• Project scoping</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Planning Phase */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-1">
                  <div className="bg-charcoal-light p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">What to expect:</h4>
                    <ul className="space-y-1 text-pearl-dark">
                      <li>• Solution architecture</li>
                      <li>• User experience design</li>
                      <li>• Technical specifications</li>
                      <li>• Project timeline</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-coral rounded-full transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:order-0">
                  <h3 className="text-2xl font-semibold mb-3">Planning</h3>
                  <p className="text-pearl-dark">We develop detailed plans for the solution, including architecture, design concepts, and technical specifications.</p>
                </div>
              </div>
              
              {/* Development Phase */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-3">Development</h3>
                  <p className="text-pearl-dark">Our engineering team builds your solution using agile methodologies, with regular demos and feedback cycles.</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-coral rounded-full transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-charcoal-light p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">What to expect:</h4>
                    <ul className="space-y-1 text-pearl-dark">
                      <li>• Iterative development</li>
                      <li>• Regular progress updates</li>
                      <li>• Quality assurance testing</li>
                      <li>• Regular demos and feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Deployment Phase */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-1">
                  <div className="bg-charcoal-light p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">What to expect:</h4>
                    <ul className="space-y-1 text-pearl-dark">
                      <li>• Infrastructure setup</li>
                      <li>• Deployment pipeline</li>
                      <li>• Performance testing</li>
                      <li>• Security audits</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-coral rounded-full transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <span className="font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:order-0">
                  <h3 className="text-2xl font-semibold mb-3">Deployment</h3>
                  <p className="text-pearl-dark">We deploy your solution to production, ensuring smooth operation and minimal disruption to your business.</p>
                </div>
              </div>
              
              {/* Support Phase */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-3">Support & Evolution</h3>
                  <p className="text-pearl-dark">We provide ongoing support and continuous improvement to ensure your solution evolves with your business needs.</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-coral rounded-full transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <span className="font-bold">5</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-charcoal-light p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">What to expect:</h4>
                    <ul className="space-y-1 text-pearl-dark">
                      <li>• 24/7 support options</li>
                      <li>• Regular maintenance</li>
                      <li>• Feature enhancements</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-16">Client Success Stories</h2>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={study.client}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="md:w-1/2">
                  <div className="glass-card p-1 rounded-xl overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-auto rounded-xl" 
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-coral mb-2">{study.client}</div>
                  <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                  <p className="text-pearl-dark text-lg mb-6">{study.description}</p>
                  
                  <h4 className="text-lg font-medium mb-3">Results:</h4>
                  <ul className="space-y-3 mb-8">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-3">
                        <span className="text-coral mt-1">
                          <Check size={18} />
                        </span>
                        <span className="text-pearl-dark">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#" className="btn btn-primary inline-flex items-center gap-2">
                    Read Full Case Study <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-coral/20 to-coral/5 rounded-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your vision to life?</h2>
              <p className="text-pearl-dark text-lg mb-8">
                Let's discuss how we can create a custom solution that addresses your unique business challenges.
              </p>
              <a href="/contact" className="btn btn-primary">Schedule a Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CustomClientSolutions;
