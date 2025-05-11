
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <span className="font-bold text-2xl text-primary">DigitalHQ</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional digital solutions for businesses of all sizes. 
              Transforming ideas into digital reality.
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
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Content Creation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none flex-grow"
              />
              <button className="bg-primary px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {year} DigitalHQ. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
