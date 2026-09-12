---
title: Preguntas frecuentes
description: Preguntas habituales sobre Better Sidebar — coste, privacidad, el agente, conversaciones que faltan, huecos en la búsqueda y solución de problemas.
---

# Preguntas frecuentes

## Coste y licencias

### ¿Better Sidebar es gratis?

Las herramientas de organización son gratis y seguirán siéndolo: carpetas, etiquetas, búsqueda, prompts, snippets, exportación a Markdown, copias de seguridad y el agente en modo solo lectura. No hace falta cuenta.

Dos compras opcionales de una sola vez añaden extras: 5 $ por los temas y 19,99 $ para que el agente pueda hacer cambios. Consulta [Packs](/en/guide/settings/packs).

### ¿Es de código abierto?

Sí, GPL-3.0. [Código fuente en GitHub](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio).

### ¿Hay suscripción?

No. Ambos packs son compras de una sola vez con reembolso de 7 días sin preguntas.

### ¿En cuántos ordenadores puedo usar mi licencia?

Diez activaciones, y se consume una por *perfil de navegador*. Los perfiles multi-cuenta de Better Sidebar dentro de un mismo navegador no gastan ranuras extra. Consulta [Ranuras de activación](/en/guide/settings/packs#activation-slots).

## Privacidad

### ¿Dónde se almacenan mis datos?

En tu navegador, en una base de datos SQLite local (WASM, respaldada por OPFS). No hay servidor de Better Sidebar. Consulta la [Política de privacidad](/en/privacy).

### ¿El agente envía mis datos a algún sitio?

El agente funciona a través de tu sesión existente de Gemini o AI Studio. Sin claves API, sin coste extra, sin servicio de terceros.

Lo que llega a Google es lo mismo que cuando escribes un mensaje a mano: el prompt, que incluye los datos que el agente leyó para responder. Es inherente a usar un modelo alojado, pero nada va a ningún sitio en el que Google no esté ya involucrado.

### ¿Por qué necesita permisos de host?

Para ejecutarse en las páginas de Gemini y AI Studio: inyectar la barra lateral, leer títulos e IDs de conversaciones y capturar el contenido de los mensajes para la búsqueda. Solo solicita esos dos sitios.

El acceso a la API de Notion es un permiso *opcional y separado*, que solo se pide si activas la integración con Notion.

## Plataformas

### ¿Funciona en Gemini y en AI Studio?

Sí. Algunas funciones son específicas de cada plataforma porque los dos sitios están construidos de forma distinta: Zen Mode, Smart Scrollbar, barra de selección, Gems y Notebooks son solo de Gemini; la importación masiva del historial es solo de AI Studio. Consulta la [tabla comparativa](/en/guide/settings/platform-manager#platform-differences).

### ¿Funciona con ChatGPT o Claude?

No por ahora.

### ¿Qué navegadores?

Chrome y cualquier navegador Chromium (Edge, Brave, Arc, Vivaldi) desde Chrome Web Store, más Firefox desde Add-ons.

Ten en cuenta que la sincronización con Google Drive no está disponible en Firefox: necesita una API de identidad que Firefox no expone. Las [copias de seguridad locales](/en/guide/extras/data-backup) funcionan en todos.

### ¿Funciona en modo Incógnito?

Las extensiones no se ejecutan en Incógnito a menos que lo actives manualmente en los ajustes de extensiones del navegador. Incluso entonces, los datos de una sesión de Incógnito pueden no persistir.

### ¿Ralentiza Gemini?

No. Es una capa superpuesta más una base de datos local. No hay ida y vuelta de red en el camino crítico.

## Datos que faltan

### Mis conversaciones antiguas no están en la barra lateral

Solo las conversaciones recientes se capturan automáticamente. Ejecuta **menú ⋯ → Importar lista de chats** para traer la lista completa. Consulta [Mantener el árbol sincronizado](/en/guide/sidebar/library-tab#keeping-the-tree-in-sync).

### La búsqueda no encuentra conversaciones antiguas

Importar la lista de chats trae *títulos*, no *mensajes*. La búsqueda de texto completo necesita el contenido de los mensajes, que es un paso aparte.

- **AI Studio** — importación masiva desde una exportación de Drive
- **Gemini** — el contenido se registra al abrir cada chat, o pide al [agente](/en/guide/agent/better-sidebar-agent#sync-missing-messages) que los sincronice en bloque

Detalles en [Búsqueda](/en/guide/sidebar/search-tab#import-chat-history).

### Algunas conversaciones se sincronizan vacías

Conversaciones muy antiguas a veces ya no se pueden recuperar desde el lado de Google. El agente indica cuáles volvieron vacías en lugar de fingir que funcionó. En ese caso no hay nada que recuperar.

### El esquema no coincide con lo que hay en pantalla

Suele ocurrir tras ramificar una conversación. Usa el botón de limpiar y recargar de la [Smart Scrollbar](/en/guide/ui-customization/smart-scrollbar#when-the-outline-doesnt-match-the-page) para reconstruir los mensajes guardados de esa conversación.

## El agente

### ¿Necesito una clave API?

No. Usa tu sesión existente.

### ¿Consume tokens?

No hay presupuesto aparte. Es lo mismo que hablar tú con el modelo, porque eso es exactamente lo que hace.

### ¿Puede borrar cosas por accidente?

Las escrituras piden aprobación por defecto, y tras una tarea que cambió datos hay un botón **Deshacer cambios**. La ventana de deshacer se cierra cuando empieza la siguiente tarea. Los borrados masivos disparan antes una [copia de seguridad local](/en/guide/extras/data-backup) automática.

Consulta [Mantener el control](/en/guide/agent/overview#staying-in-control).

### Se detuvo a mitad y dijo que estaba en bucle

Es a propósito. El motor detecta llamadas idénticas repetidas a herramientas y fallos repetidos, e interrumpe en lugar de insistir. Lee lo que hizo y luego reformula o empieza de nuevo. Consulta [Se detiene solo](/en/guide/agent/overview#it-stops-itself).

### Se pausó y dijo «12 pasos hechos por su cuenta»

Es un punto de control, no un error. Tras una ejecución larga sin atención se pausa para que revises antes de continuar. **Seguir** o **Parar aquí**.

## Seguridad de los datos

### ¿Qué pasa si borro los datos del navegador?

La base de datos de Better Sidebar se va con ellos. Protégete con [sincronización con Drive](/en/guide/extras/drive-sync) o con una exportación ocasional de la base de datos.

Ten en cuenta que Drive Sync no incluye el contenido de los mensajes: para una copia completa, usa **Configuración → Datos y almacenamiento → Exportar**.

### ¿Puedo llevar mis datos a otro ordenador?

Sí, de dos formas: Drive Sync (solo estructura, sin mensajes) o exportación/importación de la base de datos (todo). Consulta [Copias de seguridad y restauración](/en/guide/extras/data-backup).

### ¿Borrar una conversación en Better Sidebar la borra en Google?

Sí. Borrar es una eliminación real en el servidor. Si solo quieres sacarla de la barra lateral, usa **Ocultar** cuando esté disponible.

## Solución de problemas

### La barra lateral no aparece

1. Confirma que has iniciado sesión en tu cuenta de Google: la extensión está vinculada a la cuenta
2. Comprueba que la plataforma no esté desactivada en el [popup de la barra de herramientas](/en/guide/settings/platform-manager)
3. Recarga la página
4. Confirma que la extensión está habilitada en el navegador

### La barra lateral dejó de funcionar después de ir bien

Suele ser una actualización de la UI de la plataforma. Actualiza la extensión o espera un parche: se corrigen rápido. Reportarlo desde la pestaña Feedback de la app ayuda.

### Se quedó sin respuesta tras mucho tiempo inactiva la pestaña

Recarga la página. Se corrigió en v2.9.0, así que asegúrate de estar al día.

### ¿Dónde está el interruptor de comandos con barra?

En el **popup de la barra de herramientas del navegador**, no en el modal de Configuración de la barra lateral. Haz clic en el icono de Better Sidebar en la barra de herramientas, elige la pestaña de la plataforma. Consulta [Comandos con barra](/en/guide/ui-customization/slash-commands#turning-it-off).

### Notion dice «no se encontraron páginas»

Tu integración existe pero no tiene acceso a ninguna página. Notion exige conectar la integración a cada página de forma explícita. Consulta [Integraciones](/en/guide/extras/integrations#no-pages-found).

## Obtener ayuda

- [Reportar un error o pedir una función](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio/issues)
- [Discord](https://discord.gg/FRzesxaGAx)
- La pestaña **Feedback** dentro de la barra lateral

Es un proyecto de una sola persona. Por favor, escribe antes de dejar una mala reseña: los bugs suelen corregirse rápido.
