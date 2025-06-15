import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, LineChart, MessageSquare, Settings, Zap } from "lucide-react";

const services = [
  {
    icon: <Layout size={40} className="text-primary mb-4" />,
    title: "Web Design",
    description: "Creating beautiful, responsive websites that engage visitors and drive conversions."
  },
  {
    icon: <Code size={40} className="text-primary mb-4" />,
    title: "Web Development",
    description: "Building robust web applications with modern technologies and best practices."
  },
  {
    icon: <LineChart size={40} className="text-primary mb-4" />,
    title: "Analytics & SEO",
    description: "Improving visibility and understanding user behavior to optimize performance."
  },
  {
    icon: <MessageSquare size={40} className="text-primary mb-4" />,
    title: "Content Strategy",
    description: "Developing engaging content that resonates with your target audience."
  },
  {
    icon: <Zap size={40} className="text-primary mb-4" />,
    title: "Digital Marketing",
    description: "Driving growth through targeted digital marketing campaigns and strategies."
  },
  {
    icon: <Settings size={40} className="text-primary mb-4" />,
    title: "Tech Consulting",
    description: "Expert guidance on technology decisions to support your business goals."
  }
];

const Services = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }

      serviceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-primary">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the online space, 
            from web development to digital marketing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => serviceRefs.current[index] = el}
              className="staggered-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="hover-card h-full border-none shadow-md bg-white">
                <CardContent className="pt-6">
                  {service.icon}
                  <h3 className="text-xl font-playfair font-bold text-primary mb-2">{service.title}</h3>
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
