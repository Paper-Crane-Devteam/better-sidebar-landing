---
title: Descripción general del agente
description: Un agente de IA dentro de tu sesión de Gemini que archiva, etiqueta, busca, exporta y edita archivos. Sin clave API ni coste extra, nada sale de tu dispositivo.
---

# Descripción general del agente

Better Sidebar incluye un agente de IA. Describes un trabajo en lenguaje natural, calcula los pasos, los ejecuta y te informa del resultado.

Lo importante: se ejecuta **a través de tu sesión existente de Gemini o AI Studio**. No hay clave API que pegar, ni tokens que comprar, ni servidor de por medio. El modelo con el que ya hablas es el que hace el trabajo, y tus datos no salen del navegador.

![El agente trabajando en una tarea: creando carpetas, moviendo conversaciones, aplicando etiquetas](/images/features/agent-in-action.webp)

## Dos agentes

Tienen trabajos y herramientas distintos, y eliges uno al empezar.

| Agente | Trabaja sobre | Guía |
| --- | --- | --- |
| **Better Sidebar** | Tus conversaciones, carpetas, etiquetas, prompts, snippets | [Agente Better Sidebar](/en/guide/agent/better-sidebar-agent) |
| **Workspace** | Archivos y documentos en un espacio de trabajo privado | [Agente Workspace](/en/guide/agent/workspace-agent) |

El agente Better Sidebar no puede tocar tus archivos. El agente Workspace no puede ver tus conversaciones. Esa separación es deliberada: facilita razonar sobre lo que cada uno puede hacer.

## Empezar una tarea

Escribe `>` en el campo de chat. Aparece un selector, eliges un agente, escribes tu petición y pulsas Enter.

![La pestaña Agente con pasos de uso y prompts de ejemplo](/images/features/agent-launcher.webp)

Esa es toda la interfaz. No hay una ventana de chat aparte, porque el agente trabaja hablando con el mismo modelo en la misma conversación en la que ya estás.

:::tip
La pestaña **Agente** de la barra lateral es un lanzador, no un chat. Sirve para guardar el cómo hacerlo, los prompts de ejemplo y los enlaces a skills y ajustes del workspace. La conversación real ocurre en el campo de chat normal de la página.
:::

### Prompts de ejemplo

La pestaña Agente incluye un conjunto de ejemplos elaborados: organizar historial, búsqueda profunda, exportación por lotes, sincronizar registros que faltan, refactorizar la biblioteca de prompts, limpiar snippets, registrar decisiones, analizar estadísticas. Haz clic en uno y va al campo de entrada, donde puedes editarlo antes de enviarlo.

Merece la pena leerlos aunque no los uses. Están escritos como mejor funcionan las peticiones a este agente: específicos sobre el objetivo, explícitos al pedir un plan primero y claros sobre los casos límite.

:::tip
Las peticiones vagas dan resultados vagos. «Organiza mis chats» es un cara o cruz. «Agrupa mis chats sin archivar por tema, muéstrame el plan primero, crea carpetas nuevas solo si las existentes no encajan y luego etiqueta cada uno reutilizando mis etiquetas actuales» te da lo que realmente querías. La frase extra merece escribirse.
:::

## Verlo trabajar

### El dock

Mientras corre una tarea, una barra de estado queda fijada encima del campo de chat: el **Agent Dock**. Sigue visible aunque cierres la barra lateral, y es donde ocurre todo: estado actual, botón de parar, peticiones de aprobación y el resumen al final.

Estados que verás: *Pensando… → Leyendo respuesta… → Trabajando… → Terminado*, más *Esperando tu aprobación* y *En pausa* cuando te necesita.

### Vista Agente frente a vista Original

Un interruptor arriba a la izquierda cambia cómo se renderiza la conversación:

- **Agente** — pasos como tarjetas legibles, con resultados plegados hasta que los abras
- **Original** — la conversación en bruto exactamente como la muestra el sitio

La vista Agente es la legible. La Original está para cuando quieres ver con precisión qué se envió y qué se recibió, que a veces es lo que necesitas para entender por qué algo falló.

### Pasos

Cada acción se muestra como una tarjeta con una etiqueta en lenguaje natural — *Revisando tus datos*, *Cambiando tus datos*, *Obteniendo contenido de la conversación*, *Exportando* — y un estado: En curso, Hecho, Fallido, Rechazado, No ejecutado.

Haz clic en cualquier tarjeta para ver exactamente qué se ejecutó y qué devolvió. Nada está oculto: los resúmenes son para leer, el detalle está a un clic.

## Mantener el control

Esta es la parte que más importa, porque un agente con acceso a la base de datos y sin frenos es una mala idea.

### Las lecturas se ejecutan, las escrituras preguntan

Por defecto:

| | Predeterminado | Comportamiento |
| --- | --- | --- |
| **Ejecutar consultas sin preguntar** | Activado | Las consultas de solo lectura se ejecutan directamente |
| **Cambiar datos sin preguntar** | **Desactivado** | Cada cambio pregunta primero |
| **Seguir por su cuenta** | Activado | Los pasos se encadenan solos; desactívalo para pulsar Enter en cada ronda |

