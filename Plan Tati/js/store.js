// Capa de persistencia. Todo vive bajo una única clave en localStorage.
// Esta es la capa a reemplazar el día que se conecte Google Sheets
// (ver docs/google-sheets-setup.md) sin tocar el resto de la app.
const STORAGE_KEY = "plan-tati-v1";

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw);
    return { ...emptyState(), ...parsed };
  } catch {
    return emptyState();
  }
}

function writeAll(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function emptyState() {
  return { completions: {}, logs: {}, evaluations: {}, notes: [] };
}

// ---- completions ----
export function getCompletion(dayKey) {
  return readAll().completions[dayKey] || null;
}

export function setCompletion(dayKey, done, extra = {}) {
  const state = readAll();
  if (done) {
    state.completions[dayKey] = {
      done: true,
      date: new Date().toISOString().slice(0, 10),
      ...extra,
    };
  } else {
    delete state.completions[dayKey];
  }
  writeAll(state);
}

export function getAllCompletions() {
  return readAll().completions;
}

// ---- logs (tiempos / repeticiones por ejercicio) ----
export function getLogs(dayKey) {
  return readAll().logs[dayKey] || [];
}

export function addLog(dayKey, entry) {
  const state = readAll();
  if (!state.logs[dayKey]) state.logs[dayKey] = [];
  state.logs[dayKey].push({ ...entry, date: new Date().toISOString().slice(0, 10) });
  writeAll(state);
}

// ---- evaluaciones (semana 1/4/8/12) ----
export function getEvaluation(weekNumber) {
  return readAll().evaluations[`semana-${weekNumber}`] || {};
}

export function setEvaluation(weekNumber, data) {
  const state = readAll();
  state.evaluations[`semana-${weekNumber}`] = {
    ...state.evaluations[`semana-${weekNumber}`],
    ...data,
  };
  writeAll(state);
}

// ---- notas ----
export function getNotes() {
  return [...readAll().notes].sort((a, b) => b.id - a.id);
}

export function addNote({ week, day, texto }) {
  const state = readAll();
  state.notes.push({
    id: Date.now(),
    fecha: new Date().toISOString().slice(0, 10),
    semana: week,
    dia: day,
    texto,
  });
  writeAll(state);
}
