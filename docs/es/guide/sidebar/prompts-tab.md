---
title: Prompts
description: Construye tu biblioteca personal de prompts con carpetas, variables, composición e inserción por comandos con barra.
---

# Prompts

La pestaña Prompts es tu biblioteca personal de prompts: un lugar para guardar, organizar y reutilizar los prompts que te encuentras escribiendo una y otra vez. En lugar de copiar y pegar de un archivo de texto o recorrer chats antiguos, construyes una biblioteca una vez y accedes a ella al instante.

![La pestaña Prompts con prompts organizados en carpetas y un prompt abierto para editar](/images/features/prompts-library.png)

## Crear un prompt

Haz clic en el botón **+** de la barra de encabezado (o clic derecho en espacio vacío → el menú contextual no ayuda aquí, usa el botón +). Aparece un modal de creación con tres campos:

### Tipo

- **System Prompt** — Instrucciones pensadas para el contexto de sistema de la IA (p. ej. «Eres un revisor de código...»)
- **Normal Prompt** — Un prompt orientado al usuario que envías directamente en el chat

El tipo afecta al icono predeterminado y te ayuda a filtrar después.

### Título e icono

Dale a tu prompt un título corto y memorable: esto es lo que buscarás al usar comandos con barra. Haz clic en el botón de icono para elegir de una cuadrícula de iconos para distinción visual.

### Contenido

El texto real del prompt. Aquí ocurre la magia: puedes usar texto plano, o añadir variables y referencias de importación (ver abajo).

:::tip
Mantén los títulos cortos y buscables. Algo como «Code Review» o «Email Draft» funciona mejor que «Mi prompt para revisar código que uso en el trabajo».
:::

## Variables

Las variables convierten un prompt estático en una plantilla reutilizable. Cuando usas un prompt que contiene variables, aparece un formulario para rellenar pidiendo valores.

### Variables de texto

Usa `{{variableName}}` para entrada de texto libre:

```
Write a {{tone}} email to {{recipient}} about {{topic}}.
```

Al usarlo, se te pedirá rellenar «tone», «recipient» y «topic» antes de insertar el prompt.

### Variables de desplegable

Usa `{{variableName:option1,option2,option3}}` para un conjunto predefinido de opciones:

```
Translate the following to {{language:English,Spanish,Japanese,French}}.
```

Esto se renderiza como un select desplegable al usar el prompt: sin escribir, solo elegir.

:::tip
Las variables de desplegable son ideales para prompts en los que solo usas unos pocos valores concretos. «Tone» con opciones como `professional,casual,concise` ahorra tiempo y asegura consistencia.
:::

## Composición de prompts (@import)

Puedes referenciar otros prompts dentro de un prompt usando la sintaxis de importación:

```
{{@import:General System Instructions}}

Now, specifically for this task:
Review the following code for security issues...
```

Cuando se usa este prompt, `{{@import:General System Instructions}}` se reemplaza con el contenido completo de tu prompt titulado «General System Instructions».

**Detalles clave:**
- Las importaciones se resuelven de forma recursiva (los prompts importados pueden importar otros prompts)
- Las referencias circulares se detectan y se muestran como `[circular: Title]`
- Las referencias que faltan se muestran como `[not found: Title]`

:::tip
La composición es potente para construir prompts de sistema modulares. Crea un prompt de «instrucciones base», luego impórtalo en variantes especializadas. Cambia la base una vez y todas las variantes recogen la actualización.
:::

## Usar prompts

Hay dos formas de usar un prompt guardado:

### Clic para copiar

Haz clic en cualquier prompt del árbol. Su contenido se resuelve (importaciones en línea, luego formulario de variables si hace falta) y el texto final se copia al portapapeles. Pégalo donde lo necesites.

### Comandos con barra

Escribe `/` en el campo de entrada de Gemini o AI Studio y tu biblioteca aparece en línea:

![Escribir una barra en el campo de chat abre el selector de prompts](/images/features/slash-command.png)

Sigue escribiendo para filtrar, flechas para moverte, Enter para insertar. Detalles completos en [Comandos con barra](/en/guide/ui-customization/slash-commands).

