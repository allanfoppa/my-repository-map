import type { DocItem } from "../types/documentation";
import { highlight } from "../utils/highlight";
import { ArrowTopRightOnSquareIcon } from "./Icons";

export function DocumentListItem(doc: DocItem, query: string): string {
  const title = doc.title || "Untitled Document";
  const summary = doc.summary || "No description available.";

  return `
   <div
     class="relative premium-card p-6 group space-y-3 hover:border-blue-500 cursor-pointer transition-all border border-gray-100 bg-white rounded-xl shadow-sm"
     onclick="toggleDrawer('${doc.id}', '${doc.category}')"
   >
      <!-- CATEGORY & TITLE -->
      <div class="pr-8">
        <span class="text-[10px] uppercase tracking-wider text-blue-600 font-bold">${doc.category}</span>
        <h3 class="text-lg font-bold text-gray-800 mt-1">${highlight(title, query)}</h3>
      </div>

      <!-- SUMMARY -->
      <p class="text-sm text-gray-600 leading-relaxed line-clamp-2">${highlight(summary, query)}</p>

      <!-- TAGS -->
      ${
        doc.tags?.length
          ? `
        <div class="pt-2">
          <div class="flex flex-wrap gap-2">
          ${doc.tags
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

      <span class="absolute top-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors">
        ${ArrowTopRightOnSquareIcon()}
      </span>
    </div>
  `;
}
