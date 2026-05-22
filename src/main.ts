import "./assets/styles/main.css";
import { Header } from "./modules/Header";
import { ResultsContainer } from "./components/ResultsContainer";
import { SearchBar } from "./components/SearchBar";
import { Layout } from "./modules/Layout";
import { update } from "./store/updateWrapperView";
import { setViewMode } from "./utils/viewState";
import { NavBar } from "./modules/NavBar";
import { updateTabsVisual } from "./utils/tabState";
import { toggleDrawer } from "./utils/drawerController";
import {
  closeLightbox,
  nextImage,
  openLightbox,
  prevImage,
} from "./utils/lightboxController";
import { closeModal, openModal } from "./utils/modalController";
import type { RepoItem } from "./types/repositories";

const app = document.querySelector<HTMLDivElement>("#app")!;

let currentPage = 1;
let searchQuery = "";

function init() {
  app.innerHTML = Layout({
    header: Header(),
    navbar: NavBar(),
    search: SearchBar(),
    content: ResultsContainer(),
  });

  // Update tabs visual state on initial load
  updateTabsVisual();

  // Initial content load + search params
  update(searchQuery, currentPage);

  // Listener for search input changes
  document.querySelector("#search")?.addEventListener("input", (e) => {
    searchQuery = (e.target as HTMLInputElement).value;
    currentPage = 1;
    update(searchQuery, currentPage);
  });

  // Listeners for tab buttons
  document.querySelector("#btn-docs")?.addEventListener("click", () => {
    setViewMode("documentation");
    updateTabsVisual();
    update(searchQuery, 1);
  });

  document.querySelector("#btn-repos")?.addEventListener("click", () => {
    setViewMode("repositories");
    updateTabsVisual();
    update(searchQuery, 1);
  });

  document.querySelector("#btn-portfolio")?.addEventListener("click", () => {
    setViewMode("portfolio");
    updateTabsVisual();
    update(searchQuery, 1);
  });

  // Expose documentation loader to global scope for onclick handlers
  (window as any).toggleDrawer = (docId: string, category: string) => {
    toggleDrawer(docId, category);
  };
  (window as any).closeDrawer = () => {
    toggleDrawer(null, "");
  };
  (window as any).openLightbox = (
    images: { url: string; page: string }[],
    initialIndex: number,
  ) => {
    openLightbox(images, initialIndex);
  };
  (window as any).closeLightbox = closeLightbox;
  (window as any).nextImage = nextImage;
  (window as any).prevImage = prevImage;
  (window as any).openModal = (repo: RepoItem) => {
    openModal(repo);
  };
  (window as any).closeModal = closeModal;

  // Listener for browser navigation (back/forward)
  window.addEventListener("popstate", () => {
    update(searchQuery, 1);
  });
}

init();
