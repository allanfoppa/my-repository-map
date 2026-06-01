import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const edaNps: RepoItem = {
  id: "data-science",
  title: "EDA of NPS",
  createdAt: new Date("2026-04-17"),
  description: "Exploratory data analysis of NPS",
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
  link: "https://github.com/allanfoppa/eda-nps",
  references: [
    {
      description: "Data preparation",
      link: "https://github.com/allanfoppa/eda-nps/blob/main/data-preparation/nps.ipynb",
      createdAt: new Date("2026-05-20"),
    },
    {
      description: "Initial analysis",
      link: "https://github.com/allanfoppa/eda-nps/blob/main/analysis/initial_analysis.ipynb",
      createdAt: new Date("2026-05-20"),
    },
    {
      description: "Univariate analysis",
      link: "https://github.com/allanfoppa/eda-nps/blob/main/analysis/univariate_analysis.ipynb",
      createdAt: new Date("2026-05-20"),
    },
  ],
};
