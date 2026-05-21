import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const edaNps: RepoItem = {
  id: "data-science",
  title: "EDA of NPS",
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
    isAvailable: true,
    metadata: {
      liveDemo: "https://allanfoppa.github.io/my-dev-log/?view=repositories",
    },
  },
  link: "https://github.com/allanfoppa/eda-nps",
  references: [
    {
      description: "Data preparation",
      link: "https://github.com/allanfoppa/eda-nps/blob/main/data-preparation/nps.ipynb",
    },
    {
      description: "Initial analysis",
      link: "https://github.com/allanfoppa/eda-nps/blob/main/analysis/initial_analysis.ipynb",
    },
    {
      description: "Univariate analysis",
      link: "https://github.com/allanfoppa/eda-nps/blob/main/analysis/univariate_analysis.ipynb",
    },
  ],
};
