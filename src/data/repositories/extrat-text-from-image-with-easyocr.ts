import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const extratTextFromImageWithEasyOcr: RepoItem = {
  id: "computer-vision",
  title: "Extract Text from Image with EasyOCR",
  description: "Extract text from images using EasyOCR",
  category: CATEGORY_MAP["computer-vision"],
  tags: [TAGS_MAP.ocr],
  portfolio: {
    isAvailable: false,
  },
  link: "https://github.com/allanfoppa/extrat-text-from-image-with-easyocr",
};
