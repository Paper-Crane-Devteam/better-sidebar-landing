---
title: Snippets
description: Conserva el párrafo bueno de una conversación de cincuenta turnos. Guarda cualquier parte de una respuesta en una biblioteca por carpetas, con Markdown intacto.
---

# Snippets

Tienes una conversación larga con Gemini. Enterrada en ella hay una explicación excelente, o un bloque de código que por fin funciona. El resto eres tú y el modelo dando vueltas.

Snippets es donde va la parte buena.

![La pestaña Snippets con carpetas y un snippet abierto en el lector](/images/features/snippets.webp)

## Guardar un snippet

### Desde una respuesta entera

Pasa el ratón sobre cualquier respuesta de la IA y aparece un botón **Guardar como snippet**.

![Guardar un snippet desde una respuesta de la IA](/images/features/snippet-save-demo.gif)

El botón hace dos cosas:

- **Clic** — guarda directamente en tu bandeja de Snippets
- **Mantener y arrastrar** — suéltalo en una carpeta de la barra lateral para archivarlo de inmediato

La ruta de arrastrar a carpeta merece aprenderse. Es la diferencia entre una bandeja que tienes que triar después y una biblioteca ya organizada.

### Desde una selección (Gemini)

Selecciona cualquier parte de una respuesta y aparece la [barra de selección](/en/guide/ui-customization/selection-toolbar) con **Guardar como snippet**. Esta es la opción precisa: un párrafo, un bloque de código, una tabla, en lugar de toda la respuesta.

:::tip
La selección suele ser lo que quieres. Una respuesta de IA de 800 palabras tiene quizá 80 palabras que merecen conservarse. Guardar todo significa que tendrás que releerlo después para encontrar la parte que importaba.
:::

## El formato sobrevive

Los snippets conservan su Markdown: encabezados, listas, bloques de código con resaltado de sintaxis, tablas, negrita y cursiva. Lo que viste en la conversación es lo que obtienes en la biblioteca.

Esto importa más con el código. Un snippet que perdiera sus cercas de código sería casi inútil.

## Organizar

La pestaña Snippets usa el mismo árbol de carpetas que todo lo demás, así que las interacciones son familiares:

- **Carpetas** — anidadas, coloreadas, arrastrables
- **Arrastrar y soltar** — mover snippets entre carpetas
- **Renombrar** — clic derecho, o `F2`
- **Duplicar** — clic derecho → Duplicar
- **Favoritos** — estrella en snippets para hacerlos flotar arriba
- **Modo por lotes** — selecciona varios para mover, eliminar o exportar a la vez
- **Filtros** — buscar por título, solo favoritos

Los snippets nuevos llegan a **Inbox** a menos que los hayas arrastrado a un sitio concreto.

## Leer un snippet

Haz clic en un snippet y se abre en un panel lector con el contenido renderizado por completo, más:

- **Copiar contenido** — el Markdown en bruto al portapapeles
- **Ir a la fuente** — salta de vuelta a la conversación de la que salió
- Su título, fuente y cuándo se creó

**Ir a la fuente** es el útil en silencio. Un snippet es un fragmento; seis semanas después puede que quieras el argumento alrededor. El enlace de vuelta significa que no perdiste ese contexto al extraer la parte buena.

## Exportar

Los snippets se exportan a todos los mismos destinos que las conversaciones: Markdown, texto plano, JSON, Obsidian y Notion. Clic derecho → **Exportar**, o selecciona varios en modo por lotes.

Este es el camino previsto hacia una base de conocimiento: **captura mientras lees, exporta en bloque después**. Guarda snippets sobre la marcha durante un mes y luego envía toda la colección a Obsidian de una vez.

La exportación a Obsidian y Notion necesita el [Power Pack](/en/guide/settings/packs). Consulta [Integraciones](/en/guide/extras/integrations).

## Los títulos suelen estar mal al principio

Un snippet guardado desde una selección hereda el texto alrededor como título, lo que produce cosas como *«Explain the following: verification loops Explain the following: verification loops»*.

Ese es el intercambio por guardar en un clic en lugar de rellenar un formulario. Dos formas de corregirlo:

**A mano** — clic derecho → Renombrar.

**En bloque** — pide al [agente](/en/guide/agent/better-sidebar-agent):

> Mi bandeja de snippets es un desastre. Agrúpalos en carpetas por tema y acorta los títulos que siguen siendo mi pregunta original a un resumen breve. Si el mismo contenido está guardado dos veces, quédate solo con el más antiguo. Muéstrame la lista antes de borrar nada.

Lee el contenido real, así que los títulos que escribe describen lo que dice el snippet en lugar de lo que casualmente preguntaste.

## Snippets frente a Prompts

Se parecen y sirven a propósitos opuestos.

| | Snippets | Prompts |
| --- | --- | --- |
| Contiene | **Salida** de la IA que merece conservarse | Tu **entrada**, reutilizable |
| Se guarda desde | Una respuesta que te gustó | Algo que escribes a menudo |
| Se usa | Leyéndolo, o exportándolo | Escribiendo `/` en el campo de chat |
| Crece hacia | Una base de conocimiento | Un kit de flujos de trabajo |

Si guardas algo para *usarlo de nuevo como prompt*, eso es un [prompt](/en/guide/sidebar/prompts-tab) — y la barra de selección tiene una acción aparte **Guardar como prompt** exactamente para ese caso.

## Un flujo que funciona

1. Trabaja con normalidad. No intentes organizar mientras piensas.
2. Cuando una respuesta contenga algo bueno, selecciónalo y guarda el snippet. Arrástralo a una carpeta si ya sabes dónde pertenece.
3. Una vez a la semana, haz que el agente ordene la bandeja: retitular, rearchivar, deduplicar.
4. Una vez al mes, exporta todo a Obsidian o Notion.

El punto es que el paso 2 cuesta unos dos segundos. Cualquier cosa más cara y no lo harás a mitad de pensamiento, lo que significa que los párrafos buenos se quedan enterrados en conversaciones que no volverás a abrir.
