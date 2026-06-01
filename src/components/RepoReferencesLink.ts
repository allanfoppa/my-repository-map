import type { RepoItem } from "../types/repositories";
import { highlight } from "../utils/highlight";
import { ViewCodeButton } from "./ViewCodeButton";
import { getReferenceAge } from "../utils/getReferenceAge";

export function RepoReferencesLink(repo: RepoItem, query: string): string {
  return `
    ${
      repo.references?.length
        ? `
          <div class="border-t border-gray-200 pt-4">
            <p class="text-sm text-gray-400 mb-2">References</p>

            <div class="space-y-2">
              ${repo.references
                .map(
                  (ref) => `
                <div
                  class="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2
                   ${ref.createdAt ? getReferenceAge(ref.createdAt) : "up-to-date"}"
                >
                  <h3 class="text-lg font-bold text-gray-900">
                    ${highlight(ref.description, query)}
                  </h3>
                  ${ViewCodeButton(ref.link)}
                </div>
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
