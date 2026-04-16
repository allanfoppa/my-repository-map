
export function bindPaginationEvents(currentPage: number, update: () => void) {
  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentPage = Number((e.target as HTMLElement).dataset.page)
      update()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })
}
