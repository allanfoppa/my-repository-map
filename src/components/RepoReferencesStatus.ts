import type { RepoItem } from "../types/repositories";
import { getReferenceAge } from "../utils/getReferenceAge";
import { ExclamationTriangleIcon, XCircleIcon } from "./Icons";

export function RepoReferencesStatus(repo: RepoItem): string {
  if (!repo.references?.length) return "";

  const refsWithDate = repo.references.filter((ref) => ref.createdAt);

  const checkRecommended = refsWithDate.filter(
    (ref) => getReferenceAge(ref.createdAt!) === "check-recommended",
  ).length;

  const reviewRequired = refsWithDate.filter(
    (ref) => getReferenceAge(ref.createdAt!) === "review-required",
  ).length;

  if (checkRecommended === 0 && reviewRequired === 0) return "";

  return `
    <div class="flex flex-col gap-1 mt-2">
      ${
        checkRecommended > 0
          ? `
        <div class="flex items-center gap-2 text-yellow-500 text-xs">
          ${ExclamationTriangleIcon()}
          <span>${checkRecommended} ${checkRecommended === 1 ? "reference" : "references"} recommended to check</span>
        </div>
      `
          : ""
      }
      ${
        reviewRequired > 0
          ? `
        <div class="flex items-center gap-2 text-red-500 text-xs">
          ${XCircleIcon()}
          <span>${reviewRequired} ${reviewRequired === 1 ? "reference" : "references"} required review</span>
        </div>
      `
          : ""
      }
    </div>
  `;
}
