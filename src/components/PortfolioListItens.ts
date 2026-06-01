import type { RepoItem } from "../types/repositories";
import { highlight } from "../utils/highlight";
import { CardSectionTitle } from "./CardSectionTitle";
import { ArrowTopRightOnSquareIcon } from "./Icons";
import { PortfolioTags } from "./PortfolioTags";
import { LiveDemo, ProjectDocumentation, ScreenShot } from "./WhatIsInside";

export function PortfolioListItens(repo: RepoItem, query: string): string {
  const repoSerialized = JSON.stringify(repo).replace(/"/g, "&quot;");
  const { title, description, portfolio } = repo;

  return `
   <div
     class="relative premium-card p-4 group space-y-6 hover:border-blue-500 transition-all border border-gray-100 bg-white rounded-xl shadow-sm"
     onclick="openModal(JSON.parse('${repoSerialized}'))"
   >
      <!-- CATEGORY & TITLE -->
      <div class="h-16">
        ${CardSectionTitle("Project")}
        <h3 class="font-bold text-gray-800 mt-1">${highlight(title, query)}</h3>
      </div>

      <!-- SHORT DESCRIPTION -->
      <div class="border-t border-gray-200">
        ${CardSectionTitle("What's about?")}
        <p class="text-sm pb-4">${highlight(description, query)}</p>
      </div>

      <!-- TAGS -->
      <div class="border-t border-gray-200">
        ${PortfolioTags(repo, query)}
      </div>

      <div class="border-t border-gray-200">
        ${CardSectionTitle("What's inside?")}
        ${ProjectDocumentation()}
        ${ScreenShot(portfolio.metadata?.screenShots)}
        ${LiveDemo(portfolio.metadata?.liveDemo)}
      </div>

      <span class="absolute top-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors">
        ${ArrowTopRightOnSquareIcon()}
      </span>
    </div>
  `;
}
