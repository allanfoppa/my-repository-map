import type { RepoItem } from "../types/repositories";
import { highlight } from "../utils/highlight";
import { CardSectionTitle } from "./CardSectionTitle";

export function PortfolioTags(item: RepoItem, query: string): string {
  return `
    ${
      item.tags?.length
        ? `
          <div>
            ${CardSectionTitle("Tags")}
            <div class="flex flex-wrap">
            ${item.tags
              .map(
                (tag) => `
              <span class="py-1 px-3 my-1 mx-1 rounded-md ${tag.color} text-white font-medium text-xs shadow-sm shadow-blue-100 transition-transform hover:scale-105 cursor-default">
                ${highlight(tag.label, query)}
              </span>
            `,
              )
              .join("")}
            </div>
          </div>
        `
        : ""
    }
  `;
}
