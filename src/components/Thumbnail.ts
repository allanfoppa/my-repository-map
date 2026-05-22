import type { RepoItem } from "../types/repositories";

export function Thumbnail(repo: RepoItem | undefined): string {
  const screenshots = repo?.portfolio?.metadata?.screenShots;

  if (!screenshots || screenshots.length === 0) {
    return "";
  }

  return screenshots
    .map(
      (url, index) => `
        <img
          src="${url}"
          alt="Project screenshot ${index + 1}"
          class="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
          onclick="window.openLightbox(${JSON.stringify(screenshots)}, ${index})"
        />
      `,
    )
    .join("");
}
