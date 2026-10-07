export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "automation",
    index: "01",
    title: "AI Automation",
    description:
      "Automate repetitive workflows, communication, data processing and operational tasks.",
  },
  {
    id: "agents",
    index: "02",
    title: "AI Agents",
    description:
      "Intelligent agents capable of handling conversations, tasks and business processes.",
  },
  {
    id: "software",
    index: "03",
    title: "Custom Software",
    description:
      "Purpose-built dashboards, portals and internal tools designed around your operations.",
  },
  {
    id: "integrations",
    index: "04",
    title: "Business Integrations",
    description:
      "Connect the tools your business already uses and allow information to move automatically between them.",
  },
];
