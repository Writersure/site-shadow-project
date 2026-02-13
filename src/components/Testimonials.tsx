
import React from 'react';
import { Card } from "@/components/ui/card";
import SectionEyebrow from "./SectionEyebrow";
import alyzeSamImg from "@/assets/alyze-sam.png";
import svenLaueImg from "@/assets/sven-laue.png";

const testimonials = [
  {
    quote: "I've had the pleasure of working with Alex on several of my complex startups, and I am consistently impressed by his professionalism and skill. His editing and ghostwriting are so helpful, but what truly sets him apart is his collaborative approach. He listens attentively, provides thoughtful feedback, and always strives to elevate people and the work they do. Alex's empathy and communication skills made launches seamless and enjoyable. I wholeheartedly recommend him.",
    author: "Alyze Sam",
    position: "Survivor, Serial Co-Founder, Multi Award-Winning Author",
    image: alyzeSamImg
  },
  {
    quote: "Working with Alex was an excellent experience. He supported me in preparing my lecture materials and to create a consistent lecture from my notes. Communication was clear, feedback thoughtful, and delivery consistently on time.",
    author: "Sven Laue",
    position: "Consultant, Laue Consulting",
    image: svenLaueImg
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-muted">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            our content creation and digital services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-none shadow-md">
              <div className="mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg text-primary">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
