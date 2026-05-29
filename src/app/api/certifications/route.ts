import { NextResponse } from "next/server";
import { getCertifications } from "@/lib/portfolio-data";

export const runtime = "nodejs";

export async function GET() {
  const certifications = await getCertifications();

  return NextResponse.json({
    count: certifications.length,
    certifications,
  });
}
