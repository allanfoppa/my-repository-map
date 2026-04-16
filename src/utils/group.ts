import type { RepoItem } from '../data/repositories'

export function groupByCategory(repos: RepoItem[]) {
  return repos.reduce<Record<string, RepoItem[]>>((acc, repo) => {
    if (!acc[repo.category]) acc[repo.category] = []
    acc[repo.category].push(repo)
    return acc
  }, {})
}
