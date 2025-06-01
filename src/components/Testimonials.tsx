
import React from 'react';
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I've had the pleasure of working with Alex on several of my complex startups, and I am consistently impressed by his professionalism and skill. His editing and ghostwriting are so helpful, but what truly sets him apart is his collaborative approach. He listens attentively, provides thoughtful feedback, and always strives to elevate people and the work they do. Alex's empathy and communication skills made launches seamless and enjoyable. I wholeheartedly recommend him.",
    author: "Alyze Sam",
    position: "Survivor, Serial Co-Founder, Multi Award-Winning Author, Serving the Blockchain Community",
    image: "/lovable-uploads/903bb97c-5fd0-443f-b00b-b1bf7c84ec0f.png"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 md:py-24 md:px-8 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What Our Client Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied client has to say about 
            our content creation and digital services.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <Card className="p-6 border-none shadow-md">
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">"{testimonials[0].quote}"</p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src={testimonials[0].image} alt={testimonials[0].author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-black">{testimonials[0].author}</h4>
                  <p className="text-sm text-gray-500">{testimonials[0].position}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
