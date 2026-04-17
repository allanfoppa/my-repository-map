import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const edaPokemon: RepoItem = {
    id: 'data-science',
    title: 'EDA of Pokemon',
    description: 'Exploratory data analysis of Pokemon',
    category: CATEGORY_MAP['data-science'],
    tags: [TAGS_MAP.python, TAGS_MAP.pandas, TAGS_MAP.numpy, TAGS_MAP.matplotlib, TAGS_MAP.seaborn],
    link: 'https://github.com/allanfoppa/eda-pokemon',
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
    ]
}
