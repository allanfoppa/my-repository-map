export function Pagination(
  pages: number,
  currentPage: number
): string {
  if (pages <= 1) return ''

  return `
    <div class="mt-8 flex justify-center gap-3 pt-8">
      ${Array.from({ length: pages }, (_, i) => i + 1)
        .map(p => `
          <button
            data-page="${p}"
            class="
              w-10 h-10 rounded-xl
              ${p === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-white hover:bg-gray-100'}
            "
          >
            ${p}
          </button>
        `).join('')}
    </div>
  `
}
