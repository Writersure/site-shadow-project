import React from "react";
import { Bot, PenTool, Globe, Facebook, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionEyebrow from "./SectionEyebrow";

const featuredServices = [
  { icon: Bot, title: "Custom AI Solutions", desc: "Cutting-edge AI automation, chatbots, and machine learning solutions tailored to streamline your business operations.", price: "From $2,000+", highlight: "Highest Demand" },
  { icon: PenTool, title: "Professional Writing", desc: "Expert ghostwriting for LinkedIn, blogs, ebooks, and website copy that captures your authentic voice.", price: "From $500+", highlight: "Most Popular" },
  { icon: Globe, title: "Website Development", desc: "Custom website design, development, maintenance, and updates to keep your online presence running smoothly.", price: "From $1,500+", highlight: "Best Value" },
  { icon: Facebook, title: "Facebook Ads", desc: "Strategic Facebook advertising campaigns, audience targeting, and performance optimization for maximum ROI.", price: "From $800+/mo", highlight: "High ROI" }
];

const FeaturedServices = () => {
  return (
    <section id="featured-services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <SectionEyebrow>Featured Services</SectionEyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Premium Offerings</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            High-impact services designed to deliver maximum value and transform your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredServices.map((service, index) => (
            <div key={index} className="reveal group relative bg-white rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                <Star size={12} className="fill-current" />
                {service.highlight}
              </div>
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <span className="text-primary font-semibold text-lg">{service.price}</span>
                <a href="https://calendly.com/writersure369/30min" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started <ArrowRight size={16} />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#services">
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5">
              View All Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
