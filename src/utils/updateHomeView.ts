import { HomeView } from "../views/HomeView";
import { paginate, totalPages } from "./pagination";
import { getViewMode } from "./viewState";
import { viewRegistry } from "../utils/viewRegistry";
import { bindPaginationEvents } from "./bindPaginationEvents";
import { Title } from "../components/Title";

export function update(
  searchQuery: string,
  currentPage: number,
  perPage: number,
) {
  const mode = getViewMode();
  const strategy = viewRegistry[mode] || viewRegistry.repositories;

  // Logic is now data-agnostic
  const filtered = strategy.filter(strategy.data, searchQuery);
  const paginated = paginate(filtered, currentPage, perPage);
  const pages = totalPages(filtered.length, perPage);

  const container = document.querySelector("#results-container")!;

  // Render based on the current strategy
  container.innerHTML = HomeView(
    strategy.render(paginated, pages, currentPage, searchQuery),
  );

  // Dynamic Title
  const titleElement = document.querySelector("h1");
  if (titleElement) {
    titleElement.innerHTML = Title(mode);
  }

  bindPaginationEvents((page) => {
    update(searchQuery, page, perPage);
  });
}
