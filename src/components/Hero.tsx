
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-[hsl(220,40%,95%)] to-white overflow-hidden"
    >
      <div className="container mx-auto px-6 pt-32 pb-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4">AI-Powered Content Agency</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
              Premium Content Creation & Digital Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Transform your digital presence with expert ghostwriting, content creation, and AI solutions tailored to elevate your brand and drive business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/writersure369/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Free Strategy Call
                  <ArrowRight size={18} />
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5">
                  Explore Services
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              ✓ No commitment required &nbsp;•&nbsp; ✓ Response within 24 hours
            </p>
          </div>

          <div className="reveal bg-white rounded-xl shadow-lg border border-border p-6 lg:p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-foreground">Premium Ghostwriting</h2>
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium">Featured</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Expert content creation that captures your authentic voice while maintaining the highest writing standards.
            </p>
            
            <div className="space-y-3 mb-6">
              {["LinkedIn & X content", "Blog posts & articles", "Website copy", "Ebooks & guides"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={18} className="text-primary" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#services">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                View Ghostwriting Details
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
        <a 
          href="#services"
          className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-border shadow-md rounded-full flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
