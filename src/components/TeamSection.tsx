
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "With 15+ years of experience in the tech industry, Alex leads our company vision and strategy."
  },
  {
    name: "Sarah Williams",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Sarah brings creativity and innovation to every project, ensuring our designs stand out."
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "Michael's technical expertise and problem-solving skills drive our development process."
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Emma creates and implements marketing strategies that drive growth and engagement."
  }
];

const TeamSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const teamRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    teamRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }

      teamRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" ref={titleRef}>
          <div className="reveal">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals brings diverse skills and experience 
              to help your business succeed in the digital landscape.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              ref={el => teamRefs.current[index] = el}
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
                      <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
                        <Github size={18} className="text-white" />
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

export default TeamSection;
