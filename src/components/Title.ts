export function Title(mode: string): string {
  return `
    <h1>${mode.charAt(0).toUpperCase() + mode.slice(1)} <span class="text-blue-600">Log</span></h1>
  `;
}

export function RawTitle(mode: string): string {
  return mode.charAt(0).toUpperCase() + mode.slice(1);
}
