const SECTIONS = ["entrenamiento", "progression", "notas", "nutricion"];

// Controla qué <section> está visible y el estado activo del bottom nav.
// Sin router: todo vive en index.html, esto solo togglea [hidden].
export function initNav(onShow) {
  const buttons = document.querySelectorAll(".bottom-nav__item");

  function showSection(name) {
    for (const s of SECTIONS) {
      const section = document.getElementById(`section-${s}`);
      section.hidden = s !== name;
    }
    for (const btn of buttons) {
      const isActive = btn.dataset.section === name;
      btn.classList.toggle("is-active", isActive);
      if (isActive) {
        btn.setAttribute("aria-current", "page");
      } else {
        btn.removeAttribute("aria-current");
      }
    }
    if (onShow) onShow(name);
  }

  for (const btn of buttons) {
    btn.addEventListener("click", () => showSection(btn.dataset.section));
  }

  return { showSection };
}
