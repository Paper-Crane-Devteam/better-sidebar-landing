---
title: Agente Better Sidebar
description: El agente que trabaja sobre tu biblioteca: organizar conversaciones en carpetas, etiquetar en bloque, búsqueda profunda, sincronizar mensajes que faltan y refactorizar tus colecciones de prompts y snippets.
---

# Agente Better Sidebar

Este es el agente que toca tu biblioteca: conversaciones, carpetas, etiquetas, prompts, snippets. Puede consultar la base de datos local directamente, así que responde preguntas que ningún filtro integrado cubre y actúa sobre las respuestas.

Inícialo escribiendo `>` en el campo de chat y eligiendo **Better Sidebar**.

![El agente creando carpetas, moviendo conversaciones y aplicando etiquetas, con cada paso como una tarjeta](/images/features/agent-in-action.webp)

## A qué puede llegar

| | |
| --- | --- |
| Conversaciones | Títulos, fechas, carpetas, descripciones, contenido de mensajes |
| Carpetas | Crear, renombrar, mover, recolorear, eliminar |
| Etiquetas | Crear, renombrar, asignar, fusionar |
| Prompts | Leer, reescribir, reorganizar, incluidas variables e imports |
| Snippets | Leer, retitular, reubicar, deduplicar |

Más tres cosas más allá de las consultas simples: puede **sincronizar mensajes de conversaciones** (abrir chats para registrar su contenido), **exportar** conversaciones a archivos y **activar un skill** para cargar instrucciones especializadas.

No puede ver los archivos de tu workspace. Eso es el [agente Workspace](/en/guide/agent/workspace-agent).

## Skills integrados

Los skills son conjuntos de instrucciones especializadas. El agente carga uno cuando la tarea lo pide: no tienes que elegirlo tú.

| Skill | Para qué sirve |
| --- | --- |
| **Auto-Classify Conversations** | Ordenar conversaciones en carpetas y etiquetas según su contenido |
| **Sync Missing Messages** | Encontrar conversaciones sin mensajes registrados y rellenarlos |
| **Export Conversations** | Consultar y exportar datos de conversaciones |
| **Manage Prompt Library** | Crear, refactorizar y reorganizar prompts, incluidas variables e imports |
| **Manage Snippets** | Organizar, deduplicar y buscar snippets guardados |

Cada uno se puede desactivar, y puedes escribir los tuyos. Consulta [Skills y herramientas](/en/guide/agent/skills-and-tools).

## Recetas

Merece la pena leerlas enteras. El fraseo es el punto: cada una es específica sobre el objetivo y explícita sobre el caso límite que, si no, saldría mal.

### Organizar un backlog

> Organiza mis chats sin archivar: agrúpalos por tema y muéstrame el plan primero. Si las carpetas actuales no encajan, crea nuevas y mueve los chats allí. Por último, etiqueta cada chat según su contenido, reutilizando mis etiquetas existentes para evitar duplicados.

Tres instrucciones haciendo trabajo real. *Muéstrame el plan primero* significa que revisas antes de que se mueva nada. *Si las carpetas actuales no encajan* evita que invente una estructura paralela junto a la que ya construiste. *Reutilizando mis etiquetas existentes* evita que cree `coding`, `code` y `programming` como tres etiquetas distintas.

### Búsqueda profunda

> Encuentra todas las menciones de «Docker deployment». Busca a fondo en chats, cuerpos de mensajes y fragmentos de código, no solo en títulos. Ordénalos de más nuevo a más antiguo, dame un resumen de una línea de cada uno y di en qué carpeta está.

Esto es lo que el agente añade sobre la [pestaña Búsqueda](/en/guide/sidebar/search-tab): la búsqueda te da coincidencias; el agente te da una respuesta resumida, ordenada y contextualizada. Más lento, pero te ahorra leer veinte resultados tú mismo.

### Sincronizar mensajes que faltan

> Comprueba cuántos chats solo tienen título sin mensajes guardados. Dame el total primero, ordenados por más recientes, y luego sincroniza el contenido de los 20 últimos para que aparezcan en búsquedas y exportaciones.

Lo más útil que puedes ejecutar tras instalar. Better Sidebar solo registra mensajes de las conversaciones que ha visto, así que tu catálogo antiguo es invisible a la búsqueda hasta que esto corra.

Pide un recuento primero. Si la respuesta es 800, querrás pensar el tamaño del lote en lugar de lanzar una ejecución de una hora.

Algunas conversaciones muy antiguas simplemente ya no existen del lado de Google. El agente indica cuáles volvieron vacías en lugar de fingir que funcionó.

### Exportación por lotes y archivo

