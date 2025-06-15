import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initAnimateOnScroll } from "@/utils/animateOnScroll";
import { ArrowLeftIcon, Calendar, Building, Tag, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Case study data with enhanced project details
const caseStudiesData = [
  {
    id: "1",
    title: "E-commerce Content Strategy",
    client: "FashionFinds Online Retailer",
    category: "E-commerce",
    industry: "Fashion & Retail",
    duration: "3 months",
    services: ["Content Strategy", "SEO Optimization", "Product Descriptions", "Blog Content"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    challenge: "FashionFinds was struggling with low conversion rates and high cart abandonment. Their product descriptions were generic, and their blog content wasn't driving organic traffic or engagement. The company was losing potential customers due to poor content that failed to communicate value propositions effectively.",
    solution: "We developed a comprehensive content strategy that included rewriting all product descriptions with SEO-optimized, benefit-focused copy. We created a content calendar with trend articles, styling guides, and educational content about fabrics and sustainability. Our approach focused on storytelling and emotional connection with the target audience.",
    results: "Within 3 months, the client saw a 45% increase in conversion rates, 62% improvement in time-on-site, and a 38% decrease in cart abandonment. Organic traffic increased by 78% within 6 months, and the average order value increased by 23%.",
    testimonial: "Alex completely transformed our online presence. The quality of content and strategic approach to our product descriptions and blog has made a measurable difference to our bottom line. Our customers now spend more time on our site and are much more likely to complete purchases.",
    clientName: "Sarah Chen",
    clientPosition: "Marketing Director"
  },
  {
    id: "2", 
    title: "SaaS Company Rebrand",
    client: "CloudSync Software Solutions",
    category: "SaaS",
    industry: "Technology",
    duration: "4 months",
    services: ["Brand Messaging", "Website Copy", "Content Strategy", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    challenge: "CloudSync had recently undergone a pivot in their business model, but their messaging remained technical and feature-focused rather than highlighting customer benefits. User engagement was low, demo requests were declining, and the sales team struggled to communicate value to prospects.",
    solution: "We conducted customer interviews to identify key pain points and value propositions. We then completely rewrote their website copy, simplified their messaging to focus on benefits, and developed a new content strategy for their blog and email campaigns. The new messaging emphasized outcomes rather than features.",
    results: "The client experienced a 72% improvement in user engagement metrics, 124% increase in demo requests, and significant improvements in email open rates (58% higher) and click-through rates (43% higher). Sales cycle length decreased by 35%.",
    testimonial: "Alex took the time to truly understand our business and customers. The messaging he created perfectly captures our value proposition in a way that resonates with our target audience. Our sales team loves the new materials.",
    clientName: "Michael Torres",
    clientPosition: "CEO"
  },
  {
    id: "3",
    title: "B2B Lead Generation", 
    client: "GlobalConsult Professional Services",
    category: "B2B",
    industry: "Professional Services",
    duration: "6 months",
    services: ["Lead Generation", "Content Marketing", "Email Automation", "Case Studies"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    challenge: "GlobalConsult was struggling to generate qualified leads through their content marketing efforts. Their existing content was not aligned with their buyer's journey, and they lacked a cohesive strategy for nurturing leads. The sales team was spending too much time on unqualified prospects.",
    solution: "We developed a comprehensive content marketing funnel with targeted content for each stage of the buyer's journey. This included thought leadership articles, industry reports, case studies, and nurturing email sequences. We also implemented a lead scoring system to identify high-value prospects.",
    results: "Within 4 months, the client saw a 230% increase in qualified leads, 45% higher engagement with content, and a 25% shorter sales cycle. Their average deal size also increased by 18% as better-qualified leads entered their pipeline.",
    testimonial: "Alex's strategic approach to content has transformed our lead generation process. We're now attracting more qualified prospects and closing deals more efficiently than ever before. The ROI has been exceptional.",
    clientName: "Jennifer Walsh",
    clientPosition: "VP of Marketing"
  }
];

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    console.log('Case Study ID from URL:', id);
    console.log('Available case studies:', caseStudiesData.map(s => ({ id: s.id, title: s.title })));
    
    // Find the case study by ID
    const study = caseStudiesData.find(study => study.id === id);
    console.log('Found case study:', study);
    
    if (study) {
      setCaseStudy(study);
      document.title = `${study.title} | Alex Content Case Study`;
    } else {
      console.error('Case study not found for ID:', id);
      document.title = 'Case Study Not Found | Alex Content';
    }
    
    setLoading(false);
    
    // Initialize scroll animations
    const cleanupAnimation = initAnimateOnScroll();
    
    return () => {
      cleanupAnimation();
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-16 px-4 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Loading...</h1>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-16 px-4 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Case Study Not Found</h1>
            <p className="text-gray-600 mb-4">Sorry, we couldn't find the case study you're looking for.</p>
            <p className="text-gray-500 mb-8">Case Study ID: {id}</p>
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
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 reveal">
            <Link to="/case-studies" className="text-purple-600 font-medium hover:underline inline-flex items-center mb-6">
              <ArrowLeftIcon size={16} className="mr-2" /> Back to All Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <section
              className="lg:col-span-3 bg-white border-4 border-dashed border-red-500 p-8 rounded-xl"
              // className="lg:col-span-3"
            >
              <div style={{marginBottom:'20px', color:'red', fontWeight:'bold'}}>DEBUG: Main case study section should show</div>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">{caseStudy.title}</h1>
                <p className="text-xl text-purple-600 font-medium">Client: {caseStudy.client}</p>
              </div>
              
              <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-64 md:h-96 object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', caseStudy.image);
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
              </div>
              
              <div className="space-y-12">
                <div>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">The Challenge</h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Our Solution</h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Results Achieved</h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {caseStudy.results}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="border-none shadow-lg bg-gradient-to-br from-purple-100 to-purple-50 border-l-4 border-purple-600">
                    <CardContent className="p-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Client Feedback</h2>
                      <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                        "{caseStudy.testimonial}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <p className="font-semibold text-black">{caseStudy.clientName}</p>
                          <p className="text-purple-600">{caseStudy.clientPosition}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
            
            {/* Project Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <Card className="border-none shadow-lg reveal">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 text-black">Project Details</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Tag size={18} className="text-purple-600" />
                          <span className="font-semibold text-black">Category</span>
                        </div>
                        <p className="text-gray-700 ml-6">{caseStudy.category}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Building size={18} className="text-purple-600" />
                          <span className="font-semibold text-black">Industry</span>
                        </div>
                        <p className="text-gray-700 ml-6">{caseStudy.industry}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={18} className="text-purple-600" />
                          <span className="font-semibold text-black">Duration</span>
                        </div>
                        <p className="text-gray-700 ml-6">{caseStudy.duration}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Users size={18} className="text-purple-600" />
                          <span className="font-semibold text-black">Services Provided</span>
                        </div>
                        <div className="ml-6 space-y-2">
                          {caseStudy.services.map((service, index) => (
                            <span 
                              key={index}
                              className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <a 
                        href="/#contact" 
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors inline-block text-center"
                      >
                        Discuss Your Project
                      </a>
                    </div>
                  </CardContent>
                </Card>
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

export default CaseStudyDetail;
