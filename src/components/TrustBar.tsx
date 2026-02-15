import React from "react";
import { Users, FileText, Star, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: FileText, value: "500+", label: "Projects Delivered" },
  { icon: Star, value: "5.0", label: "Average Rating" },
  { icon: Clock, value: "24h", label: "Response Time" },
];

const TrustBar = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-foreground/10 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-primary-foreground/70" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
              <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
