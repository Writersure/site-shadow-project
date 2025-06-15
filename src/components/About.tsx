
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "AI-powered content creation",
  "SEO optimization",
  "Technical writing expertise",
  "Professional ghostwriting",
  "Custom chatbot development",
  "Email marketing campaigns"
];

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:py-24 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal order-2 md:order-1">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="About WriterSure"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-purple-100 rounded-lg -z-10"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-purple-600">1000+</span>
                  <span>Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="reveal order-1 md:order-2"
            style={{transitionDelay: '0.2s'}}
          >
            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              We're AI content specialists
            </h2>
            <p className="text-gray-600 mb-8">
              WriterSure combines cutting-edge AI technology with human expertise to deliver 
              exceptional content that resonates with your audience and drives results. 
              We're passionate about helping businesses establish a strong digital presence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-purple-600" size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Learn More About Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
