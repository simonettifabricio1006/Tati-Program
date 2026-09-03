// Biblioteca informativa de nutrición. Contenido general y educativo,
// no es un plan de dieta ni una indicación médica — ver nota en render/nutrition.js.
export const nutritionCategories = [
  {
    id: "proteinas",
    icon: "🥚",
    title: "Proteínas",
    subtitle: "Ayudan a mantener la masa muscular",
    items: [
      { name: "Huevos", note: "Fáciles de preparar y de digerir, buena proteína del día a día." },
      { name: "Pollo", note: "Proteína magra, se puede cocinar simple (al horno, hervido, a la plancha)." },
      { name: "Pescado", note: "Proteína de fácil digestión, aporta además grasas saludables." },
      { name: "Yogur", note: "Rápido de incorporar, sirve como colación con fruta." },
      { name: "Leche", note: "Aporta proteína y calcio, útil en licuados o con cereal." },
      { name: "Queso", note: "Proteína concentrada en poca cantidad, buena opción si hay poco apetito." },
      { name: "Legumbres", note: "Lentejas, garbanzos, porotos: proteína vegetal, también aportan energía." },
    ],
  },
  {
    id: "carbohidratos",
    icon: "🍞",
    title: "Carbohidratos",
    subtitle: "Dan energía para el día y el entrenamiento",
    items: [
      { name: "Arroz", note: "Fácil de combinar, buena base para acompañar proteínas." },
      { name: "Avena", note: "Ideal para el desayuno, se puede preparar cremosa." },
      { name: "Papa", note: "Sacia bien y es fácil de masticar y digerir." },
      { name: "Batata", note: "Alternativa a la papa, sabor más dulce." },
      { name: "Pasta", note: "Opción rápida, combina bien con salsas simples." },
      { name: "Pan", note: "Práctico para comidas rápidas, mejor con proteína o grasa saludable." },
      { name: "Frutas", note: "Energía rápida además de vitaminas, buenas como colación." },
      { name: "Legumbres", note: "Además de proteína, aportan carbohidratos de digestión lenta." },
    ],
  },
  {
    id: "grasas",
    icon: "🥑",
    title: "Grasas saludables",
    subtitle: "En cantidades moderadas, ayudan a la energía diaria",
    items: [
      { name: "Aceite de oliva", note: "Para cocinar o condimentar ensaladas y verduras." },
      { name: "Palta / aguacate", note: "Fácil de agregar a pan, ensaladas o puré." },
      { name: "Frutos secos", note: "Nueces, almendras: colación práctica en poca cantidad." },
      { name: "Semillas", note: "Chía, lino: se pueden agregar a yogur o avena." },
    ],
  },
  {
    id: "frutas-verduras",
    icon: "🥕",
    title: "Frutas y verduras",
    subtitle: "Opciones simples de incorporar cada día",
    items: [
      { name: "Banana", note: "Fácil de digerir, buena antes o después de caminar." },
      { name: "Manzana o pera", note: "Colación práctica, se pueden cocinar si cuesta masticar." },
      { name: "Zanahoria y calabaza", note: "Se pueden cocinar bien blandas, fáciles de comer." },
      { name: "Espinaca y acelga", note: "Verduras de hoja, van bien salteadas o en puré." },
      { name: "Tomate", note: "Fácil de sumar a comidas simples, crudo o cocido." },
    ],
  },
  {
    id: "energia",
    icon: "⚡",
    title: "Ideas para más energía",
    subtitle: "Combinaciones simples, no una dieta armada",
    items: [
      { name: "Yogur + fruta + nueces", note: "Proteína + carbohidrato + grasa saludable en una sola colación." },
      { name: "Huevo + pan + palta", note: "Combinación completa y fácil de preparar." },
      { name: "Pollo + arroz + aceite de oliva", note: "Buena opción de comida principal." },
      { name: "Avena + leche + banana", note: "Desayuno completo y de fácil digestión." },
    ],
  },
];

export const nutritionNote =
  "Esta información es general y educativa: ayuda a elegir ingredientes, no reemplaza una indicación nutricional profesional. Ante dudas sobre alimentación o cambios de peso, consultar con un médico o nutricionista.";
