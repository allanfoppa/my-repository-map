import {
  RepositoryButton,
  DocumentationButton,
  PortfolioButton,
} from "../components/NavBarButtons";

export function NavBar(): string {
  return `
    <nav class="view-tabs flex justify-center gap-8 mb-4" data-testid="navbar">
      ${RepositoryButton()}
      ${DocumentationButton()}
      ${PortfolioButton()}
    </nav>
  `;
}
