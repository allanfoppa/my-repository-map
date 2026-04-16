export function highlight(text: string, query: string): string {
  if (!query) return text

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'gi')

  return text.replace(
    regex,
    `<span class="bg-yellow-200 text-gray-900 rounded">$1</span>`
  )
}
