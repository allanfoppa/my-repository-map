export async function loadDocumentationContent(
  docId: string,
  category: string,
): Promise<string> {
  const baseUrl = import.meta.env.BASE_URL;

  // Combine base, folder path, and filename
  // We use .replace to ensure we don't have double slashes (//)
  const fullPath =
    `${baseUrl}/documentation/${category.toLocaleLowerCase()}/${docId}.md`.replace(
      /\/+/g,
      "/",
    );

  try {
    const response = await fetch(fullPath);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${fullPath} (Status: ${response.status})`,
      );
    }

    return await response.text();
  } catch (error) {
    console.error("Markdown Loader Error:", error);
    throw error;
  }
}
