import { nutritionCategories, nutritionNote } from "../data/nutrition.js";

let openCategoryId = null;

export function renderNutrition() {
  const section = document.getElementById("section-nutricion");

  section.innerHTML = `
    <h2 class="section-title">Nutrición</h2>
    <p class="nutrition-note">${nutritionNote}</p>
    <div id="nutrition-list">
      ${nutritionCategories.map(renderCategory).join("")}
    </div>
  `;

  attachHandlers();
}

function renderCategory(cat) {
  const isOpen = openCategoryId === cat.id;
  return `
    <div class="nutrition-category">
      <button class="nutrition-category__header" data-toggle-category="${cat.id}">
        <span class="nutrition-category__icon" aria-hidden="true">${cat.icon}</span>
        <span class="nutrition-category__titles">
          <span class="nutrition-category__title">${cat.title}</span>
          <span class="nutrition-category__subtitle">${cat.subtitle}</span>
        </span>
        <span class="day-accordion__chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="nutrition-category__body" ${isOpen ? "" : "hidden"}>
        ${cat.items
          .map(
            (item) => `
          <div class="nutrition-item">
            <p class="nutrition-item__name">${item.name}</p>
            <p class="nutrition-item__note">${item.note}</p>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function attachHandlers() {
  document.querySelectorAll("[data-toggle-category]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.toggleCategory;
      openCategoryId = openCategoryId === id ? null : id;
      renderNutrition();
    });
  });
}
