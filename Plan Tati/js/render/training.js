import { program, getWeek, getStageForWeek, getDay, dayKey } from "../data/program.js";
import { exercises } from "../data/exercises.js";
import { getCompletion, setCompletion } from "../store.js";
import { getTodayInProgram } from "../today.js";
import { openSheet } from "../sheet.js";

// Estado de navegación dentro de la sección (no rutas, solo variables).
let openStageId = null;
let selectedWeek = null;
let openDayName = null;

const TYPE_LABEL = {
  fuerza: "Fuerza",
  caminata: "Caminata",
  recreativa: "Actividad recreativa",
  recuperacion: "Recuperación",
};

export function renderTraining() {
  const section = document.getElementById("section-entrenamiento");
  const today = getTodayInProgram();

  // primera carga: abrir la etapa/semana de hoy (o la primera si no arrancó)
  if (openStageId === null) {
    const week = today.status === "in-program" ? today.week : 1;
    selectedWeek = week;
    openStageId = getStageForWeek(week)?.id ?? program.stages[0].id;
  }

  section.innerHTML = `
    <h2 class="section-title">Entrenamiento</h2>
    ${renderTodayCard(today)}
    <div id="stages-list"></div>
    <p class="safety-note">⚠️ El brazo operado debe respetar las indicaciones de su traumatólogo/fisiatra/fisioterapeuta. No forzar la extensión ni cargarlo sin autorización profesional.</p>
  `;

  renderStages();
  attachTodayHandler(today);
}

function renderTodayCard(today) {
  if (today.status === "not-started") {
    return `
      <div class="today-card is-neutral">
        <p class="today-card__eyebrow">Programa</p>
        <p class="today-card__day">Todavía no empezó</p>
        <p class="today-card__meta">Va a comenzar el ${program.startDate.split("-").reverse().join("/")}.</p>
      </div>
    `;
  }
  if (today.status === "finished") {
    return `
      <div class="today-card is-neutral">
        <p class="today-card__eyebrow">Programa</p>
        <p class="today-card__day">¡Programa completado!</p>
        <p class="today-card__meta">Podés seguir revisando cualquier semana abajo.</p>
      </div>
    `;
  }

  const day = getDay(today.week, today.dayName);
  const key = dayKey(today.week, today.dayName);
  const done = !!getCompletion(key);

  return `
    <div class="today-card ${done ? "is-done" : ""}">
      <p class="today-card__eyebrow">Hoy · Semana ${today.week}</p>
      <p class="today-card__day">${today.dayName}</p>
      <p class="today-card__meta">${day.title} · ${day.duration}</p>
      ${
        done
          ? `<p class="today-card__meta">✓ Completado</p>`
          : `<button class="btn btn--primary" id="btn-start-today">Comenzar entrenamiento</button>`
      }
    </div>
  `;
}

