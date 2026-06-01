import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const aiQaTestingHub: RepoItem = {
  id: "web-development",
  title: "AI QA Testing Hub",
  createdAt: new Date("2026-04-18"),
  description:
    "Tool-agnostic automation framework designed to consolidate quality assurance for multiple backend and frontend applications.",
  category: CATEGORY_MAP["web-development"],
  tags: [
    TAGS_MAP.pnpm,
    TAGS_MAP.prompt,
    TAGS_MAP.typescript,
    TAGS_MAP.node,
    TAGS_MAP.ai,
    TAGS_MAP.jest,
    TAGS_MAP.playwright,
    TAGS_MAP.github_actions,
    TAGS_MAP.github_workflows,
    TAGS_MAP.github_composite_actions,
  ],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/ai-qa-testing-hub",
  references: [
    {
      description: "Github worflows with Composite Actions",
      link: "https://github.com/allanfoppa/ai-qa-testing-hub/tree/main/.github",
      createdAt: new Date("2026-04-13"),
    },
    {
      description: "Testing Pillars",
      link: "https://github.com/allanfoppa/ai-qa-testing-hub/blob/main/docs/TESTING_PILLARS.md",
      createdAt: new Date("2026-04-13"),
    },
    {
      description: "Configure Ollama",
      link: "https://github.com/allanfoppa/ai-qa-testing-hub/blob/main/docs/OLLAMA.md",
      createdAt: new Date("2026-04-13"),
    },
    {
      description: "Use command line prompts",
      link: "https://github.com/allanfoppa/ai-qa-testing-hub/tree/main/scripts",
      createdAt: new Date("2026-04-09"),
    },
  ],
};
