import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionEyebrow from "./SectionEyebrow";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters").regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional().or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  { url: "https://x.com/writersure", label: "Follow WriterSure on X (Twitter)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg> },
  { url: "https://www.instagram.com/writersure/", label: "Follow WriterSure on Instagram", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> },
  { url: "https://www.threads.com/@writersure", label: "Follow WriterSure on Threads", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 7.5c-1.333-3-3.667-4.5-7-4.5-5 0-8 2.5-8 9s3.5 9 8 9c1.5 0 3.5-.5 5-2" /><path d="M12 7v10" /><path d="M15 7h-3" /><path d="M15 17h-3" /></svg> }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", company: "", service: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast({ title: "Validation Error", description: "Please check the form for errors.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you as soon as possible." });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-primary">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Get In Touch</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-12">
            Ready to elevate your digital presence? Reach out to discuss your project and
            discover how our services can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Contact Information */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground col-span-5 p-6 lg:p-8 rounded-xl reveal border border-primary-foreground/10">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <p className="mb-6 text-primary-foreground/70">Have questions or ready to start your project? Reach out through any of these channels.</p>
              
              <div className="space-y-6">
                <a href="mailto:writersure@outlook.com" className="flex space-x-4 items-start hover:opacity-80 transition-opacity">
                  <div className="bg-primary-foreground/10 p-3 rounded-lg"><Mail size={24} /></div>
                  <div><h4 className="font-medium">Email Us</h4><p className="text-primary-foreground/60 text-sm">writersure@outlook.com</p></div>
                </a>
                <a href="tel:+919603917537" className="flex space-x-4 items-start hover:opacity-80 transition-opacity">
                  <div className="bg-primary-foreground/10 p-3 rounded-lg"><Phone size={24} /></div>
                  <div><h4 className="font-medium">Call Us</h4><p className="text-primary-foreground/60 text-sm">+91 9603917537</p></div>
                </a>
                <a href="https://wa.me/919603917537" target="_blank" rel="noopener noreferrer" className="flex space-x-4 items-start hover:opacity-80 transition-opacity">
                  <div className="bg-primary-foreground/10 p-3 rounded-lg"><MessageSquare size={24} /></div>
                  <div><h4 className="font-medium">WhatsApp</h4><p className="text-primary-foreground/60 text-sm">+91 9603917537</p></div>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <a href="https://calendly.com/writersure369/30min" target="_blank" rel="noopener noreferrer"
                  className="bg-[hsl(40,80%,50%)] text-white py-3 px-6 rounded-lg text-center block hover:opacity-90 transition-opacity font-medium">
                  Book a Call
                </a>
                <div className="mt-6">
                  <h4 className="font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((link, index) => (
                      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">{link.icon}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-6 lg:p-8 col-span-7 rounded-xl reveal" style={{transitionDelay: '0.2s'}}>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Send Us a Message</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} maxLength={100} className={errors.name ? "border-destructive" : ""} />
                    {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} maxLength={255} className={errors.email ? "border-destructive" : ""} />
                    {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" value={formData.company} onChange={handleChange} maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service You're Interested In</Label>
                    <select id="service" value={formData.service} onChange={handleChange} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Select a service</option>
                      <option value="content-creation">AI Content Creation</option>
                      <option value="ghostwriting">Premium Ghostwriting</option>
                      <option value="technical-writing">Technical Writing</option>
                      <option value="email-marketing">Email Marketing</option>
                      <option value="chatbot">Chatbot Development</option>
                      <option value="facebook-ads">Facebook Ads Management</option>
                      <option value="shopify">Shopify Website Services</option>
                      <option value="website-dev">Website Development</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} value={formData.message} onChange={handleChange} maxLength={2000} className={errors.message ? "border-destructive" : ""} />
                  {errors.message && <p className="text-destructive text-sm">{errors.message}</p>}
                  <p className="text-muted-foreground text-xs text-right">{formData.message.length}/2000</p>
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
