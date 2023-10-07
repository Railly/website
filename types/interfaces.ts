export interface IBlog {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  color: string;
  // image: string;
  // disabled: boolean;
  views?: number;
  tags: string[];
}

export interface IProject {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  description: string;
  image: string;
  views?: number;
  tag: string;
  repoName: string;
  isFeatured?: boolean;
  demo: string;
  logoUrl?: string;
  stack: string[];
}

export interface IColor {
  default: string;
  blue: string;
  rose: string;
  teal: string;
  yellow: string;
}
