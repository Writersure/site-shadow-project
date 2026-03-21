
import React, { useCallback, useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import SectionEyebrow from "./SectionEyebrow";
import alyzeSamImg from "@/assets/alyze-sam.png";
import svenLaueImg from "@/assets/sven-laue.png";
import shahyanMerchantImg from "@/assets/shahyan-merchant.webp";
import rajSinghImg from "@/assets/raj-singh.jpg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    paragraphs: [
      "I've had the pleasure of working with Alex on several of my complex startups, and I am consistently impressed by his professionalism and skill.",
      "His editing and ghostwriting are so helpful, but what truly sets him apart is his collaborative approach. He listens attentively, provides thoughtful feedback, and always strives to elevate people and the work they do. Alex's empathy and communication skills made launches seamless and enjoyable.",
      "I wholeheartedly recommend him."
    ],
    author: "Alyze Sam",
    position: "Survivor, Serial Co-Founder, Multi Award-Winning Author — Serving the Blockchain Community (TechandAuthors.com · DeFiance.TV · GIVENation.World · NewLife.ai)",
    image: alyzeSamImg
  },
  {
    paragraphs: [
      "Working with Alex was an excellent experience. He supported me in preparing my lecture materials and to create a consistent lecture from my notes.",
      "Communication was clear, feedback thoughtful, and delivery consistently on time."
    ],
    author: "Sven Laue",
    position: "CEO, Laue Consulting (Wiesbaden) — Lecturer in Finance & Controlling, University of Europe for Applied Sciences, Berlin",
    image: svenLaueImg
  },
  {
    paragraphs: [
      "Alex has been an incredible asset to our team when it comes to social media and content creation. From day one, he understood our brand voice and helped elevate our online presence with consistent, high-quality posts.",
      "His ability to create engaging, relevant content has significantly improved our visibility and audience engagement. He's proactive, creative, and always brings fresh ideas to the table—making the entire process seamless and efficient for our team."
    ],
    author: "Dr. Raj Singh MD, FACP, FASN",
    position: "Physician — HEALOR · Healorx · KSOSN, Las Vegas, NV",
    image: rajSinghImg
  }
];

const Testimonials = () => {
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[hsl(220,14%,96%)]">
      <div className="container mx-auto">
        <div className="text-center reveal">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            our content creation and digital services.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="pl-6 min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="p-8 border border-border shadow-sm bg-white flex flex-col h-full">
                    <div className="mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-[hsl(40,80%,50%)] text-xl">★</span>
                      ))}
                    </div>
                    <div className="text-muted-foreground mb-6 italic leading-relaxed space-y-3 flex-1">
                      {testimonial.paragraphs.map((para, i) => (
                        <p key={i}>
                          {i === 0 ? '\u201C' : ''}{para}{i === testimonial.paragraphs.length - 1 ? '\u201D' : ''}
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center">
                      <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-border bg-white shadow-sm flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-40"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-primary' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-border bg-white shadow-sm flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-40"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
