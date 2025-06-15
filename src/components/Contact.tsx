import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionEyebrow from "./SectionEyebrow";

const socialLinks = [
  {
    url: "https://x.com/writersure",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  },
  {
    url: "https://www.instagram.com/writersure/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  },
  {
    url: "https://www.threads.com/@writersure",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 7.5c-1.333-3-3.667-4.5-7-4.5-5 0-8 2.5-8 9s3.5 9 8 9c1.5 0 3.5-.5 5-2" />
      <path d="M12 7v10" />
      <path d="M15 7h-3" />
      <path d="M15 17h-3" />
    </svg>
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
    <section id="contact" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-purple-900 to-purple-800 overflow-hidden">
      {/* Top fade from white to purple, make it shorter and more transparent */}
      <div 
        className="pointer-events-none absolute top-0 left-0 w-full h-5 lg:h-7 z-10"
        style={{
          background: "linear-gradient(to bottom, #fff 0%, rgba(126,34,206,0.08) 60%, rgba(126,34,206,0.0) 100%)"
        }}
      />
      <div className="container mx-auto relative z-20">
        <div className="text-center reveal">
          <SectionEyebrow>Contact Us</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Contact Us</h2>
          <p className="text-purple-100 max-w-2xl mx-auto mb-12">
            Ready to elevate your digital presence? Reach out to discuss your project and
            discover how our services can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Contact Information */}
            <div className="bg-purple-800 text-white col-span-5 p-6 lg:p-8 rounded-lg reveal">
              <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
              <p className="mb-6">
                Have questions or ready to start your project? Reach out to us through any 
                of these channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex space-x-4 items-start">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-white/80">writersure@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 items-start">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-white/80">+91 8297297307</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 items-start">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <p className="text-white/80">+91 8297297307</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <a 
                  href="https://calendly.com/writersure369/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-white py-3 px-6 rounded-md text-center block hover:bg-amber-600 transition-colors"
                >
                  Book a Call
                </a>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-4 text-primary">Follow Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-6 lg:p-8 col-span-7 rounded-lg reveal" style={{transitionDelay: '0.2s'}}>
              <h3 className="text-xl font-semibold mb-6 text-primary">Send Us a Message</h3>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service You're Interested In</Label>
                    <select id="service" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Select a service</option>
                      <option value="content-creation">AI Content Creation</option>
                      <option value="ghostwriting">Premium Ghostwriting</option>
                      <option value="technical-writing">Technical Writing</option>
                      <option value="email-marketing">Email Marketing</option>
                      <option value="chatbot">Chatbot Development</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-purple-800 hover:bg-purple-900">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
