
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Link to="/" className="font-bold text-2xl text-primary">WriterSure</Link>
            </div>
            <p className="text-gray-400 mb-6">
              Premium AI-powered content creation and digital services for businesses worldwide.
              Transforming ideas into compelling content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors">AI Content Creation</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors">Premium Ghostwriting</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors">Chatbot Development</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors">Email Marketing</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors">Social Media Marketing</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors">Virtual Assistance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#team" className="text-gray-400 hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="/#process" className="text-gray-400 hover:text-primary transition-colors">Our Process</a></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-primary transition-colors">Success Stories</Link></li>
              <li><a href="/#testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Email: writersure@outlook.com</li>
              <li className="text-gray-400">Phone: +91 8297297307</li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {year} WriterSure. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
