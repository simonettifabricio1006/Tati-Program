// Contenido del programa de 12 semanas, generado a partir de
// Programa_12_Semanas_Abuela.xlsx (hoja "Calendario 12 semanas").
// No editar los textos de days[].rawPlan/duration/title a mano sin
// verificar contra el XLSX: son la fuente de verdad del programa.
//
// startDate: lunes de la semana 1. Editable si el programa arranca otro día
// (debe ser un lunes, ya que la semana 1 día 1 del calendario es Lunes).
export const program = {
  "startDate": "2026-08-31",
  "stages": [
    {
      "id": "etapa-1",
      "name": "Adaptación y hábito",
      "weeks": [
        1,
        2
      ]
    },
    {
      "id": "etapa-2",
      "name": "Construir fuerza básica",
      "weeks": [
        3,
        4
      ]
    },
    {
      "id": "etapa-3",
      "name": "Más volumen",
      "weeks": [
        5,
        6
      ]
    },
    {
      "id": "etapa-4",
      "name": "Capacidad y equilibrio",
      "weeks": [
        7,
        8
      ]
    },
    {
      "id": "etapa-5",
      "name": "Consolidación",
      "weeks": [
        9,
        10
      ]
    },
    {
      "id": "etapa-6",
      "name": "Autonomía y evaluación final",
      "weeks": [
        11,
        12
      ]
    }
  ],
  "weeks": [
    {
      "number": 1,
      "focus": "Adaptación y hábito",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 5x1; extensión de rodilla sentado 5/lado; elevación de talones 8x1; marcha en lugar 30s x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "5x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla sentado",
              "detail": "5/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "8x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha en lugar",
              "detail": "30s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "15 min",
          "rawPlan": "Caminata suave 10 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 5x1; extensión de rodilla sentado 5/lado; elevación de talones 8x1; marcha en lugar 30s x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "5x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla sentado",
              "detail": "5/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "8x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha en lugar",
              "detail": "30s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "13 min",
          "rawPlan": "Caminata suave 8 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 5x1; extensión de rodilla sentado 5/lado; elevación de talones 8x1; marcha en lugar 30s x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "5x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla sentado",
              "detail": "5/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "8x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha en lugar",
              "detail": "30s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 15 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 2,
      "focus": "Adaptación y hábito",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 5x1; extensión de rodilla sentado 5/lado; elevación de talones 8x1; marcha en lugar 30s x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "5x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla sentado",
              "detail": "5/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "8x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha en lugar",
              "detail": "30s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "17 min",
          "rawPlan": "Caminata suave 12 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 5x1; extensión de rodilla sentado 5/lado; elevación de talones 8x1; marcha en lugar 30s x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "5x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla sentado",
              "detail": "5/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "8x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha en lugar",
              "detail": "30s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "15 min",
          "rawPlan": "Caminata suave 10 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 5x1; extensión de rodilla sentado 5/lado; elevación de talones 8x1; marcha en lugar 30s x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "5x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla sentado",
              "detail": "5/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "8x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha en lugar",
              "detail": "30s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 17 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 3,
      "focus": "Construir fuerza básica",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 6x1; extensión de rodilla 8/lado; elevación de talones 10x1; marcha 45s x2; equilibrio con apoyo 20s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "6x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "8/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "10x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "45s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio con apoyo",
              "detail": "20s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "20 min",
          "rawPlan": "Caminata suave 15 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 6x1; extensión de rodilla 8/lado; elevación de talones 10x1; marcha 45s x2; equilibrio con apoyo 20s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "6x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "8/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "10x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "45s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio con apoyo",
              "detail": "20s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "18 min",
          "rawPlan": "Caminata suave 13 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 6x1; extensión de rodilla 8/lado; elevación de talones 10x1; marcha 45s x2; equilibrio con apoyo 20s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "6x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "8/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "10x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "45s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio con apoyo",
              "detail": "20s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 20 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 4,
      "focus": "Construir fuerza básica",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 6x1; extensión de rodilla 8/lado; elevación de talones 10x1; marcha 45s x2; equilibrio con apoyo 20s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "6x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "8/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "10x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "45s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio con apoyo",
              "detail": "20s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "23 min",
          "rawPlan": "Caminata suave 18 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 6x1; extensión de rodilla 8/lado; elevación de talones 10x1; marcha 45s x2; equilibrio con apoyo 20s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "6x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "8/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "10x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "45s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio con apoyo",
              "detail": "20s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "21 min",
          "rawPlan": "Caminata suave 16 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 3 min; sentarse/levantarse 6x1; extensión de rodilla 8/lado; elevación de talones 10x1; marcha 45s x2; equilibrio con apoyo 20s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "3 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "6x1",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "8/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "10x1",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "45s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio con apoyo",
              "detail": "20s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 23 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 5,
      "focus": "Más volumen",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 8x2; extensión de rodilla 10/lado; elevación de talones 12x2; marcha 60s x2; equilibrio 20–30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "8x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "10/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "60s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "20–30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "25 min",
          "rawPlan": "Caminata suave 20 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 8x2; extensión de rodilla 10/lado; elevación de talones 12x2; marcha 60s x2; equilibrio 20–30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "8x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "10/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "60s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "20–30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "23 min",
          "rawPlan": "Caminata suave 18 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 8x2; extensión de rodilla 10/lado; elevación de talones 12x2; marcha 60s x2; equilibrio 20–30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "8x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "10/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "60s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "20–30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 25 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 6,
      "focus": "Más volumen",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 8x2; extensión de rodilla 10/lado; elevación de talones 12x2; marcha 60s x2; equilibrio 20–30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "8x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "10/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "60s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "20–30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "27 min",
          "rawPlan": "Caminata suave 22 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 8x2; extensión de rodilla 10/lado; elevación de talones 12x2; marcha 60s x2; equilibrio 20–30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "8x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "10/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "60s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "20–30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "25 min",
          "rawPlan": "Caminata suave 20 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 8x2; extensión de rodilla 10/lado; elevación de talones 12x2; marcha 60s x2; equilibrio 20–30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "8x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "10/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "60s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "20–30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 27 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 7,
      "focus": "Capacidad y equilibrio",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 10x2; extensión de rodilla 12/lado; elevación de talones 12x2; marcha 90s x2; equilibrio 30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "90s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "30 min",
          "rawPlan": "Caminata suave 25 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 10x2; extensión de rodilla 12/lado; elevación de talones 12x2; marcha 90s x2; equilibrio 30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "90s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "28 min",
          "rawPlan": "Caminata suave 23 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 10x2; extensión de rodilla 12/lado; elevación de talones 12x2; marcha 90s x2; equilibrio 30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "90s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 30 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 8,
      "focus": "Capacidad y equilibrio",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 10x2; extensión de rodilla 12/lado; elevación de talones 12x2; marcha 90s x2; equilibrio 30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "90s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "30 min",
          "rawPlan": "Caminata suave 25 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 10x2; extensión de rodilla 12/lado; elevación de talones 12x2; marcha 90s x2; equilibrio 30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "90s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "28 min",
          "rawPlan": "Caminata suave 23 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 4 min; sentarse/levantarse 10x2; extensión de rodilla 12/lado; elevación de talones 12x2; marcha 90s x2; equilibrio 30s/lado x2; movilidad 5 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "4 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "12x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "90s x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 30 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 9,
      "focus": "Consolidación",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 10–12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2 min x2; equilibrio 30s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10–12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "33 min",
          "rawPlan": "Caminata suave 28 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 10–12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2 min x2; equilibrio 30s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10–12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "31 min",
          "rawPlan": "Caminata suave 26 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 10–12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2 min x2; equilibrio 30s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10–12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 30 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 10,
      "focus": "Consolidación",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 10–12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2 min x2; equilibrio 30s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10–12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "35 min",
          "rawPlan": "Caminata suave 30 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 10–12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2 min x2; equilibrio 30s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10–12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "33 min",
          "rawPlan": "Caminata suave 28 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 10–12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2 min x2; equilibrio 30s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "10–12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 30 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 11,
      "focus": "Autonomía",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2–3 min x2; equilibrio 30–45s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2–3 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30–45s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "35 min",
          "rawPlan": "Caminata suave 30 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2–3 min x2; equilibrio 30–45s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2–3 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30–45s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "33 min",
          "rawPlan": "Caminata suave 28 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2–3 min x2; equilibrio 30–45s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2–3 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30–45s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 30 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    },
    {
      "number": 12,
      "focus": "Consolidación y evaluación",
      "days": [
        {
          "day": "Lunes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2–3 min x2; equilibrio 30–45s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2–3 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30–45s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Martes",
          "type": "caminata",
          "title": "Caminata",
          "duration": "35 min",
          "rawPlan": "Caminata suave 30 min. Ritmo cómodo, conversación posible. Al final, movilidad suave 5 min.",
          "exercises": []
        },
        {
          "day": "Miércoles",
          "type": "fuerza",
          "title": "Fuerza + equilibrio",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2–3 min x2; equilibrio 30–45s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2–3 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30–45s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Jueves",
          "type": "caminata",
          "title": "Caminata + movilidad",
          "duration": "33 min",
          "rawPlan": "Caminata suave 28 min + 5 min de movilidad. Si está cansada, reducir el tiempo.",
          "exercises": []
        },
        {
          "day": "Viernes",
          "type": "fuerza",
          "title": "Fuerza + movilidad",
          "duration": "20–30 min",
          "rawPlan": "Calentamiento 5 min; sentarse/levantarse 12x2; extensión de rodilla 12/lado x2; elevación de talones 15x2; marcha 2–3 min x2; equilibrio 30–45s/lado x2; movilidad 5–7 min.",
          "exercises": [
            {
              "label": "Calentamiento",
              "detail": "5 min",
              "matchedExerciseId": null
            },
            {
              "label": "sentarse/levantarse",
              "detail": "12x2",
              "matchedExerciseId": "sentarse y levantarse"
            },
            {
              "label": "extensión de rodilla",
              "detail": "12/lado x2",
              "matchedExerciseId": "extension de rodilla sentado"
            },
            {
              "label": "elevación de talones",
              "detail": "15x2",
              "matchedExerciseId": "elevacion de talones"
            },
            {
              "label": "marcha",
              "detail": "2–3 min x2",
              "matchedExerciseId": "marcha en el lugar"
            },
            {
              "label": "equilibrio",
              "detail": "30–45s/lado x2",
              "matchedExerciseId": "equilibrio con un pie"
            },
            {
              "label": "movilidad",
              "detail": "5–7 min",
              "matchedExerciseId": null
            }
          ]
        },
        {
          "day": "Sábado",
          "type": "recreativa",
          "title": "Actividad recreativa",
          "duration": "15–30 min",
          "rawPlan": "Paseo agradable o actividad cotidiana activa durante 30 min. Puede dividirse en 2 bloques. Sin exigirse.",
          "exercises": []
        },
        {
          "day": "Domingo",
          "type": "recuperacion",
          "title": "Recuperación",
          "duration": "5–15 min",
          "rawPlan": "Descanso activo: 5–10 min de movilidad suave y una caminata corta opcional. Recuperar.",
          "exercises": []
        }
      ]
    }
  ]
};

export function getWeek(number) {
  return program.weeks.find((w) => w.number === number) || null;
}

export function getStageForWeek(number) {
  return program.stages.find((s) => s.weeks.includes(number)) || null;
}

export function getDay(weekNumber, dayName) {
  const week = getWeek(weekNumber);
  if (!week) return null;
  return week.days.find((d) => d.day === dayName) || null;
}

// Id estable para usar como clave de localStorage: "s1-lunes".
export function dayKey(weekNumber, dayName) {
  return `s${weekNumber}-${dayName.toLowerCase()}`;
}
