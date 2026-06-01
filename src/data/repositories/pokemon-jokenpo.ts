import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const pokemonJokenpo: RepoItem = {
  id: "web-development",
  title: "Pokemon Jokenpo",
  createdAt: new Date("2026-04-17"),
  description:
    "My first project in React, a game adapted from the Pokémon franchise.",
  category: CATEGORY_MAP["web-development"],
  tags: [TAGS_MAP.react, TAGS_MAP.node, TAGS_MAP.mysql, TAGS_MAP.docker],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/pokemon-jokenpo",
};
