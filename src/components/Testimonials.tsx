
import React from 'react';
import { Card } from "@/components/ui/card";
import SectionEyebrow from "./SectionEyebrow";
import alyzeSamImg from "@/assets/alyze-sam.png";
import svenLaueImg from "@/assets/sven-laue.png";
import shahyanMerchantImg from "@/assets/shahyan-merchant.webp";

const testimonials = [
  {
    paragraphs: [
      "I feel very fortunate to have found Alex. I've always had plenty of ideas and concepts, but translating those thoughts into something clear and compelling for a wider audience was never my strength. Alex has been an exceptional partner in helping bring those ideas to life.",
      "He has provided thoughtful guidance, strong ghostwriting support, and valuable strategic advice throughout the process. Alex has a rare ability to take complex thoughts and shape them into clear, engaging narratives that resonate with readers.",
      "For anyone who has meaningful ideas but simply hasn't had the time or the right words to put them onto paper, I would highly recommend working with Alex."
    ],
    author: "Shahyan Merchant",
    position: "Power Systems Head, Financial Strategy, Origination & Due Diligence; and M&A, Global Renewables — Aramco",
    image: shahyanMerchantImg
  },
  {
    paragraphs: ["I've had the pleasure of working with Alex on several of my complex startups, and I am consistently impressed by his professionalism and skill. His editing and ghostwriting are so helpful, but what truly sets him apart is his collaborative approach. He listens attentively, provides thoughtful feedback, and always strives to elevate people and the work they do. Alex's empathy and communication skills made launches seamless and enjoyable. I wholeheartedly recommend him."],
    author: "Alyze Sam",
    position: "Survivor, Serial Co-Founder, Multi Award-Winning Author",
    image: alyzeSamImg
  },
  {
    paragraphs: ["Working with Alex was an excellent experience. He supported me in preparing my lecture materials and to create a consistent lecture from my notes. Communication was clear, feedback thoughtful, and delivery consistently on time."],
    author: "Sven Laue",
    position: "Consultant, Laue Consulting",
    image: svenLaueImg
  }
];
...
              <div className="text-muted-foreground mb-6 italic leading-relaxed space-y-3">
                {testimonial.paragraphs.map((para, i) => (
                  <p key={i}>{i === 0 ? '"' : ''}{para}{i === testimonial.paragraphs.length - 1 ? '"' : ''}</p>
                ))}
              </div>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
