import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  if (!vercelUrl) {
    throw new Error(
      "NEXT_PUBLIC_VERCEL_URL environment variable is not defined."
    );
  }
  const protocol = vercelUrl.includes("localhost") ? "http://" : "https://";
  return `${protocol}${vercelUrl}${path}`;
}
