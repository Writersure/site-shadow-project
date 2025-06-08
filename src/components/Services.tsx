
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PenTool, FileText, Mail, Bot, Clock, Instagram, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const services = [
  {
    icon: <PenTool size={32} className="text-purple-600" />,
    title: "AI Content Creation",
    description: "High-quality, SEO-optimized content powered by AI and human expertise.",
    category: "content",
    features: [
      "SEO-optimized blog posts and articles",
      "Product descriptions and web copy",
      "Content strategy and planning",
      "Multi-platform content adaptation",
      "Brand voice consistency"
    ],
    detailedDescription: "Our AI Content Creation service combines cutting-edge artificial intelligence with expert human oversight to deliver exceptional content that engages your audience and ranks well in search engines. We create blog posts, articles, product descriptions, and more that are indistinguishable from human-written content but produced with greater efficiency."
  },
  {
    icon: <FileText size={32} className="text-purple-600" />,
    title: "Premium Ghostwriting",
    description: "Professional ghostwriting services for books, articles, speeches, and more.",
    category: "content",
    features: [
      "Books and memoirs",
      "Thought leadership articles",
      "Executive speeches",
      "White papers and reports",
      "Personal brand development"
    ],
    detailedDescription: "Our Premium Ghostwriting service offers top-tier writing expertise for clients who need high-quality content published under their own name. Our experienced writers work closely with you to capture your voice, ideas, and expertise, creating polished, professional content including books, memoirs, articles, speeches, and thought leadership pieces."
  },
  {
    icon: <Bot size={32} className="text-purple-600" />,
    title: "Chatbot Development",
    description: "Custom AI chatbots designed to engage your audience and provide instant support.",
    category: "automation",
    features: [
      "Custom conversational AI",
      "24/7 customer support",
      "Lead generation and qualification",
      "FAQ automation",
      "Multi-platform integration"
    ],
    detailedDescription: "Our Chatbot Development service creates intelligent, conversational AI solutions that enhance customer experience on your website and other digital platforms. We develop custom chatbots that can answer FAQs, guide users through your site, collect lead information, and provide 24/7 customer support, all while maintaining a natural, engaging conversation flow."
  },
  {
    icon: <Mail size={32} className="text-purple-600" />,
    title: "Email Marketing",
    description: "Compelling email campaigns that drive engagement and conversions.",
    category: "marketing",
    features: [
      "Campaign strategy and planning",
      "Automated drip sequences",
      "A/B testing and optimization",
      "Personalization and segmentation",
      "Performance analytics"
    ],
    detailedDescription: "Our Email Marketing service delivers targeted, persuasive email campaigns that nurture leads and build customer relationships. We handle everything from strategy development to content creation, design, automation setup, A/B testing, and performance analysis, ensuring your emails stand out in crowded inboxes and drive measurable results."
  },
  {
    icon: <Instagram size={32} className="text-purple-600" />,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns to build your brand presence.",
    category: "marketing",
    features: [
      "Multi-platform strategy",
      "Content calendar creation",
      "Visual design and graphics",
      "Community management",
      "Analytics and reporting"
    ],
    detailedDescription: "Our Social Media Marketing service helps you build a strong, engaging presence across key social platforms. We develop platform-specific strategies, create compelling content calendars, design eye-catching visuals, manage community engagement, and provide detailed analytics to continuously improve your social media performance and ROI."
  },
  {
    icon: <Clock size={32} className="text-purple-600" />,
    title: "Virtual Assistance",
    description: "Reliable virtual assistance to help you manage tasks and boost productivity.",
    category: "automation",
    features: [
      "Administrative task management",
      "Email and calendar organization",
      "Customer service support",
      "Research and data entry",
      "Project coordination"
    ],
    detailedDescription: "Our Virtual Assistance service provides skilled administrative support to help you focus on your core business activities. Our virtual assistants handle email management, calendar scheduling, customer service, data entry, research, and other administrative tasks with professionalism and attention to detail, giving you back valuable time to grow your business."
  }
];

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "content", label: "Content" },
  { id: "marketing", label: "Marketing" },
  { id: "automation", label: "Automation" }
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const openServiceDetails = (service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  return (
    <section id="services" className="py-16 px-4 md:py-24 md:px-8 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="bg-purple-600/10 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Premium AI-Powered Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We provide comprehensive content and digital solutions to help your business 
              establish a strong online presence and connect with your target audience.
            </p>
          </div>
        </div>
        
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-4 bg-white shadow-md">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div 
                  key={index}
                  className="staggered-item"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Card className="hover-card h-full border-none shadow-lg bg-white transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-black mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        onClick={() => openServiceDetails(service)}
                        className="w-full bg-purple-600 hover:bg-purple-700"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-16 reveal">
          <p className="text-lg mb-6 text-gray-600">
            Ready to transform your digital presence with premium content?
          </p>
          <a href="#contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg">
            Schedule a Consultation
          </a>
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedService && (
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl font-bold">
                {selectedService.icon && React.cloneElement(selectedService.icon, { size: 32 })}
                {selectedService.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-6">
              <DialogDescription className="text-base text-gray-700 mb-6">
                {selectedService.detailedDescription}
              </DialogDescription>
              
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-4 text-lg">Complete Feature Set:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <a href="#contact" onClick={() => setIsDialogOpen(false)}>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
                  Get Started With This Service
                </Button>
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Services;
