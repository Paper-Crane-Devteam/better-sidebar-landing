---
title: Skills y herramientas
description: Controla qué puede hacer el agente — políticas de aprobación, qué grupos de herramientas están disponibles y cómo escribir tus propios skills.
---

# Skills y herramientas

**Ajustes → Agent** es donde decides qué puede hacer cada agente y qué instrucciones lleva.

La página está organizada por agente en lugar de una lista plana, porque eso es lo que importa de verdad: el agente Better Sidebar nunca puede usar las herramientas de archivos, y una lista que las mezclara implicaría lo contrario.

## Políticas de aprobación

Estos tres interruptores viven en el Agent Dock, bajo **Qué puede hacer**. Se aplican a cualquier tarea en marcha.

| Interruptor | Predeterminado | Efecto |
| --- | --- | --- |
| **Ejecutar consultas sin preguntar** | Activado | Las consultas de solo lectura se ejecutan directamente |
| **Cambiar datos sin preguntar** | **Desactivado** | Cada escritura pregunta primero |
| **Seguir por su cuenta** | Activado | Los pasos se encadenan solos; desactivado significa que pulsas Enter tras cada uno |

### Por qué las lecturas están activadas por defecto

Pedir permiso por cada `SELECT` haría el agente inutilizable: una sola pregunta puede implicar una docena de consultas. Las lecturas no pueden dañar nada, así que se ejecutan.

### Por qué las escrituras están desactivadas por defecto

Porque sí pueden. Una instrucción malentendida que renombra cuarenta conversaciones es una tarde mala. El valor predeterminado es que veas cada cambio antes de que ocurra.

