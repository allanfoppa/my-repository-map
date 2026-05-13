import type { RepoItem } from "../types/repositories";
import { Pagination } from "../components/Pagination";
import { RepoContainer } from "../components/RepoContainer";

export function RepositoriesView(
  repos: RepoItem[],
  pages: number,
  currentPage: number,
  query: string,
): string {
  return `
    <section id="repositories-view" data-testid="repositories-view">
      ${repos.length > 0 ? RepoContainer(repos, query) : "No repositories found."}
      ${Pagination(pages, currentPage)}
    </section>
  `;
}
