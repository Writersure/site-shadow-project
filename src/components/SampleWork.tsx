import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

const samples = [
  {
    title: "HyperMove: M2E & P2E Integration",
    category: "White Paper",
    description: "World's first blockchain-powered mobile app integrating Move-to-Earn and Play-to-Earn, built on BSC network to incentivize healthy lifestyles while earning cryptocurrency.",
    file: "/samples/hypermove-whitepaper.pdf",
    badge: "Blockchain",
  },
  {
    title: "Office 365 Ransomware Protection",
    category: "B2B Article",
    description: "Comprehensive guide on protecting organizations from ransomware attacks using Office 365's built-in security features, ATP, and recovery strategies.",
    file: "/samples/office365-ransomware-protection.pdf",
    badge: "Cybersecurity",
  },
  {
    title: "Sentiment Analysis for Your Data",
    category: "Technical Article",
    description: "Deep dive into how sentiment analysis works, types of analysis (fine-grained, aspect-based, emotion detection), and why businesses should leverage it for brand reputation.",
    file: "/samples/sentiment-analysis.pdf",
    badge: "AI & ML",
  },
  {
    title: "Cryptocurrency Investment Foundation",
    category: "Financial Guide",
    description: "Strategic guide to building a solid cryptocurrency investment foundation, covering goal setting, risk tolerance, portfolio allocation, and long-term wealth strategies.",
    file: "/samples/cryptocurrency-investment.pdf",
    badge: "Finance",
  },
];

const SampleWork = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <SectionEyebrow>Sample Portfolio</SectionEyebrow>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
            Professional Writing Samples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore professionally crafted content across blockchain, cybersecurity, AI, and finance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {samples.map((sample, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
                    {sample.badge}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {sample.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {sample.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sample.description}
                </p>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button
                  asChild
                  variant="default"
                  className="flex-1 group/btn"
                >
                  <a
                    href={sample.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FileText className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    View PDF
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 group/btn"
                >
                  <a
                    href={sample.file}
                    download
                    className="flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Download
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleWork;
