---
title: Barra de desplazamiento inteligente
description: Un mapa flotante de mensajes junto a tu conversación de Gemini. Haz clic en cualquier entrada para saltar directo a ese mensaje, expandirlo a una lista completa o colapsarlo a un icono.
---

# Smart Scrollbar

Las conversaciones largas son difíciles de navegar porque la barra de desplazamiento no te dice nada. La Smart Scrollbar la reemplaza con un mapa de la conversación real: una entrada por mensaje, el que estás leyendo resaltado, clic para saltar.

![La Smart Scrollbar flotando junto a una conversación de Gemini](/images/features/smart-scrollbar.png)

:::tip
Solo Gemini. AI Studio renderiza las conversaciones de forma distinta y no está soportado. En cualquiera de las plataformas puedes usar el [Esquema](/en/guide/sidebar/outline) en su lugar, que va más profundo: mapea encabezados, bloques de código y tablas dentro de cada respuesta, no solo los mensajes.
:::

## Activarla

Está activada por defecto. El interruptor está en **Ajustes → Controles de UI → Funciones adicionales → Smart Scrollbar**, o en la pestaña Gemini del popup de la barra de herramientas del navegador.

## Tres tamaños

El panel tiene tres estados, y cambias entre ellos con los botones de su encabezado.

### Compacto (predeterminado)

Una franja estrecha de entradas de mensaje con vistas previas cortas. Bastante para distinguir mensajes, lo bastante pequeña para ignorarla. Aquí es donde la dejarás.

### Expandido

Haz clic en el botón de expandir y se convierte en un **Esquema de conversación** completo: panel más ancho, vistas previas más largas, separación más clara entre tus mensajes y los del modelo, con un recuento total de mensajes en el encabezado.

Merece cambiar a él cuando una conversación pasa de cincuenta mensajes y las vistas previas cortas dejan de ser distinguibles.

### Colapsado a icono

Haz clic en el botón de colapsar y se encoge a un pequeño icono flotante con un badge de recuento de mensajes. Haz clic para traer el panel de vuelta.

Úsalo cuando quieres la pantalla despejada pero no quieres meterse en ajustes para desactivar la función.

## Navegación

Haz clic en cualquier entrada para desplazarte suavemente a ese mensaje. Mientras te desplazas por la página con normalidad, el resaltado sigue tu posición: el mapa y la página se mantienen sincronizados en ambas direcciones.

:::tip
Gana su sitio en sesiones largas de depuración o revisión de código, donde necesitas comparar constantemente el quinto intento del modelo con el primero. Hacer clic en una entrada es instantáneo; desplazarte a buscarlo tarda diez segundos y rompe tu hilo de pensamiento.
:::

## Cuando el esquema no coincide con la página

De vez en cuando las entradas no se alinean con lo que hay realmente en pantalla: suele ser tras ramificar una conversación, o tras que Gemini re-renderice algo de forma inesperada.

Cuando eso ocurre, aparece un pequeño botón de limpiar arriba de la Smart Scrollbar. Hacer clic elimina los mensajes que Better Sidebar ha guardado *solo para la conversación actual* y recarga la página para que se capturen de nuevo desde cero.

:::warning
Esto borra la copia guardada de la extensión de los mensajes de esa conversación, lo que significa que esos mensajes salen temporalmente de la búsqueda de texto completo hasta que se vuelven a capturar al recargar. La conversación en Gemini en sí no se toca. Si la extensión detecta algo inesperado al limpiar, aborta en lugar de arriesgar tus datos.
:::

## Combina bien con

- [Zen Mode](/en/guide/ui-customization/layout-and-width#zen-mode-gemini-only) — chat ancho, sin cromado y un mapa al lado
- [Esquema](/en/guide/sidebar/outline) — cuando necesitas encontrar un bloque de código o encabezado concreto en lugar de un mensaje
- [Barra de selección](/en/guide/ui-customization/selection-toolbar) — salta a un mensaje, selecciona la parte buena, guárdala como snippet
