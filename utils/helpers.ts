import kv from "@vercel/kv";

type TWithPublishedAt = {
  publishedAt: string;
};

export async function getViewCount(
  views: { [key: string]: number } | null,
  slug: string
) {
  if (!views) return new Error("No views found");
  if (views.hasOwnProperty(slug)) {
    return views[slug];
  }

  views[slug] = 0;
  await kv.hset("views", views);

  return 0;
}

export const getSortByPublishAt = (sort: "asc" | "desc" | null | undefined) => {
  if (sort === "asc") {
    return (a: TWithPublishedAt, b: TWithPublishedAt) =>
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
  }
  return (a: TWithPublishedAt, b: TWithPublishedAt) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
};

export const getAsciiArt = () => {
  const asciiArt = `
##############################
##############################
############@@@@@@############
#########@@@@#S###@@@@########
######@@@@#?+,:##%+%#@@@@#####
#####@@#S;:**.:##?..:###@#####
#####@@#?.;@%.:##%..;###@#####
#####@@#?.:+,,?##S??%###@#####
#####@@#?.+S;.:##%..:###@#####
#####@@#S:*@*.:##?..;###@#####
######@@@@##?,:##%+%S@@@@#####
#########@@@@#S###@@@@########
############@@@@@@############
##############################
##############################
`;

  const name = "Railly Hugo";

  return [
    `%c${asciiArt}\n%c${name}\n%cSoftware Engineer - RaillyHugo.com`,
    "color: #66cc66; font-size: 14px; font-family: monospace;",
    "color: #ffcc66; font-size: 16px; font-weight: bold;",
    "color: #ff6666; font-size: 12px;",
  ];
};
