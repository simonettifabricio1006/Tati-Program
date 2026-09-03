import { program, getWeek } from "../data/program.js";
import { getNotes, addNote } from "../store.js";

let selectedWeek = program.weeks[0].number;

export function renderNotes() {
  const section = document.getElementById("section-notas");
  const week = getWeek(selectedWeek);

  const weekOptions = program.weeks
    .map((w) => `<option value="${w.number}" ${w.number === selectedWeek ? "selected" : ""}>Semana ${w.number}</option>`)
    .join("");
  const dayOptions = week.days.map((d) => `<option value="${d.day}">${d.day}</option>`).join("");

  section.innerHTML = `
    <h2 class="section-title">Notas</h2>
    <p class="section-intro">Contá cómo te sentiste ese día.</p>

    <div class="card">
      <form class="log-form" id="note-form">
        <div class="log-form__row">
          <div class="log-form__field">
            <label for="note-week">Semana</label>
            <select id="note-week" class="input">${weekOptions}</select>
          </div>
          <div class="log-form__field">
            <label for="note-day">Día</label>
            <select id="note-day" class="input">${dayOptions}</select>
          </div>
        </div>
        <div class="log-form__field">
          <label for="note-text">Nota</label>
          <textarea id="note-text" class="input" placeholder="Ej: Me sentí bien."></textarea>
        </div>
        <button type="submit" class="btn btn--primary btn--full">Guardar</button>
      </form>
    </div>

    <div id="notes-list">${renderNotesList()}</div>
  `;

  attachHandlers();
}

function renderNotesList() {
  const notes = getNotes();
  if (!notes.length) {
    return `<p class="empty-state">Todavía no hay notas guardadas.</p>`;
  }
  return notes
    .map(
      (n) => `
      <div class="note-item">
        <span class="note-item__meta">Semana ${n.semana} · ${n.dia} · ${formatDate(n.fecha)}</span>
        <p class="note-item__text">${escapeHtml(n.texto)}</p>
      </div>
    `
    )
    .join("");
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function attachHandlers() {
  const weekSelect = document.getElementById("note-week");
  weekSelect.addEventListener("change", () => {
    selectedWeek = Number(weekSelect.value);
    renderNotes();
  });

  document.getElementById("note-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const day = document.getElementById("note-day").value;
    const text = document.getElementById("note-text").value.trim();
    if (!text) return;
    addNote({ week: selectedWeek, day, texto: text });
    renderNotes();
  });
}
