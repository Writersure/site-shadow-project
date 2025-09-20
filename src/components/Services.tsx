
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionEyebrow from "./SectionEyebrow";

const services = [
  {
    icon: "🪄",
    title: "AI Content Creation",
    desc: "Blog posts, articles, social media & more powered by advanced AI + human expertise."
  },
  {
    icon: "✍️",
    title: "Premium Ghostwriting",
    desc: "Books, eBooks, client stories, case studies with a human touch."
  },
  {
    icon: "🤵",
    title: "Virtual Assistant",
    desc: "Professional administrative support, scheduling, research, and task management services."
  },
  {
    icon: "🤖",
    title: "Custom Chatbots",
    desc: "Conversational AI solutions for client interaction, lead gen, support, and automation."
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Strategic content creation, posting schedules, and engagement campaigns across platforms."
  },
  {
    icon: "🛠️",
    title: "Technical Writing",
    desc: "Documentation, user guides, and detailed process manuals."
  },
  {
    icon: "✏️",
    title: "Content Writing",
    desc: "Professional copywriting for websites, marketing materials, and brand communications."
  },
  {
    icon: "📄",
    title: "White Papers",
    desc: "In-depth research documents, industry reports, and authoritative thought leadership content."
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white hover-card rounded-xl shadow-md transition-all duration-300 overflow-hidden h-full"
            >
              <div className="px-6 py-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-purple-100" asChild>
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
