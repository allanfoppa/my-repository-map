import type { ScreenShot } from "../types/repositories";
import { CheckIcon } from "./Icons";

export function ProjectDocumentation(): string {
  return `
      <p class="text-sm flex items-center">
        ${CheckIcon("size-4 text-blue-500")}
        <span class="pl-1">Project documentation</span>
      </p>
    `;
}

export function ScreenShot(screenShot: ScreenShot[] | undefined): string {
  const screenShots = screenShot ?? [];
  const screenShotLength = screenShots.length;

  if (screenShotLength > 0) {
    return `
        <p class="text-sm mt-2 flex items-center">
          ${CheckIcon("size-4 text-blue-600")}
          <span class="pl-1">${screenShotLength} High-quality screenshots</span>
        </p>
      `;
  }

  return ``;
}

export function LiveDemo(link: string | undefined): string {
  const liveDemo = link ?? "";
  const liveDemoLength = liveDemo.length;

  if (liveDemoLength > 0) {
    return `
        <p class="text-sm mt-2 flex items-center">
          ${CheckIcon("size-4 text-blue-600")}
          <span class="pl-1">Live demo link</span>
        </p>
      `;
  }

  return ``;
}
