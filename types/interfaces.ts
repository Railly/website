export interface IBlog {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
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
  image: string;
  views: number;
  tag: string;
}

export interface IColor {
  default: string;
  blue: string;
  rose: string;
  teal: string;
  yellow: string;
}
