import { program, getWeek, dayKey } from "../data/program.js";
import { getAllCompletions, getLogs, addLog, getEvaluation, setEvaluation } from "../store.js";

const EVAL_WEEKS = [1, 4, 8, 12];

let selectedWeekForLog = program.weeks[0].number;

export function renderProgression() {
  const section = document.getElementById("section-progression");
  const completions = getAllCompletions();
  const totalDays = program.weeks.reduce((acc, w) => acc + w.days.length, 0);
  const doneCount = Object.keys(completions).length;

  const week = getWeek(selectedWeekForLog);
  const weekDone = week.days.filter((d) => completions[dayKey(week.number, d.day)]).length;

  section.innerHTML = `
    <h2 class="section-title">Progression</h2>

    <div class="stat-card">
      <span class="stat-card__label">Entrenamientos completados</span>
      <span class="stat-card__value">${doneCount} / ${totalDays}</span>
    </div>

    <div class="card">
      <p class="stat-card__label" style="margin-bottom:8px">Progreso de la semana ${week.number}</p>
      <div class="progress-bar"><div class="progress-bar__fill" style="width:${(weekDone / week.days.length) * 100}%"></div></div>
      <p class="section-intro" style="margin-top:8px">${weekDone} / ${week.days.length} días</p>
    </div>

    <div class="card">
      <h3 style="margin-bottom:12px">Historial</h3>
      ${renderHistory(completions)}
    </div>

    <div class="card">
      <h3 style="margin-bottom:12px">Registrar tiempo o repeticiones</h3>
      ${renderLogForm()}
    </div>

    <div class="card">
      <h3 style="margin-bottom:12px">Evaluaciones</h3>
      ${renderEvaluations()}
    </div>
  `;

  attachHandlers();
}

function renderHistory(completions) {
  const entries = Object.entries(completions).sort((a, b) => (a[1].date < b[1].date ? 1 : -1));
  if (!entries.length) {
    return `<p class="empty-state">Todavía no hay entrenamientos marcados como completados.</p>`;
  }
  return entries
    .slice(0, 15)
    .map(
      ([key, val]) => `
      <div class="history-item">
        <span>${formatDayKey(key)}</span>
        <span>${formatDate(val.date)}</span>
      </div>
    `
    )
    .join("");
}

function formatDayKey(key) {
  const [weekPart, dayPart] = key.split("-");
  const week = weekPart.replace("s", "");
  const day = dayPart.charAt(0).toUpperCase() + dayPart.slice(1);
  return `Semana ${week} · ${day}`;
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

function renderLogForm() {
  const weekOptions = program.weeks
    .map((w) => `<option value="${w.number}" ${w.number === selectedWeekForLog ? "selected" : ""}>Semana ${w.number}</option>`)
    .join("");

  const week = getWeek(selectedWeekForLog);
  const dayOptions = week.days.map((d) => `<option value="${d.day}">${d.day}</option>`).join("");

  const logs = getLogsForWeek(week.number);

  return `
    <form class="log-form" id="log-form">
      <div class="log-form__row">
        <div class="log-form__field">
          <label for="log-week">Semana</label>
          <select id="log-week" class="input">${weekOptions}</select>
        </div>
        <div class="log-form__field">
          <label for="log-day">Día</label>
          <select id="log-day" class="input">${dayOptions}</select>
        </div>
      </div>
      <div class="log-form__row">
        <div class="log-form__field">
          <label for="log-tiempo">Tiempo</label>
          <input id="log-tiempo" class="input" type="text" inputmode="numeric" placeholder="12:30" />
        </div>
        <div class="log-form__field">
          <label for="log-reps">Repeticiones</label>
          <input id="log-reps" class="input" type="number" inputmode="numeric" placeholder="10" />
        </div>
      </div>
      <button type="submit" class="btn btn--primary btn--full">Guardar</button>
    </form>
    <div id="log-list" style="margin-top:16px">${renderLogList(logs)}</div>
  `;
}

function getLogsForWeek(weekNumber) {
  const week = getWeek(weekNumber);
  return week.days.flatMap((d) => getLogs(dayKey(weekNumber, d.day)).map((l) => ({ ...l, day: d.day })));
}

function renderLogList(logs) {
  if (!logs.length) return `<p class="empty-state">Sin registros esta semana.</p>`;
  return logs
    .slice(-10)
    .reverse()
    .map(
      (l) => `
      <div class="history-item">
        <span>${l.day}${l.tiempo ? " · " + l.tiempo : ""}${l.reps ? " · " + l.reps + " reps" : ""}</span>
        <span>${formatDate(l.date)}</span>
      </div>
    `
    )
    .join("");
}

function renderEvaluations() {
  return EVAL_WEEKS.map((w) => {
    const data = getEvaluation(w);
    const label = w === 1 ? "punto de partida" : w === 12 ? "evaluación final" : "progreso";
    return `
      <div class="eval-card" style="margin-bottom:16px">
        <p class="eval-card__title">Semana ${w} — ${label}</p>
        <div class="eval-row">
          <span class="eval-row__label">Sentarse/levantarse x5</span>
          <input class="input" style="max-width:120px" data-eval="${w}" data-field="sentarseTiempo" value="${data.sentarseTiempo || ""}" placeholder="tiempo o dificultad" />
        </div>
        <div class="eval-row">
          <span class="eval-row__label">Caminata cómoda (min)</span>
          <input class="input" style="max-width:80px" type="number" data-eval="${w}" data-field="caminataMin" value="${data.caminataMin || ""}" />
        </div>
        <div class="eval-row">
          <span class="eval-row__label">Equilibrio con apoyo (seg)</span>
          <input class="input" style="max-width:80px" type="number" data-eval="${w}" data-field="equilibrioSeg" value="${data.equilibrioSeg || ""}" />
        </div>
        <div class="eval-row">
          <span class="eval-row__label">Actividades cotidianas (1–10)</span>
          <input class="input" style="max-width:80px" type="number" min="1" max="10" data-eval="${w}" data-field="percepcion" value="${data.percepcion || ""}" />
        </div>
      </div>
    `;
  }).join("");
}

function attachHandlers() {
  const weekSelect = document.getElementById("log-week");
  weekSelect.addEventListener("change", () => {
    selectedWeekForLog = Number(weekSelect.value);
    renderProgression();
  });

  document.getElementById("log-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const day = document.getElementById("log-day").value;
    const tiempo = document.getElementById("log-tiempo").value.trim();
    const reps = document.getElementById("log-reps").value.trim();
    if (!tiempo && !reps) return;
    addLog(dayKey(selectedWeekForLog, day), { tiempo: tiempo || null, reps: reps || null });
    renderProgression();
  });

  document.querySelectorAll("[data-eval]").forEach((input) => {
    input.addEventListener("change", () => {
      const week = Number(input.dataset.eval);
      const field = input.dataset.field;
      setEvaluation(week, { [field]: input.value });
    });
  });
}
