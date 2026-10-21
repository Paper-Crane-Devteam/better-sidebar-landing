---
title: Política de privacidad
description: Cómo Better Sidebar y el Web Agent Connector tratan tus datos. Local-first, sin servidor del desarrollador que reciba tus chats y sin rastreo.
---

# Política de privacidad

*Última actualización: 21 de octubre de 2026*

Esta Política de privacidad abarca dos extensiones de navegador publicadas por Paper Crane Dev («nosotros», «nuestro»):

- **Better Sidebar for Gemini & AI Studio** («Better Sidebar»)
- **Better Sidebar Web Agent Connector** («el Connector»), un complemento opcional de Better Sidebar

En conjunto, «las Extensiones». En resumen: tus datos se quedan en tu navegador, no tenemos ningún servidor que reciba tus chats ni tus datos de organización, y nada se vende ni se usa para publicidad.

## 1. Almacenamiento local-first

- Las carpetas, etiquetas, favoritos, notas, prompts, fragmentos, el historial de mensajes sincronizado, las sesiones de agentes y los archivos del Workspace se almacenan en tu dispositivo, en una base de datos SQLite y en el almacenamiento de la extensión dentro de tu navegador.
- Cada perfil que creas en Better Sidebar tiene su propia base de datos local independiente.
- Las copias de seguridad automáticas son instantáneas guardadas en ese mismo almacenamiento local.
- Al desinstalar la extensión o borrar sus datos del navegador se elimina todo esto. No podemos recuperarlo por ti.

## 2. Lo que no recopilamos

- **No** recibimos, almacenamos ni leemos tu historial de chat, prompts, respuestas de la IA, archivos ni tu actividad de navegación.
- **No** recopilamos información personal como tu nombre, dirección de correo electrónico o número de teléfono.
- **No** usamos analíticas, píxeles de seguimiento ni SDK de publicidad.
- **No** vendemos ni compartimos tus datos, y nunca los usamos para entrenar modelos de IA.

## 3. Lectura de Gemini y AI Studio

Better Sidebar funciona en **gemini.google.com** y **aistudio.google.com**. Allí lee los títulos, los ID y los mensajes de las conversaciones para poder organizarlas y buscarlas. La sincronización opcional de mensajes en segundo plano obtiene tus chats existentes de los propios servidores de Google, usando tu sesión actual de Google, y los guarda en local. Nada de esto se nos envía.

## 4. Agentes de IA

Los agentes de Better Sidebar (BetterSidebar Agent, Workspace Agent, Browser Agent y Web Agent) funcionan a través de tu propia sesión de Gemini en tu navegador. Cuando un agente se ejecuta, la información que necesita se coloca en tu conversación de Gemini y se envía a Google, exactamente igual que si la hubieras escrito o pegado tú. Puede incluir:

- **BetterSidebar Agent:** títulos de chats, carpetas, etiquetas y notas que consulta por ti.
- **Workspace Agent:** el contenido de los archivos del Workspace con los que le pides trabajar.
- **Browser Agent:** títulos y URL de tus pestañas abiertas y marcadores, solo después de que concedas el permiso opcional `tabs`, `tabGroups` o `bookmarks` y solo dentro de los interruptores que actives.
- **Web Agent:** el texto, los enlaces, la estructura y los valores de formulario de las páginas web que le entregas. Los campos de contraseña nunca se leen.

