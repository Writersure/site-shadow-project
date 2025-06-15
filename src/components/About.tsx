
import React from "react";
import SectionEyebrow from "./SectionEyebrow";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-purple-100 to-purple-200">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <SectionEyebrow>About Us</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">We’re AI content specialists.</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Our mission is to empower businesses and individuals by delivering premium, AI-powered content solutions.
            We blend advanced technology with human expertise for flawless results.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-purple-200/40 p-6 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300 reveal">
            <h3 className="text-xl font-semibold mb-2 text-primary">Our Vision</h3>
            <p className="text-gray-700">To be the leading provider of AI-driven content solutions, transforming how businesses communicate and engage with their audience.</p>
          </div>
          <div className="bg-purple-200/40 p-6 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300 reveal" style={{transitionDelay: '0.1s'}}>
            <h3 className="text-xl font-semibold mb-2 text-primary">Our Mission</h3>
            <p className="text-gray-700">To empower businesses and individuals by delivering premium, AI-powered content solutions that drive growth and success.</p>
          </div>
          <div className="bg-purple-200/40 p-6 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300 reveal" style={{transitionDelay: '0.2s'}}>
            <h3 className="text-xl font-semibold mb-2 text-primary">Our Values</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Innovation</li>
              <li>Quality</li>
              <li>Collaboration</li>
              <li>Customer Focus</li>
            </ul>
          </div>
          <div className="bg-purple-200/40 p-6 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300 reveal" style={{transitionDelay: '0.3s'}}>
            <h3 className="text-xl font-semibold mb-2 text-primary">Why Choose Us?</h3>
            <p className="text-gray-700">We combine cutting-edge AI technology with human expertise to deliver exceptional content solutions tailored to your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
