
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Check } from 'lucide-react';

const InHouseInnovations = () => {
  const products = [
    {
      name: "DataForge",
      description: "An enterprise-grade data integration platform that simplifies complex data pipelines and transforms.",
      features: [
        "Real-time data processing",
        "Visual pipeline builder",
        "Automated error handling",
        "Custom connectors for any data source"
      ],
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png"
    },
    {
      name: "PulseCMS",
      description: "A modern, headless CMS that empowers content teams while giving developers the flexibility they need.",
      features: [
        "API-first architecture",
        "Powerful content modeling",
        "Localization built-in",
        "Developer-friendly SDK"
      ],
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png"
    },
    {
      name: "SecureVault",
      description: "Enterprise security solution for managing access, credentials, and sensitive information.",
      features: [
        "Zero-knowledge encryption",
        "Advanced permission controls",
        "Audit trails and compliance reporting",
        "Seamless integration with existing systems"
      ],
      image: "/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png"
    }
  ];

  return (
    <PageLayout 
      title="In-House Innovations" 
      description="Discover our suite of proprietary software products built to solve complex business challenges."
    >
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="wave-bg"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We Build <span className="text-coral">Game-Changing</span> Products
              </h1>
              <p className="text-pearl-dark text-lg mb-8 max-w-lg">
                Our team of experts designs and develops innovative software products that solve complex business challenges and create new possibilities for our clients.
              </p>
              <a href="#products" className="btn btn-primary inline-flex items-center gap-2">
                Explore Our Products <ArrowRight size={18} />
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/public/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png" 
                  alt="SERVAND In-House Products" 
                  className="w-full h-auto object-cover rounded-xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-16">Our Products</h2>
          
          <div className="space-y-24">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="md:w-1/2">
                  <div className="glass-card p-1 rounded-xl overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-auto rounded-xl" 
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                  <p className="text-pearl-dark text-lg mb-6">{product.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-coral mt-1">
                          <Check size={18} />
                        </span>
                        <span className="text-pearl-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#" className="btn btn-primary inline-flex items-center gap-2">
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-16">Our Innovation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="bg-coral h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                01
              </div>
              <h3 className="text-xl font-semibold mb-4">Identify Challenges</h3>
              <p className="text-pearl-dark">We research market needs and identify specific business challenges that lack efficient solutions.</p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="bg-coral h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                02
              </div>
              <h3 className="text-xl font-semibold mb-4">Conceptualize</h3>
              <p className="text-pearl-dark">Our cross-functional teams brainstorm and develop innovative approaches to solve these challenges.</p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="bg-coral h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                03
              </div>
              <h3 className="text-xl font-semibold mb-4">Prototype & Test</h3>
              <p className="text-pearl-dark">We build functioning prototypes and test them rigorously with real users to validate our approach.</p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="bg-coral h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                04
              </div>
              <h3 className="text-xl font-semibold mb-4">Scale & Evolve</h3>
              <p className="text-pearl-dark">Successful prototypes are developed into full products that continue to evolve based on user feedback.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-coral/20 to-coral/5 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
                <p className="text-pearl-dark text-lg mb-0">Explore how our innovative products can help solve your business challenges.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="btn btn-primary whitespace-nowrap">Schedule a Demo</a>
                <a href="#products" className="btn border border-coral text-coral hover:bg-coral/10 transition-colors whitespace-nowrap">View Products</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InHouseInnovations;
