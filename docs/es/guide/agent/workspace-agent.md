---
title: Agente Workspace
description: Un área privada de archivos donde la IA puede leer, escribir y editar archivos reales — texto y código desde cero, más Word, Excel, PDF y PowerPoint conservando el formato.
---

# Agente Workspace

El Workspace es un área de archivos que vive con la extensión. Suelta archivos dentro, o pide al agente que los cree desde cero, y puede leerlos, escribirlos y editarlos directamente.

Inícialo escribiendo `>` en el campo de chat y eligiendo **Workspace**.

:::tip Beta
El agente Workspace está en beta. Funciona, y es cuidadoso con tus archivos, pero encontrarás aristas. Los reportes de bugs se corrigen rápido.
:::

## Por qué es distinto de adjuntar un archivo

Cuando adjuntas un documento a un chat, el modelo lo lee y te escribe una versión nueva en la respuesta. Luego copias eso a mano a tu documento y se pierde el formato.

El agente Workspace edita el archivo real. Tus estilos, tu numeración, tus citas, tus gráficos, tu formato condicional: todo sigue ahí, porque cambia las partes que pediste y deja el resto del archivo byte a byte idéntico.

Ese es todo el punto de la función.

## Meter archivos

Dos formas:

**Arrastrar y soltar** en el árbol de archivos del workspace. Necesario para Word, Excel, PDF y PowerPoint, porque esos no se pueden crear desde cero.

**Pedirlos.** Para texto y código, no hace falta subir nada:

> Constrúyeme una app React de tareas completa desde cero.

Escribe el HTML, los archivos de componentes, la hoja de estilos y la configuración en el workspace. No hace falta un archivo de partida.

:::warning
Este es el malentendido más común sobre la función. La gente asume que debe subir algo primero. Para archivos de texto y código — `.md`, `.txt`, `.html`, `.js`, `.ts`, `.py`, `.css`, `.json`, `.csv`, `.srt`, cualquier cosa en texto plano — el agente crea y edita libremente desde la nada.
:::

## Formatos

### Creados desde cero y editados con libertad

Todo texto plano y código: `.md` `.txt` `.html` `.css` `.js` `.ts` `.jsx` `.tsx` `.py` `.json` `.csv` `.yml` `.sh` `.srt` `.vtt` — y cualquier otra cosa que sea texto.

Para estos el agente tiene rango completo: escribir un archivo nuevo, reemplazar cadenas exactas dentro de uno, buscar en el workspace con regex, reestructurar un directorio entero.

### Leídos, anotados y editados con precisión

Estos son formatos binarios compuestos. Solo archivos existentes: el agente trabaja dentro de ellos sin reconstruirlos.

| Formato | Extensiones | Qué puede hacer |
| --- | --- | --- |
| **Word** | `.docx` `.docm` | Leer por esquema y sección. Insertar **cambios controlados** y **comentarios**, reemplazar texto, editar párrafos y estilos, insertar o eliminar tablas y filas |
| **Excel** | `.xlsx` `.xlsm` `.xltx` | Leer primero el esquema, luego calcular. Establecer celdas, añadir columnas, añadir y renombrar hojas, escribir fórmulas reales |
| **PDF** | `.pdf` | Leer texto de página y marcadores. Resaltar, comentar, añadir notas adhesivas, rellenar campos de formulario, marca de agua, rotar, eliminar, extraer y fusionar páginas |
| **PowerPoint** | `.pptx` | Leer y editar texto de diapositivas, notas del orador y formas. Reordenar diapositivas |

Generar un archivo Word o Excel nuevo desde la nada aún no está soportado.

## Cómo se ve en la práctica

### Revisar un documento

> Recorre `thesis.docx` capítulo por capítulo. Comenta donde el argumento es débil y sugiere correcciones como cambios controlados en lugar de reescribir el texto.

Lee primero el esquema y luego va sección por sección. Lo que sale es un documento que abres en Word y aceptas o rechazas cambio a cambio: la misma revisión que te daría un supervisor, no un archivo reescrito que tienes que comparar a mano.

Tu formato, citas y numeración quedan intactos.

### Analizar una hoja de cálculo

> Lee `sales.xlsx`, luego añade una columna que calcule el crecimiento mes a mes y una hoja de resumen con totales por región.

Lee tus encabezados antes de calcular, y escribe **fórmulas reales de Excel** en lugar de pegar números fijos. Así los números se actualizan cuando lo hacen los datos.

Añade columnas y hojas en lugar de alterar tus datos existentes, y tus gráficos y formato condicional sobreviven.

