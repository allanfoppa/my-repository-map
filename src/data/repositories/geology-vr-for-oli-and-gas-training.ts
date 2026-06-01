import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const geologyVrForOliAndGasTraining: RepoItem = {
  id: "virtual-reality",
  title: "Geology VR for Oil and Gas Training",
  createdAt: new Date("2026-04-17"),
  description: "Virtual reality application for geology training",
  category: CATEGORY_MAP["virtual-reality"],
  tags: [TAGS_MAP.virtualreality],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/geology-vr-for-oil-and-gas-training",
};
