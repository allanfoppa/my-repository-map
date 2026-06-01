export function DrawerMarkdownContentArea(): string {
  return `
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
  `;
}
