import type { DocItem } from "../types/documentation";
import { highlight } from "../utils/highlight";
import { DocumentTags } from "./DocumentTags";
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
      ${DocumentTags(doc, query)}

      <span class="absolute top-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors">
        ${ArrowTopRightOnSquareIcon()}
      </span>
    </div>
  `;
}
