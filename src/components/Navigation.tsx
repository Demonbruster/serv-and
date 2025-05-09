import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Company', 
      href: '#', 
      subMenu: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    { 
      name: 'Services', 
      href: '#services',
      subMenu: [
        { name: 'In-House Innovations', href: '/services/in-house-innovations' },
        { name: 'Custom Client Solutions', href: '/services/custom-client-solutions' },
        { name: 'Tech Strategy & Consulting', href: '/services/tech-strategy-consulting' },
      ] 
    },
    { name: 'Our Work', href: '#work' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle submenu hover state
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12',
        isScrolled 
          ? 'bg-charcoal/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/e51813d9-9b7a-4e77-a99b-b17f11a87e04.png" 
            alt="SERVAND Logo" 
            className="h-8 md:h-10"
          />
          <span className="font-bold text-xl md:text-2xl tracking-tight">SERVAND</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <div 
              key={link.name}
              className="relative"
              onMouseEnter={() => setActiveSubmenu(index)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              {link.href.startsWith('#') ? (
                <a 
                  href={link.href}
                  className="text-pearl-dark hover:text-coral transition-colors duration-300 underline-link"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.href}
                  className="text-pearl-dark hover:text-coral transition-colors duration-300 underline-link"
                >
                  {link.name}
                </Link>
              )}
              
              {/* Submenu */}
              {link.subMenu && activeSubmenu === index && (
                <div className="absolute top-full left-0 mt-2 py-2 bg-charcoal-light rounded-md shadow-lg min-w-[200px] z-50 animate-fade-in">
                  {link.subMenu.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.href}
                      className="block px-4 py-2 text-pearl-dark hover:bg-charcoal hover:text-coral transition-colors duration-200"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-pearl hover:text-coral"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          'fixed inset-0 bg-charcoal z-40 flex flex-col items-center justify-center transition-all duration-300',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-center">
              {link.href.startsWith('#') ? (
                <a 
                  href={link.href}
                  className="text-pearl-dark hover:text-coral text-xl transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.href}
                  className="text-pearl-dark hover:text-coral text-xl transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
              
              {/* Mobile Submenu */}
              {link.subMenu && (
                <div className="mt-2 flex flex-col items-center">
                  {link.subMenu.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.href}
                      className="text-pearl-dark/70 hover:text-coral text-base py-1 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