> Exporta todos los chats de mi carpeta Work desde marzo en adelante a Markdown, un archivo por chat, empaquetados en un zip. Si algún chat aún no tiene los mensajes sincronizados, avísame antes de exportar.

Esa última frase evita el fallo clásico: una exportación que «tiene éxito» mientras produce en silencio archivos vacíos por cada conversación cuyos mensajes nunca se registraron.

### Refactorizar la biblioteca de prompts

> Limpia mi biblioteca de prompts: renombra los que cuestan encontrar con `/` poniendo la palabra clave al principio. Extrae el bloque repetido de «rol + formato de salida» a un prompt compartido e impórtalo en los demás. Si una variable solo tiene unas pocas opciones fijas, cámbiala a un desplegable.

Esto usa bien la [composición de prompts](/en/guide/sidebar/prompts-tab#prompt-composition-import): extraer el bloque compartido a un prompt e importarlo significa cambiarlo una vez en lugar de once.

### Limpiar snippets

> Mi bandeja de snippets es un caos. Agrúpalos en carpetas por tema y acorta los títulos que siguen siendo mi pregunta original a un resumen breve. Si el mismo contenido está guardado dos veces, quédate solo con el más antiguo. Muéstrame la lista antes de borrar nada.

Los snippets guardados desde una selección heredan el texto de alrededor como título, lo que da títulos pésimos. Esto los corrige en bloque. *Muéstrame la lista antes de borrar* no es un consejo opcional.

### Estadísticas y auditoría

> Hazme una tabla de estadísticas: cuántos chats en cada carpeta, cuántos chats nuevos el mes pasado y qué carpetas no han tenido actividad en más de tres meses. A partir de eso, sugiere qué carpetas debería fusionar.

Funciona en el plan gratis, porque todo son lecturas. Una forma realmente útil de descubrir que once de tus veintitrés carpetas están muertas.

Otras preguntas en la misma línea:

- ¿Cuáles de mis prompts no he usado nunca?
- ¿De qué temas hablo más?
- ¿Qué conversaciones están en la carpeta equivocada, a juzgar por su contenido?

### Registrar decisiones

> Resume nuestras conclusiones de este chat como una lista con viñetas y guárdalo en `notes/decisions.md` en el workspace. Añade al final cualquier pregunta sin resolver. Si el archivo ya existe, añade con la fecha de hoy en lugar de sobrescribir.

Esta abarca ambos agentes: leer la conversación y escribir un archivo. Práctica al final de una discusión larga de diseño.

## Trabajar con él en conversación

Mantiene el contexto. No hace falta volver a escribir `>` para continuar: sigue hablando:

> Interesante. Desglósalo por mes.
>
> Ahora haz lo mismo para los chats con estrella.
>
> En realidad, fusiona esas dos carpetas en su lugar.

Tratarlo como un colega y no como una línea de comandos es como sacarle más partido. Pregúntale qué piensa:

> Mira mi biblioteca y dime qué necesita organización.
>
> ¿Qué puedes hacer con mis datos?

Desde la v2.10 las instrucciones le empujan a discutir en lugar de ejecutar de inmediato, así que suele proponer antes de actuar.

## Gratis frente a Power Pack

En el plan gratis el agente es de **solo lectura**. Todas las consultas funcionan; no se cambia nada.

Sigue siendo un analista que funciona. Encontrará tus carpetas muertas, resumirá tus resultados de búsqueda y te dirá exactamente adónde debería ir cada chat sin archivar. Solo que no moverá nada.

El [Power Pack](/en/guide/settings/packs) desbloquea las escrituras. Cuando el agente llega al límite lo dice con claridad y ofrece la mejora, en lugar de fallar de forma confusa.

:::tip
Una forma razonable de evaluarlo: ejecuta primero las recetas de solo lectura — la de estadísticas, la de búsqueda profunda, la de «dime qué necesita organización». Si las respuestas son útiles, la mitad de escritura también lo será. Si no lo son, no has gastado nada.
:::

## Consejos prácticos

**Pide un plan en cualquier cosa grande.** «Muéstrame el plan primero» cuesta una ronda y te evita enterarte después.

**Empieza en pequeño.** Apúntalo a una carpeta antes de apuntarlo a 500 conversaciones. Aprenderás cómo interpreta tu fraseo a una escala donde los errores son baratos.

**Haz una copia de seguridad antes de una ejecución grande.** Las [copias de seguridad locales](/en/guide/extras/data-backup) son automáticas, pero tomar una instantánea manual antes de una reorganización grande tarda dos segundos.

**Decide sobre deshacer antes de empezar la siguiente tarea.** La ventana de deshacer se cierra cuando empieza una tarea nueva.

**Dile cuando deshagas algo.** No tiene forma de saberlo, y si no seguirá razonando desde un estado que ya no existe.
