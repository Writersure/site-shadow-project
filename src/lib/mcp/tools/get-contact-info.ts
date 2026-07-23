import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  brand: "WriterSure",
  lead: "Alex Alney (Uday)",
  bookingUrl: "https://calendly.com/writersure369/30min",
  primaryCTA: "Book Free Strategy Call",
  website: "https://www.writersure.com",
  channels: ["Email", "Phone", "WhatsApp", "X"],
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Returns WriterSure contact channels and the free strategy call booking link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
