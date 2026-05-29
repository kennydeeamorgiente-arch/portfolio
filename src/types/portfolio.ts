export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  role: string;
  year: string;
  stack: string[];
  image: string;
  proofImages: string[];
  featured: boolean;
};

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
  image: string;
  skills: string[];
};

export type Education = {
  period: string;
  program: string;
  institution: string;
  focus: string;
  highlights: string[];
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
  stack?: string[];
};
