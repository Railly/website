import { A as a } from "./app/(blog)/components/a";
import { P as p } from "./app/(blog)/components/p";
import { H1 as h1 } from "./app/(blog)/components/heading/h1";
import { H2 as h2 } from "./app/(blog)/components/heading/h2";
import { H3 as h3 } from "./app/(blog)/components/heading/h3";
import { Ol as ol } from "./app/(blog)/components/list/ol";
import { Ul as ul } from "./app/(blog)/components/list/ul";
import { Li as li } from "./app/(blog)/components/list/li";
import { Hr as hr } from "./app/(blog)/components/hr";
import { Image } from "./app/(blog)/components/image";
import { Blockquote as blockquote } from "./app/(blog)/components/blockquote";
import type { MDXComponents } from "mdx/types";

// import { Tweet } from "./app/(blog)/components/tweet";
// import { Figure } from "./app/(blog)/components/figure";
// import { Snippet } from "./app/(blog)/components/snippet";
// import { Caption } from "./app/(blog)/components/caption";
// import { Callout } from "./app/(blog)/components/callout";
// import { YouTube } from "./app/(blog)/components/youtube";
// import { Ref, FootNotes, FootNote } from "./app/(blog)/components/footnotes";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: Image,
    a,
    hr,
    blockquote,
    h1,
    h2,
    h3,
    ul,
    ol,
    li,
    p,
  };
}
