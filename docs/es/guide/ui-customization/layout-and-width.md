---
title: Diseño y ancho
description: Afina tu espacio de trabajo con anchos ajustables de barra lateral, chat y entrada, más Zen Mode, Compact Mode, entrada que se oculta sola e interruptores de visibilidad de elementos.
---

# Diseño y ancho

Gemini decide cuán ancha debe ser tu conversación. Better Sidebar te deja discrepar. Cada ancho es un deslizador, cada pieza de cromado de UI tiene un interruptor de apagado, y ambos cambios se aplican en el momento en que arrastras.

Todo en esta página vive en **Ajustes → Controles de UI**, que muestra los controles de la plataforma en la que estés. Los mismos controles están también en el popup de la barra de herramientas del navegador: haz clic en el icono de Better Sidebar junto a la barra de direcciones para acceso rápido sin abrir la barra lateral.

![El panel Controles de UI en el popup de la barra de herramientas del navegador](/images/features/platform-popup.webp)

## Anchos

### Ancho de la barra lateral

| Plataforma | Rango | Predeterminado |
| --- | --- | --- |
| Gemini | 300–550px | 360px |
| AI Studio | 280–500px | 320px |

Cada plataforma recuerda su propio valor, así que puedes tener una barra lateral ancha en Gemini y una estrecha en AI Studio.

:::tip
En una pantalla 1080p, 340–380px es cómodo. En un ultrawide, pasa de 450px: el espacio extra es lo que evita que los títulos largos de conversación se trunquen, lo que hace el árbol mucho más fácil de recorrer.
:::

### Ancho del contenido del chat (solo Gemini)

| Rango | Predeterminado |
| --- | --- |
| 40–100% | 46% |

Esto es cuán ancha es la columna de mensajes. El diseño de fábrica de Gemini es estrecho; al 100% los mensajes llenan toda el área de contenido.

:::tip
Distintos contenidos quieren distintos anchos. El código y las tablas se leen mejor al 85–100%. La prosa se lee mejor al 55–70%, donde la longitud de línea se queda lo bastante corta para que el ojo no pierda el sitio. Si sobre todo haces una u otra, configúralo una vez y olvídalo.
:::

### Ancho del campo de entrada (solo Gemini)

| Rango | Predeterminado |
| --- | --- |
| 40–100% | 42% |

Se controla por separado del ancho del chat, así que una columna de lectura ancha no fuerza un campo de entrada cómicamente ancho. Mucha gente pone el chat a ~80% y deja la entrada cerca del valor predeterminado.

### Ancho automático de tablas (solo Gemini)

Gemini limita el ancho de las tablas, lo que comprime tablas anchas en una columna estrecha y envuelve cada celda. Activa **Ancho automático de tablas** para quitar ese límite y que las tablas se rendericen al ancho completo disponible.

Merece activarlo de forma permanente si pides comparaciones: la diferencia en una tabla de seis columnas es dramática.

## Zen Mode (solo Gemini)

Zen Mode reduce la interfaz a la conversación y el campo de entrada. Todo lo demás se aparta.

Alterna con `Alt+Shift+Z`, o **Ajustes → Controles de UI → Funciones adicionales → Zen Mode**. Aparece un botón de salida mientras está activo.

:::tip
Zen Mode más un chat ancho más [Compact Mode](#compact-mode) es lo más cerca que llega esto a una app de escritura sin distracciones. Bueno para sesiones largas de redacción; menos útil cuando saltas entre chats.
:::

## Compact Mode

Compact Mode oculta la barra de iconos de la barra lateral, así que el árbol obtiene todo el ancho del panel y no hay nada más que mirar.

Alterna desde el menú **⋯** → **Entrar en Compact Mode**, o simplemente haz clic en el título **LIBRARY** del encabezado de la barra lateral. Hacer clic de nuevo en el título trae de vuelta la barra de iconos.

Ten en cuenta que ocultar la barra de iconos significa perder los botones de pestaña: usa los [atajos](/en/guide/settings/keyboard-shortcuts) `Alt+1` … `Alt+7` para cambiar de pestaña mientras está activado.

## Ocultar entrada automáticamente

Disponible en ambas plataformas. El campo de entrada se encoge fuera del camino mientras lees y vuelve cuando mueves el cursor hacia abajo de la pantalla.

Esto te compra espacio vertical real en un portátil, donde el campo de entrada se come una parte significativa de la ventana.

**Ajustes → Controles de UI → Funciones adicionales → Ocultar entrada automáticamente**

## Colapsar Run Settings por defecto (solo AI Studio)

AI Studio abre el panel Run Settings (temperatura, ajustes de seguridad, herramientas) cada vez. Si rara vez los tocas, activa esto y el panel se queda colapsado hasta que lo expandas tú.

**Ajustes → Controles de UI → Funciones adicionales → Colapsar Run Settings por defecto**

## Visibilidad de elementos (solo Gemini)

Independiente de Zen Mode, puedes ocultar piezas individuales del cromado de Gemini:

| Elemento | Qué hace ocultarlo |
| --- | --- |
| **Logo de Gemini** | Quita el logo de arriba a la izquierda |
| **Aviso de IA** | Quita la línea «Gemini may display inaccurate info» del centro inferior |
| **Botón Upgrade** | Quita el botón «Upgrade plan» de arriba a la derecha (solo presente en algunas cuentas) |
| **Ayudante de atajos** | Quita el pequeño icono de teclado de abajo a la derecha |

Estos son interruptores separados: oculta el aviso y conserva todo lo demás, si ese es el que te molesta.

:::tip
El aviso de IA es el que la mayoría apaga primero. Es una franja fija al final de la ventana que ya has leído mil veces, y ocultarlo da a la conversación unas líneas más de altura.
:::

## Otros ajustes de Gemini

### Mostrar etiqueta de conversación

Muestra las etiquetas de la conversación actual junto a su título en la barra superior, para que sepas en qué cubo estás sin abrir la barra lateral. Puedes añadir y quitar etiquetas directamente desde ahí.

### Quitar marca de agua automática

Quita la marca de agua con destellos que Gemini añade a las imágenes al descargar. Activado por defecto. Consulta [Descarga de imágenes](/en/guide/ui-customization/image-download).

### Barra de selección

Su propia sección en Controles de UI, con un interruptor maestro más uno por acción. Consulta [Barra de selección](/en/guide/ui-customization/selection-toolbar).

## Solo en el popup de la barra de herramientas

Un interruptor vive *solo* en el popup de la barra de herramientas del navegador, no en el modal de ajustes de la barra lateral:

**Comandos con barra** — si escribir `/` abre tu biblioteca de prompts. Disponible para Gemini y AI Studio. Haz clic en el icono de Better Sidebar en la barra de herramientas del navegador, elige la pestaña de la plataforma y lo encontrarás ahí.

El popup también tiene una pestaña **Platforms** para desactivar Better Sidebar por completo en un sitio. Consulta [Gestor de plataformas](/en/guide/settings/platform-manager).

## Persistencia de ajustes

Todos estos se guardan al instante y sobreviven a reinicios del navegador. También se incluyen en exportaciones de la base de datos y copias de seguridad de Google Drive, así que restaurar una copia restaura tu diseño junto con tus carpetas.
