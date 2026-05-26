import type { RepoItem } from "../types/repositories";
import { aiQaTestingHub } from "./repositories/ai-qa-testing-hub";
import { chuckNorrisApproved } from "./repositories/chuck-norris-approved";
import { edaNps } from "./repositories/eda-nps";
import { edaPokemon } from "./repositories/eda-pokemon";
import { extratTextFromImageWithEasyOcr } from "./repositories/extrat-text-from-image-with-easyocr";
import { geologyVrForOliAndGasTraining } from "./repositories/geology-vr-for-oli-and-gas-training";
import { isNotATodoList } from "./repositories/is-not-a-todo-list";
import { itIsOver9000 } from "./repositories/it-is-over-9000";
import { plantAr } from "./repositories/plant-ar";
import { pokemonJokenpo } from "./repositories/pokemon-jokenpo";
import { rickAndMortyGraphsAndStuff } from "./repositories/rick-and-morty-graphs-and-stuff";
import { worldHappinessReport } from "./repositories/world-happiness-report";

export const repositories: RepoItem[] = [
  itIsOver9000,
  pokemonJokenpo,
  chuckNorrisApproved,
  isNotATodoList,
  plantAr,
  geologyVrForOliAndGasTraining,
  edaPokemon,
  edaNps,
  aiQaTestingHub,
  rickAndMortyGraphsAndStuff,
  extratTextFromImageWithEasyOcr,
  worldHappinessReport,
];
