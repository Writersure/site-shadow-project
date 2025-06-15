import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionEyebrow from "./SectionEyebrow";

const faqData = [
  {
    question: "What types of content do you create?",
    answer:
      "We specialize in AI-powered content creation, premium ghostwriting, technical writing, email marketing, and chatbot development. Our services cover blog posts, articles, website content, eBooks, and more.",
  },
  {
    question: "How does AI enhance your content creation process?",
    answer:
      "AI helps us generate ideas, conduct research, and create initial drafts quickly. Our human experts then refine and optimize the content to ensure it meets your specific needs and maintains a high level of quality.",
  },
  {
    question: "Can you match my brand's voice and style?",
    answer:
      "Yes, we work closely with you to understand your brand's voice, style, and target audience. Our team ensures that all content aligns with your brand guidelines and resonates with your audience.",
  },
  {
    question: "What is the turnaround time for a project?",
    answer:
      "Turnaround time varies depending on the scope and complexity of the project. We provide estimated timelines during the initial consultation and keep you updated throughout the process.",
  },
  {
    question: "How do you ensure the content is SEO-friendly?",
    answer:
      "Our content is optimized for search engines using the latest SEO best practices. We conduct keyword research, optimize meta descriptions, and ensure the content is structured for readability and engagement.",
  },
  {
    question: "What if I need revisions to the content?",
    answer:
      "We offer revisions to ensure you are completely satisfied with the final product. Our team is committed to making any necessary changes to meet your expectations.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing varies based on the type and scope of the project. We offer customized quotes based on your specific requirements. Contact us for a free consultation and detailed pricing information.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 px-4 md:py-24 md:px-8 lg:px-12 bg-white">
    <div className="container mx-auto">
      <div className="text-center mb-16 reveal">
        <SectionEyebrow>FAQs</SectionEyebrow>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions? Find quick answers to common inquiries about our
          services, process, and expertise.
        </p>
      </div>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
