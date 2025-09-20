
import React from "react";
import { CheckCircle, Bot, Users, FileText, MessageSquare, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionEyebrow from "./SectionEyebrow";

const services = [
  {
    icon: PenTool,
    title: "AI-Powered Content Creation",
    desc: "Blog posts, articles, website copy, and marketing materials powered by AI with human expertise."
  },
  {
    icon: FileText,
    title: "Professional Writing Services",
    desc: "Ghostwriting, technical documentation, white papers, and authoritative thought leadership content."
  },
  {
    icon: Users,
    title: "Virtual Assistant Services",
    desc: "Administrative support, research, scheduling, and comprehensive business task management."
  },
  {
    icon: Bot,
    title: "Custom AI Solutions",
    desc: "Conversational chatbots, automation tools, and AI-powered business solutions."
  },
  {
    icon: MessageSquare,
    title: "Digital Marketing",
    desc: "Social media marketing, content strategy, and multi-platform engagement campaigns."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Unlock a suite of premium content & digital solutions tailored for your business.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="bg-white hover-card rounded-xl shadow-md transition-all duration-300 overflow-hidden h-full"
              >
                <div className="px-6 py-8">
                  <div className="mb-4 text-primary">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-purple-100" asChild>
                    <a href="#contact">Get Started</a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
