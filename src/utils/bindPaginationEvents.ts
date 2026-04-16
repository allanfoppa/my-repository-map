
export function bindPaginationEvents(
  onPageChange: (page: number) => void
) {
  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const page = Number((e.currentTarget as HTMLElement).dataset.page)

      onPageChange(page)

      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })
}
