import type { RepoItem } from "../types/repositories";
import { Pagination } from "../components/Pagination";
import { RepoCard } from "../components/RepoCard";
import { NoContent } from "../components/NoContent";

export function RepositoriesView(
  repos: RepoItem[],
  pages: number,
  currentPage: number,
  query: string,
): string {
  const repoCards = repos
    .map((repo) => RepoCard(repo, query))
    .sort(() => Math.random() - 0.5)
    .join("");

  const Container = () => {
    return `
      <div class="grid gap-4">
        ${repoCards}
      </div>
    `;
  };

  return `
    <section id="repositories-view" data-testid="repositories-view">
      ${repoCards.length > 0 ? Container() : NoContent("repositories")}
      ${Pagination(pages, currentPage)}
    </section>
  `;
}
