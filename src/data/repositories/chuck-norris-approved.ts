import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const chuckNorrisApproved: RepoItem = {
  id: "web-development",
  title: "Chuck Norris Approved",
  createdAt: new Date("2026-05-20"),
  description:
    "Small web application with Chuck Norris jokes, being my first contact with SolidJS.",
  category: CATEGORY_MAP["web-development"],
  tags: [TAGS_MAP.solidjs, TAGS_MAP.vite, TAGS_MAP.tailwind, TAGS_MAP.daisyui],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/chuck-norris-approved",
};
