
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden"
    >
      <div className="absolute w-96 h-96 bg-primary/10 rounded-full -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-80 h-80 bg-blue-400/10 rounded-full -bottom-20 -right-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 pt-32 pb-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroRef} className="reveal">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              Innovative Digital Solutions
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Your Professional
              <span className="text-primary block">Digital Headquarters</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We help businesses transform their digital presence with cutting-edge solutions and strategies designed for growth and success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Get Started 
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="reveal" style={{transitionDelay: '0.2s'}}>
            <div className="relative">
              <div className="bg-white p-2 rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Digital Workspace" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-semibold">98% Client Satisfaction</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="font-semibold">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
        <a 
          href="#services"
          className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
