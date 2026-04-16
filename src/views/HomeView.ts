import type { RepoItem } from '../data/repositories'
import { Section } from '../components/Section'
import { Pagination } from '../components/Pagination'
import { groupByCategory } from '../utils/group'

export function HomeView(
  repos: RepoItem[],
  pages: number,
  currentPage: number
): string {
  const grouped = groupByCategory(repos)

  return `
    <div class="space-y-16">
      ${Object.entries(grouped)
        .map(([category, repos]) => Section(category, repos))
        .join('')}
    </div>

    ${Pagination(pages, currentPage)}
  `
}
