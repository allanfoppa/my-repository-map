export function updateWindowTitle(projectName?: string) {
  const baseTitle = "My Dev Log";

  if (projectName) {
    document.title = `${projectName} | ${baseTitle}`;
  } else {
    document.title = baseTitle;
  }
}
