import { NextResponse } from "next/server";
import { getBlogPosts } from "../../../lib/api/get-blog-posts";

export async function GET() {
  return NextResponse.json(await getBlogPosts());
}
