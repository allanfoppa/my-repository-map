import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const isNotATodoList: RepoItem = {
  id: "web-development",
  title: "ISN'T A TO-DO LIST",
  createdAt: new Date("2026-04-17"),
  description: "Registration of people in a to-do list like in real time.",
  category: CATEGORY_MAP["web-development"],
  tags: [
    TAGS_MAP.nestjs,
    TAGS_MAP.react,
    TAGS_MAP.websocket,
    TAGS_MAP.chakraui,
  ],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/is-not-a-todo-list",
  references: [
    {
      description: "Implement websocket with Nestjs",
      link: "https://github.com/allanfoppa/is-not-a-todo-list/tree/main/websocket/src/components/people",
      createdAt: new Date("2026-05-26"),
    },
    {
      description: "Implement websocket with React context API",
      link: "https://github.com/allanfoppa/is-not-a-todo-list/blob/main/client/src/contexts/WebsocketContext.js",
      createdAt: new Date("2026-05-26"),
    },
    {
      description: "CRUD operations with websocket",
      link: "https://github.com/allanfoppa/is-not-a-todo-list/blob/main/client/src/App.js",
      createdAt: new Date("2026-05-26"),
    },
  ],
};
