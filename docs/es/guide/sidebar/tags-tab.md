---
title: Etiquetas
description: Crea, colorea y gestiona etiquetas para categorizar tus conversaciones a través de las carpetas.
---

# Etiquetas

Las etiquetas te dan un segundo eje de organización encima de las carpetas. Una conversación solo puede vivir en una carpeta, pero puede tener tantas etiquetas como quieras. Piensa en las carpetas como «¿dónde vive esto?» y en las etiquetas como «¿de qué trata esto?».

## Crear una etiqueta

1. Escribe un nombre en el campo de entrada arriba de la pestaña Etiquetas
2. Pulsa Enter o haz clic en el botón **+**
3. Aparece un selector de color: elige un color para tu etiqueta (o déjalo por defecto)
4. Listo. Tu etiqueta está lista para usar.

Los nombres de etiqueta tienen un límite de 30 caracteres. Manténlos cortos y claros: «Trabajo», «Proyecto paralelo», «Aprendizaje», «Por revisar».

## Asignar etiquetas a conversaciones

Las etiquetas se asignan desde la **pestaña Biblioteca**, no desde la pestaña Etiquetas. Clic derecho en cualquier conversación → **Etiquetas** → marca las etiquetas que quieras aplicar.

También puedes asignar etiquetas en bloque: entra en modo por lotes en la pestaña Biblioteca, selecciona varias conversaciones y usa la acción por lotes «Añadir etiquetas».

:::tip
La pestaña Etiquetas es para *gestionar* tus etiquetas (crear, renombrar, recolorear, eliminar). Para *usarlas* en conversaciones, trabajas en la pestaña Biblioteca.
:::

## Colores

Cada etiqueta puede tener un color personalizado. Los colores aparecen:
- Junto al nombre de la etiqueta en la pestaña Etiquetas
- En el desplegable de filtro al seleccionar etiquetas
- Como indicador visual al recorrer conversaciones

### Cambiar el color de una etiqueta

Clic derecho en la etiqueta → **Cambiar color** → elige entre colores predefinidos o usa el selector de color personalizado.

La paleta predefinida coincide con la de las carpetas, así que puedes crear un sistema de color cohesivo en toda la barra lateral.

## Gestionar etiquetas

### Renombrar

Clic derecho → **Renombrar**. La etiqueta pasa a un campo editable en línea. Escribe el nombre nuevo y pulsa Enter. El cambio se aplica dondequiera que se referencie la etiqueta.

### Eliminar

Clic derecho → **Eliminar**. Aparece un diálogo de confirmación. Eliminar una etiqueta la quita de todas las conversaciones a las que estaba asignada.

:::warning
Eliminar una etiqueta es permanente. Las conversaciones no se ven afectadas (se quedan donde están), pero se elimina la asociación de la etiqueta.
:::

## Usar etiquetas para filtrar

Las etiquetas desbloquean filtrado potente en otras pestañas:

- **Pestaña Biblioteca** — Haz clic en el icono de filtro de etiquetas (🏷️) para expandir el selector. Elige una o más etiquetas y solo quedan visibles las conversaciones coincidentes.
- **Pestaña Favoritos** — El mismo filtro de etiquetas se aplica a tus elementos con estrella.

El filtrado por etiquetas usa lógica OR: si seleccionas «Trabajo» y «Código», verás conversaciones que tengan *cualquiera* de las etiquetas (no solo ambas).

:::tip
Una buena estrategia de etiquetado: usa carpetas para *estructura* (Cliente A, Cliente B, Personal) y etiquetas para *propiedades* (urgente, referencia, completado). Así puedes encontrar rápido todos los elementos urgentes en todas las carpetas, o todo el material de referencia independientemente del proyecto al que pertenezca.
:::

## Deja que el agente etiquete

Etiquetar 300 conversaciones a mano no es un buen uso de una tarde. El [agente](/en/guide/agent/better-sidebar-agent) puede leer títulos y contenido de mensajes y etiquetar en bloque:

> Etiqueta cada chat de mi Inbox según su contenido. Reutiliza mis etiquetas existentes donde encajen en lugar de inventar casi-duplicados, y muéstrame el plan antes de aplicarlo.

Esa última cláusula importa. Dejado a su aire, una IA creará felizmente `coding`, `code`, `programming` y `dev` como cuatro etiquetas distintas. Decirle que reutilice lo que existe evita que tu lista de etiquetas se convierta en un lío.

También puedes apuntarlo al lío que ya tienes:

> Mira mis etiquetas y dime cuáles se solapan o son casi-duplicados. Sugiere un conjunto fusionado y luego aplícalo.

Los cambios se confirman antes de ejecutarse y se pueden deshacer después.
