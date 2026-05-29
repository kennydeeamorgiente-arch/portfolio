import type { Certification } from "@/types/portfolio";

export const certifications: Certification[] = [
  {
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    issued: "Mar 25, 2025",
    credentialId: "CISCO-ITE-2025",
    image: "/images/certifications/web-development.svg",
    skills: ["Hardware", "Software", "Troubleshooting"],
  },
  {
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    issued: "Mar 25, 2025",
    credentialId: "CISCO-CTM-2025",
    image: "/images/certifications/node-js.svg",
    skills: ["Threats", "Security", "Risk"],
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issued: "Dec 08, 2024",
    credentialId: "CISCO-CYBER-2024",
    image: "/images/certifications/responsive-ui.svg",
    skills: ["Cybersecurity", "Networking", "Safety"],
  },
];
