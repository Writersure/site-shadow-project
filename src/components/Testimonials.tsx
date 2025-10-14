
import React from 'react';
import { Card } from "@/components/ui/card";
import SectionEyebrow from "./SectionEyebrow";

const testimonials = [
  {
    quote: "I've had the pleasure of working with Alex on several of my complex startups, and I am consistently impressed by his professionalism and skill. His editing and ghostwriting are so helpful, but what truly sets him apart is his collaborative approach. He listens attentively, provides thoughtful feedback, and always strives to elevate people and the work they do. Alex's empathy and communication skills made launches seamless and enjoyable. I wholeheartedly recommend him.",
    author: "Anonymous Client",
    position: "Serial Co-Founder, Multi Award-Winning Author",
    image: ""
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What Our Client Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Don't just take our word for it. Here's what our satisfied client has to say about 
            our content creation and digital services.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <Card className="p-8 border-none shadow-md">
              <div className="mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonials[0].quote}"</p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-2xl text-primary">👤</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary">{testimonials[0].author}</h4>
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
