import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import getContactInfo from "./tools/get-contact-info";
import listFaqs from "./tools/list-faqs";

export default defineMcp({
  name: "writersure-mcp",
  title: "WriterSure MCP",
  version: "0.1.0",
  instructions:
    "Public tools for the WriterSure marketing site. Use list_services to see offerings and pricing, get_contact_info for the strategy-call booking link and contact channels, and list_faqs for common questions.",
  tools: [listServices, getContactInfo, listFaqs],
});
