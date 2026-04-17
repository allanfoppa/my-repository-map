export function SearchBar(): string {

  const placeholder = 'Search by repository name, description, tag or code references...'

  return `
    <div class="mb-8">
      <div class="glass-search flex items-center p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 transition-all duration-300">
        <div class="pl-4 text-gray-400">
          🔍
        </div>
        <input
          id="search"
          type="text"
          data-testid="search-input"
          placeholder="${placeholder}"
          class="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
        />
      </div>
    </div>
  `
}
