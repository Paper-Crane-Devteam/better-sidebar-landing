---
title: Descarga de imágenes
description: Descarga imágenes generadas por IA desde Gemini sin la marca de agua automática SynthID. Obtén archivos limpios y sin modificar para tus proyectos creativos.
---

# Descarga de imágenes

Cuando Gemini genera imágenes, Google aplica una marca de agua SynthID invisible a la salida. Son metadatos incrustados en el archivo de imagen que la marcan como generada por IA. Better Sidebar puede quitar esta marca de agua automática, dándote descargas de imagen limpias.

## Qué hace

Cuando el ajuste **Quitar marca de agua automática** está activado:

- Las imágenes generadas por Gemini se descargan en su forma original
- La marca de agua invisible de metadatos SynthID no se aplica a los archivos descargados
- Obtienes la imagen en bruto exactamente como la produjo el modelo

Cuando está desactivado (predeterminado), se aplica el comportamiento estándar de Gemini y las imágenes descargadas incluyen los metadatos de marca de agua.

## Cómo activarlo

1. Abre **Ajustes** (icono de engranaje o `Alt+Shift+,`)
2. Ve a la pestaña **Platform**
3. Bajo **Funciones adicionales**, encuentra **Quitar marca de agua automática**
4. Actívalo

El ajuste surte efecto de inmediato para cualquier descarga nueva de imagen.

:::tip
Esta función es solo de Gemini. AI Studio maneja la generación de imágenes de forma distinta y no aplica el mismo proceso de marca de agua.
:::

## Notas importantes

La marca de agua de la que hablamos aquí es la marca de agua invisible de *metadatos* (SynthID): no un logo visible de «Gemini» en la imagen. Si ves una superposición visible en las imágenes, ese es un mecanismo distinto.

:::warning
Sé cuidadoso con quitar marcas de agua. La marca SynthID ayuda a identificar contenido generado por IA en el mundo. Si compartes imágenes en público o comercialmente, comprueba la normativa local sobre divulgación de contenido de IA. Algunas jurisdicciones están desarrollando requisitos sobre etiquetado de contenido de IA.
:::

## Cuándo es útil

- **Mockups de diseño** — Cuando usas la generación de imágenes de Gemini para iteración de diseño y necesitas archivos fuente limpios
- **Proyectos creativos** — Generar imágenes de referencia, texturas o arte conceptual para seguir editando
- **Presentaciones** — Imágenes limpias sin artefactos de metadatos para diapositivas profesionales
- **Uso personal** — Cuando simplemente quieres la salida más limpia posible para tus propios archivos

:::tip
Incluso con la marca de agua quitada, es buena práctica mantener tus propios registros de qué imágenes están generadas por IA, especialmente si las usas en trabajo orientado al público.
:::
