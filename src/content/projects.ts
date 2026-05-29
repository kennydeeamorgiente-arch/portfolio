import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "fusoms-organization-management-system",
    title: "FUSOMS Organization Management System",
    summary:
      "Full-stack organization management platform built for Foundation University's student organizations - handling membership, events, budgets, and approvals with role-based access and real-time dashboards.",
    problem:
      "University organization requests needed a clearer approval process across departments, roles, and status updates.",
    solution:
      "Implemented a 6-tier role-based access hierarchy, advanced notification logic, localStorage persistence, and React-driven status synchronization.",
    outcome:
      "Received special recognition for excellence in the design and implementation of the FUSOMS platform.",
    role: "Web Developer",
    year: "2026",
    stack: ["React", "Node.js", "MySQL", "REST API", "CodeIgniter4"],
    image: "/images/projects/inventory-dashboard.svg",
    proofImages: [
      "/images/projects/inventory-dashboard-proof.svg",
      "/images/projects/inventory-dashboard.svg",
    ],
    featured: true,
  },
  {
    slug: "pasokpay-hr-payroll-system",
    title: "PasokPay HR & Payroll System",
    summary:
      "HR and payroll platform with admin and employee portals - live clock-ins, break tracking, overtime calculations, payroll computation with bonuses and deductions, and GCash/Xendit payout sandbox integration.",
    problem:
      "Payroll workflows needed accurate attendance, overtime, deductions, reporting, and payout testing in one system.",
    solution:
      "Built live clock-ins, break tracking, payroll calculation, revolving fund deductions, admin reports, CSV export, and payout tests.",
    outcome:
      "Supported payroll computation and sandbox payout testing through Xendit and GCash integrations.",
    role: "Part-Time Full-Stack Developer",
    year: "2026",
    stack: ["React", "Supabase", "Payroll Logic", "Xendit", "GCash", "CSV Export"],
    image: "/images/projects/inventory-dashboard.svg",
    proofImages: [
      "/images/projects/inventory-dashboard-proof.svg",
      "/images/projects/certificate-vault-proof.svg",
    ],
    featured: false,
  },
  {
    slug: "pacbiz-ticketing-system",
    title: "PacBiz Ticketing System",
    summary:
      "Full-stack IT support ticketing platform with 3-tier RBAC for Admin, Technician, and Requester roles - AI-assisted ticket sorting via Ollama and OpenAI, Gmail OAuth, SLA tracking, and WebSocket dashboards.",
    problem:
      "IT support teams needed a cleaner way to convert incoming emails into valid tickets, prioritize requests, and balance technician workloads.",
    solution:
      "Built role-based access for Admin, Technician, and Requester users, integrated Gmail OAuth/webhooks, and used Ollama/OpenAI for sorting and spam filtering.",
    outcome:
      "Created real-time dashboards and wallboards using WebSockets for live queue and system-health monitoring.",
    role: "Full-Stack Developer Intern",
    year: "2026",
    stack: ["React", "Node.js", "OpenAI", "Ollama", "Gmail OAuth", "WebSockets"],
    image: "/images/projects/campus-event-system.svg",
    proofImages: [
      "/images/projects/campus-event-system-proof.svg",
      "/images/projects/campus-event-system.svg",
    ],
    featured: false,
  },
  {
    slug: "booking-management-system",
    title: "Booking Management System",
    summary:
      "Scheduling and booking management system built for service-based businesses - appointment handling, availability management, and client-facing booking flows with a clean responsive interface.",
    problem:
      "Service teams needed a clearer way to manage booking requests, schedules, and customer records.",
    solution:
      "Built booking workflows using PHP, CodeIgniter4, and MySQL with structured records and admin management screens.",
    outcome:
      "Created a practical booking workflow for service-based scheduling and record tracking.",
    role: "Web Developer",
    year: "2026",
    stack: ["PHP", "CodeIgniter4", "MySQL", "Bootstrap"],
    image: "/images/projects/certificate-vault.svg",
    proofImages: [
      "/images/projects/certificate-vault-proof.svg",
      "/images/projects/certificate-vault.svg",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
