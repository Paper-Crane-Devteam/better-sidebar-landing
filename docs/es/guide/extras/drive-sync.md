---
title: Sincronización con Google Drive
description: Respalda tus carpetas, etiquetas, prompts y snippets en tu propio Google Drive. Subidas automáticas, descargas manuales, instantáneas por perfil.
---

# Sincronización con Google Drive

Drive Sync guarda una copia de tu organización de Better Sidebar en tu propio Google Drive, para que un portátil nuevo o un navegador limpio no te cuesten seis meses de archivo.

![Controles de sincronización con Google Drive y copia de seguridad local en Datos y almacenamiento](/images/features/drive-sync-and-backup.png)

## Qué se sincroniza

| Se sincroniza | No se sincroniza |
| --- | --- |
| Carpetas y sus colores | **Contenido de mensajes** |
| Etiquetas y asignaciones de etiquetas | |
| Favoritos y fijados | |
| Metadatos de conversaciones (títulos, fechas, descripciones) | |
| Biblioteca de prompts | |
| Biblioteca de snippets | |
| Ajustes y preferencias | |

:::warning
Los mensajes se excluyen a propósito. Son con diferencia la parte más grande de la base de datos y siempre se pueden volver a leer desde la plataforma, así que sincronizarlos haría cada subida lenta por muy poco beneficio. En la práctica: tras restaurar en una máquina nueva tendrás toda tu estructura, pero la búsqueda de texto completo estará vacía hasta que se vuelvan a registrar los mensajes. Consulta [Búsqueda](/en/guide/sidebar/search-tab#import-chat-history).
:::

## Conectar

1. **Ajustes → Datos y almacenamiento → Sincronización con Google Drive**
2. Haz clic en **Conectar Google Drive**
3. Aprueba el aviso de inicio de sesión de Google

La extensión solo pide acceso a su propia carpeta específica de la app. No puede ver tus otros archivos de Drive, y tus datos no se envían a ningún sitio salvo tu propio Drive.

## Cómo funciona realmente la sincronización

Esta es la parte que merece entender, porque es deliberadamente asimétrica.

### Las subidas son automáticas

Deja **Subida automática** activada y Better Sidebar envía una instantánea fresca tras cambios en tus datos, y de nuevo cada 25 minutos. No tienes que pensar en ello.

### Las descargas son siempre manuales

Nada baja *nunca* de Drive a menos que hagas clic en **Restaurar desde Drive**. Tu base de datos local se trata como la fuente de verdad, y la nube como una copia de seguridad.

:::tip
Versiones anteriores intentaban fusionar ambos lados automáticamente. Salió mal: las fusiones automáticas pueden producir resultados que nadie pidió, y que la nube gane en silencio es el peor modo de fallo posible para algo en lo que has pasado meses organizando. Así que ahora la regla es simple: tu máquina escribe a la nube por su cuenta; la nube nunca escribe a tu máquina por su cuenta.
:::

### Ambas direcciones reemplazan, no fusionan

**Respaldar en Drive** reemplaza toda la instantánea en la nube del perfil actual. **Restaurar desde Drive** reemplaza toda tu instantánea local. Ninguna fusiona.

Antes de una restauración, Better Sidebar toma automáticamente una instantánea local de seguridad, así que una restauración de la que te arrepientas es recuperable. Consulta [Copias de seguridad](/en/guide/extras/data-backup).

## Cuando dos dispositivos no coinciden

Si la copia en la nube cambió en otro dispositivo, la subida automática **se pausa** y recibes un aviso: *«La copia en la nube cambió en otro dispositivo.»*

Nada se pierde mientras está pausada: la sincronización simplemente se congela para que ningún lado pueda sobrescribir al otro en silencio. Eliges la dirección:

- **Subir** — ganan los datos de este dispositivo, se reemplaza la nube
- **Descargar** — gana la nube, se reemplaza este dispositivo

Una vez eliges, las subidas automáticas se reanudan.

:::tip
Si usas Better Sidebar con regularidad en dos ordenadores, elige uno como principal y solo sube desde ese. Trata el segundo como solo lectura: descarga cuando te sientes en él, no subas desde él. Dos máquinas subiendo ambas es cómo acabas mirando un aviso de conflicto intentando recordar cuál tenía la estructura de carpetas más nueva.
:::

## Instantáneas por perfil

La sincronización está acotada al **perfil activo**, no a toda tu instalación. Cada perfil obtiene su propia instantánea en Drive.

Eso significa que los usuarios multi-cuenta obtienen copias de seguridad en la nube independientes por cada cuenta: cambia de perfil y el panel de sincronización habla ahora de la instantánea de ese perfil. Consulta [Varias cuentas](/en/guide/settings/multi-account).

## Desconectar

**Desconectar** desvincula la cuenta de Drive. Detiene las subidas automáticas y elimina el token almacenado. *No* borra la instantánea que ya está en Drive, y *no* toca tus datos locales. Vuelve a conectar después y tu instantánea sigue ahí.

## Flujos prácticos

### Configurar un ordenador nuevo

1. Instala la extensión e inicia sesión en Gemini o AI Studio con la misma cuenta de Google
2. **Ajustes → Datos y almacenamiento → Conectar Google Drive**
3. Haz clic en **Restaurar desde Drive**
4. Vuelven tus carpetas, etiquetas, prompts y snippets

Luego, si quieres que la búsqueda funcione en esta máquina, [haz que el agente vuelva a sincronizar](/en/guide/agent/better-sidebar-agent#sync-missing-messages) las conversaciones que te importan.

### Antes de cualquier cosa arriesgada

¿Vas a restablecer la base de datos, importar la copia de seguridad de otra persona o soltar al agente en una reorganización grande? Haz clic primero en **Respaldar en Drive**. Diez segundos ahora frente a una tarde de rearchivar después.

### Cinturón y tirantes

Drive Sync cubre la pérdida del dispositivo. Las [copias de seguridad locales](/en/guide/extras/data-backup) cubren «rompí mis propios datos hace cinco minutos»: son instantáneas automáticas a las que puedes volver. Usa ambas; resuelven problemas distintos.

## ¿No disponible?

Si ves *«La sincronización con Google Drive no está disponible en este navegador»*, tu navegador no expone la API de identidad que la extensión necesita para OAuth de Google. Firefox es el caso habitual aquí. Usa [copias de seguridad locales](/en/guide/extras/data-backup) y la exportación manual de la base de datos en su lugar: ambas funcionan en todas partes.
