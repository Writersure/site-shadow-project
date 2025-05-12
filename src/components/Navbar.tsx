
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl text-purple-800">WriterSure</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-5">
            <a href="/#home" className="font-medium hover:text-purple-800 transition-colors">Home</a>
            <a href="/#services" className="font-medium hover:text-purple-800 transition-colors">Services</a>
            <a href="/#about" className="font-medium hover:text-purple-800 transition-colors">About</a>
            <a href="/#team" className="font-medium hover:text-purple-800 transition-colors">Team</a>
            <Link to="/case-studies" className="font-medium hover:text-purple-800 transition-colors">Success Stories</Link>
            <a href="/#contact" className="font-medium hover:text-purple-800 transition-colors">Contact Us</a>
          </div>

          <a href="https://calendly.com/writersure369/30min" target="_blank" rel="noopener noreferrer">
            <Button className="bg-purple-800 hover:bg-purple-900">Get Started</Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-purple-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 transform ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          <a href="/#home" className="block font-medium hover:text-purple-800" onClick={toggleMobileMenu}>Home</a>
          <a href="/#services" className="block font-medium hover:text-purple-800" onClick={toggleMobileMenu}>Services</a>
          <a href="/#about" className="block font-medium hover:text-purple-800" onClick={toggleMobileMenu}>About</a>
          <a href="/#team" className="block font-medium hover:text-purple-800" onClick={toggleMobileMenu}>Team</a>
          <Link to="/case-studies" className="block font-medium hover:text-purple-800" onClick={toggleMobileMenu}>Success Stories</Link>
          <a href="/#contact" className="block font-medium hover:text-purple-800" onClick={toggleMobileMenu}>Contact Us</a>
          <a href="https://calendly.com/writersure369/30min" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>
            <Button className="w-full bg-purple-800 hover:bg-purple-900">Get Started</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
