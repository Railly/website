import { NextRequest, NextResponse } from "next/server";
import postsData from "../../posts.json";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  return NextResponse.json(postsData.posts);
}
