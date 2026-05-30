import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    period: "2026",
    role: "IT Intern Web Developer - Admin Dashboard",
    company: "PacBiz Ticketing System - IT Intern / OJT",
    summary:
      "Worked on the admin/dashboard side of an IT support ticketing system, focusing on ticket visibility, triage surfaces, Gmail OAuth intake support, and monitoring views.",
    highlights: [
      "Built admin-facing dashboard views for ticket queues, statuses, workload tracking, and support visibility",
      "Supported Gmail OAuth/email intake so requests could enter the ticket workflow cleanly",
      "Structured ticket records and monitoring views for clearer admin-side triage",
    ],
    stack: ["Next.js", "Node.js", "Gmail OAuth", "Admin Dashboard", "MySQL"],
  },
  {
    period: "2026",
    role: "Part-Time Web Developer",
    company: "PasokPay - HR & Payroll System",
    summary:
      "Built HR and payroll tools with admin and employee portals, attendance tracking, payroll computation, revolving fund deductions, and payout testing.",
    highlights: [
      "Created live clock-ins, break tracking, overtime calculations, and real-time UI polling",
      "Designed payroll computation for rates, attendance logs, bonuses, penalties, and deductions",
      "Used Supabase as a platform layer with PostgreSQL for payroll and attendance data",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Supabase Platform", "CSV Export"],
  },
];
