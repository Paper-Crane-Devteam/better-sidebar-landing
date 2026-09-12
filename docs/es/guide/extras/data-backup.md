---
title: Copias de seguridad y restauración
description: Instantáneas locales automáticas a las que puedes volver, más exportación e importación manual de la base de datos. Todo vive en Ajustes → Datos y almacenamiento.
---

# Copias de seguridad y restauración

Better Sidebar guarda todo en una base de datos SQLite local. Hay tres redes de seguridad distintas, y merece distinguirlas:

| | Contra qué protege | Esfuerzo |
| --- | --- | --- |
| **Copias locales** | Tú (o el agente) rompiendo tus propios datos | Ninguno — automático |
| **Exportación de la base de datos** | Cambiar de navegador, guardar una copia sin conexión | Manual, un clic |
| **[Drive Sync](/en/guide/extras/drive-sync)** | Perder el dispositivo entero | Ninguno una vez conectado |

![Controles de copia de seguridad, restauración y sincronización con Drive en Datos y almacenamiento](/images/features/drive-sync-and-backup.png)

Todo lo de abajo está en **Ajustes → Datos y almacenamiento**.

## Copias de seguridad locales

Better Sidebar hace instantáneas de tu base de datos automáticamente y conserva las últimas, para que puedas volver atrás si algo sale mal.

### Instantáneas automáticas

**Copia automática** está activada por defecto. Se toma una instantánea antes de cualquier cosa que pueda arruinarte el día de forma razonable, y cada una se etiqueta con el motivo:

| Etiqueta | Cuándo se toma |
| --- | --- |
| **Routine** | Una vez al día, en segundo plano |
| **Before sync** | Antes de una sincronización con Drive |
| **Before restore** | Antes de restaurar desde Drive o desde otra copia |
| **Before bulk delete** | Antes de una operación de borrado grande |
| **Manual** | Cuando haces clic en Crear copia ahora |

Esa de «Before restore» importa: incluso una restauración de la que te arrepientas de inmediato es recuperable, porque restaurar crea primero una instantánea.

### Ranuras

**Máximo de ranuras** controla cuántas instantáneas conservar, de 1 a 20. El valor predeterminado es 5. Cuando se alcanza el límite, se elimina la más antigua.

:::tip
Cinco está bien si eres un usuario normal. Súbelo a 10 o más si dejas que el agente haga cambios amplios, o si estás reestructurando activamente una biblioteca grande: más ranuras significa una ventana más larga para notar que algo salió mal hace tres días.
:::

### Ver y restaurar

Haz clic en **Ver** junto a Copias de seguridad para ver la lista, cada una con su marca de tiempo, motivo y tamaño. Cada entrada ofrece:

- **Restaurar** — reemplaza tus datos locales actuales con esa instantánea
- **Eliminar** — quita esa instantánea

También puedes hacer clic en **Crear copia ahora** para tomar una bajo demanda.

:::warning
Restaurar sobrescribe tus datos locales actuales. El contenido de los mensajes no se ve afectado por una restauración. Y como se toma primero una instantánea «Before restore», puedes deshacer una restauración restaurando la instantánea que acaba de crear.
:::

## Exportación de la base de datos

Haz clic en **Exportar** para descargar toda la base de datos como un archivo `.db`, con el nombre de la fecha de hoy (`ai-studio-backup-2026-09-11.db`). Es un archivo SQLite plano que contiene todo:

- Estructura de carpetas y colores
- Etiquetas y asignaciones
- Favoritos, fijados, descripciones
- Metadatos de conversaciones
- Contenido de mensajes registrados
- Bibliotecas de prompts y snippets
- Ajustes

A diferencia de Drive Sync, una exportación **sí** incluye el contenido de los mensajes, así que es la única copia completa de tus datos.

:::tip
La exportación es la herramienta correcta para pasar a otro navegador o máquina, y para guardar una copia en un sitio en el que Google no esté involucrado. Si solo haces una cosa de copia de seguridad a mano, haz esto una vez al mes.
:::

## Importación de la base de datos

Haz clic en **Importar** y elige un archivo `.db`, `.sqlite` o `.sql`. Better Sidebar reemplaza la base de datos actual con él y recarga.

:::warning
La importación es un reemplazo completo, no una fusión. Exporta tus datos actuales primero si podrías quererlos de vuelta.
:::

## Restablecer base de datos

Borra todos los datos de Better Sidebar del perfil activo: carpetas, etiquetas, favoritos, metadatos de conversaciones, mensajes registrados, prompts, snippets. Tus conversaciones en los servidores de Google no se tocan: solo se destruye la organización propia de la extensión.

Aparece un diálogo de confirmación, y el botón está estilizado como destructivo porque lo es.

:::warning
Restablecer **no** borra tu copia de seguridad en Drive. Si restableces en local y luego quieres que la copia en la nube también desaparezca, haz clic después en **Respaldar en Drive** para sobrescribir la instantánea en la nube con la base de datos ahora vacía.
:::

## Alcance por perfil

Todo lo anterior opera sobre el **perfil activo**. Cada perfil tiene su propia base de datos, sus propias ranuras de copia y su propia instantánea de Drive. Cambiar de perfil cambia de qué hablan estos botones. Consulta [Varias cuentas](/en/guide/settings/multi-account).

## Cómo se ve una configuración sensata

- Deja **Copia automática** activada, ranuras en 5 o más
- Conecta **Drive Sync** y deja **Subida automática** activada
- **Exporta** a mano antes de cualquier cosa inusual: una migración grande, probar una build beta, entregar tu portátil a TI

Eso cubre el daño autoinfligido, la pérdida del dispositivo y las rarezas a nivel de navegador, y tras la configuración inicial no te cuesta nada.
