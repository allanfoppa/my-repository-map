type ReferenceAge = "up-to-date" | "check-recommended" | "review-required";

export function getReferenceAge(createdAt: Date | string): ReferenceAge {
  const now = new Date();
  const diffMs = now.getTime() - new Date(createdAt).getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  if (diffDays < 182) return "up-to-date";
  if (diffDays < 365) return "check-recommended";
  return "review-required";
}
