
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initAnimateOnScroll } from "@/utils/animateOnScroll";

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Content Strategy',
    description: '45% increase in conversion rates for a fashion retailer',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce'
  },
  {
    id: 2,
    title: 'SaaS Company Rebrand',
    description: '72% improvement in user engagement after messaging overhaul',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    category: 'SaaS'
  },
  {
    id: 3,
    title: 'B2B Lead Generation',
    description: 'Tripled qualified leads for a professional services firm',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    category: 'B2B'
  },
  {
    id: 4,
    title: 'Technical Documentation Overhaul',
    description: '64% decrease in support tickets after documentation redesign',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    category: 'Technical Writing'
  },
  {
    id: 5,
    title: 'Healthcare Content Strategy',
    description: '89% increase in patient engagement with educational content',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare'
  },
  {
    id: 6,
    title: 'Email Marketing Campaign',
    description: '230% ROI on automated email nurture sequence',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    category: 'Email Marketing'
  },
];

const CaseStudiesPage = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanupAnimation = initAnimateOnScroll();
    
    // Set page title
    document.title = 'Case Studies | Alex Content';
    
    return () => {
      cleanupAnimation();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Our Success Stories</h1>
            <p className="text-lg text-gray-600 mb-12">
              Explore our detailed case studies to see how we've helped businesses transform their digital presence and achieve remarkable results through strategic content and marketing solutions.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="case-study-card hover-card reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <Link to={`/case-study/${study.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-3">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-black">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <span className="text-purple-600 font-medium hover:underline">Read Case Study →</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 reveal">
            <p className="text-lg mb-6 text-gray-600">
              Want to see similar results for your business?
            </p>
            <a href="/#contact" className="inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors">
              Contact Us Today
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudiesPage;
