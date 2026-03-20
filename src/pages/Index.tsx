import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedServices from "@/components/FeaturedServices";
import Services from "@/components/Services";
import About from "@/components/About";

import Team from "@/components/Team";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import { initAnimateOnScroll } from "@/utils/animateOnScroll";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanupAnimation = initAnimateOnScroll();
    
    return () => {
      cleanupAnimation();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <div className="space-y-16 lg:space-y-24">
          <Hero />
          <TrustBar />
          <FeaturedServices />
          <Services />
          <About />
          
          <HomeAdsPlacement />
          <Process />
          <Team />
          <Testimonials />
          <FAQ />
          <Contact />
          <Newsletter />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
