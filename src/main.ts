import "./assets/styles/main.css";
import { Header } from "./modules/Header";
import { ResultsContainer } from "./components/ResultsContainer";
import { SearchBar } from "./components/SearchBar";
import { Layout } from "./modules/Layout";
import { update } from "./utils/updateHomeView";
import { setViewMode } from "./utils/viewState";
import { NavBar } from "./modules/NavBar";
import { updateTabsVisual } from "./utils/tabState";
import { toggleDrawer } from "./utils/drawerController";

const app = document.querySelector<HTMLDivElement>("#app")!;

let currentPage = 1;
const perPage = 6;
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
  update(searchQuery, currentPage, perPage);

  // Listener for search input changes
  document.querySelector("#search")?.addEventListener("input", (e) => {
    searchQuery = (e.target as HTMLInputElement).value;
    currentPage = 1;
    update(searchQuery, currentPage, perPage);
  });

  // Listeners for tab buttons
  document.querySelector("#btn-docs")?.addEventListener("click", () => {
    setViewMode("documentation");
    updateTabsVisual();
    update(searchQuery, 1, perPage);
  });

  document.querySelector("#btn-repos")?.addEventListener("click", () => {
    setViewMode("repositories");
    updateTabsVisual();
    update(searchQuery, 1, perPage);
  });

  // Expose documentation loader to global scope for onclick handlers
  (window as any).toggleDrawer = (docId: string, category: string) => {
    toggleDrawer(docId, category);
  };
  (window as any).closeDrawer = () => {
    toggleDrawer(null, "");
  };

  // Listener for browser navigation (back/forward)
  window.addEventListener("popstate", () => {
    update(searchQuery, 1, perPage);
  });
}

init();
