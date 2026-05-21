import { BriefcaseIcon, DocumentIcon, FolderIcon } from "./Icons";

const buttonClass =
  "tab-item pb-2 text-sm font-medium transition-all duration-200 border-b-2 cursor-pointer";

const innerContainer = "flex items-center gap-2";

export function RepositoryButton() {
  return `
    <button
      id="btn-repos"
      data-testid="btn-repos"
      class="${buttonClass}"
    >
      <div class="${innerContainer}">
        ${FolderIcon()}
        <p>Repositories</p>
      </div>
    </button>
  `;
}

export function DocumentationButton() {
  return `
    <button
      id="btn-docs"
      data-testid="btn-docs"
      class="${buttonClass}"
    >
      <div class="${innerContainer}">
        ${DocumentIcon()}
        <p>Documentation</p>
      </div>
    </button>
  `;
}

export function PortfolioButton() {
  return `
    <button
      id="btn-portfolio"
      data-testid="btn-portfolio"
      class="${buttonClass}"
    >
      <div class="${innerContainer}">
        ${BriefcaseIcon()}
        <p>Portfolio</p>
      </div>
    </button>
  `;
}
