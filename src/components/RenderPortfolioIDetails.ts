import type { RepoItem } from "../types/repositories";
import { SafeImage } from "./SafeImage";

export function RenderPortfolioIDetails(repo: RepoItem) {
  const { title, description, portfolio, tags } = repo;
  const screenshots = portfolio.metadata?.screenShots || [];
  const screenShotsJson = JSON.stringify(screenshots).replace(/"/g, "&quot;");

  return `
    <div class="space-y-8">
      <header>
        <h1 class="text-4xl font-bold text-gray-900 mb-2">${title}</h1>
        <p class="text-lg text-gray-600">${description}</p>
      </header>

      <section>
        <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Project Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${screenshots
            .map(
              (shot, index) => `
              <div
                class="group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition duration-300 premium-card p-6 space-y-3 hover:border-blue-500 transition-all border border-gray-100"
                onclick="openLightbox(JSON.parse('${screenShotsJson}'), ${index})"
              >
                <div class="p-4 bg-white">
                  <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">${shot.page}</h3>
                </div>
                ${SafeImage(shot.url, shot.page, "w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500")}
              </div>
            `,
            )
            .join("")}
      </div>
      </section>

      <section>
        <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Project Insights</h2>
        <div>
          <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Motivation</h3>
          <p>What let me to do that</p>
        </div
        <div>
          <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Stack</h3>
          <div class="flex gap-2">
            ${tags.map((tag) => `<span class="px-3 py-1 mf-1 ${tag.color} rounded-full text-xs font-medium">${tag.label}</span>`).join("")}
          </div>
        </div
        <div>
        <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Source Code</h3>
        <a href="${repo.link}" target="_blank" class="text-sm text-blue-600 hover:underline">View on GitHub →</a>
        </div>
      </section>
    </div>`;
}
