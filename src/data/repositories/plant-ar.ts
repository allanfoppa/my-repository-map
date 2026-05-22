import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const plantAr: RepoItem = {
  id: "augmented-reality",
  title: "Plant-AR",
  description:
    "Augmented reality application for plant identification and care",
  category: CATEGORY_MAP["augmented-reality"],
  tags: [TAGS_MAP.augmentedreality],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/plant-ar",
};
