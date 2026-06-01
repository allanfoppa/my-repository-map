import { RenderPortfolioIDetails } from "../components/RenderPortfolioIDetails";
import type { RepoItem } from "../types/repositories";

export function openModal(repo: RepoItem) {
  const modal = document.getElementById("modal")!;
  const content = document.getElementById("modal-content")!;

  content.innerHTML = RenderPortfolioIDetails(repo);
  modal.classList.remove("hidden");
}

export function closeModal() {
  const modal = document.getElementById("modal")!;
  modal.classList.add("hidden");

  const content = document.getElementById("modal-content")!;
  content.innerHTML = "";
}
