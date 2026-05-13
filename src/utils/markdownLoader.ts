export async function loadDocumentationContent(
  docId: string,
  category: string,
): Promise<string> {
  const baseUrl = import.meta.env.BASE_URL;
  const sanitizedCategory = category.toLocaleLowerCase().replace(/\s+/g, "-");
  const fullPath =
    `${baseUrl}/documentation/${sanitizedCategory}/${docId}.md`.replace(
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
