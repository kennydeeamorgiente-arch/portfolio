import { NextResponse } from "next/server";
import { getProjects } from "@/lib/portfolio-data";

export const runtime = "nodejs";

export async function GET() {
  const projects = await getProjects();

  return NextResponse.json({
    count: projects.length,
    projects,
  });
}
