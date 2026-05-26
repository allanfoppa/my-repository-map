import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const isNotATodoList: RepoItem = {
  id: "web-development",
  title: "ISN'T A TO-DO LIST",
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
    },
    {
      description: "Implement websocket with React context API",
      link: "https://github.com/allanfoppa/is-not-a-todo-list/blob/main/client/src/contexts/WebsocketContext.js",
    },
    {
      description: "CRUD operations with websocket",
      link: "https://github.com/allanfoppa/is-not-a-todo-list/blob/main/client/src/App.js",
    },
  ],
};
