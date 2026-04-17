import type { RepoItem } from '../data/repositories'
import { RepoCard } from './RepoCard'

export function Section(repos: RepoItem[], query: string): string {
  return `
    <section>
      <div class="grid gap-4">
        ${repos.map(repo => RepoCard(repo, query)).sort(() => Math.random() - 0.5).join('')}
      </div>
    </section>
  `
}
