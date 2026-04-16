export type Category = 'bdd' | 'microservices' | 'ai' | 'jest' | 'other'

export type RepoItem = {
  id: Category
  title: string
  description: string
  category: string
  link: string
}

export const repositories: RepoItem[] = [
  {
    id: 'bdd',
    title: 'BDD Repository',
    description: 'Main Behaviour-Driven Development repository',
    category: 'BDD',
    link: 'https://github.com/your-user/bdd-repo'
  },
  {
    id: 'bdd',
    title: 'BDD Examples Folder',
    description: 'Implemented scenarios and test cases',
    category: 'BDD',
    link: 'https://github.com/your-user/bdd-repo/tree/examples'
  },
  {
    id: 'microservices',
    title: 'Microservices with RSBuild',
    description: 'Microservices architecture using RSBuild',
    category: 'Microservices',
    link: 'https://github.com/your-user/microservices-rsbuild'
  },
  {
    id: 'microservices',
    title: 'Microservices with RSBuild',
    description: 'Microservices architecture using RSBuild',
    category: 'Microservices',
    link: 'https://github.com/your-user/microservices-rsbuild'
  },
  {
    id: 'jest',
    title: 'Jest project',
    description: 'Jest project',
    category: 'Jest',
    link: 'https://github.com/your-user/microservices-rsbuild'
  },
  {
    id: 'ai',
    title: 'AI project',
    description: 'AI project',
    category: 'AI',
    link: 'https://github.com/your-user/microservices-rsbuild'
  },
  {
    id: 'ai',
    title: 'AI project',
    description: 'AI project',
    category: 'AI',
    link: 'https://github.com/your-user/microservices-rsbuild'
  },
  {
    id: 'ai',
    title: 'AI project',
    description: 'AI project',
    category: 'AI',
    link: 'https://github.com/your-user/microservices-rsbuild'
  },
]
