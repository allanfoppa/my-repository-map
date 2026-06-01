import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const itIsOver9000: RepoItem = {
  id: "web-development",
  title: "It's Over 9000",
  createdAt: new Date("2026-04-17"),
  description: "A Dragon Ball–themed QA playground using BDD and others",
  category: CATEGORY_MAP["web-development"],
  tags: [
    TAGS_MAP.react,
    TAGS_MAP.styledcomponents,
    TAGS_MAP.cypress,
    TAGS_MAP.jest,
    TAGS_MAP.bdd,
    TAGS_MAP.vite,
  ],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/it-is-over-9000",
  references: [
    {
      description: "BDD with Cucumber",
      link: "https://github.com/allanfoppa/it-is-over-9000/tree/main/bdd",
      createdAt: new Date("2026-05-20"),
    },
  ],
};
