// Diccionario de ejercicios, tomado literalmente de la hoja "Ejercicios" del XLSX.
// La clave (id) es el nombre normalizado (minúsculas, sin tildes) para poder
// cruzarlo contra los fragmentos de texto de "Plan del día" en program.js.
export const exercises = {
  "sentarse y levantarse": {
    nombre: "Sentarse y levantarse",
    comoHacerlo:
      "Desde una silla firme, pies estables, inclinar ligeramente el tronco, levantarse y sentarse lentamente.",
    inicio: "5 repeticiones",
    progresion: "Hasta 12 repeticiones x 2 series",
    precaucion: "Usar una silla estable. No dejarse caer al sentarse.",
  },
  "extension de rodilla sentado": {
    nombre: "Extensión de rodilla sentado",
    comoHacerlo: "Sentada, estirar una pierna hacia delante y volver lentamente.",
    inicio: "5 por lado",
    progresion: "12 por lado x 2",
    precaucion: "Movimiento cómodo; no forzar la articulación.",
  },
  "elevacion de talones": {
    nombre: "Elevación de talones",
    comoHacerlo: "De pie detrás de una silla, elevar talones y bajar lentamente.",
    inicio: "8 repeticiones",
    progresion: "15 x 2",
    precaucion: "Sujeción ligera; evitar hacerlo sin apoyo si hay inestabilidad.",
  },
  "marcha en el lugar": {
    nombre: "Marcha en el lugar",
    comoHacerlo: "De pie, elevar alternativamente las rodillas a una altura cómoda.",
    inicio: "30 s x 2",
    progresion: "2–3 min x 2",
    precaucion: "Sujeción si hace falta.",
  },
  "transferencia de peso": {
    nombre: "Transferencia de peso",
    comoHacerlo: "Con apoyo, desplazar lentamente el peso de una pierna a otra.",
    inicio: "5 por lado",
    progresion: "10 por lado",
    precaucion: "No practicar sin apoyo al principio.",
  },
  "equilibrio con un pie": {
    nombre: "Equilibrio con un pie",
    comoHacerlo: "Con silla o apoyo firme, levantar un pie unos centímetros.",
    inicio: "3–5 s por lado",
    progresion: "30–45 s por lado",
    precaucion: "Siempre cerca de apoyo estable.",
  },
  "caminata talon-punta": {
    nombre: "Caminata talón-punta",
    comoHacerlo:
      "Dar pasos pequeños colocando aproximadamente el talón delante de los dedos del otro pie.",
    inicio: "5 pasos",
    progresion: "10–15 pasos",
    precaucion: "Solo con apoyo cercano y supervisión al principio.",
  },
  "empuje contra pared": {
    nombre: "Empuje contra pared",
    comoHacerlo:
      "Frente a una pared, manos apoyadas y flexionar/extender suavemente los codos.",
    inicio: "Solo si está autorizado",
    progresion: "5–10 repeticiones",
    precaucion: "NO cargar el brazo operado si no está autorizado por su profesional.",
    brazoOperado: true,
  },
  "movilidad de hombros": {
    nombre: "Movilidad de hombros",
    comoHacerlo: "Elevar/descender hombros y hacer círculos pequeños y cómodos.",
    inicio: "5–10 repeticiones",
    progresion: "10–15",
    precaucion: "No forzar el brazo operado.",
    brazoOperado: true,
  },
  "rotacion suave de tronco": {
    nombre: "Rotación suave de tronco",
    comoHacerlo: "Sentada, girar suavemente el tronco a derecha e izquierda.",
    inicio: "5 por lado",
    progresion: "8–10 por lado",
    precaucion: "Sin rebotes ni dolor.",
  },
  "movilidad de tobillos": {
    nombre: "Movilidad de tobillos",
    comoHacerlo: "Sentada, alternar punta y talón y mover los tobillos suavemente.",
    inicio: "10 repeticiones",
    progresion: "15–20",
    precaucion: "Movimiento cómodo.",
  },
};

// Normaliza texto para matchear: minúsculas, sin tildes, sin espacios extra.
export function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

// Busca el ejercicio del diccionario cuyo nombre está contenido en el label
// (o viceversa), para tolerar variantes como "sentarse/levantarse" vs
// "Sentarse y levantarse".
export function findExercise(label) {
  const norm = normalize(label).replace(/\//g, " y ");
  for (const [id, ex] of Object.entries(exercises)) {
    const exNorm = normalize(id);
    if (norm.includes(exNorm) || exNorm.includes(norm)) {
      return { id, ...ex };
    }
  }
  return null;
}
