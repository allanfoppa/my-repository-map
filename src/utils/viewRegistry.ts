import { repositories } from "../data/repositories";
import { documentation } from "../data/documentation";
import { filterRepositories, filterDocumentation } from "./filter";
import { RepositoriesView } from "../views/RepositoriesView";
import { DocumentationView } from "../views/DocumentationView";

interface ViewStrategy<T> {
  data: T[];
  filter: (items: T[], query: string) => T[];
  render: (items: T[], pages: number, current: number, query: string) => string;
}

export const viewRegistry: Record<string, ViewStrategy<any>> = {
  repositories: {
    data: repositories,
    filter: filterRepositories,
    render: RepositoriesView,
  },
  documentation: {
    data: documentation,
    filter: filterDocumentation,
    render: DocumentationView,
  },
};
