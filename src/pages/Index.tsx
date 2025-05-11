
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'DigitalHQ - Your Modern Business Hub';
    
    // Add scroll reveal functionality
    const revealElements = document.querySelectorAll('.reveal, .staggered-item');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    revealElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="font-['Inter',sans-serif] antialiased">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
