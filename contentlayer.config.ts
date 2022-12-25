import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

import readingTime from "reading-time";
import { visit } from "unist-util-visit";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: false },
    disabled: { type: "boolean", default: false },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
  },
  computedFields,
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "project/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: true },
    tag: { type: "string", required: true },
  },
  computedFields,
}));

// div.BLOCK > pre.PRE > code.CODE
const BLOCK =
  "overflow-hidden rounded-lg leading-6 shadow-lg mb-5 border border-hunter-black-100/20";
const TITLE =
  "rounded-t-md bg-hunter-black-900 bg-[#313740] px-3 py-1 font-mono text-xs !text-white/70 border-b border-hunter-black-100/20";
const PRE = "overflow-x-auto py-2 text-[13px] bg-hunter-black-900";
const CODE =
  "grid [&>span]:border-l-4 [&>span]:border-l-transparent [&>span]:pl-2 [&>span]:pr-3";
const INLINE_BLOCK =
  "whitespace-nowrap border border-hunter-black-100/10 px-1.5 py-px text-[14px] rounded-full bg-hunter-black-800 text-black text-white before:content-['`'] after:content-['`']";
const INLINE_CODE = "";
const NUMBERED_LINES =
  "[counter-reset:line] before:[&>span]:mr-3 before:[&>span]:inline-block before:[&>span]:w-4 before:[&>span]:text-right before:[&>span]:text-white/20 before:[&>span]:![content:counter(line)] before:[&>span]:[counter-increment:line]";

const HIGHLIGHTED_LINE =
  "!border-l-hunter-blue-800/70 bg-hunter-blue-200/50 !border-l-hunter-rose-300/70 bg-hunter-rose-200/10 before:!text-hunter-blue-700 before:!text-white/70";

function transformer(tree: any) {
  visit(
    tree,
    (node: any) =>
      Boolean(
        node.tagName === "code" &&
          Object.keys(node.properties).length === 0 &&
          node.children.some((n: any) => n.type === "text")
      ),
    (node: any) => {
      const textNode = node.children.find((n: any) => n.type === "text");
      textNode.type = "element";
      textNode.tagName = "code";
      textNode.properties = { className: [INLINE_CODE] };
      textNode.children = [{ type: "text", value: textNode.value }];
      node.properties.className = [INLINE_BLOCK];
      node.tagName = "span";
    }
  );

  visit(
    tree,
    (node: any) =>
      Boolean(
        typeof node?.properties?.["data-rehype-pretty-code-fragment"] !==
          "undefined"
      ),
    (node: any) => {
      if (node.tagName === "span") {
        node.properties.className = [
          ...(node.properties.className || []),
          INLINE_BLOCK,
        ];
        node.children[0].properties.className = [
          ...(node.children[0].properties.className || []),
          INLINE_CODE,
        ];

        return node;
      }

      if (node.tagName === "div") {
        node.properties.className = [
          ...(node.properties.className || []),
          BLOCK,
        ];
        node.children = node.children.map((node: any) => {
          if (
            node.tagName === "div" &&
            typeof node.properties?.["data-rehype-pretty-code-title"] !==
              "undefined"
          ) {
            node.properties.className = [
              ...(node.properties.className || []),
              TITLE,
            ];
          }
          if (node.tagName === "pre") {
            node.properties.className = [PRE];
            if (node.children[0].tagName === "code") {
              node.children[0].properties.className = [
                ...(node.children[0].properties.className || []),
                CODE,
              ];
              if (
                typeof node.children[0].properties["data-line-numbers"] !==
                "undefined"
              ) {
                node.children[0].properties.className.push(NUMBERED_LINES);
              }
            }
          }

          return node;
        });

        return node;
      }
    }
  );
}

function rehypePrettyCodeClasses() {
  return transformer;
}

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: "one-dark-pro",
  },
  tokensMap: {
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
    node.properties.className = [""];
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push(HIGHLIGHTED_LINE);
  },
};

const contentLayerConfig = makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
    ],
  },
});

export default contentLayerConfig;
