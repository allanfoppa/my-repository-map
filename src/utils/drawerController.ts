import { marked } from "marked";
import { loadDocumentationContent } from "./markdownLoader";

export async function toggleDrawer(docId: string | null, category: string) {
  const drawer = document.querySelector("#doc-drawer")!;
  const backdrop = document.querySelector("#drawer-backdrop")!;
  const contentArea = document.querySelector("#markdown-body")!;
  const contentContainer = drawer.querySelector(".relative")!;

  if (!docId) {
    closeDrawer();
    return;
  }

  try {
    const markdown = await loadDocumentationContent(docId, category);
    const markedContent = await marked.parse(markdown);
    contentArea.innerHTML = markedContent;

    // OPEN:
    drawer.classList.remove("invisible");

    // Backdrop now is visible and interable
    backdrop.classList.remove("opacity-0", "pointer-events-none");
    backdrop.classList.add("opacity-100");

    // Translate the drawer
    contentContainer.classList.replace("translate-x-full", "translate-x-0");
  } catch (error) {
    console.error("Error toggling drawer:", error);
  }
}

export function closeDrawer() {
  const drawer = document.querySelector("#doc-drawer")!;
  const backdrop = document.querySelector("#drawer-backdrop")!;
  const content = drawer.querySelector(".relative")!;

  // Closes backdrop
  backdrop.classList.remove("opacity-100");
  backdrop.classList.add("opacity-0", "pointer-events-none");

  // Closes container
  content.classList.replace("translate-x-0", "translate-x-full");

  // Turns invisible after animation
  setTimeout(() => drawer.classList.add("invisible"), 500);

  const url = new URL(window.location.href);
  url.searchParams.delete("id");
  window.history.pushState({}, "", url);
}
