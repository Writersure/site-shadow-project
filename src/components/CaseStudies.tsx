
import { Link } from 'react-router-dom';
import SectionEyebrow from "./SectionEyebrow";

const caseStudies = [
  {
    id: "1",
    title: 'E-commerce Content Strategy',
    description: '45% increase in conversion rates for a fashion retailer',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: "2",
    title: 'SaaS Company Rebrand',
    description: '72% improvement in user engagement after messaging overhaul',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: "3",
    title: 'B2B Lead Generation',
    description: 'Tripled qualified leads for a professional services firm',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <SectionEyebrow>Success Stories</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            See how WriterSure has helped businesses across industries transform their content and achieve remarkable results.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="hover-card">
              <Link to={`/case-study/${study.id}`} className="block bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full hover:shadow-xl">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <span className="text-purple-600 font-medium">Read case study →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/case-studies" className="inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors">
            View All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
