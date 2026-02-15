
import React from 'react';
import { Mail, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="font-bold text-2xl text-primary-foreground mb-3 inline-block">WriterSure</a>
            <p className="text-background/60 mb-4 text-sm">
              Premium AI-powered content creation and digital services for businesses worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3"><Mail size={16} className="text-background/40" /><span className="text-background/60 text-sm">writersure@outlook.com</span></div>
              <div className="flex items-center space-x-3"><Phone size={16} className="text-background/40" /><span className="text-background/60 text-sm">+91 9603917537</span></div>
              <div className="flex items-center space-x-3"><MessageSquare size={16} className="text-background/40" /><span className="text-background/60 text-sm">+91 9603917537 (WhatsApp)</span></div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-background/80">Services</h3>
            <ul className="space-y-2">
              {["AI Content Creation", "Premium Ghostwriting", "Chatbot Development", "Email Marketing"].map((s) => (
                <li key={s}><a href="#services" onClick={(e) => scrollTo(e, '#services')} className="text-background/50 hover:text-background/80 transition-colors text-sm">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-background/80">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => scrollTo(e, '#about')} className="text-background/50 hover:text-background/80 transition-colors text-sm">About Us</a></li>
              <li><a href="#team" onClick={(e) => scrollTo(e, '#team')} className="text-background/50 hover:text-background/80 transition-colors text-sm">Our Team</a></li>
              <li><a href="#testimonials" onClick={(e) => scrollTo(e, '#testimonials')} className="text-background/50 hover:text-background/80 transition-colors text-sm">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-background/80">Connect With Us</h3>
            <div className="flex space-x-3 mb-4">
              <a href="https://x.com/writersure" target="_blank" rel="noopener noreferrer" className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="https://wa.me/919603917537" target="_blank" rel="noopener noreferrer" className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </a>
            </div>
            <a href="https://calendly.com/writersure369/30min" target="_blank" rel="noopener noreferrer"
              className="bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm hover:bg-primary/90 transition-colors inline-block font-medium">
              Book a Call
            </a>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/40 text-sm">© {year} WriterSure. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-background/40 text-sm hover:text-background/60 transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/40 text-sm hover:text-background/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
