import type { RepoItem } from "../types/repositories";
import { highlight } from "../utils/highlight";
import { CardSectionTitle } from "./CardSectionTitle";
import { ArrowTopRightOnSquareIcon, Check } from "./Icons";

export function PortfolioListItens(repo: RepoItem, query: string): string {
  return `
   <div
     class="relative premium-card p-4 group space-y-6 hover:border-blue-500 transition-all border border-gray-100 bg-white rounded-xl shadow-sm"
   >
      <!-- CATEGORY & TITLE -->
      <div class="h-16">
        ${CardSectionTitle("Project")}
        <h3 class="font-bold text-gray-800 mt-1">${highlight(repo.title, query)}</h3>
      </div>

      <!-- SHORT DESCRIPTION -->
      <div class="border-t border-gray-200">
        ${CardSectionTitle("What's about?")}
        <p class="text-sm pb-4">${repo.description}</p>
      </div>

      <!-- TAGS -->
      <div class="border-t border-gray-200">
        ${
          repo.tags?.length
            ? `
          <div>
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
      </div>

      <div class="border-t border-gray-200">
        ${CardSectionTitle("What's inside?")}
        <p class="text-sm flex items-center">
          ${Check("size-4 text-blue-600")}
          <span class="pl-1">4 High-quality screenshots</span>
        </p>
        <p class="text-sm mt-2 flex items-center">
          ${Check("size-4 text-blue-600")}
          <span class="pl-1">Live demo link</span>
        </p>
      </div>

      <span class="absolute top-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors">
        ${ArrowTopRightOnSquareIcon()}
      </span>
    </div>
  `;
}
