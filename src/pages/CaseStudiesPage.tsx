
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initAnimateOnScroll } from "@/utils/animateOnScroll";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Building } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Content Strategy',
    description: '45% increase in conversion rates for a fashion retailer',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce',
    industry: 'Fashion & Retail',
    duration: '3 months',
    results: '45% increase in conversion rates'
  },
  {
    id: 2,
    title: 'SaaS Company Rebrand',
    description: '72% improvement in user engagement after messaging overhaul',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    category: 'SaaS',
    industry: 'Technology',
    duration: '4 months',
    results: '72% improvement in user engagement'
  },
  {
    id: 3,
    title: 'B2B Lead Generation',
    description: 'Tripled qualified leads for a professional services firm',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    category: 'B2B',
    industry: 'Professional Services',
    duration: '6 months',
    results: '230% increase in qualified leads'
  },
  {
    id: 4,
    title: 'Technical Documentation Overhaul',
    description: '64% decrease in support tickets after documentation redesign',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    category: 'Technical Writing',
    industry: 'Software',
    duration: '2 months',
    results: '64% decrease in support tickets'
  },
  {
    id: 5,
    title: 'Healthcare Content Strategy',
    description: '89% increase in patient engagement with educational content',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare',
    industry: 'Healthcare',
    duration: '5 months',
    results: '89% increase in patient engagement'
  },
  {
    id: 6,
    title: 'Email Marketing Campaign',
    description: '230% ROI on automated email nurture sequence',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    category: 'Email Marketing',
    industry: 'E-commerce',
    duration: '3 months',
    results: '230% ROI achieved'
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="bg-purple-600/10 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Case Studies</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our detailed case studies to see how we've helped businesses transform their digital presence and achieve remarkable results through strategic content and marketing solutions.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="case-study-card" style={{ transitionDelay: `${index * 100}ms` }}>
                <Link to={`/case-study/${study.id}`}>
                  <Card className="hover-card border-none shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Building size={14} />
                          <span>{study.industry}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{study.duration}</span>
                        </div>
                      </div>
                      
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-3">
                        {study.category}
                      </span>
                      
                      <h3 className="text-xl font-bold mb-3 text-black leading-tight">{study.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{study.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-purple-600">Key Result:</p>
                        <p className="text-sm text-gray-700">{study.results}</p>
                      </div>
                      
                      <span className="text-purple-600 font-medium hover:underline">
                        Read Full Case Study →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl mb-8 text-gray-600">
              Ready to see similar results for your business?
            </p>
            <Link 
              to="/#contact"
              className="inline-block px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors text-lg"
            >
              Start Your Success Story
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudiesPage;
