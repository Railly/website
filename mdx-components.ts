import { A as a } from "./components/mdx/a";
import { P as p } from "./components/mdx/p";
import { H1 as h1 } from "./components/mdx/heading/h1";
import { H2 as h2 } from "./components/mdx/heading/h2";
import { H3 as h3 } from "./components/mdx/heading/h3";
import { Ol as ol } from "./components/mdx/list/ol";
import { Ul as ul } from "./components/mdx/list/ul";
import { Li as li } from "./components/mdx/list/li";
import { Hr as hr } from "./components/mdx/hr";
import { Image } from "./components/mdx/image";
// import { Blockquote as blockquote } from "./components/mdx/blockquote";
import type { MDXComponents } from "mdx/types";

// import { Tweet } from "./components/mdx/tweet";
// import { Figure } from "./components/mdx/figure";
// import { Snippet } from "./components/mdx/snippet";
// import { Caption } from "./components/mdx/caption";
// import { Callout } from "./components/mdx/callout";
// import { YouTube } from "./components/mdx/youtube";
// import { Ref, FootNotes, FootNote } from "./components/mdx/footnotes";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: Image,
    a,
    hr,
    // blockquote,
    h1,
    h2,
    h3,
    ul,
    ol,
    li,
    p,
  };
}
