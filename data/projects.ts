export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  built: string;
  /**
   * Describe what changed operationally.
   * Do not add statistics, testimonials or client claims that have not been verified.
   */
  result: string;
  capabilities: string[];
  mockup: "collections" | "support";
  /** Case study or product URL. Falls back to the contact section. */
  href?: string;
  /** When set, replaces the interface mockup. */
  image?: ProjectImage;
};

/**
 * Append a project to add it to the selected-work section.
 * Layout alternates automatically. Replace placeholder copy before publishing.
 */
export const projects: Project[] = [
  {
    id: "zeroed",
    name: "Zeroed",
    category: "Debt Collection Automation",
    description:
      "A debt recovery platform that brings communication, payment tracking and reporting into one system.",
    problem:
      "Debt follow-ups were inconsistent and required significant manual intervention.",
    built:
      "A debt recovery platform designed to automate communication and collection workflows across multiple channels.",
    result:
      "Follow-ups, payment tracking and reporting sit in one system, so the team intervenes when a case needs a person.",
    capabilities: [
      "AI-powered communication",
      "WhatsApp",
      "SMS",
      "Email",
      "Automated follow-ups",
      "Payment tracking",
      "Management reporting",
    ],
    mockup: "collections",
  },
  {
    id: "front-desk",
    name: "Front Desk",
    category: "Customer Support Automation",
    description:
      "A support system for routine conversations, human handover and a single view of every thread.",
    problem:
      "Enquiries arrived across inboxes and chat apps, so replies and handovers depended on who happened to see the message.",
    built:
      "A support workspace with AI conversations, WhatsApp, human handover, a shared dashboard and analytics.",
    result:
      "Routine questions are answered immediately. A person steps in when a conversation needs one.",
    capabilities: [
      "AI conversations",
      "WhatsApp integration",
      "Human handover",
      "Conversation dashboard",
      "Analytics",
    ],
    mockup: "support",
  },
];
