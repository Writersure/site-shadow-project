
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Alex Mitchell",
    role: "Content Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "With 10+ years of experience in content strategy and digital marketing, Alex leads our content creation team."
  },
  {
    name: "Sarah Johnson",
    role: "AI Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Sarah combines her expertise in AI and natural language processing to deliver cutting-edge content solutions."
  },
  {
    name: "Michael Chen",
    role: "Technical Writer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "Michael specializes in technical documentation, API guides, and making complex topics accessible."
  },
  {
    name: "Emma Patel",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Emma creates data-driven marketing strategies that connect with audiences and drive measurable results."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-16 px-4 md:py-24 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of content specialists and digital experts bring diverse skills and experience to help your business succeed.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="staggered-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="hover-card h-full border-none shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
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
                      <a href="mailto:writersure@outlook.com" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
                        <Mail size={18} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
