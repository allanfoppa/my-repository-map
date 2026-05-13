import { getViewMode } from "./viewState";

export function updateTabsVisual() {
  const mode = getViewMode();
  const btnRepos = document.querySelector<HTMLButtonElement>("#btn-repos")!;
  const btnDocs = document.querySelector<HTMLButtonElement>("#btn-docs")!;

  // Active Classes
  const activeClasses = ["border-blue-600", "text-blue-600"];
  // Inactive Classes
  const inactiveClasses = ["border-transparent", "text-gray-500"];

  if (mode === "repositories") {
    btnRepos.classList.add(...activeClasses);
    btnRepos.classList.remove(...inactiveClasses);

    btnDocs.classList.add(...inactiveClasses);
    btnDocs.classList.remove(...activeClasses);
  } else {
    btnDocs.classList.add(...activeClasses);
    btnDocs.classList.remove(...inactiveClasses);

    btnRepos.classList.add(...inactiveClasses);
    btnRepos.classList.remove(...activeClasses);
  }
}
