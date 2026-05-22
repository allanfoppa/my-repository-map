import { XMarkIcon } from "./Icons";

export function Modal(): string {
  return `
    <div
      id="modal"
      class="fixed inset-0 z-100 hidden flex items-center justify-center bg-black/50 p-2 md:p-10"
      onclick="if(event.target.id === 'modal') closeModal()"
    >
      <div class="bg-white w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl p-12 relative">
        <button onclick="closeModal()" class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 text-2xl">${XMarkIcon()}</button>
        <article id="modal-content" class="prose prose-slate max-w-none"></article>
      </div>
    </div>
  `;
}
