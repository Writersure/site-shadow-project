import React from "react";
import { Bot, PenTool, Globe, Facebook, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionEyebrow from "./SectionEyebrow";

const featuredServices = [
  {
    icon: Bot,
    title: "Custom AI Solutions",
    desc: "Cutting-edge AI automation, chatbots, and machine learning solutions tailored to streamline your business operations.",
    price: "From $2,000+",
    highlight: "Highest Demand"
  },
  {
    icon: PenTool,
    title: "Professional Writing",
    desc: "Expert ghostwriting for LinkedIn, blogs, ebooks, and website copy that captures your authentic voice.",
    price: "From $500+",
    highlight: "Most Popular"
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom website design, development, maintenance, and updates to keep your online presence running smoothly.",
    price: "From $1,500+",
    highlight: "Best Value"
  },
  {
    icon: Facebook,
    title: "Facebook Ads",
    desc: "Strategic Facebook advertising campaigns, audience targeting, and performance optimization for maximum ROI.",
    price: "From $800+/mo",
    highlight: "High ROI"
  }
];

const FeaturedServices = () => {
  return (
    <section id="featured-services" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <SectionEyebrow>Featured Services</SectionEyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Premium Offerings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            High-impact services designed to deliver maximum value and transform your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              className="reveal group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                <Star size={12} className="fill-current" />
                {service.highlight}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
              
              {/* Price */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-purple-100">
                <span className="text-purple-700 font-semibold text-lg">{service.price}</span>
                <a href="https://calendly.com/writersure369/30min" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2 bg-purple-700 hover:bg-purple-800">
                    Get Started
                    <ArrowRight size={16} />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#services">
            <Button variant="outline" size="lg" className="border-purple-700 text-purple-700 hover:bg-purple-100">
              View All Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
