import { HomeView } from "../views/HomeView"
import { bindPaginationEvents } from "./bindPaginationEvents"
import { filterRepositories } from "./filter"
import { paginate, totalPages } from "./pagination"
import { repositories } from "../data/repositories"

export function update(
  searchQuery: string,
  currentPage: number,
  perPage: number
) {
  const filtered = filterRepositories(repositories, searchQuery)
  const paginated = paginate(filtered, currentPage, perPage)
  const pages = totalPages(filtered.length, perPage)

  const container = document.querySelector('#results-container')!

  container.innerHTML = HomeView(paginated, pages, currentPage)

  bindPaginationEvents((page) => {
    update(searchQuery, page, perPage)
  })
}