Una vez que lo has visto trabajar unas cuantas veces y confías en su criterio en un tipo concreto de tarea, **No preguntar más en esta tarea** en la petición de aprobación te da una ejecución a manos libres sin aflojar el ajuste de forma permanente. Activar **Cambiar datos sin preguntar** de forma permanente está disponible, y es razonable si dependes del agente a diario: solo ten en cuenta que el [deshacer](/en/guide/agent/overview#undo) solo cubre la tarea más reciente.

### Por qué «seguir por su cuenta» es aparte

Parece redundante junto a los otros dos, y no lo es. Los otros dos van de *aprobación*; este va de si el bucle puede avanzar sin atención en absoluto.

Desactívalo y revisas cada ronda antes de que continúe — sin tener que confirmar cada consulta individual. Algunas personas quieren ver el razonamiento, no vigilar los permisos.

Los dos se combinan por intersección, lo que significa que este interruptor solo puede hacer las cosas *más* manuales, nunca menos. Aprobar una escritura a mano nunca hace que los resultados se envíen a espaldas tuyas.

## Grupos de herramientas

Cada agente lista sus servidores de herramientas con un interruptor, y se expanden para mostrar las herramientas individuales dentro.

### Agente Better Sidebar

**Better Sidebar data** — consultar y cambiar conversaciones, carpetas, etiquetas, prompts y snippets.

| Herramienta | Qué hace |
| --- | --- |
| `execute_sql` | Ejecuta consultas contra la base de datos local |
| `sync_conversation_messages` | Registra el historial de mensajes de conversaciones que no tienen ninguno |
| `export` | Descarga conversaciones como archivos |

### Agente Workspace

**Files** — leer, escribir, editar y buscar archivos de texto.

| Herramienta | Qué hace |
| --- | --- |
| `read_file` | Lee un archivo de texto con números de línea |
| `write_file` | Crea un archivo, o reemplaza uno por completo |
| `edit_file` | Reemplaza texto exacto dentro de un archivo |
| `list_files` | Lista una carpeta |
| `glob_files` | Encuentra archivos por patrón de nombre |
| `grep_files` | Busca contenido de archivos por regex |
| `manage_files` | Elimina, mueve, crea carpetas |

**Documents** — leer y editar Word, Excel, PDF y PowerPoint por esquema y sección.

| Herramienta | Qué hace |
| --- | --- |
| `doc_read` | Lee un documento: esquema, secciones, búsqueda |
| `doc_edit` | Aplica cambios — comentarios, cambios controlados, celdas, anotaciones |

### Core

Siempre activos para cada agente, sin interruptor:

| Herramienta | Qué hace |
| --- | --- |
| `activate_skill` | Carga instrucciones especializadas para un tipo de tarea |
| `complete_task` | Termina el bucle e informa resultados |

`complete_task` no tiene interruptor porque una sesión que no puede terminar no es una preferencia que nadie debería poder expresar.

:::tip
Desactivar un grupo de herramientas quita esas herramientas del prompt por completo: el agente no sabrá que existen, en lugar de intentar y fallar. Si solo quieres el agente como analista, desactivar **Better Sidebar data** no es el camino (ese es el grupo que también necesita para lecturas); deja **Cambiar datos sin preguntar** desactivado en su lugar.
:::

## Skills

Un skill es un bloque de instrucciones especializadas que el agente carga cuando una tarea lo requiere. Es cómo sabe que las hojas de cálculo deben leerse primero por esquema, o que las etiquetas deben reutilizarse en lugar de reinventarse.

### Skills integrados

**Agente Better Sidebar**

| Skill | Para |
| --- | --- |
| Auto-Classify Conversations | Ordenar conversaciones en carpetas y etiquetas |
| Sync Missing Messages | Encontrar y completar conversaciones sin mensajes registrados |
| Export Conversations | Consultar y exportar datos de conversaciones |
| Manage Prompt Library | Crear y refactorizar prompts, variables e importaciones |
| Manage Snippets | Organizar, deduplicar y buscar snippets |

**Agente Workspace**

| Skill | Para |
| --- | --- |
| Review a Word Document | Revisión capítulo a capítulo con comentarios y cambios controlados |
| Work Through a Spreadsheet | Primero el esquema, luego calcular; añadir en lugar de sobrescribir |
| Read and Review a PDF | Texto de página, marcadores, comentarios, campos de formulario, operaciones de página |
| Read and Edit PowerPoint | Texto de diapositivas, notas del orador, formas, orden de diapositivas |

Los skills integrados se pueden desactivar, pero no editar.

### Escribir los tuyos

Haz clic en **Nuevo skill** en el agente al que quieras que pertenezca. Cuatro campos:

| Campo | |
| --- | --- |
| **Título** | Cómo se llama, p. ej. *Weekly Triage* |
| **Descripción** | Una línea sobre qué hace — esto es lo que el agente lee para decidir si cargarlo |
| **Contenido del prompt** | Las instrucciones reales |
| **Siempre activo** | Cargarlo en cada sesión en lugar de solo cuando sea relevante |

Hasta 20 skills personalizados.

La descripción hace trabajo real. Es cómo el agente decide si este skill aplica a lo que pediste, así que describe la *situación* para la que sirve, no solo la acción.

### Cómo se ve un buen skill

Los skills merecen la pena en flujos que repites. En lugar de volver a escribir un prompt cuidadoso de cinco frases cada viernes, codifícalo una vez.

```markdown
## Task: Weekly triage

Sort everything currently in Inbox.

Steps:
1. List what's in Inbox with dates, and show me the count before doing anything.
2. Group by topic. Match against my existing folders first —
   only propose a new folder if nothing existing fits.
3. Show me the proposed mapping as a table and wait for approval.
4. After I approve, move them and apply tags.
   Reuse existing tags. Never create a tag that's a near-synonym
   of one I already have.
5. Report what moved where, and anything you couldn't classify.
```

Tres cosas hacen que esto funcione en lugar de ser solo un prompt largo:

- **Se detiene para aprobación en un punto definido**, así que no estás revisando a posteriori
- **Restringe la creación** — carpetas y etiquetas solo se inventan cuando hace falta de verdad
- **Pide un informe**, para que puedas saber qué pasó sin leer cada tarjeta de paso

:::tip
Escribe el prompt a mano unas cuantas veces primero. Observa dónde el agente se desvía, añade una frase para evitarlo y *entonces* guárdalo como skill. Los skills escritos antes de conocer los modos de fallo suelen ser demasiado vagos para ayudar.
:::

### Editar y eliminar

Los skills personalizados tienen iconos de lápiz y papelera. Eliminar es permanente. Las ediciones sin guardar piden confirmación antes de descartar.

## Dónde el agente no está disponible

El agente necesita un chat abierto con un campo de entrada que funcione, porque así habla con el modelo. Si ves *«Abre un chat primero»*, entra en cualquier conversación e inténtalo de nuevo.

También se niega a empezar una segunda tarea mientras una está en marcha. Para primero la que está en marcha, o espera a que termine.
