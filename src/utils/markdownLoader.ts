export async function loadDocumentationContent(
  docId: string,
  category: string,
): Promise<string> {
  try {
    // Path relative to public/assets or build directory
    const response = await fetch(
      `/documentation/${category.toLocaleLowerCase()}/${docId}.md`,
    );
    if (!response.ok) throw new Error("Documentation file not found");

    const markdown = await response.text();

    return markdown;
  } catch (error) {
    console.error("Failed to load doc:", error);
    return "Error loading content.";
  }
}
