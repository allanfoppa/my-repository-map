export function WrapperView(currentPage: any): string {
  return `
    <section id="base-view" data-testid="base-view">
      ${currentPage}
    </section>
  `;
}
