
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initAnimateOnScroll } from "@/utils/animateOnScroll";
import { ArrowLeftIcon } from 'lucide-react';

// Case study data
const caseStudiesData = [
  {
    id: "1",
    title: "E-commerce Content Strategy",
    client: "FashionFinds Online Retailer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    challenge: "FashionFinds was struggling with low conversion rates and high cart abandonment. Their product descriptions were generic, and their blog content wasn't driving organic traffic or engagement.",
    approach: "We developed a comprehensive content strategy that included rewriting all product descriptions with SEO-optimized, benefit-focused copy. We created a content calendar with trend articles, styling guides, and educational content about fabrics and sustainability.",
    results: "Within 3 months, the client saw a 45% increase in conversion rates, 62% improvement in time-on-site, and a 38% decrease in cart abandonment. Organic traffic increased by 78% within 6 months.",
    testimonial: "Alex completely transformed our online presence. The quality of content and strategic approach to our product descriptions and blog has made a measurable difference to our bottom line."
  },
  {
    id: "2", 
    title: "SaaS Company Rebrand",
    client: "CloudSync Software Solutions",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    challenge: "CloudSync had recently undergone a pivot in their business model, but their messaging remained technical and feature-focused rather than highlighting customer benefits. User engagement was low and demo requests were declining.",
    approach: "We conducted customer interviews to identify key pain points and value propositions. We then completely rewrote their website copy, simplified their messaging to focus on benefits, and developed a new content strategy for their blog and email campaigns.",
    results: "The client experienced a 72% improvement in user engagement metrics, 124% increase in demo requests, and significant improvements in email open rates (58% higher) and click-through rates (43% higher).",
    testimonial: "Alex took the time to truly understand our business and customers. The messaging he created perfectly captures our value proposition in a way that resonates with our target audience."
  },
  {
    id: "3",
    title: "B2B Lead Generation", 
    client: "GlobalConsult Professional Services",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    challenge: "GlobalConsult was struggling to generate qualified leads through their content marketing efforts. Their existing content was not aligned with their buyer's journey, and they lacked a cohesive strategy for nurturing leads.",
    approach: "We developed a content marketing funnel with targeted content for each stage of the buyer's journey. This included thought leadership articles, industry reports, case studies, and nurturing email sequences. We also implemented a lead scoring system to identify high-value prospects.",
    results: "Within 4 months, the client saw a 230% increase in qualified leads, 45% higher engagement with content, and a 25% shorter sales cycle. Their average deal size also increased by 18% as better-qualified leads entered their pipeline.",
    testimonial: "Alex's strategic approach to content has transformed our lead generation process. We're now attracting more qualified prospects and closing deals more efficiently than ever before."
  }
];

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  
  useEffect(() => {
    // Find the case study by ID
    const study = caseStudiesData.find(study => study.id === id);
    
    if (study) {
      setCaseStudy(study);
    }
    
    // Initialize scroll animations
    const cleanupAnimation = initAnimateOnScroll();
    
    // Set page title
    document.title = study ? `${study.title} | Alex Content Case Study` : 'Case Study | Alex Content';
    
    return () => {
      cleanupAnimation();
    };
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-16 px-4 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Case Study Not Found</h1>
            <p className="text-gray-600">Sorry, we couldn't find the case study you're looking for.</p>
            <Link to="/case-studies" className="text-purple-600 font-medium hover:underline mt-4 inline-flex items-center">
              <ArrowLeftIcon size={16} className="mr-2" /> Back to All Case Studies
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 reveal">
            <Link to="/case-studies" className="text-purple-600 font-medium hover:underline inline-flex items-center mb-6">
              <ArrowLeftIcon size={16} className="mr-2" /> Back to All Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black reveal">{caseStudy.title}</h1>
            <p className="text-xl font-medium mb-8 reveal text-purple-600">Client: {caseStudy.client}</p>
          </div>
          
          <div className="mb-12 reveal rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="prose max-w-none space-y-8">
            <div className="reveal bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div className="reveal bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>
            
            <div className="reveal bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">Results</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.results}
              </p>
            </div>
            
            <div className="reveal bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow-md border-l-4 border-purple-600">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">Client Testimonial</h2>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "{caseStudy.testimonial}"
              </blockquote>
            </div>
          </div>
          
          <div className="mt-12 reveal text-center">
            <a href="/#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors">
              Start Your Success Story
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudyDetail;
