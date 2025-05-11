
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, FileText, Mail, Bot, Search, Clock, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const services = [
  {
    icon: <PenTool size={40} className="text-primary mb-4" />,
    title: "AI Content Creation",
    description: "High-quality, SEO-optimized content creation powered by advanced AI and human expertise.",
    detailedDescription: "Our AI Content Creation service combines cutting-edge artificial intelligence with expert human oversight to deliver exceptional content that engages your audience and ranks well in search engines. We create blog posts, articles, product descriptions, and more that are indistinguishable from human-written content but produced with greater efficiency."
  },
  {
    icon: <FileText size={40} className="text-primary mb-4" />,
    title: "Premium Ghostwriting",
    description: "Professional ghostwriting services for books, articles, speeches, and more.",
    detailedDescription: "Our Premium Ghostwriting service offers top-tier writing expertise for clients who need high-quality content published under their own name. Our experienced writers work closely with you to capture your voice, ideas, and expertise, creating polished, professional content including books, memoirs, articles, speeches, and thought leadership pieces."
  },
  {
    icon: <Bot size={40} className="text-primary mb-4" />,
    title: "Chatbot Development",
    description: "Custom AI chatbots designed to engage your audience and provide instant support.",
    detailedDescription: "Our Chatbot Development service creates intelligent, conversational AI solutions that enhance customer experience on your website and other digital platforms. We develop custom chatbots that can answer FAQs, guide users through your site, collect lead information, and provide 24/7 customer support, all while maintaining a natural, engaging conversation flow."
  },
  {
    icon: <Mail size={40} className="text-primary mb-4" />,
    title: "Email Marketing",
    description: "Compelling email campaigns that drive engagement, conversions, and customer loyalty.",
    detailedDescription: "Our Email Marketing service delivers targeted, persuasive email campaigns that nurture leads and build customer relationships. We handle everything from strategy development to content creation, design, automation setup, A/B testing, and performance analysis, ensuring your emails stand out in crowded inboxes and drive measurable results."
  },
  {
    icon: <Search size={40} className="text-primary mb-4" />,
    title: "SEO Content",
    description: "Content that ranks well in search engines and drives organic traffic to your website.",
    detailedDescription: "Our SEO Content service creates strategic, keyword-optimized content that improves your search engine rankings and drives quality organic traffic. We research relevant keywords, analyze competition, and create engaging, valuable content that satisfies both search algorithms and human readers, helping you establish authority in your industry and capture more leads."
  },
  {
    icon: <Instagram size={40} className="text-primary mb-4" />,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns to build your brand presence and engage your audience.",
    detailedDescription: "Our Social Media Marketing service helps you build a strong, engaging presence across key social platforms. We develop platform-specific strategies, create compelling content calendars, design eye-catching visuals, manage community engagement, and provide detailed analytics to continuously improve your social media performance and ROI."
  },
  {
    icon: <Clock size={40} className="text-primary mb-4" />,
    title: "Virtual Assistance",
    description: "Reliable virtual assistance to help you manage your tasks and boost productivity.",
    detailedDescription: "Our Virtual Assistance service provides skilled administrative support to help you focus on your core business activities. Our virtual assistants handle email management, calendar scheduling, customer service, data entry, research, and other administrative tasks with professionalism and attention to detail, giving you back valuable time to grow your business."
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openServiceDetails = (service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

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
              onClick={() => openServiceDetails(service)}
            >
              <Card className="hover-card h-full border-none shadow-md cursor-pointer transition-all hover:scale-105">
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

      {/* Service Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedService && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl font-semibold">
                {selectedService.icon && React.cloneElement(selectedService.icon, { size: 24 })}
                {selectedService.title}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-base text-gray-700">
              {selectedService.detailedDescription}
            </DialogDescription>
            <div className="mt-4">
              <a href="#contact" onClick={() => setIsDialogOpen(false)}>
                <Button className="w-full">Get Started With This Service</Button>
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Services;
