import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const rickAndMortyGraphsAndStuff: RepoItem = {
  id: "web-development",
  title: "Rick and Morty graphs and stuff",
  description: "A client application to train React, Bulma and Chart.js.",
  category: CATEGORY_MAP["web-development"],
  tags: [TAGS_MAP.react, TAGS_MAP.node, TAGS_MAP.bulma],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/pokemon-jokenpo",
};
