---
title: Biblioteca
description: Valores predeterminados de la pestaña Biblioteca: con qué modo de vista y orden de clasificación se abre, y qué nombres de carpeta ocultar por completo.
---

# Biblioteca

Tres ajustes que deciden cómo se ve la pestaña Biblioteca cuando la abres.

**Configuración → Biblioteca**

## Modo de vista predeterminado

En qué vista arranca la pestaña Biblioteca:

- **Árbol** — tu jerarquía de carpetas
- **Línea de tiempo** — conversaciones agrupadas por Hoy / Ayer / Últimos 7 días / Últimos 30 días / meses anteriores

Puedes seguir cambiando entre ellas en cualquier momento con `Alt+Shift+T` o el menú **⋯**. Este ajuste solo decide por dónde empiezas.

:::tip
Elige Árbol si ya has creado una estructura de carpetas y vives en ella. Elige Línea de tiempo si sobre todo quieres «lo que hacía ayer» y aún no has invertido en organizar. La línea de tiempo no necesita configuración para ser útil, así que es un buen valor predeterminado las primeras semanas.
:::

## Orden de clasificación predeterminado

- **Fecha** — las más recientemente activas primero
- **Nombre** — alfabético

Los favoritos y las carpetas fijadas siempre flotan al inicio de su contenedor, sea cual sea el orden de clasificación.

:::tip
Ordenar por fecha dentro de carpetas de proyecto mantiene tu trabajo actual arriba. Ordenar por nombre en la raíz hace que las carpetas sean fáciles de encontrar. Como el ajuste es global, la mayoría elige Fecha y usa el [fijado](/en/guide/sidebar/library-tab#pinning-folders-to-the-top) para mantener a la vista las carpetas importantes.
:::

## Carpetas ignoradas

Una lista separada por comas de nombres de carpeta que se ocultan del árbol por completo.

```
archive, temp, old drafts
```

Las carpetas coincidentes y todo lo que contienen desaparecen de la pestaña Biblioteca. No se elimina nada: quita el nombre de esta lista y la carpeta vuelve exactamente como estaba.

Máximo 200 caracteres.

:::tip
Es la herramienta adecuada para un archivo que quieres conservar pero no ver. Mueve el trabajo del año pasado a una carpeta llamada `archive`, añade `archive` aquí y tu árbol queda limpio sin borrar nada. Cuando lo necesites, deja el campo en blanco un momento.
:::

:::warning
La coincidencia es por **nombre** de carpeta, no por ruta. Si tienes dos carpetas llamadas `temp` en sitios distintos, se ocultan las dos.
:::
