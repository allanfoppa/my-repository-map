import { WrapperView } from "../views/WrapperView";
import { paginate, totalPages } from "../utils/pagination";
import { getViewMode } from "../utils/viewState";
import { viewRegistry } from "../utils/viewRegistry";
import { bindPaginationEvents } from "../utils/bindPaginationEvents";
import { Title } from "../components/Title";

export function update(searchQuery: string, currentPage: number) {
  const mode = getViewMode();
  const strategy = viewRegistry[mode] || viewRegistry.repositories;
  const perPage = viewRegistry[mode].perPage || 3;

  // Logic is now data-agnostic
  const filtered = strategy.filter(strategy.data, searchQuery);
  const paginated = paginate(filtered, currentPage, perPage);
  const pages = totalPages(filtered.length, perPage);

  const container = document.querySelector("#results-container")!;

  // Render based on the current strategy
  container.innerHTML = WrapperView(
    strategy.render(paginated, pages, currentPage, searchQuery),
  );

  // Dynamic Title
  const titleElement = document.querySelector("h1");
  if (titleElement) {
    titleElement.innerHTML = Title(mode);
  }

  bindPaginationEvents((page) => {
    update(searchQuery, page);
  });
}
