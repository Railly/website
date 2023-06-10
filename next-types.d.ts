// src/next-types.d.ts
type PageParams = Record<string, string>;
export type PageProps<
  TParams extends PageParams = {},
  TSearchParams extends any = Record<string, string | undefined>
> = {
  params: TParams;
  searchParams?: TSearchParams;
};

export type LayoutProps<TParams extends PageParams = {}> = {
  children: React.ReactNode;
  params: TParams;
};

export type MetadataParams<
  TParams extends PageParams = {},
  TSearchParams extends any = Record<string, string | undefined>
> = {
  params: TParams;
  searchParams?: TSearchParams;
};

export type ErrorBoundaryProps = {
  error: Error;
  reset: () => void;
};
