export type ViewMode = "repositories" | "documentation";

export const getViewMode = (): ViewMode => {
  const params = new URLSearchParams(window.location.search);
  return (params.get("view") as ViewMode) || "repositories";
};

export const setViewMode = (mode: ViewMode) => {
  const url = new URL(window.location.href);
  url.searchParams.set("view", mode);
  window.history.pushState({}, "", url);
};
