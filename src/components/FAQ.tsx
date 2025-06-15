
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services does WriterSure offer?",
    answer: "WriterSure provides AI-powered content creation, copywriting, editing, technical documentation, blog/article writing, customized digital content solutions, and more."
  },
  {
    question: "How does your AI-powered content creation process work?",
    answer: "We blend advanced AI tools with human creativity. AI generates a draft based on your requirements, and our experts review and refine the content for quality, tone, and originality, ensuring each piece meets your brand standards."
  },
  {
    question: "Do you offer customized solutions for specific industries?",
    answer: "Absolutely! We have experience serving diverse industries, including technology, healthcare, e-commerce, finance, legal, and more. We tailor our content strategies to fit your unique sector and business needs."
  },
  {
    question: "How do you ensure the quality and originality of content?",
    answer: "Every piece undergoes a multi-step review and plagiarism check to guarantee accuracy and uniqueness. Our editors validate language, flow, and ensure your brand voice and objectives are consistently met."
  },
  {
    question: "What is the typical turnaround time for your services?",
    answer: "Turnaround times vary based on project scope and requirements. Standard articles or blog posts are usually delivered within 3-5 business days. Larger or urgent projects can be accommodated with prior agreement."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we offer post-project support, including revisions, content updates, and consulting to ensure continued satisfaction and optimal results for your content."
  },
  {
    question: "How do you price your services?",
    answer: "Our pricing is flexible and depends on content type, complexity, research needs, and volume. We offer project-based and retainer models. Contact us for a personalized quote."
  },
  {
    question: "Can you help with implementing AI solutions into my existing business processes?",
    answer: "Definitely! We provide consulting and technical support for integrating custom AI-driven content and workflow automations tailored to your business operations."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4 md:py-24 md:px-8 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Frequently Asked <span className="font-bold">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and expertise.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-100 text-left text-base md:text-lg text-purple-700 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <Link to="/#contact">
            <Button variant="default" size="lg" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 text-base font-medium rounded-md shadow-md">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

