
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <Link to="/" className="font-bold text-2xl text-purple-400 mb-3 inline-block">WriterSure</Link>
            <p className="text-gray-400 mb-4">
              Premium AI-powered content creation and digital services for businesses worldwide.
            </p>
            <div className="flex items-center space-x-4 mb-3">
              <Mail size={18} className="text-purple-400" />
              <span className="text-gray-300 text-sm">writersure@outlook.com</span>
            </div>
            <div className="flex items-center space-x-4 mb-3">
              <Phone size={18} className="text-purple-400" />
              <span className="text-gray-300 text-sm">+91 8297297307</span>
            </div>
            <div className="flex items-center space-x-4">
              <MessageSquare size={18} className="text-purple-400" />
              <span className="text-gray-300 text-sm">+91 8297297307 (WhatsApp)</span>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-1">
              <li><Link to="/#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">AI Content Creation</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Premium Ghostwriting</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Chatbot Development</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Email Marketing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-1">
              <li><Link to="/#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/#team" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/#testimonials" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Testimonials</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-primary">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://x.com/writersure" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-purple-800 transition-colors">
                {/* Twitter/X Icon (SVG) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="https://wa.me/918297297307" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-purple-800 transition-colors">
                {/* WhatsApp Icon (SVG) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
            <div>
              <a 
                href="https://calendly.com/writersure369/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-purple-700 text-white py-2 px-4 rounded text-sm hover:bg-purple-800 transition-colors inline-block"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {year} WriterSure. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="#" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
