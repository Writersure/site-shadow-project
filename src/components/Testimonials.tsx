
import React from 'react';
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "WriterSure has transformed our content marketing strategy. The quality of the AI-generated content is outstanding, and their team's expertise has helped us increase our organic traffic by 65%.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "We've been working with WriterSure for our technical documentation needs, and they consistently deliver exceptional quality. Their combination of AI technology and human expertise is unmatched.",
    author: "Michael Chen",
    position: "CTO, Innovate Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    quote: "The ghostwriting services provided by WriterSure for my business book were incredible. They captured my voice perfectly while making the content engaging and professional. Highly recommended!",
    author: "Jessica Martinez",
    position: "CEO, Growth Strategies",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 md:py-24 md:px-8 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            our content creation and digital services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="staggered-item"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <Card className="p-6 h-full border-none shadow-md">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
