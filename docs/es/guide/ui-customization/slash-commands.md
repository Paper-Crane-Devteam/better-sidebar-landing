---
title: Comandos con barra
description: Escribe / en el campo de chat para insertar cualquier prompt de tu biblioteca, con variables rellenadas e importaciones resueltas, sin soltar el teclado.
---

# Comandos con barra

Escribe `/` en el campo de entrada de Gemini o AI Studio y tu [biblioteca de prompts](/en/guide/sidebar/prompts-tab) aparece en línea.

![Escribir una barra en el campo de chat abre el selector de prompts](/images/features/slash-command.webp)

Sigue escribiendo para filtrar. Flechas para moverte. Enter para insertar. El texto `/query` que escribiste se reemplaza por el contenido completo del prompt.

## Coincidencia

El filtrado es difuso y de varias palabras, así que `/rev code` encuentra *Review code for security issues*. La coincidencia empieza desde el principio de las palabras, por eso el orden del título importa:

| Título | Lo encuentra |
| --- | --- |
| `translate-jp` | `/tr`, `/jp` |
| `Japanese translation helper` | `/ja`, `/tran` — pero no `/jp` tan rápido |

:::tip
Pon la palabra clave primero. `review-security` gana a `My prompt for reviewing code security` no porque sea más corto sino porque `/rev` cae en él de inmediato. Si haces una sola cosa para que tu biblioteca sea más rápida de usar, es renombrar para esto.
:::

## Las variables se rellenan

Si el prompt contiene variables, aparece un formulario pequeño antes de la inserción.

Las variables de texto te dan un campo de entrada. Las de desplegable te dan un select con tus opciones predefinidas. Rellénalas, y el texto resuelto — variables sustituidas, [importaciones](/en/guide/sidebar/prompts-tab#prompt-composition-import) en línea — va al campo de entrada.

Así que un prompt como:

```
Translate the following to {{language:English,Japanese,Spanish}}.
Tone: {{tone:neutral,formal,casual}}.

{{@import:Translation Rules}}
```

se convierte, en tres pulsaciones y dos elecciones de desplegable, en una instrucción completamente formada con tus reglas estándar de traducción adjuntas.

## Desactivarlo

El interruptor está en el **popup de la barra de herramientas del navegador**: haz clic en el icono de Better Sidebar junto a la barra de direcciones, elige la pestaña Gemini o AI Studio y alterna **Comandos con barra**. Es por plataforma.

:::tip
Este es el único interruptor que no está en el modal de Ajustes de la barra lateral, lo que confunde a la gente. Si lo buscas en Ajustes → Controles de UI, no está ahí. Consulta [Gestor de plataformas](/en/guide/settings/platform-manager).
:::

Merece desactivarlo si empiezas mensajes con frecuencia con una barra literal: rutas de archivo, regexes, fechas. Si no, déjalo activado.

## Biblioteca vacía

Sin prompts guardados, el popup lo dice y ofrece un botón hacia la pestaña Prompts. Aún no hay nada que insertar.

## Construir una biblioteca que merezca `/`

Unos prompts que se pagan solos de inmediato:

| Título sugerido | Forma del contenido |
| --- | --- |
| `review-code` | Tus criterios estándar de revisión de código |
| `explain-simple` | «Explícame esto como a alguien competente pero no familiarizado. Sin analogías.» |
| `translate` | Con idioma y tono como variables de desplegable |
| `summarize` | Tu forma de salida preferida: viñetas, longitud, qué omitir |
| `rewrite-tone` | Tono como desplegable |
| `commit-msg` | Tus convenciones de mensajes de commit |

La prueba de si algo pertenece a la biblioteca es simple: ¿has escrito más o menos esto dos veces? Entonces guárdalo. Lo escribirás otra vez.

## Relacionado

- [Prompts](/en/guide/sidebar/prompts-tab) — construir la biblioteca, variables, composición
- [Barra de selección](/en/guide/ui-customization/selection-toolbar) — guardar un buen fraseo como prompt sin salir de la conversación
- [Agente](/en/guide/agent/better-sidebar-agent) — haz que refactorice una biblioteca que ha crecido sin control
