"use client"
import { useImmutableRequest } from "@/hooks/use-request";
import { StarIcon } from "lucide-react";

interface IRepoStarsProps {
  repoName?: string;
}

export function RepoStars({ repoName }: IRepoStarsProps) {
  const { data: repo, loading, } = useImmutableRequest<{
    success?: boolean;
    stars?: string;
  }>(`/api/stars/${repoName}`)
  if (!repoName) {
    return null;
  }

  if (loading) {
    return (
      <span className="absolute -top-[0.6rem] -right-[0.6rem] flex py-0.5 items-center justify-center gap-1 px-1 transition-colors border-border border border-dashed rounded-sm">
        <StarIcon className="inline-block w-4 h-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400" />
        <span className="inline-flex justify-center items-center font-semibold text-[14px] w-[2ch]">0</span>
      </span>
    );
  }

  if (!loading && Number(repo?.stars) !== 0) {
    return (
      <span className="absolute -top-[0.6rem] -right-[0.6rem] flex py-0.5 items-center justify-center gap-1 px-1 transition-colors border-border border border-dashed rounded-sm">
        <StarIcon className="inline-block w-4 h-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400" />
        <span className="inline-flex justify-center items-center font-semibold text-[14px] w-[2ch]">{repo?.stars}</span>
      </span>
    );
  }
  return null;
}

