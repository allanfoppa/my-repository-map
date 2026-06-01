const linkClass =
  "btn-view flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-50 text-gray-600 font-medium text-sm transition-all hover:bg-blue-600 hover:text-white";

export function ViewCodeButton(link: string, className: string = ""): string {
  return `
    <a
      href="${link}"
      target="_blank"
      rel="noopener noreferrer"
      class="${linkClass} ${className}"
    >
      View Code
      <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  `;
}
