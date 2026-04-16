import type { RepoItem } from '../data/repositories'
import { RepoCard } from './RepoCard'
import { icons } from '../utils/icons'

export function Section(category: string, repos: RepoItem[], query: string): string {
  return `
    <section>
      <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
        <span class="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-lg">
          ${icons[category] || '📁'}
        </span>
        ${category}
      </h2>

      <div class="grid gap-4">
        ${repos.map(repo => RepoCard(repo, query)).join('')}
      </div>
    </section>
  `
}
