import type { RepoItem } from '../types/repositories'
import { Pagination } from '../components/Pagination'
import { RepoContainer } from '../components/RepoContainer'

export function HomeView(
  repos: RepoItem[],
  pages: number,
  currentPage: number,
  query: string
): string {

  return `
    <section id="home-view" data-testid="home-view">
      ${RepoContainer(repos, query)}
      ${Pagination(pages, currentPage)}
    </section>
  `
}
