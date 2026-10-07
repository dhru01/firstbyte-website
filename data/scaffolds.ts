export type Scaffold = {
  id: string;
  index: string;
  name: string;
  summary: string;
  capabilities: string[];
};

export const scaffolds: Scaffold[] = [
  {
    id: "support",
    index: "01",
    name: "Customer Support",
    summary:
      "A foundation for conversations that can be answered, handed over and reviewed in one place.",
    capabilities: [
      "AI conversations",
      "WhatsApp integration",
      "Human handover",
      "Conversation dashboard",
      "Analytics",
    ],
  },
  {
    id: "collections",
    index: "02",
    name: "Collections",
    summary:
      "A foundation for follow-ups, reminders and a clear view of who has promised to pay.",
    capabilities: [
      "Automated follow-ups",
      "Payment reminders",
      "Debtor communication",
      "Promise-to-pay tracking",
      "Reporting",
    ],
  },
  {
    id: "leads",
    index: "03",
    name: "Lead Management",
    summary:
      "A foundation for capturing enquiries, qualifying them and moving them into a booked pipeline.",
    capabilities: [
      "Lead capture",
      "AI qualification",
      "Automated follow-ups",
      "Appointment booking",
      "Pipeline tracking",
    ],
  },
  {
    id: "operations",
    index: "04",
    name: "Operations",
    summary:
      "A foundation for internal work: approvals, documents, reports and a dashboard for the people running it.",
    capabilities: [
      "Internal workflows",
      "Approvals",
      "Document generation",
      "Automated reporting",
      "Management dashboards",
    ],
  },
];
