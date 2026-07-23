import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const services = [
  { name: "Custom AI Solutions", price: "From $2,000+", description: "Cutting-edge AI automation, chatbots, and machine learning solutions tailored to streamline your business operations." },
  { name: "Professional Writing / Ghostwriting", price: "From $500+", description: "Expert ghostwriting for LinkedIn, blogs, ebooks, and website copy that captures your authentic voice." },
  { name: "Website Development", price: "From $1,500+", description: "Custom website design, development, maintenance, and updates." },
  { name: "Facebook Ads", price: "From $800+/mo", description: "Strategic Facebook advertising campaigns, audience targeting, and performance optimization." },
  { name: "Virtual Assistance", price: "Contact for pricing", description: "Executive-level VA support for busy founders and teams." },
  { name: "Email Marketing", price: "Contact for pricing", description: "Newsletter strategy, automation, and campaign management." },
  { name: "Chatbot Automation", price: "Contact for pricing", description: "Conversational AI bots for support and lead capture." },
  { name: "Technical Writing", price: "Contact for pricing", description: "Documentation, whitepapers, and technical content." },
  { name: "Social Media Marketing", price: "Contact for pricing", description: "Content, scheduling, and growth strategy across platforms." },
];

export default defineTool({
  name: "list_services",
  title: "List WriterSure services",
  description: "Returns the full list of services WriterSure offers, with pricing where available.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
