import { NoContent } from "../components/NoContent";
import { PortfolioListItens } from "../components/PortfolioListItens";
import type { RepoItem } from "../types/repositories";

export function PortfolioView(
  repos: RepoItem[],
  _pages: number,
  _currentPage: number,
  query: string,
): string {
  const portfolioCards = repos
    .filter((repo) => repo.portfolio.isAvailable)
    .map((repo) => PortfolioListItens(repo, query))
    .sort(() => Math.random() - 0.5)
    .join("");

  const Container = () => {
    return `
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        ${portfolioCards}
      </div>
    `;
  };

  return `
    <section id="portfolio-view" data-testid="portfolio-view">
      ${portfolioCards.length > 0 ? Container() : NoContent("portfolio projects")}
    </section>
  `;
}