:::tip
Los comandos con barra son la forma más rápida de usar prompts. Dale a tus prompts más usados títulos cortos que empiecen por la palabra clave — `review-code`, no «Mi prompt de revisión de código» — porque la coincidencia empieza desde el principio del título.
:::

### Guardar un prompt directamente desde una conversación

En Gemini, selecciona cualquier texto de una conversación y aparece la [barra de selección](/en/guide/ui-customization/selection-toolbar) con **Guardar como prompt**. Va a tu bandeja de Prompts de inmediato, así que un buen fraseo que improvisaste en un chat no se pierde.

## Organización

La pestaña Prompts usa el mismo árbol de carpetas que la pestaña Biblioteca, así que todos los patrones son familiares:

- **Carpetas** — Crea carpetas anidadas para agrupar prompts por proyecto, tema o flujo
- **Arrastrar y soltar** — Mueve prompts entre carpetas
- **Renombrar** — Clic derecho → Renombrar (carpeta o título de prompt)
- **Favoritos** — Estrella en prompts para fijarlos arriba (y filtrar por ⭐)
- **Ordenar** — Alterna entre orden alfabético y por fecha

### Acciones del menú contextual (prompts)

Clic derecho en un prompt para:
- **Editar prompt** — Abre el modal de edición
- **Copiar contenido** — Copia el contenido resuelto (con relleno de variables si hace falta)
- **Duplicar** — Crea una copia en la misma carpeta
- **Añadir/Quitar favoritos**
- **Renombrar** — Renombrado en línea
- **Eliminar**

### Filtrar

La barra de filtros ofrece:
- **Búsqueda** — Filtrar por título de prompt
- **Filtro de tipo** — Ciclar entre Todos / Normal / System
- **Solo favoritos** — Mostrar solo prompts con estrella

### Operaciones por lotes

Entra en modo por lotes (icono ☑ en el encabezado) para:
- **Eliminar por lotes** — Quitar varios prompts a la vez
- **Mover por lotes** — Mover varios prompts a una carpeta destino

## Importar system prompts de AI Studio

En AI Studio, puedes importar en bloque tus instrucciones de sistema guardadas a la biblioteca de prompts:

Abre el menú overflow (⋮) → **Importar instrucciones de sistema de AI Studio**

Esto lee las instrucciones de sistema que AI Studio tiene guardadas para ti, crea una carpeta **AI Studio System** e importa cada una como system prompt. Un clic para traer trabajo existente a una biblioteca organizada.

## Haz que el agente refactorice tu biblioteca

Cuando una biblioteca de prompts crece más de 30 o 40 entradas empieza a pudrirse: casi-duplicados, prompts que no encuentras con `/`, el mismo preámbulo de «rol + formato de salida» copiado y pegado en una docena de sitios.

El [agente](/en/guide/agent/better-sidebar-agent) tiene un skill integrado exactamente para esto. Escribe `>` en el campo de chat, elige **Better Sidebar** y pide algo como:

> Limpia mi biblioteca de prompts: renombra los que son difíciles de encontrar con `/` poniendo la palabra clave al principio. Extrae el bloque repetido de «rol + formato de salida» a un prompt compartido e impórtalo en los demás. Si una variable solo tiene unas pocas opciones fijas, conviértela en un desplegable.

Lee tus prompts reales, propone un plan y pregunta antes de cambiar nada. Los cambios se pueden deshacer después.

## Patrones prácticos

Unos diseños de biblioteca que aguantan con el tiempo:

**Una carpeta por forma de salida.** `Email/`, `Code Review/`, `Summarize/`. Buscas prompts por lo que quieres *sacar*, no por el proyecto en el que estás.

**Una carpeta `_base` para bloques compartidos.** Pon tu instrucción de rol estándar, tu formato de salida estándar y tus reglas de tono estándar ahí como prompts separados. Cada prompt real importa los que necesita. Cambia la regla de tono una vez y todos se actualizan.

**Desplegables para cualquier cosa con menos de seis opciones.** Tono, idioma, longitud de salida, nivel de seniority. Escribir `professional` por cuadrigentésima vez es un desperdicio de tecla.

**Títulos con la palabra clave primero.** `translate-jp` gana a `Japanese translation helper` porque `/tr` lo encuentra al instante.
