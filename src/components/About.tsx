
import React from "react";
import SectionEyebrow from "./SectionEyebrow";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <SectionEyebrow>About Us</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">We're AI content specialists.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our mission is to empower businesses and individuals by delivering premium, AI-powered content solutions.
            We blend advanced technology with human expertise for flawless results.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Our Vision", content: "To be the leading provider of AI-driven content solutions, transforming how businesses communicate and engage with their audience." },
            { title: "Our Mission", content: "To empower businesses and individuals by delivering premium, AI-powered content solutions that drive growth and success." },
            { title: "Our Values", list: ["Innovation", "Quality", "Collaboration", "Customer Focus"] },
            { title: "Why Choose Us?", content: "We combine cutting-edge AI technology with human expertise to deliver exceptional content solutions tailored to your needs." },
          ].map((card, idx) => (
            <div key={idx} className="bg-[hsl(220,14%,96%)] p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{card.title}</h3>
              {card.list ? (
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  {card.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : (
                <p className="text-muted-foreground text-sm leading-relaxed">{card.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
