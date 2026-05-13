import { CATEGORY_MAP } from "../constants/categoryMap";
import { TAGS_MAP } from "../constants/tagsMap";
import type { DocItem } from "../types/documentation";

export const documentation: DocItem[] = [
  {
    id: "blockquote",
    title: "Mastering Blockquotes in Markdown",
    summary:
      "A guide on how to use blockquotes effectively in Markdown for better content structuring.",
    category: CATEGORY_MAP.markdown,
    tags: [TAGS_MAP.markdown, TAGS_MAP.formatting],
  },
  {
    id: "npm_tips",
    title: "NPM Publishing & Tips",
    summary:
      "A comprehensive guide on how to publish packages to NPM and maintain versioning.",
    category: CATEGORY_MAP.tooling,
    tags: [TAGS_MAP.npm, TAGS_MAP.javascript],
  },
];
