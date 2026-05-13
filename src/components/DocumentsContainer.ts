import type { DocItem } from "../types/documentation";
import { DocListItem } from "./DocListItem";

export function DocumentsContainer(docs: DocItem[], query: string): string {
  const docCards = docs
    .map((doc) => DocListItem(doc, query))
    .sort(() => Math.random() - 0.5)
    .join("");

  return `
    <section>
      <div class="grid gap-4">
        ${docCards}
      </div>
    </section>
  `;
}
