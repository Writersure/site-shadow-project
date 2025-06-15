import React from "react";
import SectionEyebrow from "./SectionEyebrow";

const teamMembers = [
  {
    name: "Alex Berman",
    title: "Founder & CEO",
    image: "/lovable-uploads/alex-berman-headshot-square-min.png",
    bio: "Alex is a content marketing expert with over 10 years of experience. He's passionate about helping businesses grow through content.",
    linkedin: "https://www.linkedin.com/in/alexpberman/"
  },
  {
    name: "Jane Smith",
    title: "Lead Writer",
    image: "https://images.unsplash.com/photo-1544005313-94311e42fcb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    bio: "Jane is a skilled writer with a background in journalism. She specializes in creating engaging and informative content.",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Mike Johnson",
    title: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    bio: "Mike is an SEO expert with a focus on helping businesses improve their online visibility and drive organic traffic.",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Emily White",
    title: "Content Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    bio: "Emily is a content strategist with a passion for creating content that aligns with business goals and resonates with audiences.",
    linkedin: "https://www.linkedin.com/"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <SectionEyebrow>Our Team</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Meet Our Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We're a team of experienced content creators, strategists, and SEO specialists dedicated to helping you succeed.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 reveal">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">{member.name}</h3>
              <p className="text-gray-500 text-center mb-4">{member.title}</p>
              <p className="text-gray-600 text-center mb-4">{member.bio}</p>
              <div className="text-center">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