function attachTodayHandler(today) {
  const btn = document.getElementById("btn-start-today");
  if (!btn || today.status !== "in-program") return;
  btn.addEventListener("click", () => {
    selectedWeek = today.week;
    openStageId = getStageForWeek(today.week).id;
    openDayName = today.dayName;
    renderStages();
    document
      .querySelector(`.day-accordion[data-day="${today.dayName}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function renderStages() {
  const container = document.getElementById("stages-list");
  container.innerHTML = program.stages
    .map((stage) => {
      const isOpen = stage.id === openStageId;
      const weekCount = stage.weeks.length;
      return `
        <div class="stage-block">
          <button class="stage-card ${isOpen ? "is-open" : ""}" data-stage="${stage.id}">
            <span class="stage-card__name">${stage.name}</span>
            <span class="stage-card__meta">Semanas ${stage.weeks[0]}–${stage.weeks[weekCount - 1]}</span>
          </button>
          ${isOpen ? renderWeeksAndDays(stage) : ""}
        </div>
      `;
    })
    .join("");

  container.querySelectorAll(".stage-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const stageId = btn.dataset.stage;
      openStageId = openStageId === stageId ? null : stageId;
      if (openStageId) {
        const stage = program.stages.find((s) => s.id === openStageId);
        if (!stage.weeks.includes(selectedWeek)) selectedWeek = stage.weeks[0];
      }
      renderStages();
    });
  });

  attachWeekAndDayHandlers();
}

function renderWeeksAndDays(stage) {
  const chips = stage.weeks
    .map(
      (w) =>
        `<button class="week-chip ${w === selectedWeek ? "is-active" : ""}" data-week="${w}">Semana ${w}</button>`
    )
    .join("");

  const week = getWeek(selectedWeek) ?? getWeek(stage.weeks[0]);
  const days = week.days.map((day) => renderDayAccordion(week.number, day)).join("");

  return `
    <div class="week-chips">${chips}</div>
    <div class="days-list">${days}</div>
  `;
}

function renderDayAccordion(weekNumber, day) {
  const key = dayKey(weekNumber, day.day);
  const done = !!getCompletion(key);
  const isOpen = openDayName === day.day;

  const body = day.exercises.length
    ? day.exercises
        .map(
          (ex) => `
        <button class="exercise-row ${ex.matchedExerciseId ? "is-clickable" : ""}" data-exercise-id="${ex.matchedExerciseId || ""}" data-label="${escapeAttr(ex.label)}" data-detail="${escapeAttr(ex.detail)}">
          <span class="exercise-row__label">${ex.label}</span>
          <span class="exercise-row__detail">${ex.detail}</span>
        </button>
      `
        )
        .join("")
    : `<p class="day-accordion__raw">${day.rawPlan}</p>`;

  return `
    <div class="day-accordion ${isOpen ? "is-open" : ""} ${done ? "is-done" : ""}" data-day="${day.day}">
      <button class="day-accordion__header" data-toggle-day="${day.day}">
        <span class="day-accordion__badge">${done ? "✓" : "•"}</span>
        <span class="day-accordion__title">
          <span class="day-accordion__day">${day.day} — ${day.title}</span>
          <span class="day-accordion__subtitle">${TYPE_LABEL[day.type]} · ${day.duration}</span>
        </span>
        <span class="day-accordion__chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="day-accordion__body" ${isOpen ? "" : "hidden"}>
        ${body}
        <button class="btn ${done ? "btn--secondary" : "btn--primary"} btn--full day-accordion__complete" data-complete-day="${day.day}" data-week="${weekNumber}">
          ${done ? "✓ Completado — desmarcar" : "Marcar como completado"}
        </button>
      </div>
    </div>
  `;
}

function attachWeekAndDayHandlers() {
  document.querySelectorAll(".week-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      selectedWeek = Number(chip.dataset.week);
      openDayName = null;
      renderStages();
    });
  });

  document.querySelectorAll("[data-toggle-day]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const day = btn.dataset.toggleDay;
      openDayName = openDayName === day ? null : day;
      renderStages();
    });
  });

  document.querySelectorAll("[data-complete-day]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const day = btn.dataset.completeDay;
      const week = Number(btn.dataset.week);
      const key = dayKey(week, day);
      const currentlyDone = !!getCompletion(key);
      setCompletion(key, !currentlyDone);
      renderTraining();
    });
  });

  document.querySelectorAll(".exercise-row.is-clickable").forEach((btn) => {
    btn.addEventListener("click", () => openExerciseSheet(btn.dataset.exerciseId));
  });
}

function openExerciseSheet(exerciseId) {
  const ex = exercises[exerciseId];
  if (!ex) return;
  openSheet(`
    <h3 class="sheet__title">${ex.nombre}</h3>
    <div class="sheet__field">
      <span class="sheet__field-label">Cómo hacerlo</span>
      <p class="sheet__field-value">${ex.comoHacerlo}</p>
    </div>
    <div class="sheet__field">
      <span class="sheet__field-label">Para empezar</span>
      <p class="sheet__field-value">${ex.inicio}</p>
    </div>
    <div class="sheet__field">
      <span class="sheet__field-label">Progresión</span>
      <p class="sheet__field-value">${ex.progresion}</p>
    </div>
    ${ex.precaucion ? `<p class="sheet__caution">⚠️ ${ex.precaucion}</p>` : ""}
  `);
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}
