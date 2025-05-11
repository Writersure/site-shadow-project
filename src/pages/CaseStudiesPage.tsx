
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initAnimateOnScroll } from "@/utils/animateOnScroll";

const CaseStudiesPage = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanupAnimation = initAnimateOnScroll();
    
    // Set page title
    document.title = 'Case Studies | WriterSure';
    
    return () => {
      cleanupAnimation();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 reveal">Case Studies</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl reveal">
            Explore our detailed case studies to see how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for case study grid items */}
            <div className="case-study-card hover-card reveal">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">E-commerce Revenue Growth</h3>
                  <p className="text-gray-600 mb-4">How we helped an online retailer increase conversion rates by 45% with targeted content.</p>
                  <a href="/case-study/1" className="text-primary font-medium hover:underline">Read Case Study</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudiesPage;
