import { RenderPortfolioIDetails } from "../components/RenderPortfolioIDetails";
import type { RepoItem } from "../types/repositories";

export function openModal(repo: RepoItem) {
  const modal = document.getElementById("modal")!;
  const content = document.getElementById("modal-content")!;

  // Aqui você buscaria os dados do projeto e injetaria no content
  content.innerHTML = RenderPortfolioIDetails(repo);

  modal.classList.remove("hidden");
}

export function closeModal() {
  const modal = document.getElementById("modal")!;
  modal.classList.add("hidden");

  // Opcional: limpar o conteúdo ao fechar para não ficar resquício do anterior
  const content = document.getElementById("modal-content")!;
  content.innerHTML = "";
}
