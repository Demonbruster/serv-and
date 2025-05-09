
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote (US/EU)",
      type: "Full-time",
      description: "We're looking for an experienced frontend developer with strong React.js skills to join our team and help build exceptional user interfaces."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "New York / Remote",
      type: "Full-time",
      description: "Join our creative team to design innovative, user-centered experiences for our clients across various industries."
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Help us build robust, scalable backend systems using modern technologies like Node.js, Python, and AWS."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco / Remote",
      type: "Full-time",
      description: "Lead product development from concept to launch, working closely with engineering, design, and stakeholders."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Optimize our CI/CD pipeline and infrastructure to ensure our applications run smoothly and efficiently."
    }
  ];

  const benefits = [
    {
      title: "Work from Anywhere",
      description: "Fully remote-friendly policy with flexible hours. Work where you're most productive."
    },
    {
      title: "Continuous Learning",
      description: "Annual learning budget for courses, books, conferences, and professional development."
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages with equity options and performance bonuses."
    },
    {
      title: "Team Retreats",
      description: "Regular company retreats to exciting locations for team building and collaboration."
    },
    {
      title: "Work-Life Balance",
      description: "Generous PTO, parental leave, and respect for your personal time."
    }
  ];

  return (
    <PageLayout 
      title="Careers" 
      description="Join our team at SERVAND. Explore career opportunities and help us build the future of digital products and services."
    >
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="wave-bg"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our <span className="text-coral">Mission</span>
            </h1>
            <p className="text-pearl-dark text-lg mb-8">
              At SERVAND, we're looking for passionate individuals who want to push the boundaries of what's possible in software development. Join our team of innovators, creators, and problem solvers.
            </p>
            <a href="#open-positions" className="btn btn-primary inline-flex items-center gap-2">
              View Open Positions <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-12">Why Work With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-pearl-dark mb-6">
                At SERVAND, we believe that great software is built by great teams. We've created an environment where talented individuals can thrive, innovate, and grow professionally.
              </p>
              <p className="text-lg text-pearl-dark">
                Our culture encourages experimentation, continuous learning, and a healthy work-life balance. We value diversity of thought and background, knowing that different perspectives lead to better solutions.
              </p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-64 md:h-auto">
              <img 
                src="/lovable-uploads/5ee284da-08e3-4435-9e55-a01fb0e9f601.png" 
                alt="SERVAND Team Collaboration" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <blockquote className="text-xl font-medium italic">
                  "The best part about working at SERVAND is the people. Everyone is incredibly talented and supportive."
                </blockquote>
                <cite className="text-coral mt-2 block">— Sarah J., Senior Developer</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-12">Benefits & Perks</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-8 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-pearl-dark">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 px-6 bg-charcoal-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-12">Open Positions</h2>
          
          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <div key={index} className="glass-card p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-3 mb-4">
                      <span className="bg-charcoal px-3 py-1 rounded-full text-sm text-pearl-dark">{job.department}</span>
                      <span className="bg-charcoal px-3 py-1 rounded-full text-sm text-pearl-dark">{job.location}</span>
                      <span className="bg-charcoal px-3 py-1 rounded-full text-sm text-pearl-dark">{job.type}</span>
                    </div>
                    <p className="text-pearl-dark">{job.description}</p>
                  </div>
                  <a href="#" className="btn btn-primary whitespace-nowrap md:self-start">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-pearl-dark text-lg mb-6">Don't see a position that matches your skills?</p>
            <a href="#" className="btn btn-primary">Send an Open Application</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
