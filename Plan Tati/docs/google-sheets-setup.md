# Conectar Notas a Google Sheets (paso futuro)

Hoy las notas se guardan en `localStorage` (ver `js/store.js`). Esto documenta
cómo conectarlas a Google Sheets el día que haga falta sincronizar entre
dispositivos, sin exponer credenciales en el navegador.

## Por qué no está implementado todavía

La app es de un solo usuario y funciona offline. Agregar una llamada de red
para algo que hoy resuelve `localStorage` sin fallas agrega una dependencia
(conexión a internet, cuota de Apps Script, manejo de errores de red) sin un
beneficio real todavía. Se documenta la ruta para no tener que rediseñar nada
cuando sí haga falta.

## 1. Crear el Sheet

Una hoja con estas columnas, en este orden:

| Fecha | Semana | Día | Nota |
|-------|--------|-----|------|

## 2. Crear el Apps Script (el "backend")

En el Sheet: **Extensiones → Apps Script**. Pegar:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.fecha, data.semana, data.dia, data.texto]);
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

**Implementar → Nueva implementación → Aplicación web**:
- Ejecutar como: **Yo** (el dueño del Sheet).
- Quién tiene acceso: **Cualquier usuario** (necesario para que el `fetch` del
  navegador pueda llegar, pero el script solo permite `appendRow`, no lectura
  ni acceso al resto del Sheet).

Esto da una URL tipo `https://script.google.com/macros/s/AAAA.../exec`.
Esa URL **no es secreta en el sentido de una API key** — es un endpoint que
solo sabe hacer una cosa (agregar una fila con estos 4 campos). No hay ningún
`client_secret`, token de servicio ni credencial de Google en el navegador.

## 3. Cambiar `store.js`

Solo se toca `addNote`, nada más del proyecto:

```javascript
const SHEETS_ENDPOINT = "https://script.google.com/macros/s/AAAA.../exec";

export async function addNote({ week, day, texto }) {
  const note = {
    fecha: new Date().toISOString().slice(0, 10),
    semana: week,
    dia: day,
    texto,
  };

  // Guardar local igual que antes, como respaldo offline.
  const state = readAll();
  state.notes.push({ id: Date.now(), ...note });
  writeAll(state);

  // Enviar a Sheets. Si falla (sin internet), la nota ya quedó guardada local.
  try {
    await fetch(SHEETS_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(note),
    });
  } catch {
    // sin conexión: la nota queda solo local, se puede reintentar después
  }
}
```

`getNotes()` puede seguir leyendo de `localStorage` (más rápido, funciona
offline) o cambiarse a leer del Sheet vía otro endpoint `doGet` si en algún
momento hace falta ver las notas desde otro dispositivo.

## Qué NO hacer

- No poner una API key de Google ni un service account JSON en el frontend.
- No dar acceso de lectura del Sheet completo al endpoint público — que
  `doPost` solo sepa agregar una fila con esos 4 campos.
