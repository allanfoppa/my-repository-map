import type { RepoItem } from "../types/repositories"
import { chuckNorrisApproved } from "./repositories/chuck-norris-approved"
import { edaNps } from "./repositories/eda-nps"
import { edaPokemon } from "./repositories/eda-pokemon"
import { geologyVrForOliAndGasTraining } from "./repositories/geology-vr-for-oli-and-gas-training"
import { isNotATodoList } from "./repositories/is-not-a-todo-list"
import { itIsOver9000 } from "./repositories/it-is-over-9000"
import { plantAr } from "./repositories/plant-ar"
import { pokemonJokenpo } from "./repositories/pokemon-jokenpo"

export const repositories: RepoItem[] = [
  itIsOver9000,
  pokemonJokenpo,
  chuckNorrisApproved,
  isNotATodoList,
  plantAr,
  geologyVrForOliAndGasTraining,
  edaPokemon,
  edaNps
]
