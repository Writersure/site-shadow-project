
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, FileText, Mail, Bot, Search, Clock } from "lucide-react";

const services = [
  {
    icon: <PenTool size={40} className="text-primary mb-4" />,
    title: "AI Content Creation",
    description: "High-quality, SEO-optimized content creation powered by advanced AI and human expertise."
  },
  {
    icon: <FileText size={40} className="text-primary mb-4" />,
    title: "Ghostwriting",
    description: "Professional ghostwriting services for books, articles, speeches, and more."
  },
  {
    icon: <Bot size={40} className="text-primary mb-4" />,
    title: "Chatbot Development",
    description: "Custom AI chatbots designed to engage your audience and provide instant support."
  },
  {
    icon: <Mail size={40} className="text-primary mb-4" />,
    title: "Email Marketing",
    description: "Compelling email campaigns that drive engagement, conversions, and customer loyalty."
  },
  {
    icon: <Search size={40} className="text-primary mb-4" />,
    title: "SEO Content",
    description: "Content that ranks well in search engines and drives organic traffic to your website."
  },
  {
    icon: <Clock size={40} className="text-primary mb-4" />,
    title: "Virtual Assistance",
    description: "Reliable virtual assistance to help you manage your tasks and boost productivity."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 md:py-24 md:px-8 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive content and digital solutions to help your business 
              establish a strong online presence and connect with your target audience.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="staggered-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="hover-card h-full border-none shadow-md">
                <CardContent className="pt-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
