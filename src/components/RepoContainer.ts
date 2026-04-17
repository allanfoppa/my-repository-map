import type { RepoItem } from '../types/repositories'
import { RepoCard } from './RepoCard'

export function RepoContainer(repos: RepoItem[], query: string): string {

  const repoCards = repos.map(repo => RepoCard(repo, query)).sort(() => Math.random() - 0.5).join('')

  return `
    <section>
      <div class="grid gap-4">
        ${repoCards}
      </div>
    </section>
  `
}
