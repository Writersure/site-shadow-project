
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does your AI content creation process work?",
    answer: "Our AI content creation process combines advanced AI technology with human expertise. We start by understanding your needs, then use AI tools to generate initial content, which is then reviewed and refined by our professional writers to ensure quality, accuracy, and alignment with your brand voice."
  },
  {
    question: "What types of content do you create?",
    answer: "We create a wide range of content including blog posts, articles, website copy, product descriptions, email newsletters, social media content, technical documentation, whitepapers, ebooks, and more. Our versatile team can handle virtually any content need."
  },
  {
    question: "How do you ensure the content is SEO-friendly?",
    answer: "We incorporate SEO best practices into all content we create. This includes thorough keyword research, strategic keyword placement, optimized meta descriptions, proper heading structure, and internal linking recommendations. We stay updated on the latest SEO trends to ensure your content ranks well."
  },
  {
    question: "What are your pricing models?",
    answer: "We offer flexible pricing models including project-based, retainer, and subscription plans. The cost depends on factors such as content type, complexity, research required, and volume. We're happy to provide a personalized quote based on your specific needs."
  },
  {
    question: "How quickly can you deliver content?",
    answer: "Our delivery timelines depend on the scope and complexity of your project. For standard blog posts or articles, we typically deliver within 3-5 business days. Larger projects may take longer. We also offer expedited services for urgent needs at an additional cost."
  },
  {
    question: "Do you offer revisions to the content?",
    answer: "Yes, we include up to two rounds of revisions with all content projects to ensure you're completely satisfied with the final product. Additional revision rounds can be arranged at an extra cost if needed."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4 md:py-24 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our content creation and digital services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center reveal">
          <p className="text-gray-600 mb-2">
            Have more questions?
          </p>
          <a href="#contact" className="text-primary font-medium hover:underline">
            Contact us for more information
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
