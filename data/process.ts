export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We understand how your business currently operates and identify where automation can create the most value.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "We design the workflow, system architecture and user experience.",
  },
  {
    index: "03",
    title: "Build",
    description:
      "We develop and integrate the system around your existing business.",
  },
  {
    index: "04",
    title: "Automate",
    description:
      "We deploy, monitor and improve the system as it operates.",
  },
];
