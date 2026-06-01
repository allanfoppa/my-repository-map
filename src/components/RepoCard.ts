import type { RepoItem } from "../types/repositories";
import { highlight } from "../utils/highlight";
import { CardSectionTitle } from "./CardSectionTitle";
import { RepoReferencesLink } from "./RepoReferencesLink";
import { RepoReferencesStatus } from "./RepoReferencesStatus";
import { RepoTags } from "./RepoTags";
import { ViewRepositoryButton } from "./ViewRepositoryButton";

export function RepoCard(repo: RepoItem, query: string): string {
  return `
    <div class="premium-card p-6 group space-y-4 hover:border-blue-500">

      <!-- CATEGORY -->
      <div class="border-b flex justify-between items-center border-gray-200 pb-4">
        <div>
          ${CardSectionTitle("Category")}
          <h3 class="text-lg font-semibold text-gray-800 flex items-center gap-3">
            ${repo.category}
          </h3>
        </div>
        <!-- REFERENCES STATUS -->
        ${RepoReferencesStatus(repo)}
      </div>


      <!-- REPO INFO -->
      <div class="flex justify-between items-center">
        <div class="flex-1">
          ${CardSectionTitle("Title")}
          <h3 class="text-lg font-bold text-gray-900 transition-colors">
            ${highlight(repo.title, query)}
          </h3>
          <p class="text-sm text-gray-500 mt-1 max-w-xl">
            ${highlight(repo.description, query)}
          </p>
        </div>

        ${ViewRepositoryButton(repo.link)}
      </div>

      <!-- TAGS -->
      ${RepoTags(repo, query)}

      <!-- REFERENCES -->
      ${RepoReferencesLink(repo, query)}
    </div>
  `;
}
