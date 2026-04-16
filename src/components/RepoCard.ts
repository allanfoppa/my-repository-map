import type { RepoItem } from '../data/repositories'
import { highlight } from '../utils/highlight'

export function RepoCard(repo: RepoItem, query: string): string {
  return `
    <div class="premium-card p-6 group space-y-4">

      <!-- REPO INFO (TOP ROW) -->
      <div class="flex justify-between items-center">
        <div class="flex-1">
          <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            ${highlight(repo.title, query)}
          </h3>
          <p class="text-sm text-gray-500 mt-1 max-w-xl">
            ${highlight(repo.description, query)}
          </p>
        </div>

        <a
          href="${repo.link}"
          target="_blank"
          class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-50 text-gray-600 font-medium text-sm transition-all hover:bg-blue-600 hover:text-white"
        >
          View Repository →
        </a>
      </div>

      <!-- REFERENCES (BOTTOM ROW) -->
      ${
        repo.references?.length
          ? `
        <div class="border-t border-gray-200 pt-4">
          <p class="text-sm text-gray-400 mb-2">References</p>

          <div class="space-y-2">
            ${repo.references.map(ref => `
              <div class="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
                <h3 class="text-lg font-bold text-gray-900">
                  ${highlight(ref.description, query)}
                </h3>
                <a
                  href="${ref.link}"
                  target="_blank"
                  class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-50 text-gray-600 font-medium text-sm transition-all hover:bg-blue-600 hover:text-white"
                >
                  View Code →
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      `
          : ''
      }

    </div>
  `
}
