
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: <MapPin size={24} className="text-primary" />,
    title: "Office Location",
    details: "123 Business Avenue, Tech District, CA 94103"
  },
  {
    icon: <Mail size={24} className="text-primary" />,
    title: "Email Address",
    details: "contact@digitalhq.com"
  },
  {
    icon: <Phone size={24} className="text-primary" />,
    title: "Phone Number",
    details: "+1 (555) 123-4567"
  }
];

const ContactSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16" ref={titleRef}>
          <div className="reveal">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to start your project? Contact us today and our team 
              will get back to you as soon as possible.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            ref={formRef}
            className="reveal"
          >
            <Card className="shadow-lg border-none">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="Enter your message here..." rows={5} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </form>
              </div>
            </Card>
          </div>
          
          <div 
            ref={infoRef}
            className="reveal"
            style={{transitionDelay: '0.2s'}}
          >
            <div className="h-full flex flex-col">
              <div className="bg-primary text-white rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <p className="mb-6">
                  Feel free to reach out to us through any of the channels below. 
                  We're available Monday through Friday, 9am to 5pm PT.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex space-x-4 items-start">
                      <div className="bg-white/20 p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-white/80">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
