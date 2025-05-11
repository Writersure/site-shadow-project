
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initAnimateOnScroll } from "@/utils/animateOnScroll";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    // Initialize scroll animations
    const cleanupAnimation = initAnimateOnScroll();
    
    // Set page title
    document.title = `Case Study | WriterSure`;
    
    return () => {
      cleanupAnimation();
    };
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 reveal">Case Study: {id}</h1>
          
          <div className="mb-8 reveal">
            <div className="h-64 md:h-96 bg-gray-200 rounded-lg"></div>
          </div>
          
          <div className="prose max-w-none">
            <div className="mb-8 reveal">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Overview</h2>
              <p className="text-lg text-gray-600">
                This is a detailed case study about how WriterSure helped a client achieve their business goals through our premium services.
              </p>
            </div>
            
            <div className="mb-8 reveal">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600">
                The client faced significant challenges in their digital content strategy, including low engagement, poor conversion rates, and inconsistent messaging.
              </p>
            </div>
            
            <div className="mb-8 reveal">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Approach</h2>
              <p className="text-lg text-gray-600">
                We developed a comprehensive strategy involving content audits, audience research, and a complete content overhaul focused on value-driven messaging.
              </p>
            </div>
            
            <div className="mb-8 reveal">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Results</h2>
              <p className="text-lg text-gray-600">
                Our approach led to a 150% increase in organic traffic, 45% improvement in conversion rates, and significant growth in customer engagement metrics.
              </p>
            </div>
          </div>
          
          <div className="mt-12 reveal">
            <a href="/case-studies" className="text-primary font-medium hover:underline">← Back to All Case Studies</a>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudyDetail;
