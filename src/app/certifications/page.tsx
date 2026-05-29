import type { Metadata } from "next";
import { CertificationGrid } from "@/components/sections/certification-grid";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications with issuers, dates, credential details, and proof images.",
};

export const revalidate = 60;

export default function CertificationsPage() {
  return (
    <main>
      <CertificationGrid />
    </main>
  );
}
