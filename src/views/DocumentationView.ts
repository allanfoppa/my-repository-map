import { DocumentListItem } from "../components/DocumentListItem";
import { NoContent } from "../components/NoContent";
import { Pagination } from "../components/Pagination";
import type { DocItem } from "../types/documentation";

export function DocumentationView(
  docs: DocItem[],
  pages: number,
  currentPage: number,
  query: string,
): string {
  const docCards = docs
    .map((doc) => DocumentListItem(doc, query))
    .sort(() => Math.random() - 0.5)
    .join("");

  const Container = () => {
    return `
      <div class="grid gap-4">
        ${docCards}
      </div>
    `;
  };

  return `
    <section id="documentation-view" data-testid="documentation-view">
      ${docCards.length > 0 ? Container() : NoContent("documents")}
      ${Pagination(pages, currentPage)}
    </section>
  `;
}
