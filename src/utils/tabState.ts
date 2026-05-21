import { getViewMode, type ViewMode } from "./viewState";

// Define the configuration for each tab
const TABS: { id: string; section: ViewMode }[] = [
  { id: "#btn-repos", section: "repositories" },
  { id: "#btn-docs", section: "documentation" },
  { id: "#btn-portfolio", section: "portfolio" },
];

export function updateTabsVisual() {
  const currentMode = getViewMode();

  TABS.forEach(({ id, section }) => {
    const btn = document.querySelector<HTMLButtonElement>(id);
    if (!btn) return;

    const isActive = section === currentMode;

    // Toggle classes based on active state
    btn.classList.toggle("border-blue-600", isActive);
    btn.classList.toggle("text-blue-600", isActive);

    btn.classList.toggle("border-transparent", !isActive);
    btn.classList.toggle("text-gray-500", !isActive);
  });
}
