export const site = {
  name: "Firstbyte",
  url: "https://firstbyte.co.za",
  email: "hello@firstbyte.co.za",
  /**
   * Replace with the company LinkedIn page when it is ready.
   */
  linkedin: "https://www.linkedin.com/company/firstbyte",
  description:
    "Firstbyte builds AI-powered automations, intelligent agents and custom software that eliminate repetitive work and help businesses operate smarter.",
};

export const navLinks = [
  { href: "#services", id: "services", label: "Services" },
  { href: "#scaffolds", id: "scaffolds", label: "Scaffolds" },
  { href: "#work", id: "work", label: "Our Work" },
  { href: "#about", id: "about", label: "About" },
] as const;

export const footerLinks = [
  ...navLinks,
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export const projectMail = `mailto:${site.email}?subject=${encodeURIComponent("New project")}`;
