
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: <Mail size={24} className="text-primary" />,
    title: "Email Us",
    details: "writersure@outlook.com"
  },
  {
    icon: <Phone size={24} className="text-primary" />,
    title: "Call Us",
    details: "+91 8297297307"
  },
  {
    icon: <MapPin size={24} className="text-primary" />,
    title: "Location",
    details: "Remote Team Worldwide"
  }
];

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-16 px-4 md:py-24 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your content and digital presence? Contact us today to discuss 
            your project needs and how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="reveal">
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
                    <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </form>
              </div>
            </Card>
          </div>
          
          <div className="reveal" style={{transitionDelay: '0.2s'}}>
            <div className="bg-primary text-white rounded-lg p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <p className="mb-6">
                Have questions or ready to start your project? Reach out to us through any 
                of the channels below and we'll get back to you promptly.
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
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-medium mb-2">Business Hours</h4>
                <ul className="space-y-1 text-white/80">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM IST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday - Sunday</span>
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

export default Contact;
