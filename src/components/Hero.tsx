
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-purple-100 via-purple-50 to-white overflow-hidden"
    >
      <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full -bottom-20 -right-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 pt-32 pb-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Premium AI-
              <span className="text-purple-800 block">Powered </span>
              <span className="text-amber-600">Content</span>
              <span className="block text-purple-800">Creation </span>
              <span className="block">& Digital Services</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Transform your digital presence with expert ghostwriting, content creation, and AI solutions tailored to elevate your brand and drive business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/writersure369/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-purple-800 hover:bg-purple-900">
                  Get Started 
                  <ArrowRight size={18} />
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="border-purple-800 text-purple-800 hover:bg-purple-100">
                  View Services
                </Button>
              </a>
            </div>
          </div>
          
          <div className="reveal bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Premium Ghostwriting</h2>
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">Featured Service</span>
            </div>
            
            <p className="text-gray-700 mb-6">
              Expert content creation that captures your authentic voice while maintaining the highest writing standards.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check size={20} className="text-orange-500" />
                <span>Blog posts & articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-orange-500" />
                <span>Ebooks & guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-orange-500" />
                <span>Website copy</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-orange-500" />
                <span>LinkedIn & personal branding</span>
              </div>
            </div>
            
            <Button className="w-full bg-purple-700 hover:bg-purple-800">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
        <a 
          href="#services"
          className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
