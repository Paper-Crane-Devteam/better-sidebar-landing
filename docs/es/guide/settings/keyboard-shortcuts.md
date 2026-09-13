---
title: Atajos de teclado
description: Personaliza 16 atajos de teclado en 3 categorías. Graba nuevas combinaciones, detecta conflictos y restablece a los valores predeterminados — todo sin salir del panel de ajustes.
---

# Atajos de teclado

Better Sidebar incluye 16 atajos de teclado personalizables que te permiten controlar la barra lateral, cambiar de pestaña y disparar acciones sin tocar el ratón. Cada atajo se puede reasignar a la combinación de teclas que te resulte natural.

Abre los ajustes de atajos vía **Ajustes** (icono de engranaje o `Alt+Shift+,`) → pestaña **Atajos de teclado**.

![La página de ajustes de Atajos de teclado con secciones General, Navegación y Acciones](/images/features/keyboard-shortcuts.webp)

## Atajos predeterminados

### General

| Acción | Combinación predeterminada | Qué hace |
| --- | --- | --- |
| Alternar barra lateral | `Alt+Shift+S` | Mostrar/ocultar el panel de Better Sidebar |
| Nuevo chat | `Alt+Shift+M` | Empezar un chat nuevo |
| Abrir búsqueda | `Alt+Shift+F` | Ir a la pestaña Búsqueda |
| Abrir ajustes | `Alt+Shift+,` | Abrir el modal de Ajustes |

### Navegación

| Acción | Combinación predeterminada | Qué hace |
| --- | --- | --- |
| Biblioteca | `Alt+1` | Cambiar a la pestaña Biblioteca |
| Búsqueda | `Alt+2` | Cambiar a la pestaña Búsqueda |
| Prompts | `Alt+3` | Cambiar a la pestaña Prompts |
| Etiquetas | `Alt+4` | Cambiar a la pestaña Etiquetas |
| Favoritos | `Alt+5` | Cambiar a la pestaña Favoritos |
| Gems | `Alt+6` | Cambiar a la pestaña Gems (solo Gemini) |
| Notebooks | `Alt+7` | Cambiar a la pestaña Notebooks (solo Gemini) |

### Acciones

| Acción | Combinación predeterminada | Qué hace |
| --- | --- | --- |
| Alternar Zen Mode | `Alt+Shift+Z` | Activar/desactivar Zen Mode (solo Gemini) |
| Cambiar a la UI original | `Alt+Shift+Q` | Alternar entre Better Sidebar y la barra lateral nativa |
| Alternar modo por lotes | `Alt+Shift+B` | Entrar/salir del modo de selección por lotes |
| Colapsar todo | `Alt+Shift+C` | Colapsar todas las carpetas del árbol actual |
| Alternar modo de vista | `Alt+Shift+T` | Cambiar entre vistas Árbol y Línea de tiempo |

:::tip
Los atajos de navegación `Alt+1` … `Alt+7` son la forma más rápida de cambiar entre pestañas, y se vuelven esenciales en [Compact Mode](/en/guide/ui-customization/layout-and-width#compact-mode), donde los iconos de pestaña están ocultos por completo.
:::

## Teclas en el árbol

Separadas de los atajos configurables de arriba, el árbol de archivos responde a teclas estándar de gestor de archivos una vez que una fila tiene el foco. Estas no se pueden reasignar:

| Tecla | Qué hace |
| --- | --- |
| `↑` `↓` | Mover el foco entre filas |
| `→` `←` | Expandir / colapsar una carpeta |
| `Enter` | Abrir la conversación enfocada |
| `F2` | Renombrar |
| `Delete` | Eliminar el elemento enfocado |

También hay un **Ayudante de atajos**: un pequeño icono de teclado abajo a la derecha de la página que abre esta lista bajo demanda. Ocúltalo vía **Ajustes → Controles de UI → Visibilidad de elementos → Ayudante de atajos**.

## Grabar una nueva combinación

Para cambiar cualquier atajo:

1. Haz clic en el botón de la combinación actual (muestra la combo como `Alt+Shift+S`)
2. El botón entra en **modo de grabación**: parpadea y muestra «Grabando...»
3. Pulsa la combinación de teclas deseada
4. La nueva combinación se guarda de inmediato

### Reglas de grabación

- **Escape** cancela la grabación sin cambiar la combinación
- **Backspace** o **Delete** desvincula el atajo por completo (lo deja en «—»)
- Haz clic en cualquier sitio fuera del botón de grabación para cancelar
- Necesitas al menos una tecla modificadora (Alt, Ctrl/Cmd, Shift) más una tecla normal

Mientras grabas, la extensión desactiva temporalmente todos los escuchadores de atajos para que tu pulsación no se intercepte antes de llegar al grabador.

## Detección de conflictos

Si asignas una combinación que ya usa otra acción, Better Sidebar te avisa de inmediato. Aparece un botón de combinación con tinte rojo y un mensaje de conflicto debajo:

> ⚠️ Conflicto con: Alternar barra lateral

La combinación en conflicto *sigue funcionando*: no se bloquea. Pero el aviso te ayuda a notarlo para que puedas corregirlo.

:::warning
Las combinaciones en conflicto se permiten pero son impredecibles. Solo se disparará una acción al pulsar las teclas, y cuál gana depende del orden de registro. Corrige los conflictos reasignando una de las dos acciones.
:::

## Restablecer atajos

### Restablecer un solo atajo

Tras cambiar una combinación, aparece un pequeño icono ↩ (deshacer) a su lado. Haz clic para restablecer ese atajo a su valor predeterminado.

### Restablecer todos los atajos

Haz clic en el botón **Restablecer todo** arriba a la derecha de la página de Atajos de teclado. Esto revierte cada combinación a los valores de fábrica: útil si has dejado tus combinaciones en un estado confuso.

## Atajos específicos de plataforma

Algunos atajos solo están disponibles en ciertas plataformas:

- Navegación de **Gems** y **Notebooks** — solo Gemini (estas pestañas no existen en AI Studio)
- **Alternar Zen Mode** — solo Gemini (Zen Mode es una función de Gemini)

Estos atajos no aparecerán en el panel de ajustes cuando estés en una plataforma que no los soporta.

## Visualización de teclas modificadoras

En macOS, las teclas modificadoras se muestran como símbolos:

| Símbolo | Tecla |
| --- | --- |
| ⌘ | Cmd (se muestra como Ctrl en las combinaciones) |
| ⌥ | Alt/Option |
| ⇧ | Shift |

En Windows/Linux, los modificadores se muestran como texto: `Ctrl+Alt+Shift+N`.

:::tip
Si usas varias extensiones intensivas en teclado, comprueba también conflictos con ellas. Better Sidebar no puede detectar conflictos con otras extensiones: solo dentro de sus propios atajos. Una prueba rápida: pulsa tu nueva combinación y asegúrate de que solo se dispara la acción esperada.
:::

## Consejos del ayudante

Al final de la página de ajustes encontrarás tres recordatorios:

- **Grabar**: Haz clic en una combinación y luego pulsa tu combo de teclas
- **Desvincular**: Pulsa Backspace/Delete durante la grabación para quitar un atajo
- **Cancelar**: Pulsa Escape para cancelar la grabación
