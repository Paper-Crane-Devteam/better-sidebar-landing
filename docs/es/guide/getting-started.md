---
title: Primeros pasos
description: Introducción rápida a Better Sidebar para Gemini y AI Studio — qué hace, cómo configurarlo y adónde ir después.
---

# Primeros pasos

Better Sidebar es una extensión de navegador que da a **Google Gemini** y **Google AI Studio** una capa de organización de verdad: carpetas, etiquetas, búsqueda de texto completo, una biblioteca de prompts, una biblioteca de snippets y un agente de IA que puede archivar por ti. Se ejecuta por completo en tu navegador, sin servidores externos. Tus datos siguen siendo tuyos.

![Better Sidebar en Gemini, con el árbol de carpetas, etiquetas y filtros visibles](/images/features/overview.webp)

## Qué puedes hacer

| | |
| --- | --- |
| **Organizar** | Carpetas anidadas con colores, etiquetas, favoritos, fijado, arrastrar y soltar, operaciones por lotes |
| **Encontrar** | Búsqueda de texto completo en cada mensaje, más un esquema por conversación |
| **Reutilizar** | Biblioteca de prompts con variables y composición, activada al escribir `/` |
| **Conservar** | Biblioteca de snippets: guarda el párrafo bueno de un chat de 50 turnos |
| **Delegar** | Un agente de IA que archiva, etiqueta, renombra y limpia tu biblioteca a petición |
| **Exportar** | Markdown, texto plano, JSON, Obsidian, Notion |
| **Respaldar** | Instantáneas locales más sincronización opcional con Google Drive |
| **Restilizar** | Más de 20 temas, anchos ajustables, Zen Mode, Compact Mode |

Cada una de estas tiene su propia guía: consulta [Siguientes pasos](#siguientes-pasos).

## Plataformas compatibles

| Plataforma | Estado |
| --- | --- |
| Google Gemini (gemini.google.com) | Compatible |
| Google AI Studio (aistudio.google.com) | Compatible |

Algunas funciones son específicas de cada plataforma porque los dos sitios están construidos de forma distinta. Las funciones solo de Gemini incluyen Zen Mode, la Smart Scrollbar, la barra de selección, Gems y Notebooks. Las solo de AI Studio incluyen la importación masiva del historial y el colapso automático de Run Settings. Todo lo demás funciona en ambas.

## Navegadores compatibles

| Navegador | Enlace |
| --- | --- |
| Chrome | [Chrome Web Store](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj) |
| Firefox | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio) |
| Edge | Próximamente |

Cualquier navegador Chromium (Brave, Arc, Vivaldi, Edge) puede instalar la versión de Chrome Web Store.

## Inicio rápido

### 1. Instala la extensión

Ve a la [Chrome Web Store](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj) (o a [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio)) e instálala. Para pasos detallados, consulta la [guía de Instalación](/en/guide/installation).

### 2. Inicia sesión en tu cuenta de Google

Better Sidebar está **vinculada a la cuenta**. Debes haber iniciado sesión en Gemini o AI Studio para que la extensión funcione. La barra lateral detecta tu cuenta activa y crea una base de datos independiente para ella: así es como funciona el [soporte multi-cuenta](/en/guide/settings/multi-account).

### 3. Abre Gemini o AI Studio

