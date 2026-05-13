import { DocumentsContainer } from "../components/DocumentsContainer";
import { Pagination } from "../components/Pagination";
import type { DocItem } from "../types/documentation";

export function DocumentationView(
  docs: DocItem[],
  pages: number,
  currentPage: number,
  query: string,
): string {
  return `
    <section id="documentation-view" data-testid="documentation-view">
      ${docs.length > 0 ? DocumentsContainer(docs, query) : "No documentation found."}
      ${Pagination(pages, currentPage)}
    </section>
  `;
}
