// Bottom sheet genérico: recibe HTML interno y lo muestra sobre un backdrop.
const root = document.getElementById("sheet-root");

export function openSheet(innerHtml) {
  closeSheet();
  const backdrop = document.createElement("div");
  backdrop.className = "sheet-backdrop";
  backdrop.innerHTML = `
    <div class="sheet" role="dialog" aria-modal="true">
      <button class="sheet__close" aria-label="Cerrar">✕</button>
      ${innerHtml}
    </div>
  `;
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeSheet();
  });
  backdrop.querySelector(".sheet__close").addEventListener("click", closeSheet);
  document.addEventListener("keydown", onKeydown);
  root.appendChild(backdrop);
  backdrop.querySelector(".sheet__close").focus();
}

function onKeydown(e) {
  if (e.key === "Escape") closeSheet();
}

export function closeSheet() {
  document.removeEventListener("keydown", onKeydown);
  root.innerHTML = "";
}
