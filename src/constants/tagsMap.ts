export const TAGS_MAP = {
  // Testing
  bdd: {
    label: 'BDD',
    color: 'bg-indigo-500'
  },
  jest: {
    label: 'Jest',
    color: 'bg-red-500'
  },
  cypress: {
    label: 'Cypress',
    color: 'bg-emerald-600'
  },

  // Architecture
  microservices: {
    label: 'Microservices',
    color: 'bg-purple-500'
  },
  websocket: {
    label: 'WebSocket',
    color: 'bg-teal-500'
  },

  // Frontend
  react: {
    label: 'React',
    color: 'bg-cyan-500'
  },
  angular: {
    label: 'Angular',
    color: 'bg-red-600'
  },
  vue: {
    label: 'Vue',
    color: 'bg-green-500'
  },
  solidjs: {
    label: 'SolidJS',
    color: 'bg-sky-400'
  },

  // Backend
  node: {
    label: 'NodeJS',
    color: 'bg-lime-600'
  },
  nestjs: {
    label: 'NestJS',
    color: 'bg-rose-600'
  },
  express: {
    label: 'Express',
    color: 'bg-gray-600'
  },

  // Databases
  mysql: {
    label: 'MySQL',
    color: 'bg-blue-600'
  },
  postgres: {
    label: 'PostgreSQL',
    color: 'bg-indigo-700'
  },
  mongodb: {
    label: 'MongoDB',
    color: 'bg-green-700'
  },
  redis: {
    label: 'Redis',
    color: 'bg-red-700'
  },

  // DevOps / Infra
  docker: {
    label: 'Docker',
    color: 'bg-blue-400'
  },
  kubernetes: {
    label: 'Kubernetes',
    color: 'bg-indigo-500'
  },
  aws: {
    label: 'AWS',
    color: 'bg-orange-500'
  },
  ci_cd: {
    label: 'CI/CD',
    color: 'bg-slate-600'
  },

  // Tooling
  vite: {
    label: 'Vite',
    color: 'bg-purple-400'
  },
  webpack: {
    label: 'Webpack',
    color: 'bg-blue-700'
  },
  rsbuild: {
    label: 'Rsbuild',
    color: 'bg-orange-500'
  },

  // Styling
  tailwind: {
    label: 'TailwindCSS',
    color: 'bg-teal-400'
  },
  daisyui: {
    label: 'DaisyUI',
    color: 'bg-fuchsia-500'
  },
  sass: {
    label: 'Sass',
    color: 'bg-pink-500'
  },
  chakraui: {
    label: 'Chakra UI',
    color: 'bg-teal-500'
  },

  // Languages
  typescript: {
    label: 'TypeScript',
    color: 'bg-blue-500'
  },
  javascript: {
    label: 'JavaScript',
    color: 'bg-amber-500' // careful: still safe vs strong yellow highlight
  },
  python: {
    label: 'Python',
    color: 'bg-yellow-600' // darker to avoid clash
  },

  // Misc
  graphql: {
    label: 'GraphQL',
    color: 'bg-pink-600'
  },
  rest: {
    label: 'REST',
    color: 'bg-gray-500'
  }
} as const
