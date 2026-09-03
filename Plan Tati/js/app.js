import { initNav } from "./nav.js";
import { renderTraining } from "./render/training.js";
import { renderProgression } from "./render/progression.js";
import { renderNotes } from "./render/notes.js";
import { renderNutrition } from "./render/nutrition.js";

const renderers = {
  entrenamiento: renderTraining,
  progression: renderProgression,
  notas: renderNotes,
  nutricion: renderNutrition,
};

initNav((section) => renderers[section]());

// Sección inicial: Entrenamiento.
renderTraining();
