
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "10+ years industry experience",
  "Award-winning team",
  "24/7 customer support",
  "Cutting-edge technologies",
  "Transparent pricing",
  "Custom solutions"
];

const AboutSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
      
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef} 
            className="reveal order-2 md:order-1"
          >
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                  alt="About Our Company"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary/10 rounded-lg -z-10"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-primary">500+</span>
                  <span>Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="reveal order-1 md:order-2"
            style={{transitionDelay: '0.2s'}}
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We're a team of digital experts
            </h2>
            <p className="text-gray-600 mb-8">
              Founded in 2015, DigitalHQ has been at the forefront of digital innovation, 
              helping businesses of all sizes establish and grow their online presence. 
              We combine creativity with technical expertise to deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-primary" size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