Las lecturas son seguras y pedir permiso por cada `SELECT` haría el sistema inutilizable. Las escrituras no son seguras, así que paran y preguntan.

### La petición de aprobación

Cuando un cambio necesita aprobación, el dock muestra lo que quiere hacer. Puedes:

- **Ejecutar**lo
- **Ejecutar también estos N** — aprobar el resto de este lote
- **No volver a preguntar en esta tarea** — modo manos libres solo para el resto de esta tarea
- **Rechazar**lo, opcionalmente con un motivo que verá el modelo

«No volver a preguntar en esta tarea» es por tarea, no permanente. La siguiente tarea vuelve a empezar con cautela.

### Deshacer

Tras una tarea que cambió datos, aparece un botón **Deshacer cambios** en el resumen. Restaura las tablas afectadas a como estaban cuando empezó la tarea.

:::warning
Deshacer tiene una ventana: está disponible hasta que empiece la *siguiente* tarea, o hasta que pulses **Mantener cambios**. Después ya no hay nada que deshacer. Si una tarea hizo algo de lo que no estás seguro, decide antes de empezar otra.

También: deshacer revierte las tablas, así que cualquier *otro* cambio que hicieras en esas tablas desde que empezó la tarea también se revierte. Y el modelo no sabe que deshiciste nada: díselo antes de continuar la conversación, o seguirá razonando desde un estado que ya no existe.
:::

Para cualquier cosa más grande, las [copias de seguridad locales](/en/guide/extras/data-backup) son la red de seguridad real. Antes de los borrados masivos se toma una instantánea automáticamente.

### Se detiene solo

El motor vigila las formas en que los bucles de agente salen mal e interrumpe en lugar de insistir:

| Protección | Qué la dispara |
| --- | --- |
| **Repetición** | Misma herramienta, mismos parámetros: aviso a los 3 intentos, parada dura a los 5 |
| **Fallos** | Rondas fallidas seguidas: las pistas escalan, parada dura a las 6 |
| **Respuesta ilegible** | Un reintento y luego para y te devuelve el control |
| **Ejecución larga sin atención** | Tras 20 rondas sin entrada humana, se pausa para un punto de control |

Esa última es un **punto de control**, no un error: *«12 pasos hechos por su cuenta.»* No hay nada mal; se pausó para que mires antes de continuar. **Seguir** o **Parar aquí**.

Las rondas en las que pulsaste Enter no cuentan para el límite: una sesión con atención humana no tiene techo, porque tú eres el freno.

### Si la página se recarga a mitad de tarea

Los pasos que se ejecutaron antes de una recarga pero cuyos resultados nunca llegaron al modelo dejan la tarea atascada. Better Sidebar lo detecta y ofrece enviar esos resultados, para no repetir el trabajo.

Si alguno cambió datos, te lo dice con claridad: esos cambios ya están guardados. Eliges **Enviarlos** para continuar, o **Olvidar** — en cuyo caso lo ya cambiado se queda cambiado.

## Qué es gratis y qué no

| | Gratis | [Power Pack](/en/guide/settings/packs) |
| --- | --- | --- |
| Leer tus datos, buscar, analizar, informar | Sí | Sí |
| Cambiar datos: archivar, etiquetar, renombrar, fusionar, limpiar | No | Sí |
| Exportar a Obsidian y Notion | No | Sí |
| Workspaces | 1, hasta 5 archivos | Ilimitados |

En el plan gratis el agente es de solo lectura, y así sigue siendo útil de verdad: te dirá qué carpetas están muertas, qué prompts no usas nunca y adónde debería ir cada chat sin archivar. Solo que no hará el movimiento.

Cuando llega al límite lo dice con claridad y ofrece la mejora, en lugar de fallar de forma confusa.

## Privacidad

Merece repetirlo porque «agente de IA» suele significar «tus datos van a algún sitio»:

- Usa tu sesión existente de Gemini o AI Studio. Sin claves API.
- Sin coste extra ni presupuesto de tokens aparte.
- Las consultas corren contra la base de datos SQLite local en tu navegador.
- Nada se envía a ningún servidor de Better Sidebar. No existe tal servidor.

Lo que *sí* llega a Google es lo mismo que llega cuando escribes un mensaje a mano: el prompt, que incluye los datos que el agente leyó para responderte. Si un título de conversación está en la base de datos y el agente necesita razonar sobre él, ese título entra en el prompt. Es inherente a ejecutarse encima de un modelo alojado.

## Siguiente

- [Agente Better Sidebar](/en/guide/agent/better-sidebar-agent) — skills, recetas, ejemplos elaborados
- [Agente Workspace](/en/guide/agent/workspace-agent) — archivos, Word, Excel, PDF, código
- [Skills y herramientas](/en/guide/agent/skills-and-tools) — permisos, skills personalizadas, desactivar herramientas
