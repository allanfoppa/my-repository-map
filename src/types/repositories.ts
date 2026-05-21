import type { CATEGORY_MAP } from "../constants/categoryMap";
import type { TAGS_MAP } from "../constants/tagsMap";

export type ScreenShot = {
  page: string;
  url: string;
};

export type PortFolioMetadata = {
  screenShots?: ScreenShot[];
  liveDemo?: string;
};

export type Portfolio = {
  isAvailable: Boolean;
  metadata?: PortFolioMetadata;
};

export type Reference = {
  description: string;
  link: string;
};

export type RepoItem = {
  id: keyof typeof CATEGORY_MAP;
  title: string;
  description: string;
  category: (typeof CATEGORY_MAP)[keyof typeof CATEGORY_MAP];
  tags: (typeof TAGS_MAP)[keyof typeof TAGS_MAP][];
  portfolio: Portfolio;
  references?: Reference[];
  link: string;
};
