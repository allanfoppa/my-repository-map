import { XMark } from "./Icons";

export function Drawer(): string {
  return `
    <!-- Documentation Drawer Overlay -->
    <div id="doc-drawer" class="fixed inset-0 z-50 flex justify-end invisible transition-all duration-500">
      <!-- Backdrop -->
      <div id="drawer-backdrop" class="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500"></div>

      <!-- Content Container -->
      <div class="relative w-full max-w-5xl bg-white h-full shadow-2xl transform translate-x-full transition-transform duration-500 flex flex-col">

        <button id="close-drawer" class="absolute top-4 right-4 p-2 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors" onclick="closeDrawer()">
          ${XMark()}
        </button>

        <!-- Markdown Content Area -->
        <article
          id="markdown-body"
          class="
            flex-1 overflow-y-auto p-10 prose prose-slate max-w-none
            /* 1. CODE BLOCKS (Pre): Dark background */
            prose-pre:bg-[#121212] prose-pre:rounded-lg
            /* 2. CODE INSIDE BLOCKS (Pre Code): White text, no extra background */
            prose-pre:code:text-white prose-pre:code:bg-transparent prose-pre:code:p-0
            /* 3. INLINE CODE: Blue text with light blue background */
            prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
            prose-code:before:content-none prose-code:after:content-none"
          ">
        </article>
      </div>
    </div>
  `;
}
