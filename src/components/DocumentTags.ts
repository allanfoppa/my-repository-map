import type { DocItem } from "../types/documentation";
import { highlight } from "../utils/highlight";

export function DocumentTags(doc: DocItem, query: string): string {
  const { tags } = doc;

  return `
    ${
      tags?.length
        ? `
          <div class="pt-2">
            <div class="flex flex-wrap gap-2">
            ${tags
              .map(
                (tag) => `
              <span class="py-1 px-2.5 rounded-md ${tag.color} text-white font-semibold text-[10px] uppercase shadow-sm transition-transform hover:scale-105">
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
