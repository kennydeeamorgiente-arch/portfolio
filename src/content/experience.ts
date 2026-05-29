import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    period: "2026",
    role: "Full-Stack Developer",
    company: "PacBiz Ticketing System - IT Intern / OJT",
    summary:
      "Developed a full-stack ticketing platform for IT support workflows with role-based access, AI-assisted ticket handling, email automation, and real-time dashboards.",
    highlights: [
      "Built a 3-tier Role-Based Access Control system for Admin, Technician, and Requester users",
      "Integrated Ollama and OpenAI to sort tickets, set priorities, and filter spam emails",
      "Implemented Gmail OAuth, webhooks, auto-assignment logic, SLA tracking, and WebSocket wallboards",
    ],
    stack: ["React", "Node.js", "OpenAI", "Ollama", "Gmail OAuth", "WebSockets"],
  },
  {
    period: "2026",
    role: "Part-Time Full-Stack Developer",
    company: "PasokPay - HR & Payroll System",
    summary:
      "Built HR and payroll tools with admin and employee portals, attendance tracking, payroll computation, revolving fund deductions, and payout testing.",
    highlights: [
      "Created live clock-ins, break tracking, overtime calculations, and real-time UI polling",
      "Designed payroll computation for rates, attendance logs, bonuses, penalties, and deductions",
      "Integrated Supabase Edge Functions for Xendit and GCash payout sandbox testing",
    ],
    stack: ["React", "Supabase", "Payroll Logic", "Xendit", "GCash", "CSV Export"],
  },
];
