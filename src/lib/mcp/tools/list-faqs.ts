import { defineTool } from "@lovable.dev/mcp-js";

const faqs = [
  { q: "What services does WriterSure offer?", a: "AI-powered content and digital services: ghostwriting, virtual assistance, email marketing, chatbot automation, coding, technical writing, freelance writing, website design, AI generalist solutions, and social media marketing." },
  { q: "How does your AI-powered content creation process work?", a: "AI generates drafts; expert humans review, edit, and refine for brand voice and quality." },
  { q: "Do you offer customized solutions for specific industries?", a: "Yes — tech, healthcare, finance, education, e-commerce, and more." },
  { q: "How do you ensure quality and originality?", a: "Multiple rounds of editing, fact-checking, plagiarism detection, and specialist review." },
  { q: "Typical turnaround time?", a: "3–5 business days for standard content; complex projects get a detailed timeline in consultation." },
  { q: "Do you offer ongoing support?", a: "Yes, customizable ongoing support and maintenance packages." },
  { q: "How is pricing structured?", a: "Project-based, retainer, or subscription — quoted after an initial consultation." },
  { q: "Can you help implement AI into my existing business processes?", a: "Yes, our AI generalist solutions integrate with existing workflows." },
];

export default defineTool({
  name: "list_faqs",
  title: "List FAQs",
  description: "Returns WriterSure's frequently asked questions and answers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(faqs, null, 2) }],
    structuredContent: { faqs },
  }),
});
