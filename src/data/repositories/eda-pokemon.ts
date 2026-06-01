import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const edaPokemon: RepoItem = {
  id: "data-science",
  title: "EDA of Pokemon",
  createdAt: new Date("2026-04-17"),
  description: "Exploratory data analysis of Pokemon",
  category: CATEGORY_MAP["data-science"],
  tags: [
    TAGS_MAP.python,
    TAGS_MAP.pandas,
    TAGS_MAP.numpy,
    TAGS_MAP.matplotlib,
    TAGS_MAP.seaborn,
  ],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/eda-pokemon",
  references: [
    {
      description: "Data preparation",
      link: "https://github.com/allanfoppa/eda-pokemon/blob/main/data-preparation/pokemon.ipynb",
      createdAt: new Date("2023-06-30"),
    },
    {
      description: "Initial analysis",
      link: "https://github.com/allanfoppa/eda-pokemon/blob/main/analysis/initial_analysis.ipynb",
      createdAt: new Date("2023-06-30"),
    },
    {
      description: "Univariate analysis",
      link: "https://github.com/allanfoppa/eda-pokemon/blob/main/analysis/univariate_analysis.ipynb",
      createdAt: new Date("2023-07-14"),
    },
  ],
};
