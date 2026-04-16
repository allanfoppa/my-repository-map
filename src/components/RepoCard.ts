import type { RepoItem } from '../data/repositories'

export function RepoCard(repo: RepoItem): string {
  return `
    <div class="premium-card p-6 flex justify-between items-center group">
      <div class="flex-1">
        <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          ${repo.title}
        </h3>
        <p class="text-sm text-gray-500 mt-1 max-w-xl">
          ${repo.description}
        </p>
      </div>

      <a
        href="${repo.link}"
        target="_blank"
        class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-50 text-gray-600 font-medium text-sm transition-all hover:bg-blue-600 hover:text-white"
      >
        View Code →
      </a>
    </div>
  `
}
