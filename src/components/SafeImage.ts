import placeholderImage from "../assets/images/image-unavailable.webp";

export function SafeImage(url: string, alt: string, className: string): string {
  return `
    <img
      src="${url}"
      alt="${alt}"
      onerror="this.onerror=null;this.src='${placeholderImage}';"
      class="${className}"
    />
  `;
}
