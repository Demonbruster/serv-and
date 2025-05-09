import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "In-House Innovations", href: "/services/in-house-innovations" },
        { name: "Custom Client Solutions", href: "/services/custom-client-solutions" },
        { name: "Tech Strategy & Consulting", href: "/services/tech-strategy-consulting" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Twitter", href: "https://twitter.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "GitHub", href: "https://github.com" },
      ],
    },
  ];
  
  return (
    <footer className="bg-charcoal-light py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/e51813d9-9b7a-4e77-a99b-b17f11a87e04.png" 
                alt="SERVAND Logo" 
                className="h-8"
              />
              <span className="font-bold text-xl tracking-tight">SERVAND</span>
            </Link>
            <p className="text-pearl-dark mb-6 max-w-sm">
              A cutting-edge software studio delivering exceptional digital experiences through innovation, craftsmanship, and strategic expertise.
            </p>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">Join our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-charcoal border border-white/10 p-2 px-4 rounded-l-full flex-1 outline-none focus:ring-1 focus:ring-coral"
                />
                <button className="bg-coral text-white p-2 pr-4 pl-3 rounded-r-full hover:bg-coral/90 transition-colors flex items-center">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a 
                        href={link.href} 
                        className="text-pearl-dark hover:text-coral transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="text-pearl-dark hover:text-coral transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-pearl-dark text-sm mb-4 md:mb-0">
            &copy; {currentYear} SERVAND. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-pearl-dark hover:text-coral text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-pearl-dark hover:text-coral text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
