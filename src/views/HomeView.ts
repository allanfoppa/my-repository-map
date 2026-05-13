export function HomeView(currentPage: any): string {
  return `
    <section id="home-view" data-testid="home-view">
      ${currentPage}
    </section>
  `;
}
