import type { CATEGORY_MAP } from "../constants/categoryMap";
import type { TAGS_MAP } from "../constants/tagsMap";

export type DocItem = {
  id: string;
  title: string;
  summary: string;
  category: (typeof CATEGORY_MAP)[keyof typeof CATEGORY_MAP];
  tags: (typeof TAGS_MAP)[keyof typeof TAGS_MAP][];
};
