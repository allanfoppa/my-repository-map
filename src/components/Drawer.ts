import { DrawerBackdrop } from "./DrawerBackdrop";
import { DrawerMarkdownContentArea } from "./DrawerMarkdownContentArea";
import { XMarkIcon } from "./Icons";

export function Drawer(): string {
  return `
    <!-- Documentation Drawer Overlay -->
    <div id="doc-drawer" class="fixed inset-0 z-50 flex justify-end invisible transition-all duration-500">
      <!-- Backdrop -->
      ${DrawerBackdrop()}

      <!-- Content Container -->
      <div class="relative w-full max-w-5xl bg-white h-full shadow-2xl ml-auto transform translate-x-full transition-transform duration-500 flex flex-col">

        <button id="close-drawer" class="absolute top-4 right-4 p-2 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors" onclick="closeDrawer()">
          ${XMarkIcon()}
        </button>

        <!-- Markdown Content Area -->
        ${DrawerMarkdownContentArea()}
      </div>
    </div>
  `;
}
