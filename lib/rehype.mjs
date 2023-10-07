import { visit } from "unist-util-visit";
import path from "path";
import { getHighlighter, loadTheme, BUNDLED_LANGUAGES }from 'shiki'

// div.BLOCK > pre.PRE > code.CODE
const BLOCK = "overflow-hidden rounded-lg leading-6 shadow-lg !my-8 !font-mono";
const TITLE =
  "rounded-t-md bg-[#23272e] px-3 py-1 font-mono text-xs !text-white/70 !font-mono";
const PRE = "overflow-x-auto py-2 text-[13px] bg-[#23272e] !font-mono";
const CODE =
  "grid [&>span]:border-l-4 [&>span]:border-l-transparent [&>span]:pl-2 [&>span]:pr-3";
const INLINE_BLOCK =
  "whitespace-nowrap border border-border px-1.5 py-px text-[14px] rounded-md bg-border/80 text-foreground/80 !font-mono";
const INLINE_CODE = "";
const NUMBERED_LINES =
  "[counter-reset:line] before:[&>span]:mr-3 before:[&>span]:inline-block before:[&>span]:w-4 before:[&>span]:text-right before:[&>span]:text-white/20 before:[&>span]:![content:counter(line)] before:[&>span]:[counter-increment:line] !text-white !font-mono";

const HIGHLIGHTED_LINE =
  "!border-l-hunter-blue-300/70 bg-hunter-blue-200/10 before:!text-white/70 !font-mono";

function transformer(tree) {
  visit(
    tree,
    (node) =>
      Boolean(
        node.tagName === "code" &&
          Object.keys(node.properties).length === 0 &&
          node.children.some((n) => n.type === "text")
      ),
    (node) => {
      const textNode = node.children.find((n) => n.type === "text");
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
    (node) =>
      Boolean(
        typeof node?.properties?.["data-rehype-pretty-code-fragment"] !==
          "undefined"
      ),
    (node) => {
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
        node.children = node.children.map((node) => {
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

export function rehypePrettyCodeClasses() {
  return transformer;
}

const loadHunterTheme = async () => {
  const theme = await loadTheme(
    path.join(process.cwd(), "lib/one-hunter-theme-dark.json")
  );
  return theme;
};

export const rehypePrettyCodeOptions = {
  getHighlighter: async (options) => getHighlighter({
      ...options,
      theme: await loadHunterTheme(),
      langs: [
        ...BUNDLED_LANGUAGES,
      ]
  }),
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

