
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Content Strategy',
    description: '45% increase in conversion rates for a fashion retailer',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  },
  {
    id: 2,
    title: 'SaaS Company Rebrand',
    description: '72% improvement in user engagement after messaging overhaul',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
  },
  {
    id: 3,
    title: 'B2B Lead Generation',
    description: 'Tripled qualified leads for a professional services firm',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 px-4 md:py-24 md:px-8 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across industries transform their content and achieve remarkable results.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`staggered-item hover-card`} style={{ transitionDelay: `${index * 150}ms` }}>
              <Link to={`/case-study/${study.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <span className="text-primary font-medium">Read case study →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link to="/case-studies" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
