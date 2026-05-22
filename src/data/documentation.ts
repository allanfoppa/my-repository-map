import { CATEGORY_MAP } from "../constants/categoryMap";
import { TAGS_MAP } from "../constants/tagsMap";
import type { DocItem } from "../types/documentation";

export const documentation: DocItem[] = [
  {
    id: "barrel_pattern",
    title: "Barrel Pattern",
    summary: "A technique used to simplify and organize imports.",
    category: CATEGORY_MAP["software-architecture"],
    tags: [TAGS_MAP.web_development],
  },
  {
    id: "git",
    title: "Git Basics",
    summary:
      "An introduction to Git, covering basic commands and workflows for version control.",
    category: CATEGORY_MAP.tooling,
    tags: [TAGS_MAP.git, TAGS_MAP.versioncontrol],
  },
  {
    id: "commit",
    title: "How to Write a Good Commit Message",
    summary:
      "Best practices for writing clear and informative commit messages in version control systems.",
    category: CATEGORY_MAP.tooling,
    tags: [TAGS_MAP.git],
  },
  {
    id: "markdown",
    title: "Markdown Guide",
    summary: "A guide on how to use Markdown for better content structuring.",
    category: CATEGORY_MAP.markdown,
    tags: [TAGS_MAP.markdown, TAGS_MAP.formatting],
  },
  {
    id: "command_line_tips",
    title: "Command Line Tips for Linux",
    summary:
      "Useful tips and tricks for navigating and working with the command line in Linux.",
    category: CATEGORY_MAP["operating-systems"],
    tags: [TAGS_MAP.cli, TAGS_MAP.linux],
  },
  {
    id: "npm",
    title: "NPM Publishing & Tips",
    summary:
      "A comprehensive guide on how to publish packages to NPM and maintain versioning.",
    category: CATEGORY_MAP.tooling,
    tags: [TAGS_MAP.npm, TAGS_MAP.javascript],
  },
  {
    id: "issues",
    title: "Effective Issue Management",
    summary:
      "Strategies for managing and triaging issues in software projects using platforms like GitHub.",
    category: CATEGORY_MAP.tooling,
    tags: [TAGS_MAP.github_workflows, TAGS_MAP.git],
  },
  {
    id: "mime_types",
    title: "Common MIME Types",
    summary:
      "A reference guide to common MIME types used in web development and APIs.",
    category: CATEGORY_MAP.web,
    tags: [TAGS_MAP.https, TAGS_MAP.web_development],
  },
  {
    id: "postman_basic_tests",
    title: "Postman Basic Tests",
    summary:
      "An introduction to writing basic tests in Postman for API validation.",
    category: CATEGORY_MAP.tooling,
    tags: [TAGS_MAP.rest, TAGS_MAP.postman],
  },
];
