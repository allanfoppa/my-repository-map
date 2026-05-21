import type { RepoItem } from "../types/repositories";
import { highlight } from "../utils/highlight";
import { CardSectionTitle } from "./CardSectionTitle";

export function RepoTags(repo: RepoItem, query: string): string {
  return `
    ${
      repo.tags?.length
        ? `
          <div class="border-t border-gray-200 pt-4">
            ${CardSectionTitle("Tags")}
            <div class="flex flex-wrap">
            ${repo.tags
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
