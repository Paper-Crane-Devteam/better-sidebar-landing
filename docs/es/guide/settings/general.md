---
title: General
description: Idioma de la interfaz, qué botones de acceso rápido aparecen en la barra lateral y el comportamiento de confirmación al borrar.
---

# General

La página General reúne tres cosas pequeñas: en qué idioma habla la extensión, qué botones de acceso rápido llenan tu barra lateral y si borrar pregunta primero.

Ábrela con el icono de engranaje o `Alt+Shift+,`, luego elige **General**.

## Idioma

Better Sidebar está traducida por completo a 7 idiomas:

| Idioma | |
| --- | --- |
| English | `en` |
| 简体中文 | `zh-CN` |
| 繁體中文 | `zh-TW` |
| 日本語 | `ja` |
| Português | `pt` |
| Español | `es` |
| Русский | `ru` |

El cambio se aplica de inmediato: etiquetas, tooltips, diálogos, changelog, todo. En la primera instalación el idioma se deduce del locale del navegador.

Este ajuste es independiente del idioma en el que esté ejecutándose Gemini.

## Accesos rápidos de la barra lateral

Estos son los botones de enlace rápido en la barra lateral. Cada uno tiene un interruptor, así que puedes ocultar los que nunca pulsas.

**En ambas plataformas**

| Acceso | Va a |
| --- | --- |
| **Favoritos** | Tu pestaña Favoritos |
| **Cambiar a la barra lateral original** | La barra lateral propia de la plataforma |

**Solo Gemini**

| Acceso | Va a |
| --- | --- |
| **My Stuff** | La página My Stuff de Gemini |
| **Gems** | La vista general de Gems de Gemini |
| **Notebooks** | La vista general de Notebooks de Gemini |

**Solo AI Studio**

| Acceso | Va a |
| --- | --- |
| **Build** | La página Build de AI Studio |
| **Dashboard** | El Dashboard de AI Studio |
| **Documentation** | La documentación de AI Studio |

La lista que ves depende del sitio en el que estés: los accesos de Gemini no aparecen mientras estás en AI Studio.

:::tip
Si de todas formas vas a usar [Compact Mode](/en/guide/ui-customization/layout-and-width#compact-mode), no te molestes en afinar estos: compact mode oculta toda la barra de iconos. Esta página es para quien quiere una barra lateral *un poco* más ordenada, no una desnuda.
:::

## Comportamiento

### Borrar conversaciones sin confirmación

Desactivado por defecto, y sugerimos dejarlo así.

Con él activado, borrar una sola conversación ocurre en el instante en que haces clic: sin diálogo, sin deshacer, y la conversación se elimina de los servidores de Google además de de Better Sidebar.

El borrado por lotes sigue pidiendo confirmación independientemente de este ajuste.

:::warning
Este es el único ajuste de Better Sidebar que puede perder datos con un solo clic fallido. Actívalo solo si estás haciendo a propósito mucha limpieza de una en una y confías en lo que haces clic. El modo por lotes suele ser la mejor respuesta para borrado masivo, porque te muestra exactamente qué está seleccionado antes de ejecutarse.
:::

## Dónde vive todo lo demás

La página General es pequeña a propósito. Los ajustes que la gente suele buscar están en otro sitio:

| Buscas | Ir a |
| --- | --- |
| Tema, modo claro/oscuro | [Temas](/en/guide/settings/themes) |
| Vista predeterminada, orden, carpetas ignoradas | [Biblioteca](/en/guide/settings/library) |
| Anchos, Zen Mode, visibilidad de elementos | [Diseño y ancho](/en/guide/ui-customization/layout-and-width) |
| Atajos | [Atajos de teclado](/en/guide/settings/keyboard-shortcuts) |
| Copias de seguridad, Drive sync, perfiles, restablecer | [Copias de seguridad](/en/guide/extras/data-backup) · [Drive Sync](/en/guide/extras/drive-sync) · [Varias cuentas](/en/guide/settings/multi-account) |
| Conexión con Notion | [Integraciones](/en/guide/extras/integrations) |
| Permisos y skills del agente | [Skills y herramientas](/en/guide/agent/skills-and-tools) |
| Licencias y qué es de pago | [Packs](/en/guide/settings/packs) |
