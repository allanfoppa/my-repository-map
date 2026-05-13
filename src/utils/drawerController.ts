import { marked } from "marked";
import { loadDocumentationContent } from "./markdownLoader";

export async function toggleDrawer(docId: string | null, category: string) {
  const drawer = document.querySelector("#doc-drawer")!;
  const contentArea = document.querySelector("#markdown-body")!;

  if (!docId) {
    // Logic to close drawer
    drawer.classList.add("invisible");
    return;
  }

  try {
    // Fetch markdown from data/documentation/${docId}.md
    const markdown = await loadDocumentationContent(docId, category);
    const markedContent = await marked.parse(markdown);

    // Clear previous content before inserting new rendered HTML
    contentArea.innerHTML = "";

    // Update UI
    contentArea.insertAdjacentHTML("beforeend", markedContent);

    // Show Drawer with Tailwind classes
    drawer.classList.remove("invisible");
    const contentContainer = drawer.querySelector(".relative")!;
    contentContainer.classList.replace("translate-x-full", "translate-x-0");
  } catch (error) {
    console.error("Error toggling drawer:", error);
  }
}

export function closeDrawer() {
  const drawer = document.querySelector("#doc-drawer")!;
  const backdrop = document.querySelector("#drawer-backdrop")!;
  const content = drawer.querySelector(".relative")!;

  backdrop.classList.replace("opacity-100", "opacity-0");
  content.classList.replace("translate-x-0", "translate-x-full");

  // Wait for animation to finish before hiding container
  setTimeout(() => drawer.classList.add("invisible"), 500);

  // Remove the 'id' from URL to sync state
  const url = new URL(window.location.href);
  url.searchParams.delete("id");
  window.history.pushState({}, "", url);
}
