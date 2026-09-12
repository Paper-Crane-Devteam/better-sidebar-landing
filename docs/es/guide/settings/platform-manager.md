---
title: Gestor de plataformas
description: Activa o desactiva Better Sidebar por sitio, y llega a los controles de UI de la plataforma desde la barra de herramientas del navegador sin abrir la barra lateral.
---

# Gestor de plataformas

Haz clic en el icono de Better Sidebar en la barra de herramientas del navegador y obtienes un panel pequeño con tres pestañas. Es la forma más rápida de llegar a los ajustes de plataforma, y el único sitio para desactivar la extensión en un sitio.

![El popup de la barra de herramientas del navegador con pestañas Platforms, Gemini y AI Studio](/images/features/platform-popup.png)

## Pestaña Platforms

Un interruptor por sitio compatible:

| Plataforma | |
| --- | --- |
| Google Gemini | `gemini.google.com` |
| Google AI Studio | `aistudio.google.com` |

Desactivar una plataforma detiene Better Sidebar en ese sitio **por completo**: sin barra lateral, sin funciones inyectadas, nada. El sitio se comporta como si la extensión no estuviera instalada.

Tus datos no se tocan. Vuelve a activarla y todo está donde lo dejaste.

:::tip
Este es el control correcto para «quiero Better Sidebar en Gemini pero AI Studio debe quedarse de fábrica», o para descartar temporalmente la extensión mientras depuras algo raro en una página. Es una prueba más limpia que desactivar toda la extensión, porque tu otro sitio sigue funcionando.
:::

:::warning
No confundas esto con **Cambiar a la barra lateral original** (`Alt+Shift+Q`). Eso intercambia la UI de la barra lateral pero mantiene todo lo demás — captura de datos, comandos con barra, el agente — en marcha. Desactivar una plataforma aquí lo apaga todo.
:::

## Pestañas Gemini y AI Studio

Estas reflejan **Ajustes → Controles de UI** para cada plataforma: anchos, visibilidad de elementos e interruptores de funciones. Mismos valores, mismo efecto: es el mismo ajuste subyacente, solo que accesible sin abrir primero la barra lateral.

La pestaña de tu sitio actual se selecciona automáticamente al abrir el popup.

Para qué hace cada control, consulta [Diseño y ancho](/en/guide/ui-customization/layout-and-width).

### Los comandos con barra viven solo aquí

Un interruptor existe en el popup y en ningún otro sitio: **Comandos con barra**, por cada plataforma. Si quieres que `/` deje de abrir tu biblioteca de prompts, aquí es donde lo haces. Consulta [Comandos con barra](/en/guide/ui-customization/slash-commands).

## Diferencias entre plataformas

Los dos sitios están construidos de forma distinta, así que los conjuntos de funciones no son idénticos.

| Función | Gemini | AI Studio |
| --- | --- | --- |
| Barra lateral, carpetas, etiquetas, búsqueda | Sí | Sí |
| Prompts, snippets, comandos con barra | Sí | Sí |
| Agente y agente Workspace | Sí | Sí |
| Ancho de la barra lateral | Sí | Sí |
| Ancho del chat / entrada | Sí | — |
| Zen Mode | Sí | — |
| Interruptores de visibilidad de elementos | Sí | — |
| Smart Scrollbar | Sí | — |
| Barra de selección | Sí | — |
| Gems y Notebooks | Sí | — |
| Ancho automático de tablas | Sí | — |
| Eliminación de marca de agua | Sí | — |
| Colapsar Run Settings | — | Sí |
| Importación masiva del historial | — | Sí |

El núcleo compartido — organizar, buscar, prompts, snippets, el agente — funciona igual en ambas. Las diferencias están todas en UI específica de plataforma que solo existe en un lado.

## Los ajustes son por plataforma

Cada plataforma guarda sus propios valores. Una barra lateral de 450px en Gemini y una de 300px en AI Studio coexisten felizmente; visitar cada sitio aplica la correcta automáticamente.

Todo se guarda al instante y se incluye en exportaciones de la base de datos y [copias de seguridad de Drive](/en/guide/extras/drive-sync).