:::tip
«Añade una columna, no cambies los datos» es el instinto integrado aquí, y es el correcto. Si *quieres* que modifique celdas existentes, dilo de forma explícita.
:::

### Traducir subtítulos

> Traduce `episode-03.srt` al japonés y pule el fraseo.

Las marcas de tiempo se tratan como intocables. Ni un milisegundo de la línea temporal se mueve, así que tu sincronización queda exactamente como estaba.

### Leer y anotar un PDF

> Lee `paper.pdf`, resume la metodología y resalta las afirmaciones clave con notas adhesivas explicando por qué importa cada una.

El texto del cuerpo del PDF no se puede reescribir: es una limitación del formato, no una función que falte. Pero extracción, resaltado, anotación y operaciones de página sí funcionan.

### Construir algo desde la nada

> Construye una landing page estática desde cero: HTML semántico, una hoja de estilos con propiedades CSS personalizadas y un pequeño archivo JS para el menú móvil. Sin frameworks.

Los archivos aparecen en el workspace mientras trabaja. Luego sigue de forma conversacional: *«haz el nav sticky»*, *«lleva el color de acento hacia el teal»*, *«extrae los estilos de botón a su propio archivo»*.

### Mantener notas entre conversaciones

> Resume nuestras conclusiones de este chat como una lista con viñetas y guárdalo en `notes/decisions.md`. Añade al final las preguntas sin resolver. Si el archivo existe, añade con la fecha de hoy en lugar de sobrescribir.

Los archivos del workspace persisten entre conversaciones **y entre ambas plataformas**: un archivo escrito desde Gemini se puede leer desde AI Studio. Eso hace del workspace un registro razonable para un proyecto en curso.

## Workspaces

Los archivos viven en un workspace con nombre. El predeterminado se llama `default`.

Una conversación se vincula al workspace que usó y no puede cambiar a mitad: empieza un chat nuevo para trabajar en otro. Esto evita que una conversación larga recuerde a medias un árbol de archivos que cambió por debajo.

Los controles del workspace están en la pestaña **Agent** → **Workspace**, donde puedes crear, renombrar, vaciar y eliminar, y explorar el árbol de archivos.

| | Gratis | [Power Pack](/en/guide/settings/packs) |
| --- | --- | --- |
| Workspaces | 1 | Ilimitados |
| Archivos por workspace | 5 | Ilimitados |

Cinco archivos bastan para probar la función con honestidad — un documento más unas notas — y no bastan para un proyecto real.

## Seguridad

Cada cambio se confirma antes de ejecutarse. La tarjeta de aprobación nombra qué ocurrirá en lenguaje sencillo antes de que digas que sí.

Better Sidebar también guarda un historial de versiones de documentos, así que una sobrescritura no es necesariamente definitiva. Los archivos de historial no cuentan contra el límite gratuito de archivos.

:::warning
El workspace no tiene deshacer general. El [deshacer](/en/guide/agent/overview#undo) del agente restaura tablas de la base de datos, no archivos. Para un archivo de texto suele ser sobrevivible: el agente puede volver a escribirlo. Para un `.docx` no, así que guarda tu propia copia de cualquier cosa irreemplazable antes de entregársela. El historial de versiones ayuda, pero un documento que no puedes permitirte perder merece una copia fuera del navegador.
:::

El agente Workspace solo puede ver el workspace activo. No tus conversaciones, no tus prompts, no nada más en tu ordenador.

## Limitaciones actuales

Lista honesta:

- Los archivos Word, Excel, PDF y PowerPoint hay que arrastrarlos: no hay forma de que una extensión de navegador abra uno de tu disco a petición
- No hay vista previa enriquecida dentro de la barra lateral. El texto y el código se renderizan; los documentos binarios los descargas y abres por fuera
- No se pueden generar archivos binarios compuestos nuevos desde cero
- El texto del cuerpo del PDF no se puede reescribir, solo anotar

Son restricciones de extensión de navegador más que elecciones de diseño, y algunas mejorarán.

## Skills

Cuatro skills integrados llevan instrucciones específicas de formato:

| Skill | Para |
| --- | --- |
| **Review a Word Document** | Revisión capítulo a capítulo con comentarios y cambios controlados |
| **Work Through a Spreadsheet** | Primero el esquema, luego calcular — añadir en lugar de sobrescribir |
| **Read and Review a PDF** | Texto de página, marcadores, comentarios, campos de formulario, operaciones de página |
| **Read and Edit PowerPoint** | Texto de diapositivas, notas del orador, formas, orden de diapositivas |

Se cargan automáticamente cuando la tarea requiere uno. Consulta [Skills y herramientas](/en/guide/agent/skills-and-tools).
