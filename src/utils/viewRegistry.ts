import { repositories } from "../data/repositories";
import { documentation } from "../data/documentation";
import { filterRepositories, filterDocumentation } from "./filter";
import { RepositoriesView } from "../views/RepositoriesView";
import { DocumentationView } from "../views/DocumentationView";
import { PortfolioView } from "../views/PortfolioView";

interface ViewStrategy<T> {
  data: T[];
  perPage?: number;
  filter: (items: T[], query: string) => T[];
  render: (items: T[], pages: number, current: number, query: string) => string;
}

export const viewRegistry: Record<string, ViewStrategy<any>> = {
  repositories: {
    data: repositories,
    perPage: 6,
    filter: filterRepositories,
    render: RepositoriesView,
  },
  documentation: {
    data: documentation,
    perPage: 6,
    filter: filterDocumentation,
    render: DocumentationView,
  },
  portfolio: {
    data: repositories,
    perPage: 999,
    filter: filterRepositories,
    render: PortfolioView,
  },
};
