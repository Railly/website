import { NextResponse } from "next/server";
import type { RequestContext } from "@/types/request";
import { getGithubRepoStars } from "@/lib/api/get-github-repo";

export const runtime = "edge";
export const revalidate = 43200;

export async function GET(
  req: Request,
  context?: RequestContext<{ repo?: string }>
) {
  try {
    const { searchParams } = new URL(req.url);
    const repo = context?.params?.repo;
    if (!repo) return NextResponse.json({ stars: null });

    const owner = searchParams.get("owner") || "Railly";
    const stars = await getGithubRepoStars({ owner, repo });

    return NextResponse.json({ stars });
  } catch (err) {
    return NextResponse.json({ stars: null });
  }
}
