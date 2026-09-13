---
title: Varias cuentas
description: Crea perfiles separados para distintas cuentas de Google o usos. Cada perfil tiene su propia base de datos, carpetas, etiquetas y ajustes — cambia entre ellos al instante.
---

# Varias cuentas

Si usas varias cuentas de Google (personal, trabajo, escuela) o quieres sistemas de organización separados para usos distintos, los perfiles multi-cuenta te permiten mantenerlo todo limpidamente separado. Cada perfil tiene su propia base de datos independiente: sus propias carpetas, etiquetas, favoritos e índice de conversaciones.

![Gestión de perfiles en Datos y almacenamiento, mostrando el perfil activo y sus cuentas vinculadas](/images/features/multi-account.webp)

## Cómo funcionan los perfiles

Un perfil es esencialmente una base de datos separada. Cuando cambias de perfil:

- Toda la barra lateral se recarga con los datos de ese perfil
- Carpetas, etiquetas, favoritos, prompts: todo específico del perfil activo
- Tus conversaciones en la plataforma no cambian (viven en los servidores de Google), pero cómo están *organizadas* en Better Sidebar cambia por completo

Piénsalo como tener varios escritorios en tu ordenador: mismas apps, distintos arreglos.

## Tu primer perfil

Cuando instalas Better Sidebar por primera vez, se crea automáticamente un perfil predeterminado. Se vincula a las cuentas de Google que uses en Gemini y AI Studio. Lo verás en Ajustes → Datos como la tarjeta del perfil activo, mostrando:

- El nombre del perfil
- Las cuentas de plataforma vinculadas (p. ej., «Gemini: user@gmail.com»)
- Botones Exportar/Importar/Restablecer para la base de datos de ese perfil

## Crear un perfil nuevo

1. Abre la pestaña **Ajustes → Datos**
2. Desplázate al final de la sección de almacenamiento
3. Haz clic en **Nuevo perfil**
4. Escribe un nombre (p. ej., «Trabajo», «Personal», «Investigación»)
5. Pulsa Enter o haz clic en Crear

El perfil nuevo empieza con una base de datos vacía. Cambia a él y la barra lateral estará en blanco: lista para organizar desde cero para ese uso concreto.

:::tip
Nombra los perfiles según cuentas o roles: «Gmail personal», «Trabajo (empresa.com)», «Proyecto paralelo». Nombres claros hacen obvio a qué perfil cambiar.
:::

## Cambiar de perfil

En la lista de perfiles (Ajustes → Datos), cada perfil inactivo tiene un botón **Cambiar** que aparece al pasar el ratón. Haz clic para:

1. Guardar el estado del perfil actual
2. Cargar la base de datos del perfil destino
3. Actualizar la barra lateral con los datos del nuevo perfil

Una notificación toast confirma el cambio: «Cambiado a: Work Projects»

El cambio es casi instantáneo: solo se intercambia qué archivo de base de datos está activo.

## Vinculación de cuentas

Los perfiles se vinculan a las cuentas de Google que uses mientras están activos. Cambia al perfil «Trabajo», luego visita Gemini iniciado sesión en tu cuenta de trabajo, y esa cuenta se asocia con «Trabajo».

Las cuentas vinculadas se muestran como badges en la tarjeta del perfil: icono de plataforma más el nombre de la cuenta.

### Cuando aparece una cuenta nueva

Si Better Sidebar ve una cuenta de Google que no reconoce, pregunta qué hacer en lugar de adivinar: vincularla a un perfil existente, o crear uno nuevo para ella. Nada se fusiona en silencio.

Esto es lo que hace todo seguro para quien tiene sesión en varias cuentas de Google a la vez: cambiar de cuenta en Gemini no vuelca tus chats de trabajo en tu árbol personal.

### Saber en qué cuenta estás

La barra lateral muestra el avatar de la cuenta actual en su encabezado. Útil comprobación de cordura antes de empezar a archivar: si ves un árbol vacío que debería estar lleno, probablemente estás en la cuenta equivocada.

## Renombrar un perfil

Pasa el ratón sobre un perfil → haz clic en el icono de **lápiz** (✏️). Aparece un campo de texto en línea: escribe el nombre nuevo y pulsa Enter. Pulsa Escape para cancelar.

## Eliminar un perfil

Pasa el ratón sobre un perfil → haz clic en el icono de **papelera** (🗑️). Aparece un diálogo de confirmación explicando que la base de datos del perfil se eliminará de forma permanente.

Reglas:
- No puedes eliminar el perfil actualmente activo (cambia a otro primero)
- La eliminación quita el archivo de base de datos del perfil: se van todas sus carpetas, etiquetas y datos de organización
- Las conversaciones en los servidores de Google no se ven afectadas

:::warning
Eliminar un perfil es permanente. Se destruye toda la base de datos (carpetas, etiquetas, favoritos, prompts, mensajes indexados) de ese perfil. Exporta la base de datos del perfil primero si podrías quererla de vuelta.
:::

## Casos de uso prácticos

### Separar trabajo y personal

- **Perfil 1: Personal** — Proyectos divertidos, conversaciones de aprendizaje, escritura creativa
- **Perfil 2: Trabajo** — Conversaciones con clientes, notas de reunión, revisiones de código

Cada uno tiene su propia estructura de carpetas, sistema de etiquetas y favoritos. Tus conversaciones de trabajo no llenan tu barra lateral personal y viceversa.

### Varias cuentas de Google

Si inicias sesión en Gemini con cuentas distintas para propósitos distintos, crea un perfil para cada una. La vinculación de cuentas te ayuda a recordar cuál es cuál.

### Experimentos de pizarra limpia

¿Quieres probar un sistema de organización completamente distinto sin perder el actual? Crea un perfil nuevo, experimenta con libertad y vuelve si no funciona.

## Todo es por perfil

Merece ser explícito, porque sorprende a la gente:

| Acotado al perfil activo | Compartido entre todos los perfiles |
| --- | --- |
| Carpetas, etiquetas, favoritos | Idioma |
| Metadatos y mensajes de conversaciones | Tema |
| Prompts y snippets | Anchos e interruptores de UI |
| [Ranuras de copia de seguridad](/en/guide/extras/data-backup) | Atajos de teclado |
| [Instantánea de Drive](/en/guide/extras/drive-sync) | [Activación de licencia](/en/guide/settings/packs) |
| Workspaces del agente | |

Así que cada perfil obtiene su propia copia de seguridad en Drive independiente y su propio historial de copias. Cambia de perfil y la página Datos y almacenamiento habla de una base de datos distinta por completo.

:::warning
Una cosa a planificar: cada perfil de *navegador* consume una [ranura de activación de licencia](/en/guide/settings/packs) (hay 10). Los *perfiles* de Better Sidebar dentro de un solo perfil de navegador no cuestan una ranura cada uno — pero si ejecutas perfiles de Chrome separados para trabajo y personal, son dos.
:::

:::tip
Combina perfiles con [Drive Sync](/en/guide/extras/drive-sync) y cada uno de tus sistemas de organización obtiene seguridad en la nube independiente. Solo recuerda cambiar al perfil que quieres antes de pulsar Respaldar: el panel de sincronización solo toca el activo.
:::
