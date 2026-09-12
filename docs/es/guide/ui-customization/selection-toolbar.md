---
title: Barra de selección
description: Selecciona texto en una conversación de Gemini y actúa sobre él — cítalo de vuelta, pide una explicación, guárdalo como snippet o prompt, o cópialo.
---

# Barra de selección

Selecciona cualquier texto en una conversación de Gemini y aparece una barra pequeña encima. Seis acciones posibles, todas operando exactamente sobre lo que seleccionaste.

:::tip
Solo Gemini. La estructura de conversación de AI Studio aún no lo soporta.
:::

## Las acciones

| Acción | Qué hace | Predeterminado |
| --- | --- | --- |
| **Referenciar** | Inserta la selección en el campo de entrada como una referencia citada | Activado |
| **Explicar** | Pide a la IA que explique la selección | Activado |
| **Resumir** | Pide a la IA que resuma la selección | **Desactivado** |
| **Guardar como snippet** | Lo guarda en tu [biblioteca de snippets](/en/guide/sidebar/snippets-tab) | Activado |
| **Copiar** | Lo copia al portapapeles | Activado |
| **Guardar como prompt** | Lo guarda en tu [bandeja de prompts](/en/guide/sidebar/prompts-tab) | Activado |

Cada una tiene su propio interruptor en **Ajustes → Controles de UI → Barra de selección**, más un interruptor maestro para todo. Desactiva las que no uses: una barra con tres botones es más rápida de acertar que una con seis.

## Referenciar

La más útil, y la menos obvia.

Selecciona una afirmación concreta en una respuesta larga, haz clic en **Referenciar**, y va a tu campo de entrada como una cita. Luego escribe tu seguimiento.

El problema que resuelve: en una respuesta larga, «¿qué querías decir con eso?» es ambiguo. El modelo tiene que adivinar a qué parte te refieres, y a menudo adivina mal. Citar la frase exacta elimina la adivinanza.

:::tip
Esta es la corrección del modo de fallo más común de las respuestas largas de IA: quieres empujar sobre un punto concreto, pero referirte a él cuesta un párrafo de preparación. Selecciona, Referenciar, pregunta. Dos segundos, cero ambigüedad.
:::

## Explicar y Resumir

**Explicar** envía la selección de vuelta con una petición de desglosarla. Bueno para un término o un paso que no seguiste, sin desviarte a una conversación nueva.

**Resumir** está desactivado por defecto porque es el menos común de los dos: la mayoría selecciona algo que *no* entendió en lugar de algo demasiado largo. Actívalo si seleccionas bloques grandes con regularidad.

## Guardar como snippet

Guardado preciso. El botón **Guardar como snippet** de la respuesta entera conserva todo; este conserva solo la parte que merece conservarse.

El formato se preserva: encabezados, listas, bloques de código sobreviven. Los snippets aterrizan en tu bandeja.

El título se toma del texto alrededor, lo que produce títulos torpes. Consulta [Snippets](/en/guide/sidebar/snippets-tab#titles-are-usually-wrong-at-first) para cómo corregirlos en bloque.

## Guardar como prompt

Para el caso opuesto: improvisaste una buena instrucción, o el modelo produjo un fraseo que quieres reutilizar como entrada. Va a tu bandeja de prompts, y desde ahí está disponible vía [`/`](/en/guide/ui-customization/slash-commands).

:::tip
Vigila esto en tu propio comportamiento. Cuando te encuentres escribiendo una petición de verdad bien construida a mitad de conversación, eso es un prompt. Selecciona tu propio mensaje, Guardar como prompt, y lo tienes para siempre en lugar de recordarlo a medias el mes que viene.
:::

## Copiar

Copia la selección con su formato Markdown intacto. Distinto de una copia normal del navegador, que tiende a aplanar la estructura o traer estilos que no quieres.

## Desactivarla

Interruptor maestro: **Ajustes → Controles de UI → Barra de selección**.

Merece desactivarla si seleccionas texto mucho por motivos que no van de actuar sobre él — leer con el cursor, por ejemplo — y te molesta que aparezca un popup cada vez.

## Relacionado

- [Snippets](/en/guide/sidebar/snippets-tab) — adónde van las selecciones guardadas
- [Prompts](/en/guide/sidebar/prompts-tab) — adónde van los fraseos guardados
- [Smart Scrollbar](/en/guide/ui-customization/smart-scrollbar) — salta a un mensaje, luego selecciona desde él
