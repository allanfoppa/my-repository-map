export const CATEGORY_MAP = {
  ai: 'AI',
  'augmented-reality': 'Augmented Reality',
  'data-science': 'Data Science',
  'virtual-reality': 'Virtual Reality',
  'web-development': 'Web Development'
} as const

export const TAGS_MAP = {
  bdd: 'BDD',
  jest: 'Jest',
  cypress: 'Cypress',
  microservices: 'Microservices',
  react: 'React',
  angular: 'Angular',
  vue: 'Vue',
  docker: 'Docker',
  websocket: 'Websocket',
  node: 'NodeJS',
  mysql: 'MySql',
  solidjs: 'SolidJS',
  vite: 'Vite',
  tailwind: 'TailwindCSS',
  daisyui: 'DaisyUI'
}

export type ID = keyof typeof CATEGORY_MAP

export type Category = (typeof CATEGORY_MAP)[keyof typeof CATEGORY_MAP]

export type Reference = {
  description: string
  link: string
}

export type RepoItem = {
  id: ID
  title: string
  description: string
  category: Category
  tags: (typeof TAGS_MAP)[keyof typeof TAGS_MAP][]
  references?: Reference[]
  link: string
}

export const repositories: RepoItem[] = [
  {
    id: 'augmented-reality',
    title: 'Plant-AR',
    description: 'Augmented reality application for plant identification and care',
    category: CATEGORY_MAP['augmented-reality'],
    tags: [],
    link: 'https://github.com/allanfoppa/plant-ar'
  },
  {
    id: 'virtual-reality',
    title: 'Geology VR for Oil and Gas Training',
    description: 'Virtual reality application for geology training',
    category: CATEGORY_MAP['virtual-reality'],
    tags: [],
    link: 'https://github.com/allanfoppa/geology-vr-for-oil-and-gas-training'
  },
  {
    id: 'data-science',
    title: 'EDA of Pokemon',
    description: 'Exploratory data analysis of Pokemon',
    category: CATEGORY_MAP['data-science'],
    tags: [],
    references: [
      {
        description: 'Data preparation',
        link: 'https://github.com/allanfoppa/eda-pokemon/blob/main/data-preparation/pokemon.ipynb'
      },
      {
        description: 'Initial analysis',
        link: 'https://github.com/allanfoppa/eda-pokemon/blob/main/analysis/initial_analysis.ipynb'
      },
      {
        description: 'Univariate analysis',
        link: 'https://github.com/allanfoppa/eda-pokemon/blob/main/analysis/univariate_analysis.ipynb'
      }
    ],
    link: 'https://github.com/allanfoppa/eda-pokemon'
  },
  {
    id: 'data-science',
    title: 'EDA of NPS',
    description: 'Exploratory data analysis of NPS',
    category: CATEGORY_MAP['data-science'],
    tags: [],
    references: [
      {
        description: 'Data preparation',
        link: 'https://github.com/allanfoppa/eda-nps/blob/main/data-preparation/nps.ipynb'
      },
      {
        description: 'Initial analysis',
        link: 'https://github.com/allanfoppa/eda-nps/blob/main/analysis/initial_analysis.ipynb'
      },
      {
        description: 'Univariate analysis',
        link: 'https://github.com/allanfoppa/eda-nps/blob/main/analysis/univariate_analysis.ipynb'
      }
    ],
    link: 'https://github.com/allanfoppa/eda-nps'
  },
  {
    id: 'web-development',
    title: 'Pokemon Jokenpo',
    description: 'My first project in React, a game adapted from the Pokémon franchise.',
    category: CATEGORY_MAP['web-development'],
    tags: [TAGS_MAP.react, TAGS_MAP.node, TAGS_MAP.mysql, TAGS_MAP.docker],
    link: 'https://github.com/allanfoppa/pokemon-jokenpo'
  },
  {
    id: 'web-development',
    title: 'Chuck Norris Approved',
    description: 'Small web application with Chuck Norris jokes, being my first contact with SolidJS.',
    category: CATEGORY_MAP['web-development'],
    tags: [TAGS_MAP.solidjs, TAGS_MAP.vite, TAGS_MAP.tailwind, TAGS_MAP.daisyui],
    link: 'https://github.com/allanfoppa/chuck-norris-approved'
  }
]
