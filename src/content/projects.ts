import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "fusoms-organization-management-system",
    title: "FUSOMS Organization Management System",
    summary:
      "Foundation University student organization event management system built with CodeIgniter, PHP views, AJAX, and MySQL for role-based event approvals.",
    problem:
      "University organization requests needed a clearer approval process across departments, roles, and status updates.",
    solution:
      "Implemented role-based event workflows, approval screens, organization records, reports, and notification logic using CodeIgniter and MySQL.",
    outcome:
      "Received special recognition for excellence in the design and implementation of the FUSOMS platform.",
    role: "Web Developer",
    year: "2026",
    stack: ["CodeIgniter 4", "PHP", "MySQL", "AJAX", "JavaScript"],
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
    role: "Part-Time Web Developer",
    year: "2026",
    stack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase Platform",
      "Payroll Logic",
      "CSV Export",
    ],
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
      "IT support ticketing system experience focused on the admin/dashboard side: ticket visibility, triage surfaces, Gmail OAuth intake support, and live queue monitoring.",
    problem:
      "IT support teams needed a cleaner way to convert incoming emails into valid tickets, prioritize requests, and balance technician workloads.",
    solution:
      "Worked on admin-facing ticket dashboards, queue/status views, Gmail OAuth intake support, and monitoring surfaces for IT support workflows.",
    outcome:
      "Helped improve request visibility for admin/support users through clearer dashboard data and ticket context.",
    role: "IT Intern Web Developer - Admin Dashboard",
    year: "2026",
    stack: ["Next.js", "Node.js", "Gmail OAuth", "Admin Dashboard", "MySQL"],
    image: "/images/projects/campus-event-system.svg",
    proofImages: [
      "/images/projects/campus-event-system-proof.svg",
      "/images/projects/campus-event-system.svg",
    ],
    featured: false,
  },
  {
    slug: "tappark-parking-management-system",
    title: "TapPark Parking Management System",
    summary:
      "Capstone parking management admin web app built with CodeIgniter 4, PHP, JavaScript, and MySQL for monitoring parking operations.",
    problem:
      "Campus parking operations needed a clearer admin-side way to monitor parking areas, attendants, capacity, reports, logs, subscriptions, and feedback.",
    solution:
      "Focused on the TapPark admin dashboard and management screens for parking areas, overview data, reports, users, attendants, logs, subscriptions, and feedback.",
    outcome:
      "Created a practical admin system for monitoring parking-area capacity, operational records, attendants, and reports.",
    role: "Web Developer - Admin Dashboard",
    year: "2026",
    stack: ["CodeIgniter 4", "PHP", "MySQL", "JavaScript", "Admin Dashboard"],
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
