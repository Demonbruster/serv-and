import React from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <PageLayout 
      title="About Us" 
      description="Learn about SERVAND, our mission, vision, and the team behind our cutting-edge software studio."
    >
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="wave-bg"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We Build <span className="text-coral">Digital Excellence</span>
              </h1>
              <p className="text-pearl-dark text-lg mb-8 max-w-lg">
                SERVAND is a cutting-edge software studio dedicated to transforming bold visions into exceptional digital solutions. With expertise spanning multiple domains, we create impactful digital experiences that drive real business results.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png" 
                  alt="SERVAND Team" 
                  className="w-full h-auto object-cover rounded-xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-12">Our Story</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="glass-card p-8">
              <div className="text-coral text-4xl font-bold mb-4">2015</div>
              <h3 className="text-xl font-semibold mb-4">Humble Beginnings</h3>
              <p className="text-pearl-dark">Founded in a small office with just three passionate developers, SERVAND began by taking on challenging projects others wouldn't touch.</p>
            </div>
            
            <div className="glass-card p-8">
              <div className="text-coral text-4xl font-bold mb-4">2018</div>
              <h3 className="text-xl font-semibold mb-4">Growing Success</h3>
              <p className="text-pearl-dark">Expanded our team to 15 specialists across design and development, launching our first proprietary software product.</p>
            </div>
            
            <div className="glass-card p-8">
              <div className="text-coral text-4xl font-bold mb-4">Today</div>
              <h3 className="text-xl font-semibold mb-4">Industry Leaders</h3>
              <p className="text-pearl-dark">Now a global team of 50+ experts, we partner with industry giants and ambitious startups to build transformative digital solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="bg-coral rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <span className="font-bold text-xl">01</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Innovation Without Boundaries</h3>
                <p className="text-pearl-dark">We push beyond conventional thinking, exploring new territories in technology and design to solve complex problems with elegant solutions.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-coral rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <span className="font-bold text-xl">02</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Craftsman-like Precision</h3>
                <p className="text-pearl-dark">Every line of code, every pixel, every interaction is crafted with meticulous attention to detail and performance.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-coral rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <span className="font-bold text-xl">03</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Client Partnership</h3>
                <p className="text-pearl-dark">We don't just build for clients; we build with them, establishing deep collaborative relationships built on transparency and shared success.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-coral rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <span className="font-bold text-xl">04</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Continuous Growth</h3>
                <p className="text-pearl-dark">We embrace learning, adapting to new technologies and methodologies to ensure our solutions are always at the cutting edge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-12">Leadership Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 bg-coral/20 flex items-center justify-center">
                {/* Placeholder for team member photo */}
                <div className="text-5xl text-coral">JD</div>
              </div>
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-coral mb-4">CEO & Founder</p>
              <p className="text-pearl-dark mb-4">Visionary leader with 15+ years in software innovation and business strategy.</p>
              <div className="flex gap-4">
                <a href="#" className="text-pearl-dark hover:text-coral transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-pearl-dark hover:text-coral transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 bg-coral/20 flex items-center justify-center">
                <div className="text-5xl text-coral">JS</div>
              </div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-coral mb-4">CTO</p>
              <p className="text-pearl-dark mb-4">Tech pioneer with deep expertise in scalable architectures and emerging technologies.</p>
              <div className="flex gap-4">
                <a href="#" className="text-pearl-dark hover:text-coral transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-pearl-dark hover:text-coral transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 bg-coral/20 flex items-center justify-center">
                <div className="text-5xl text-coral">EW</div>
              </div>
              <h3 className="text-xl font-semibold">Emily Wong</h3>
              <p className="text-coral mb-4">Creative Director</p>
              <p className="text-pearl-dark mb-4">Award-winning designer specializing in user experience and brand strategy.</p>
              <div className="flex gap-4">
                <a href="#" className="text-pearl-dark hover:text-coral transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-pearl-dark hover:text-coral transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a href="/careers" className="btn btn-primary inline-flex items-center gap-2">
              Join Our Team <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
