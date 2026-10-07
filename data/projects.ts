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
  mockup: "collections" | "support" | "tutoring";
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
  {
    id: "buddyai",
    name: "BuddyAI",
    category: "AI Education Platform",
    description:
      "An AI-powered tutoring platform that gives learners instant academic support through WhatsApp, backed by a dashboard for managing learners and conversations.",
    problem:
      "Traditional tutoring isn’t always available when learners need help. BuddyAI needed a way for students to access academic support through a platform they already use every day.",
    built:
      "A WhatsApp-based AI tutoring platform that lets learners ask questions, receive explanations and get academic support, with a central dashboard for managing learners and monitoring conversations.",
    result:
      "Learners can access personalised academic support directly from WhatsApp, while administrators have a single place to oversee activity, learners and conversations.",
    capabilities: [
      "AI Tutoring",
      "WhatsApp",
      "Learner Dashboard",
      "Conversation Management",
      "Multilingual Support",
    ],
    mockup: "tutoring",
  },
];
