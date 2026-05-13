import type { DocItem } from "../types/documentation";
import type { RepoItem } from "../types/repositories";

export function filterRepositories(
  repos: RepoItem[],
  query: string,
): RepoItem[] {
  if (!query) return repos;

  const q = query.toLowerCase();

  return repos
    .map((repo) => {
      const baseText = `
        ${repo.title}
        ${repo.description}
        ${repo.category}
      `.toLowerCase();

      const tagsText = repo.tags
        .map((t) => t.label)
        .join(" ")
        .toLowerCase();

      const matchedReferences = repo.references?.filter((ref) =>
        ref.description.toLowerCase().includes(q),
      );

      const isMatch =
        baseText.includes(q) ||
        tagsText.includes(q) ||
        (matchedReferences && matchedReferences.length > 0);

      if (!isMatch) return null;

      return {
        ...repo,
        ...(matchedReferences && matchedReferences.length > 0
          ? { references: matchedReferences }
          : {}),
      };
    })
    .filter((repo): repo is RepoItem => repo !== null);
}

export function filterDocumentation(docs: DocItem[], query: string): DocItem[] {
  if (!query) return docs;

  const q = query.toLowerCase();

  return docs.filter((doc) => {
    const tagMatch = doc.tags.some((tag) =>
      tag.label.toLowerCase().includes(q),
    );

    return (
      doc.title.toLowerCase().includes(q) ||
      doc.category.toLowerCase().includes(q) ||
      doc.summary.toLowerCase().includes(q) ||
      tagMatch
    );
  });
}
