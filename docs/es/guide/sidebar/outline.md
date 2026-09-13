---
title: Esquema
description: Un mapa estructural de la conversación que estás leyendo — cada turno, encabezado, bloque de código y tabla, buscable y con navegación al hacer clic.
---

# Esquema

El Esquema es un panel plegable al final de la pestaña Biblioteca. Muestra la estructura de la conversación que tengas abierta: cada turno y, dentro de cada turno, los encabezados, bloques de código y tablas que produjo el modelo.

![El panel Esquema mostrando turnos, encabezados anidados y tablas](/images/features/outline.webp)

Piénsalo como el esquema de documento de un editor de código, aplicado a una conversación.

## Abrirlo

Haz clic en **OUTLINE** al final de la pestaña Biblioteca. Está plegado por defecto.

Puedes arrastrar su borde superior para redimensionarlo. Si colapsas la sección **Chats** de arriba, el esquema se expande para llenar todo el panel: útil cuando estás metido en una conversación larga y no necesitas el árbol.

## Qué mapea

| Nivel | Qué ves |
| --- | --- |
| Turno | Tu pregunta, numerada |
| Dentro de un turno | Encabezados (h2/h3/h4), bloques de código con su lenguaje, tablas con recuento de filas, imágenes, enlaces, fórmulas |

El anidamiento sigue la jerarquía de encabezados de la respuesta, así que una respuesta bien estructurada produce un árbol legible.

## Navegar

Haz clic en cualquier entrada y la página se desplaza hasta ella. El turno que estás leyendo se resalta, y el botón **Localizar** (icono de mira) en el encabezado del panel desplaza el propio esquema a tu posición actual.

**Colapsar todo** en el encabezado pliega cada turno hasta solo las preguntas: lo que convierte el esquema en una lista de todo lo que preguntaste en esta conversación. Eso solo suele ser la forma más rápida de encontrar dónde una sesión larga se torció.

## Filtros

El icono de embudo revela chips de filtro:

- **Todos** — todo
- **Encabezados** — solo encabezados
- **Código** — solo bloques de código

Los filtros solo aparecen cuando la conversación contiene realmente ese tipo, así que no verás un filtro Código en una conversación sin código.

:::tip
El filtro **Código** es al que llegar en una sesión larga de depuración. Quince turnos después, tienes ocho versiones de la misma función repartidas por la conversación. Filtra a código y son una lista por la que puedes hacer clic, en lugar de algo por lo que desplazarte.
:::

## Buscar dentro de la conversación

El esquema tiene su propia caja de búsqueda de texto completo. Busca dentro de la conversación actual y poda el árbol a las coincidencias.

Es un Ctrl+F genuino para la conversación que estás leyendo, con resultados mostrados como estructura en lugar de una lista plana de resaltados.

Para buscar en *toda* tu biblioteca, usa la [pestaña Búsqueda](/en/guide/sidebar/search-tab) en su lugar.

## Copiar desde él

Clic derecho en una entrada para:

- **Copiar pregunta** — el texto completo de tu pregunta de ese turno
- **Copiar respuesta** — la respuesta completa del modelo de ese turno
- **Copiar** — el contenido en bruto de un bloque de código

Copiar un bloque de código desde el esquema evita buscar el botón de copiar en la página, y te da el texto en bruto sin la prosa alrededor.

## Esquema frente a Smart Scrollbar

Ambos te ayudan a moverte por una conversación larga. No son lo mismo.

| | Esquema | [Smart Scrollbar](/en/guide/ui-customization/smart-scrollbar) |
| --- | --- | --- |
| Vive en | Pestaña Biblioteca, panel inferior | Flotante junto a la conversación |
| Granularidad | Turnos **y** su estructura interna | Una entrada por mensaje |
| Búsqueda | Sí | No |
| Filtros | Sí | No |
| Plataformas | Gemini y AI Studio | Solo Gemini |

Usa la Smart Scrollbar para saltar entre mensajes. Usa el Esquema cuando necesites encontrar un encabezado, tabla o bloque de código concreto *dentro* de una respuesta.

## Si está vacío

El esquema lee de los mensajes que Better Sidebar ha registrado para la conversación actual.

**«Abre una conversación para ver su esquema»** — no estás en una conversación.

**«Sin contenido de esquema»** — la conversación está abierta pero sus mensajes no se han registrado, o no hay estructura que mapear de verdad (un ida y vuelta corto sin encabezados ni código no tiene nada que esquemar).

Si una conversación que claramente has usado no muestra nada, sus mensajes nunca se capturaron. Ábrela de nuevo, o consulta [Búsqueda → obtener contenido de mensajes](/en/guide/sidebar/search-tab#for-gemini).

Si el esquema está presente pero no coincide con lo de la página, el [botón de limpiar y recargar](/en/guide/ui-customization/smart-scrollbar#when-the-outline-doesnt-match-the-page) de la Smart Scrollbar reconstruye los mensajes guardados de esa conversación.
