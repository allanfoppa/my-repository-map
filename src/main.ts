import './assets/styles/main.css'
import { repositories } from './data/repositories'
import { filterRepositories } from './utils/filter'
import { paginate, totalPages } from './components/pagination'
import { groupByCategory } from './utils/group'
import { icons } from './utils/icons'

const app = document.querySelector<HTMLDivElement>('#app')!

let currentPage = 1
const perPage = 5
let searchQuery = ''

function init() {
  app.innerHTML = `
    <div class="min-h-screen py-8 px-6">
      <div class="max-w-4xl mx-auto">

        <!-- HEADER -->
        <header class="text-center mb-8 px-4">
          <h1 class="text-5xl font-bold text-gray-900 tracking-tight font-display">
            My Repository <span class="text-blue-600">Map</span>
          </h1>
        </header>

        <!-- SEARCH -->
        <div class="mb-8">
          <div class="glass-search flex items-center p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 transition-all duration-300">
            <div class="pl-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="Filter by repository name or technology..."
              class="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>

        <!-- RESULTS CONTAINER -->
        <div id="results-container"></div>

      </div>
    </div>
  `

  document.querySelector('#search')?.addEventListener('input', (e) => {
    searchQuery = (e.target as HTMLInputElement).value
    currentPage = 1
    update()
  })

  update()
}

function update() {
  const filtered = filterRepositories(repositories, searchQuery)
  const paginated = paginate(filtered, currentPage, perPage)
  const grouped = groupByCategory(paginated)
  const pages = totalPages(filtered.length, perPage)
  const container = document.querySelector('#results-container')!

  container.innerHTML = `
    <!-- SECTIONS -->
    <div class="space-y-16">
      ${Object.entries(grouped).map(([category, repos]) => `
        <section>
          <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3 font-display">
             <span class="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-lg text-lg ring-1 ring-blue-100">${icons[category] || '📁'}</span>
             ${category}
          </h2>

          <div class="grid gap-4">
            ${repos.map(repo => `
              <div class="premium-card p-6 flex justify-between items-center group">
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    ${repo.title}
                  </h3>
                  <p class="text-sm text-gray-500 mt-1 max-w-xl">
                    ${repo.description}
                  </p>
                </div>

                <a
                  href="${repo.link}"
                  target="_blank"
                  class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-50 text-gray-600 font-medium text-sm transition-all hover:bg-blue-600 hover:text-white"
                >
                  View Code
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            `).join('')}
          </div>
        </section>
      `).join('')}
    </div>

    <!-- PAGINATION -->
    ${pages > 1 ? `
    <div class="mt-20 flex justify-center gap-3 border-t border-gray-100 pt-10">
      ${Array.from({ length: pages }, (_, i) => i + 1)
        .map(p => `
          <button
            data-page="${p}"
            class="
              w-10 h-10 rounded-xl font-medium transition-all duration-200
              ${p === currentPage
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-110'
                : 'bg-white text-gray-500 hover:bg-blue-50 hover:text-blue-600 border border-transparent'}
            "
          >
            ${p}
          </button>
        `).join('')}
    </div>
    ` : ''}
  `

  bindPaginationEvents()
}

function bindPaginationEvents() {
  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentPage = Number((e.target as HTMLElement).dataset.page)
      update()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })
}

init()
