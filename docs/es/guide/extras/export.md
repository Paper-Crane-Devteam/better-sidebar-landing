---
title: Exportar
description: Saca conversaciones y snippets — como Markdown, texto plano o JSON, o a Obsidian y Notion. Elementos sueltos, carpetas enteras o selecciones por lotes.
---

# Exportar

Cualquier cosa de tu biblioteca puede salir de ella. Clic derecho en una conversación, un snippet o una carpeta, elige **Exportar** y escoge un destino.

![El submenú de exportar con destinos Markdown, texto plano, JSON, Obsidian y Notion](/images/features/export-formats.webp)

## Destinos

| Destino | Resultado | Requiere |
| --- | --- | --- |
| **Markdown** | Archivo `.md` con frontmatter | Gratis |
| **Texto plano** | `.txt`, sin formato | Gratis |
| **JSON** | Array estructurado `{ role, content }` | Gratis |
| **Obsidian** | Crea la nota directamente en tu vault | [Power Pack](/en/guide/settings/packs) |
| **Notion** | Crea una página bajo una página destino | [Power Pack](/en/guide/settings/packs) |

### Markdown

Encabezados por cada turno, bloques de código intactos, más frontmatter. Este es el que usar para cualquier cosa que vayas a conservar.

```markdown
## User

What's the best way to handle errors in Rust?

## Model

In Rust, error handling revolves around the `Result` type...
```

### Texto plano

Formato eliminado, solo el diálogo. Útil para pegar en un correo, o alimentar una herramienta que se atraganta con Markdown.

### JSON

```json
[
  { "role": "user", "content": "What's the best way to handle errors in Rust?" },
  { "role": "model", "content": "In Rust, error handling revolves around the `Result` type..." }
]
```

Para uso programático: construir un dataset, ejecutar tu propio análisis, alimentar otra herramienta.

### Obsidian

Abre la nota directamente en tu vault mediante el protocolo URI de Obsidian. Obsidian debe estar instalado y en ejecución en la misma máquina. El formato y los bloques de código sobreviven intactos.

Los snippets van a una carpeta `Snippets` de tu vault por defecto.

### Notion

Crea una página bajo la página destino que configuraste, con el contenido convertido a bloques de Notion. Requiere configuración primero: consulta [Integraciones](/en/guide/extras/integrations).

## Qué puedes exportar

### Una sola conversación

Clic derecho en la pestaña Biblioteca (o Favoritos, Gems, Notebooks: donde aparezca una conversación) → **Exportar** → elige un destino. El archivo se descarga de inmediato, con el nombre de la conversación.

### Una carpeta entera

Clic derecho en una carpeta → **Exportar carpeta**. Se exporta cada conversación dentro. Con un formato de archivo, obtienes un ZIP con un archivo por conversación.

### Una selección por lotes

Entra en modo por lotes (`Alt+Shift+B`), marca lo que quieras y usa **Exportar** en la barra de lotes. Lo mismo: un archivo por elemento, empaquetado en un ZIP.

Para Notion, la exportación por lotes corre página a página con un toast de progreso (`Exportando a Notion (7/23)…`) y se puede cancelar a mitad. Las páginas ya creadas se quedan.

### Snippets

Los snippets se exportan igual, a los mismos destinos. Este es el camino previsto hacia una base de conocimiento: [guarda el párrafo bueno](/en/guide/sidebar/snippets-tab) mientras lees, exporta la colección a Obsidian después.

## «No se encontró contenido»

Si una exportación falla con un mensaje de que no hay contenido, la extensión tiene el *título* de esa conversación pero nunca ha visto sus *mensajes*. Aún no hay nada que exportar.

Corrígelo abriendo la conversación una vez para que se registren los mensajes, y luego exporta de nuevo. Para muchas conversaciones a la vez, pide al [agente](/en/guide/agent/better-sidebar-agent#sync-missing-messages) que las sincronice primero:

> Exporta todos los chats de mi carpeta Work desde marzo en adelante a Markdown, un archivo por chat, en zip. Si algún chat aún no tiene sus mensajes sincronizados, dímelo antes de exportar.

El agente comprueba primero e informa del hueco en lugar de exportar en silencio la mitad de tu carpeta.

## Exportar toda tu base de datos

Nada de lo anterior es una copia de seguridad. Para una copia completa de todo — incluida la estructura de carpetas, etiquetas y ajustes — usa **Ajustes → Datos y almacenamiento → Exportar**, que produce un único archivo `.db`. Consulta [Copias de seguridad y restauración](/en/guide/extras/data-backup).

:::tip
Las dos sirven para propósitos distintos. La exportación a Markdown es para *leer* tus conversaciones en otro sitio. La exportación de la base de datos es para *restaurar* Better Sidebar. No uses una para el trabajo de la otra.
:::