Ve a [gemini.google.com](https://gemini.google.com) o [aistudio.google.com](https://aistudio.google.com). Better Sidebar reemplaza la barra lateral nativa automáticamente.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">
  <img src="/images/features/overview-gemini.webp" alt="Better Sidebar en Gemini" />
  <img src="/images/features/overview-aistudio.webp" alt="Better Sidebar en AI Studio" />
</div>

Puedes volver a la barra lateral de la plataforma en cualquier momento con `Alt+Shift+Q`, o con el botón **Cambiar a la barra lateral original** en el pie de la barra lateral. No se pierde nada al hacerlo: tus carpetas y etiquetas siguen ahí cuando vuelvas.

### 4. Importa tu lista de chats

:::tip Importante
En la primera instalación, Better Sidebar solo ve tus conversaciones **más recientes**: las que la plataforma muestra en ese momento. Los chats más antiguos hay que importarlos antes de que aparezcan en el árbol.
:::

Al primer inicio aparece un aviso ofreciendo importar la lista completa. Si lo saltaste, puedes ejecutarlo cuando quieras desde el menú **⋯** del encabezado de la barra lateral → **Importar lista de chats**.

Esto importa solo títulos y metadatos, suficiente para organizar. Para que las conversaciones antiguas sean *buscables*, pasa al siguiente paso.

### 5. Haz buscables las conversaciones antiguas

La búsqueda de texto completo solo funciona con los mensajes que la extensión ha visto de verdad.

**En AI Studio** hay importación masiva: **Configuración → Datos y almacenamiento → Importar datos de chats**. Te guía para exportar tu biblioteca a Google Drive, descargar el ZIP y subirlo. Consulta [Búsqueda](/en/guide/sidebar/search-tab#import-chat-history).

**En Gemini** no hay exportación masiva de Google, así que los mensajes se registran al abrir cada conversación. La forma más rápida de ponerte al día es dejar que el [agente](/en/guide/agent/overview) lo haga: pídele que *"sincronice el contenido de mis 20 chats más recientes"* y los recorrerá por ti.

### 6. Prueba lo básico

- **Crear una carpeta** — haz clic en el icono carpeta+ del encabezado, escribe un nombre, pulsa Enter y arrastra una conversación dentro
- **Buscar** — pulsa `Alt+2` y escribe cualquier palabra que recuerdes de un chat antiguo
- **Guardar un prompt** — ve a Prompts (`Alt+3`), haz clic en **+**, luego escribe `/` en el campo de chat para insertarlo
- **Guardar un snippet** — selecciona cualquier parte de una respuesta de Gemini y haz clic en **Guardar como snippet** en la barra que aparece
- **Preguntar al agente** — escribe `>` en el campo de chat, elige **Better Sidebar** y pídele que organice tus chats sin archivar

## Siguientes pasos

| Quiero… | Ir a |
| --- | --- |
| Organizar conversaciones en carpetas y etiquetas | [Biblioteca](/en/guide/sidebar/library-tab) |
| Encontrar algo en una conversación antigua | [Búsqueda](/en/guide/sidebar/search-tab) |
| Navegar una conversación muy larga | [Esquema](/en/guide/sidebar/outline) · [Smart Scrollbar](/en/guide/ui-customization/smart-scrollbar) |
| Crear una biblioteca de prompts reutilizable | [Prompts](/en/guide/sidebar/prompts-tab) · [Comandos con barra](/en/guide/ui-customization/slash-commands) |
| Conservar las partes buenas de una respuesta | [Snippets](/en/guide/sidebar/snippets-tab) |
| Que la IA limpie mi biblioteca por mí | [Agente](/en/guide/agent/overview) |
| Trabajar con archivos y documentos con IA | [Agente Workspace](/en/guide/agent/workspace-agent) |
| Llevar chats a Obsidian o Notion | [Exportar](/en/guide/extras/export) · [Integraciones](/en/guide/extras/integrations) |
| Ajustar anchos, Zen Mode, Compact Mode | [Diseño y ancho](/en/guide/ui-customization/layout-and-width) |
| Sincronizar o respaldar mis datos | [Sincronización con Drive](/en/guide/extras/drive-sync) · [Copias de seguridad](/en/guide/extras/data-backup) |
| Cambiar tema o atajos | [Temas](/en/guide/settings/themes) · [Atajos de teclado](/en/guide/settings/keyboard-shortcuts) |
| Entender qué es gratis y qué es de pago | [Packs](/en/guide/settings/packs) |
