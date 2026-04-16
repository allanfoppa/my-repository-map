type LayoutProps = {
  header: string
  search: string
  content: string
}

export function Layout({ header, search, content }: LayoutProps): string {
  return `
    <div class="min-h-screen py-8 px-6">
      <div class="max-w-4xl mx-auto">
        ${header}
        ${search}
        ${content}
      </div>
    </div>
  `
}
