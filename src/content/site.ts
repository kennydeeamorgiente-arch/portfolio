import type { NavigationItem, SocialLink } from "@/types/portfolio";

export const profile = {
  name: "Kenny Dee A. Amorgiente",
  title: "Web Developer",
  location: "Basay, Negros Oriental, Philippines",
  email: "kennydee.amorgiente@foundationu.com",
  phone: "+63 928 704 6414",
  avatar: "/images/profile/MyProfile.png",
  availableFor: "Open for Opportunities",
  summary:
    "IT graduate focused on clean, fast, and easy-to-use software. Experienced in frontend design and backend logic using React, Node.js, PHP, CodeIgniter, and SQL - with a strong interest in modern minimalist UI and AI-assisted workflows.",
};

export const navigation: NavigationItem[] = [
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61579390121143",
  },
  {
    label: "GitHub",
    href: "https://github.com/kennydeeamorgiente-arch",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kendeezzzz?igsh=dmMzZDlvNWFrY3N0",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kennydee-amorgiente-9b18953ba/",
  },
  { label: "Resume", href: "/documents/Kenny_Dee_Amorgiente_Resume.pdf" },
];
