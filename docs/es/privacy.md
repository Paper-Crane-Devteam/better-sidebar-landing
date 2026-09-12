---
title: Política de privacidad
description: Cómo Better Sidebar trata tus datos. Arquitectura local-first, sin recopilación de datos y privacidad total.
---

# Política de privacidad

*Última actualización: 10 de marzo de 2026*

Esta Política de privacidad describe cómo **Better Sidebar for Gemini & AI Studio** («nosotros», «nuestro» o «la Extensión») trata tu información. Nos comprometemos a proteger tu privacidad y a garantizar que tengas control total sobre tus datos.

## 1. Arquitectura local-first

La Extensión está diseñada con una arquitectura «local-first»:

- Todos los datos de organización (carpetas, etiquetas, favoritos, notas) se almacenan localmente en tu dispositivo mediante una base de datos **SQLite WASM** integrada en tu navegador.
- No operamos un servidor en la nube para almacenar tus datos. Tus datos permanecen en tu máquina.
- La Extensión interactúa con las páginas de Gemini y AI Studio para identificar tus conversaciones y organizarlas. No transmitimos este contenido a servidores de terceros.

## 2. Lo que NO recopilamos

- **No** recopilamos, almacenamos ni transmitimos tu historial de chat, prompts o respuestas generadas a nuestros servidores.
- **No** recopilamos información de identificación personal (PII) como tu nombre, dirección de correo electrónico o número de teléfono.
- **No** rastreamos tu historial de navegación fuera de los dominios de las plataformas compatibles.

## 3. Sincronización con Google Drive

La Extensión ofrece una función opcional de sincronización con Google Drive:

- **Qué se sincroniza:** Solo ajustes, prompts y datos de configuración.
- **Qué NO se sincroniza:** El historial de chat, el contenido de las conversaciones y los mensajes personales nunca se suben a Google Drive.
- **Alcance OAuth:** La Extensión usa el alcance `drive.appdata`, que limita el acceso a una carpeta oculta y específica de la app en tu Google Drive. La Extensión no puede leer ni modificar ningún otro archivo de tu Drive.
- La sincronización la inicias tú de forma manual. No se producen cargas automáticas en segundo plano.

## 4. Permisos

La Extensión requiere permisos específicos para funcionar:

- `storage`: Para guardar tus ajustes y preferencias en local.
- `activeTab` / `host_permissions`: Para modificar la interfaz en **gemini.google.com** y **aistudio.google.com** (inyectando la superposición de la barra lateral) y leer títulos/IDs de conversación para habilitar la organización por carpetas.
- `offscreen`: Para ejecutar la base de datos SQLite de forma segura en un contexto separado.
- `identity`: Para autenticarte con Google en la función opcional de sincronización con Drive.

## 5. Servicios de terceros

- **Google Gemini y AI Studio:** La Extensión opera sobre estas plataformas. Tu uso de ellas está sujeto a la Política de privacidad y los Términos de servicio de Google.
- **Google Drive:** Se usa solo para la función opcional de sincronización descrita en la Sección 3. Los datos se almacenan en una carpeta oculta específica de la app y no son accesibles para otras aplicaciones.
- **Formulario de comentarios:** Si usas el formulario de comentarios, el mensaje (incluido tu correo si lo facilitas) se envía mediante un servicio de correo de terceros (EmailJS) directamente a nuestro equipo de soporte. Esta es la única ocasión en que los datos salen de tu navegador, y solo se inicia por tu acción.

## 6. Copia de seguridad y exportación de datos

Como tus datos se almacenan en local, eres responsable de hacer copias de seguridad. La Extensión ofrece una función de exportación que genera un archivo DB de tus datos de organización. Recomendamos encarecidamente hacer copias periódicas, especialmente antes de borrar los datos del navegador.

## 7. Cambios en esta política

Podemos actualizar esta Política de privacidad de vez en cuando. Te informaremos de cualquier cambio publicando la nueva Política de privacidad en esta página.

## 8. Contacto

Si tienes preguntas sobre esta Política de privacidad, contacta con nosotros a través de la [página de GitHub Issues](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio/issues).
