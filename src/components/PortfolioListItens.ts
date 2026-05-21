import type { RepoItem } from "../types/repositories";
import { highlight } from "../utils/highlight";
import { CardSectionTitle } from "./CardSectionTitle";
import { ArrowTopRightOnSquareIcon, CheckIcon } from "./Icons";
import { PortfolioTags } from "./PortfolioTags";

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
        <p class="text-sm pb-4">${highlight(repo.description, query)}</p>
      </div>

      <!-- TAGS -->
      <div class="border-t border-gray-200">
        ${PortfolioTags(repo, query)}
      </div>

      <div class="border-t border-gray-200">
        ${CardSectionTitle("What's inside?")}
        <p class="text-sm flex items-center">
          ${CheckIcon("size-4 text-blue-600")}
          <span class="pl-1">4 High-quality screenshots</span>
        </p>
        <p class="text-sm mt-2 flex items-center">
          ${CheckIcon("size-4 text-blue-600")}
          <span class="pl-1">Live demo link</span>
        </p>
      </div>

      <span class="absolute top-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors">
        ${ArrowTopRightOnSquareIcon()}
      </span>
    </div>
  `;
}
