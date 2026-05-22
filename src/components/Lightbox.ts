import { XMarkIcon } from "./Icons";

export function LightBox(): string {
  return `
    <div id="lightbox" class="fixed inset-0 z-[100] hidden flex items-center justify-center bg-black/100">
      <button id="close-lightbox" onclick="closeLightbox()" class="absolute cursor-pointer top-5 right-5 text-white text-4xl">${XMarkIcon()}</button>
      <button id="prev-btn" onclick="prevImage()" class="absolute cursor-pointer left-5 text-white text-4xl">‹</button>
      <img id="lightbox-img" src="" class="max-w-[90%] max-h-[90%] object-contain" />
      <button id="next-btn" onclick="nextImage()" class="absolute cursor-pointer right-5 text-white text-4xl">›</button>
    </div>
  `;
}