Google trata esta información conforme a la [Política de privacidad de Google](https://policies.google.com/privacy) y los términos de Gemini. Los agentes no usan claves de API ni servidores nuestros.

## 5. Web Agent y Web Agent Connector

El Web Agent es opcional y está desactivado hasta que aceptes su aviso de riesgos. Para operar páginas usa el depurador de páginas de Chrome, que está en manos de la extensión independiente Connector, no de Better Sidebar.

El Connector:

- solo acepta solicitudes de Better Sidebar, nunca de sitios web ni de otras extensiones;
- solo se conecta a las pestañas que entregas al Web Agent, y Chrome muestra en cada una de ellas la barra «ha empezado a depurar este navegador»;
- rechaza Gemini, AI Studio, Chrome Web Store, las páginas de inicio de sesión de Google y las páginas internas del navegador;
- devuelve el contenido de la página solo a Better Sidebar y no envía nada a ningún servidor;
- solo guarda los ID de las pestañas a las que está conectado (se borran al cerrar el navegador) y tu ajuste de pausa.

Lo que el Web Agent lee de una página pasa a tu conversación de Gemini, tal como se describe en la Sección 4. Las acciones que realiza en un sitio web (enviar un formulario, enviar un mensaje) el sitio las ve como acciones tuyas.

## 6. Datos que salen de tu navegador

Aparte de lo que envías a Google a través de Gemini y AI Studio, los datos solo salen de tu navegador en estos casos, todos iniciados por ti:

- **Sincronización con Google Drive (opcional):** tus datos de organización (carpetas, etiquetas, favoritos, notas, la lista de chats con sus títulos, prompts, fragmentos y tus listas de Gems y cuadernos) se guardan en tu propio Google Drive, en una carpeta oculta específica de la app (alcance `drive.appdata`). La extensión no puede ver ningún otro archivo de tu Drive. El historial de mensajes no se sincroniza. Una vez que conectas Drive, los cambios se suben automáticamente; la restauración siempre es manual. Puedes desconectarlo en cualquier momento.
- **Exportación a Notion (opcional):** cuando exportas a Notion, el contenido que eliges y tu token de integración de Notion se envían a `api.notion.com`. El token se guarda en local en tu navegador.
- **Exportación a Obsidian:** abre Obsidian en tu ordenador mediante un enlace `obsidian://`. Nada pasa por la red.
- **Activación de licencia:** cuando activas un Support Pack o un Power Pack, tu clave de licencia y un ID de dispositivo aleatorio generado por la extensión se envían a nuestro servidor de licencias para comprobar la clave y contar las activaciones. No se envía nada más ni se necesita cuenta. Las compras las gestionan Gumroad o Afdian conforme a sus propias políticas de privacidad.
- **Temas:** algunos temas cargan fuentes de Google Fonts (`fonts.googleapis.com`), que ve una solicitud web estándar desde tu navegador.

## 7. Permisos

**Better Sidebar**

- `storage`, `unlimitedStorage`: guardar tus datos y ajustes en local.
- `offscreen`: ejecutar la base de datos SQLite local.
- `alarms`: programar la sincronización de mensajes en segundo plano, las copias de seguridad y la sincronización con Drive.
- `scripting`: añadir la barra lateral a las páginas de Gemini y AI Studio.
- `identity`: iniciar sesión en Google para la sincronización opcional con Drive.
- Acceso a los hosts `gemini.google.com` y `aistudio.google.com`: mostrar la barra lateral y leer tus chats allí.
- `sidePanel`, `contextMenus`, `declarativeNetRequestWithHostAccess` (Chrome): abrir el Web Agent en el panel lateral de Chrome, añadir la opción de menú «Deja que Web Agent trabaje en esta página» y permitir que Gemini se cargue dentro de ese panel.
- `tabs`, `tabGroups`, `bookmarks` opcionales: solo se solicitan cuando activas el Browser Agent.
- Acceso opcional a `api.notion.com`: solo se solicita cuando configuras la exportación a Notion.

**Web Agent Connector**

- `debugger`: operar las pestañas que entregas al Web Agent, como se describe en la Sección 5.
- `storage`: recordar las pestañas conectadas y tu ajuste de pausa.

## 8. Tu control

- Exporta tus datos cuando quieras desde los ajustes de Better Sidebar y restáuralos desde las copias de seguridad locales.
- Desactiva la sincronización en segundo plano, la sincronización con Drive o cualquier agente en cualquier momento.
- Detén el Web Agent con Cancelar en la barra de depuración de Chrome, cerrando el panel lateral, o con Disconnect all / Pause en el Connector.
- Desinstala cualquiera de las extensiones para eliminar sus datos locales.

## 9. Menores

Las Extensiones no están dirigidas a menores de 13 años y no recopilamos conscientemente ningún dato de ellos.

## 10. Cambios en esta política

Podemos actualizar esta política a medida que cambien las funciones. La fecha de arriba indica la versión más reciente. Los cambios importantes también se mencionarán en las notas de actualización de la extensión.

## 11. Contacto

Preguntas sobre esta política: [GitHub Issues](https://github.com/Paper-Crane-Devteam/better-sidebar/issues) o nuestro [Discord](https://discord.gg/FRzesxaGAx).
