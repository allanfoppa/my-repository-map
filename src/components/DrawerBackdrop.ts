export function DrawerBackdrop(): string {
  return `
    <div
      id="drawer-backdrop"
      class="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 pointer-events-none"
      onclick="closeDrawer()"></div>
  `;
}
