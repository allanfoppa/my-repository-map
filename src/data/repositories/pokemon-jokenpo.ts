import { CATEGORY_MAP } from "../../constants/categoryMap";
import { TAGS_MAP } from "../../constants/tagsMap";
import type { RepoItem } from "../../types/repositories";

export const pokemonJokenpo: RepoItem = {
    id: 'web-development',
    title: 'Pokemon Jokenpo',
    description: 'My first project in React, a game adapted from the Pokémon franchise.',
    category: CATEGORY_MAP['web-development'],
    tags: [TAGS_MAP.react, TAGS_MAP.node, TAGS_MAP.mysql, TAGS_MAP.docker],
    link: 'https://github.com/allanfoppa/pokemon-jokenpo'
}
