import { program } from "./data/program.js";

const DAY_NAMES = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function toLocalDate(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Devuelve { week, dayName } para la fecha de hoy según program.startDate,
// o null si hoy cae antes del inicio o después de la semana 12.
export function getTodayInProgram(now = new Date()) {
  const start = startOfDay(toLocalDate(program.startDate));
  const today = startOfDay(now);
  const diffDays = Math.round((today - start) / 86400000);

  if (diffDays < 0) {
    return { status: "not-started" };
  }

  const week = Math.floor(diffDays / 7) + 1;
  if (week > 12) {
    return { status: "finished" };
  }

  const dayName = DAY_NAMES[today.getDay()];
  return { status: "in-program", week, dayName };
}
