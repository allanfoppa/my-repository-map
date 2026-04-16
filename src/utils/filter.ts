import type { RepoItem } from '../data/repositories'

export function filterRepositories(
  repos: RepoItem[],
  query: string
): RepoItem[] {
  if (!query) {
    return repos
  }

  return repos.filter(repo =>
    `${repo.title} ${repo.description} ${repo.category}`
      .toLowerCase()
      .includes(query.toLowerCase())
  )
}
