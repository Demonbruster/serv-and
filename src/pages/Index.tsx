
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import WhyUsSection from '@/components/WhyUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // This will initialize any necessary page-level effects
  useEffect(() => {
    // Ensure smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Clean up any side effects if needed
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal">
      <Helmet>
        <title>SERVAND | Where Vision Meets Code</title>
        <meta name="description" content="SERVAND is a cutting-edge software studio offering in-house projects, custom client builds, and expert consulting. Transform your digital vision into reality." />
        <meta name="keywords" content="software development, custom software, tech consulting, web development, mobile apps, digital transformation" />
        <meta property="og:title" content="SERVAND | Where Vision Meets Code" />
        <meta property="og:description" content="Cutting-edge software studio offering in-house projects, custom builds, and expert consulting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://servand.com" />
        <meta property="og:image" content="/servand-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SERVAND | Where Vision Meets Code" />
        <meta name="twitter:description" content="Cutting-edge software studio offering in-house projects, custom builds, and expert consulting." />
        <meta name="twitter:image" content="/servand-og-image.jpg" />
        <link rel="canonical" href="https://servand.com" />
      </Helmet>
      
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
