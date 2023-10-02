import { NextResponse } from "next/server";
import { getProjects } from "../../../lib/api/get-projects";

export async function GET() {
  return NextResponse.json(await getProjects({
    limit: false
  }));
}
