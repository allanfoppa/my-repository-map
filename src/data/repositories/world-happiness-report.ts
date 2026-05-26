import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const worldHappinessReport: RepoItem = {
  id: "data-science",
  title: "World Happiness Report",
  description:
    "Postgraduate final project in Artificial Intelligence and Machine Learning at Pontifical Catholic University of Minas Gerais.",
  category: CATEGORY_MAP["data-science"],
  tags: [
    TAGS_MAP.pandas,
    TAGS_MAP.numpy,
    TAGS_MAP["scikit-learn"],
    TAGS_MAP.fastapi,
  ],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/world-happiness-report",
};
