
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

const team = [
  {
    name: "Alex",
    role: "AI Content Specialist",
    image: "/lovable-uploads/def69d1b-a26e-4e5e-97d9-857e2cf0b414.png",
    bio: "Expert in AI-powered content creation and digital strategy, specializing in premium ghostwriting and content solutions."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <SectionEyebrow>Our Expert</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Meet The Expert</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our talented content specialist brings diverse skills and experience to help your business succeed.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <Card className="hover-card h-full border-none shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src={team[0].image} 
                  alt={team[0].name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
                    <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
                      <Twitter size={18} className="text-white" />
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a href="mailto:contact@alexcontent.com" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
                      <Mail size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold text-primary">{team[0].name}</h3>
                <p className="text-purple-600 font-medium text-sm mb-2">{team[0].role}</p>
                <p className="text-gray-600 text-sm">{team[0].bio}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
