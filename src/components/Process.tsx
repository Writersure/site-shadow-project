
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Strategy & Planning",
    description: "We start by understanding your goals, target audience, and content needs to develop a tailored strategy."
  },
  {
    number: "02",
    title: "Content Creation",
    description: "Our team combines AI tools with human expertise to create high-quality, engaging content for your audience."
  },
  {
    number: "03",
    title: "Review & Refinement",
    description: "We review and refine the content to ensure it aligns with your brand voice and meets your objectives."
  },
  {
    number: "04",
    title: "Delivery & Implementation",
    description: "After final approval, we deliver the content and provide guidance for implementation and promotion."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-16 px-4 md:py-24 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven process ensures we deliver high-quality content and digital solutions 
            that meet your specific needs and help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="staggered-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gray-50 p-8 rounded-lg h-full border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="text-4xl font-bold text-purple-600/30 mb-6">{step.number}</div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="text-gray-600 mb-6">
            Ready to transform your digital presence with premium content?
          </p>
          <a href="#contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
