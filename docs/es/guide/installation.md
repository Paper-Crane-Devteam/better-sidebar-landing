---
title: Instalación
description: Instala Better Sidebar en Chrome, Firefox o cualquier navegador Chromium, y qué ocurre en el primer inicio.
---

# Instalación

Se instala en segundos. Sin cuenta, sin configuración, sin registro.

## Chrome y navegadores Chromium

1. Abre la [página de Chrome Web Store](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj)
2. Haz clic en **Añadir a Chrome**
3. Visita [gemini.google.com](https://gemini.google.com) o [aistudio.google.com](https://aistudio.google.com)

La misma versión funciona en Edge, Brave, Arc y Vivaldi: instálala desde Chrome Web Store.

## Firefox

1. Abre la [página de Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio)
2. Haz clic en **Añadir a Firefox**
3. Visita Gemini o AI Studio

:::warning
La sincronización con Google Drive no está disponible en Firefox: necesita una API de identidad que Firefox no expone. Todo lo demás funciona, y las [copias de seguridad locales](/en/guide/extras/data-backup) más la exportación manual de la base de datos cubren el mismo terreno.
:::

## Debes haber iniciado sesión

Better Sidebar está vinculada a la cuenta. Se activa en la página de la plataforma **después** de iniciar sesión en tu cuenta de Google. Si llegas a Gemini sin sesión, no aparece nada hasta que lo hagas.

La cuenta que detecta se convierte en el perfil al que pertenecen tus datos. Consulta [Varias cuentas](/en/guide/settings/multi-account).

## Primer inicio

En tu primera visita tras instalar, verás:

1. **Una pantalla de bienvenida** que explica qué hace la extensión
2. **Una oferta para importar tu lista de chats** — conviene aceptarla. Sin ella, solo son visibles las conversaciones que la plataforma muestra en ese momento. Consulta [Importar lista de chats](/en/guide/sidebar/library-tab#import-chat-list).
3. **Una visita guiada opcional** de las pestañas de la barra lateral

Las conversaciones nuevas llegan por defecto a una carpeta **Inbox**, así que no se pierde nada mientras decides una estructura de carpetas.

:::tip
Di que sí a la importación. Es la diferencia entre una barra lateral con tus últimos veinte chats y una con todo lo que has hecho. Solo tarda un momento y siempre puedes ejecutarla después desde el menú **⋯**.
:::

## Idioma

El idioma de la interfaz se deduce del locale del navegador al instalar. Hay siete idiomas compatibles: cámbialo en **Configuración → General → Idioma** si la detección falló.

## Actualizaciones

Los navegadores actualizan las extensiones automáticamente. Puedes forzar una comprobación desde la página de gestión de extensiones del navegador.

Tras una actualización verás un diálogo de **Novedades** con el resumen de la versión y un enlace al changelog completo. Se puede cerrar y volver a abrir desde **Configuración → Acerca de → Ver changelog**.

## Si la barra lateral no aparece

1. Confirma que has iniciado sesión en Google en esa página
2. Recarga
3. Comprueba que la plataforma no esté desactivada en el [popup de la barra de herramientas](/en/guide/settings/platform-manager)
4. Confirma que la extensión está habilitada en el navegador

A veces las actualizaciones de la UI de la plataforma rompen cosas. Si la barra lateral funcionaba ayer y hoy no, actualiza la extensión — y repórtalo desde la pestaña **Feedback** de la app; suelen parchearse rápido.

## Desinstalación

Clic derecho en el icono de la extensión → **Quitar la extensión**.

:::warning
Desinstalar elimina la base de datos local: cada carpeta, etiqueta, favorito, prompt y snippet.

**Exporta primero** si quieres recuperar algo: **Configuración → Datos y almacenamiento → Exportar** te da un único archivo `.db` que puedes importar en una instalación nueva. Una [copia de seguridad en Drive](/en/guide/extras/drive-sync) también sobrevive a la desinstalación, aunque no incluye el contenido de los mensajes.
:::
