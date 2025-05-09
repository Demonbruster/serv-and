
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, description }) => {
  // This will initialize any necessary page-level effects
  useEffect(() => {
    // Ensure smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      // Clean up any side effects if needed
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal">
      <Helmet>
        <title>{title} | SERVAND</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | SERVAND`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://servand.com${window.location.pathname}`} />
        <meta property="og:image" content="/servand-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | SERVAND`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/servand-og-image.jpg" />
        <link rel="canonical" href={`https://servand.com${window.location.pathname}`} />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24">
        {children}
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PageLayout;
