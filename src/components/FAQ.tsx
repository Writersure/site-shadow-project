
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
    question: "What services does WriterSure offer?",
    answer:
      "WriterSure provides a comprehensive range of AI-powered content and digital services including premium ghostwriting, virtual assistance, email marketing, chatbot automation, coding services, technical writing, freelance writing, website design, AI generalist solutions, and social media marketing.",
  },
  {
    question: "How does your AI-powered content creation process work?",
    answer:
      "Our process combines advanced AI technology with human expertise. We start by understanding your requirements, brand voice, and goals. Then, we leverage AI to generate initial content drafts, which are thoroughly reviewed, edited, and refined by our expert team to ensure quality, accuracy, and alignment with your brand.",
  },
  {
    question: "Do you offer customized solutions for specific industries?",
    answer:
      "Yes, we specialize in creating tailored solutions for various industries including technology, healthcare, finance, education, e-commerce, and more. We understand the unique challenges and requirements of different sectors and customize our services accordingly.",
  },
  {
    question: "How do you ensure the quality and originality of content?",
    answer:
      "We have a rigorous quality assurance process that includes multiple rounds of editing, fact-checking, plagiarism detection, and final review by industry specialists. This ensures that all content is original, accurate, and meets the highest quality standards.",
  },
  {
    question: "What is the typical turnaround time for your services?",
    answer:
      "Turnaround times vary depending on the complexity and scope of the project. For standard content projects, we typically deliver within 3-5 business days. For more complex projects like website design or comprehensive marketing campaigns, we provide a detailed timeline during the consultation phase.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we provide ongoing support and maintenance for all our services. We believe in building long-term relationships with our clients and ensuring the continued success of every project. Our support packages can be customized based on your specific needs.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Our pricing is based on the scope, complexity, and requirements of each project. We offer flexible pricing models including project-based, retainer, and subscription options. During the initial consultation, we'll discuss your needs and provide a transparent quote tailored to your specific requirements.",
  },
  {
    question: "Can you help with implementing AI solutions into my existing business processes?",
    answer:
      "Absolutely! Our AI generalist solutions are designed to integrate seamlessly with your existing business processes. We assess your current workflows, identify opportunities for AI implementation, and develop custom solutions that enhance efficiency and drive better results.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-white">
    <div className="container mx-auto">
      <div className="text-center reveal">
        <SectionEyebrow>FAQs</SectionEyebrow>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
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
