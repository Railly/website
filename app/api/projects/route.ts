import { NextRequest, NextResponse } from "next/server";
import projectsData from "../../projects.json";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  return NextResponse.json(projectsData.projects);
}
