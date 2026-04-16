import type { RepoItem } from '../data/repositories'
import { Pagination } from '../components/Pagination'
import { groupByCategory } from '../utils/group'
import { Section } from '../components/Section'

export function HomeView(
  repos: RepoItem[],
  pages: number,
  currentPage: number,
  query: string
): string {
  const grouped = groupByCategory(repos)

  return `
    <div class="space-y-16">
      ${Object.entries(grouped)
        .map(([category, repos]) => Section(category, repos, query))
        .join('')}
    </div>

    ${Pagination(pages, currentPage)}
  `
}
