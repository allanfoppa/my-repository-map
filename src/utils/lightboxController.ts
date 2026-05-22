let currentImages: { url: string; page: string }[] = [];
let currentIndex = 0;

export function openLightbox(
  images: { url: string; page: string }[],
  initialIndex: number,
) {
  currentImages = images;
  currentIndex = initialIndex;
  updateLightbox();
  document.getElementById("lightbox")?.classList.remove("hidden");
}

export function closeLightbox() {
  document.getElementById("lightbox")?.classList.add("hidden");
}

export function nextImage() {
  console.log("chamou o nextImage");

  if (currentImages.length === 0) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateLightbox();
}

export function prevImage() {
  console.log("chamou o prevImage");
  if (currentImages.length === 0) return;
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateLightbox();
}

function updateLightbox() {
  const img = document.getElementById("lightbox-img") as HTMLImageElement;
  if (img && currentImages[currentIndex]) {
    img.src = currentImages[currentIndex].url;
  }
}
