---
title: Biblioteca
description: La pestaña principal Biblioteca — organiza conversaciones con carpetas, arrastrar y soltar, vista de línea de tiempo, filtrado y operaciones por lotes.
---

# Biblioteca

La pestaña Biblioteca es tu base. Cada conversación que tienes en Gemini o AI Studio aparece aquí, y aquí es donde conviertes una lista de chats caótica en una biblioteca bien organizada.

![La pestaña Biblioteca con un árbol de carpetas coloreado, barra de filtros y barra de herramientas del encabezado](/images/features/overview.webp)

## Descripción general

La pestaña Biblioteca tiene varias capas apiladas de arriba abajo:

1. **Barra de herramientas del encabezado** — Acciones rápidas como Colapsar todo, Ordenar, Modo por lotes, Nueva carpeta y Nuevo chat
2. **Barra de filtros** — Alternar búsqueda, filtro de etiquetas, filtro de tipo y modo solo favoritos
3. **Árbol de archivos o línea de tiempo** — Tus conversaciones y carpetas, mostradas como árbol arrastrable o lista agrupada por tiempo
4. **Barra de lotes** — Aparece cuando entras en modo de selección por lotes
5. **Esquema** — Un panel plegable al final que muestra la estructura de la conversación que estás leyendo. Consulta [Esquema](/en/guide/sidebar/outline).

Puedes cambiar entre dos modos de vista en cualquier momento:

- **Vista de árbol** — Una jerarquía de carpetas que controlas. Arrastra conversaciones, anida carpetas, asigna colores.
- **Vista de línea de tiempo** — Conversaciones agrupadas automáticamente por cuándo las usaste por última vez (Hoy, Ayer, Últimos 7 días, etc.)

:::tip
La vista de árbol es mejor para organización a largo plazo. La vista de línea de tiempo es ideal para encontrar rápido «esa conversación de ayer» sin ninguna configuración.
:::

## Carpetas

Las carpetas son la columna vertebral de tu sistema de organización. Puedes anidarlas, colorearlas y arrastrar cosas dentro y fuera con libertad.

### Crear una carpeta

Tienes varias formas:

- Haz clic en el icono **carpeta+** de la barra de herramientas del encabezado
- Clic derecho en cualquier espacio vacío del árbol → **Nueva carpeta**
- Clic derecho en una carpeta existente → **Nueva carpeta** (crea una subcarpeta anidada)

La carpeta se crea con un nombre predeterminado y entra de inmediato en modo renombrar: solo escribe y pulsa Enter.

### Renombrar

Clic derecho en una carpeta → **Renombrar**, o pulsa `F2` con la carpeta enfocada. **Ajustes de carpeta** en el mismo menú te permite renombrar y recolorear en un solo sitio.

### Colorear carpetas

Las carpetas coloreadas hacen mucho más rápido recorrer la barra lateral. Clic derecho en una carpeta → **Cambiar color** para elegir de la paleta de 12 colores, o abre el selector personalizado para cualquier valor hex.

El color tiñe el icono de la carpeta *y* da a la fila una franja de fondo sutil, así que obtienes una pista visual de un vistazo.

:::tip
Usa colores para separar áreas de la vida — p. ej. azul para trabajo, verde para proyectos personales, naranja para aprendizaje. Suena simple, pero marca una diferencia enorme cuando tienes más de 50 conversaciones.
:::

### Fijar carpetas arriba

Clic derecho en una carpeta → **Fijar arriba**. Las carpetas fijadas se quedan por encima de todo lo demás en su contenedor independientemente del orden de clasificación actual. **Desfijar** las devuelve al orden normal.

Esta es la solución al problema de «mi proyecto activo sigue bajando en la lista»: fija las dos o tres carpetas en las que vives este mes.

### Reordenar

Arrastra carpetas para reordenarlas dentro de su padre. El orden de clasificación sigue aplicándose a elementos no fijados y no movidos, pero un arrastre explícito gana.

### Anidar

Las carpetas pueden ir varios niveles de profundidad. Arrastra una carpeta sobre otra, o crea una vía clic derecho dentro de un padre. No hay límite duro de profundidad, pero dos o tres niveles suelen bastar.

### Carpeta predeterminada para un Gem o Notebook (Gemini)

Abre **Ajustes de carpeta** en cualquier carpeta y encontrarás **Destino predeterminado para**. Añade un Gem o un Notebook aquí, y cada chat nuevo que empieces desde ese Gem o Notebook aterriza en esta carpeta automáticamente: sin archivar a mano.

Una vez que una carpeta tiene un destino predeterminado, su barra de acciones al pasar el ratón gana un botón de acceso que empieza un chat nuevo con ese Gem o Notebook directamente. El menú desplegable de la carpeta también obtiene entradas **Nuevo chat de Gem** y **Nuevo chat de Notebook**.

:::tip
Este es el mayor ahorro de tiempo si usas Gems en serio. Apunta tu Gem «Code Review» a una carpeta «Code Reviews» una vez, y nunca vuelves a archivar a mano uno de esos chats.
:::

### Eliminar

Clic derecho → **Eliminar**. Una salvaguarda: **no puedes eliminar una carpeta que aún tiene conversaciones dentro**. Mueve o elimina por lotes las conversaciones primero. Esto evita la pérdida accidental de datos.

## Conversaciones

Cada conversación de Gemini o AI Studio aparece como un archivo en tu árbol.

### Abrir una conversación

Haz clic. Eso es todo: la página navega a esa conversación. ¿Quieres conservar tu chat actual abierto? Clic derecho → **Abrir en pestaña nueva**.

### Tooltip al pasar el ratón

Pasa el ratón sobre cualquier conversación y un tooltip muestra lo que la fila no tiene espacio para: tu descripción, sus etiquetas, cuándo se creó y cuándo estuvo activa por última vez.

![Tooltip al pasar el ratón mostrando etiquetas, hora de creación y última actividad de una conversación](/images/features/files-rich-tooltip.webp)

Esa marca de última actividad es de verdad útil para el triaje: es cómo detectas la carpeta llena de chats que nadie ha tocado desde marzo.

### Descripciones

Clic derecho → **Editar descripción** para adjuntar una nota a una conversación. Aparece en el tooltip y es buscable desde el filtro de texto de la pestaña Biblioteca.

Los títulos los escribe el modelo y suelen ser vagos («Understanding the Concept»). Una descripción de una línea con tus propias palabras lo corrige sin renombrar nada.

### Renombrar (True Rename)

Clic derecho → **Renombrar**, o pulsa `F2` con la conversación enfocada. Escribe el nombre nuevo y pulsa Enter.

Esto no es solo una etiqueta local: Better Sidebar sincroniza el renombrado a los servidores de Google en tiempo real. El título se actualiza en todas partes, incluso cuando abres el chat sin la extensión instalada.

### Manejo del teclado en el árbol

El árbol se comporta como un gestor de archivos una vez que una fila tiene el foco:

| Tecla | Qué hace |
| --- | --- |
| `↑` `↓` | Mover el foco |
| `→` `←` | Expandir / colapsar una carpeta |
| `Enter` | Abrir la conversación enfocada |
| `F2` | Renombrar |
| `Delete` | Eliminar el elemento enfocado (misma confirmación que el menú) |

### Localizar el chat actual

¿Metido en un árbol anidado y perdiste la pista de dónde estás? Abre el menú **⋯** → **Localizar chat actual**. El árbol expande cada carpeta ancestro y desplaza la conversación activa a la vista.

### Favoritos y fijado

Clic derecho en una conversación → **Añadir a favoritos**. Las conversaciones favoritas flotan arriba de su carpeta (o de la raíz), marcadas con ⭐.

Para quitar: clic derecho → **Quitar de favoritos**.

También puedes hacer clic en el icono de estrella que aparece al pasar el ratón en la barra de acciones.

:::tip
Combina favoritos con el botón de filtro «Solo favoritos» para una lista corta de acceso rápido a tus chats más importantes.
:::

### Mover conversaciones

Dos formas:

1. **Arrastrar y soltar** — Solo agárralo y suéltalo en una carpeta (solo vista de árbol)
2. **Clic derecho → Mover a** — Abre un diálogo selector de carpetas, útil cuando tu carpeta destino está colapsada o lejos en el árbol

### Etiquetar

Clic derecho en una conversación → **Etiquetas** — verás un submenú con casillas para todas tus etiquetas. Marca o desmarca para añadir/quitar.

Si tienes varias conversaciones seleccionadas (vía multi-selección en el árbol), el etiquetado se aplica a todas a la vez.

:::tip
Etiquetas y carpetas sirven a propósitos distintos. Carpetas = «¿dónde vive esto?» Etiquetas = «¿de qué trata esto?» Una conversación solo puede estar en una carpeta pero puede tener muchas etiquetas.
:::

### Exportar una sola conversación

Clic derecho → **Exportar** → elige un destino: texto plano, Markdown, JSON, Obsidian o Notion. Consulta [Exportar](/en/guide/extras/export) para los detalles de cada uno.

### Eliminar (True Delete)

Clic derecho → **Eliminar**. Aparece un diálogo de confirmación. Esto es una **eliminación real en el servidor**: la conversación se quita de los servidores de Google, no solo se oculta en local. Se acabaron los chats fantasma que siguen reapareciendo.

:::warning
La eliminación es permanente. No hay deshacer. Exporta la conversación primero si podrías quererla después.
:::

Si te parece lento el diálogo de confirmación, **Ajustes → General → Comportamiento** tiene un interruptor **Borrar conversaciones sin confirmación**. Está desactivado por defecto, y merece dejarlo así: con él activado, un solo clic elimina de inmediato y de forma permanente en ambos lados. El borrado por lotes sigue preguntando de todas formas.

### Ocultar en lugar de eliminar

Algunos elementos ofrecen **Ocultar** en lugar de Eliminar. Ocultar quita el elemento de tu barra lateral sin tocar nada del lado de Google — y puedes traerlo de vuelta ejecutando de nuevo **Importar lista de chats**. Es la opción segura cuando solo quieres un árbol más limpio.

## Nuevo chat

### Creación rápida

Haz clic en el botón **Nuevo chat** (icono lápiz+) de la barra de herramientas del encabezado. Si hay una carpeta seleccionada, la conversación nueva aterriza dentro.

Ese botón hace tres cosas distintas según cómo hagas clic:

| Clic | Resultado |
| --- | --- |
| Clic izquierdo | Chat nuevo en la pestaña actual |
| Clic derecho | **Chat temporal** — no se guarda en tu árbol de archivos |
| Clic medio | Chat nuevo en una pestaña nueva |

La flecha del desplegable a su lado añade **Nuevo chat de Gem** y **Nuevo chat de Notebook** (Gemini). Hacer clic en esos usa tu último Gem o Notebook usado; clic derecho abre un selector buscable.

### Chats temporales

Un chat temporal es para trabajo desechable — probar un prompt, una pregunta rápida de una sola vez — y nunca aparece en tu árbol de archivos, así que no contamina tu biblioteca organizada.

:::tip
Sé consciente de lo que significa «temporal» aquí. En AI Studio el chat aún se guarda en tu Drive de AI Studio por Google; Better Sidebar simplemente lo mantiene fuera de tu árbol. Es orden, no privacidad.
:::

### Nuevo chat en una carpeta

Pasa el ratón sobre cualquier carpeta y haz clic en el icono **chat+** de su barra de acciones. Esto crea un chat directamente dentro de esa carpeta independientemente de lo que esté seleccionado. Si la carpeta tiene un Gem o Notebook predeterminado adjunto, un botón extra empieza un chat con ese en su lugar.

### Pre-nombrar tu chat

Cuando creas un chat nuevo, aparece una entrada temporal en el árbol con un campo de texto editable. Puedes escribir un título *antes* de que la conversación exista siquiera en los servidores de Google. Una vez se envía el primer mensaje, Better Sidebar renombra la conversación a tu título personalizado.

Si lo dejas vacío, se usa el título generado por la IA como de costumbre.

:::tip
Pre-nombrar es ideal para registros de trabajo. Crea un chat llamado «2024-06-16 Debug session» antes incluso de empezar a escribir, y estará etiquetado correctamente desde el principio.
:::

## Filtrar y ordenar

Cuando tu biblioteca crece más de una pantalla, los filtros se vuelven esenciales. La barra de filtros se sitúa justo debajo del encabezado y ofrece cuatro interruptores:

![La barra de filtros con interruptores de búsqueda, etiqueta, tipo y favoritos](/images/features/files-filters.webp)

### Búsqueda de texto

Haz clic en el botón 🔍 (o usa el atajo) para abrir un campo de búsqueda en línea. Mientras escribes, el árbol se poda para mostrar solo conversaciones y carpetas que coinciden con tu consulta. Las carpetas se mantienen visibles si alguno de sus hijos coincide.

Esto es un filtro local rápido: para búsqueda de texto completo en el contenido de los mensajes, usa la [pestaña Búsqueda](/en/guide/sidebar/search-tab) dedicada.

### Filtro de etiquetas

Haz clic en el icono de etiqueta para expandir un selector de etiquetas. Elige una o más etiquetas, y solo quedan visibles las conversaciones con esas etiquetas. Útil cuando has etiquetado conversaciones por proyecto o tema.

### Filtro de tipo

Haz clic en el icono de cuadrícula para ciclar entre tipos:

- **Todos** (predeterminado) — mostrar todo
- **Conversaciones** — solo conversaciones de chat
- **Imágenes** — solo generaciones de texto a imagen
- **Gems** — solo conversaciones de Gem (Gemini)
- **Notebooks** — solo entradas de notebook (Gemini)

### Solo favoritos

Haz clic en el botón ⭐ para mostrar solo tus conversaciones favoritas. Combínalo con filtros de etiquetas para resultados muy precisos.

### Ordenar

El botón de ordenar del encabezado alterna entre:

- **Fecha** (icono de reloj) — Conversaciones más recientemente activas primero. Las carpetas siguen ordenadas alfabéticamente.
- **Alfabético** (icono A-Z) — Todo ordenado por nombre.

En ambos modos, los elementos favoritos siempre flotan arriba dentro de su contenedor.

:::tip
Un flujo típico: pon el orden en «Fecha» para tu carpeta de proyecto activa para que tu trabajo más reciente se quede arriba, pero mantén el nivel raíz ordenado alfabéticamente para encontrar carpetas por nombre.
:::

## Operaciones por lotes

Cuando necesitas limpiar, reorganizar o etiquetar un montón de conversaciones a la vez, el modo por lotes es tu amigo.

### Entrar en modo por lotes

Haz clic en el icono de **lista de verificación** (☑) de la barra de herramientas del encabezado. El árbol cambia a modo de casillas: cada elemento obtiene una casilla.

![Modo de selección por lotes con varias conversaciones marcadas y la barra de lotes visible](/images/features/files-batch-operations.webp)

### Seleccionar elementos

- Haz clic en cualquier elemento para alternar su casilla
- Haz clic en la casilla de una carpeta para seleccionar/deseleccionar todas las conversaciones dentro
- Haz clic en **Seleccionar todo** en la barra de lotes para agarrar todo lo visible (respeta los filtros actuales)
- Las carpetas muestran un estado indeterminado (—) cuando algunos pero no todos los hijos están seleccionados

### Acciones por lotes

La barra de lotes al final muestra tu recuento seleccionado y ofrece:

| Acción | Qué hace |
| --- | --- |
| **Eliminar** | Elimina de forma permanente todas las conversaciones seleccionadas de los servidores de Google |
| **Mover** | Abre un selector de carpetas para mover todos los elementos seleccionados a una carpeta destino |
| **Añadir etiquetas** | Añade una o más etiquetas a cada conversación seleccionada |
| **Exportar** | Exporta todas las conversaciones seleccionadas a la vez |

El borrado por lotes muestra progreso en vivo (`Eliminando 14/60…`) y se puede cancelar a mitad: los elementos ya eliminados se quedan eliminados, el resto se deja solo.

### El selector de carpetas

Tanto **Mover a** como **Mover** por lotes abren el mismo diálogo. Tiene un cuadro de búsqueda, así que no tienes que recorrer un árbol grande: escribe parte del nombre de la carpeta y elígela. También hay un botón **Nueva carpeta** en el diálogo, así que puedes crear el destino sin salir primero.

### Salir del modo por lotes

Haz clic en la **X** de la barra de lotes, pulsa `Alt+Shift+B` o haz clic de nuevo en el icono de lista de verificación del encabezado.

:::tip
Los filtros se aplican a **Seleccionar todo**, que es lo que hace potente el modo por lotes. Filtra a una etiqueta, selecciona todo, muévelos a una carpeta: toda una categoría reorganizada en tres clics. El mismo truco con el filtro de tipo para barrer cada generación de imagen a una carpeta «Images».
:::

## Modos de vista

### Vista de árbol

La predeterminada. Tus carpetas y conversaciones forman una jerarquía arrastrable. Controlas exactamente dónde vive todo.

Funciones clave exclusivas de la vista de árbol:
- Arrastrar y soltar (reordenar, mover a carpetas)
- Creación de carpetas anidadas
- Clic derecho en el lienzo → Nueva carpeta
- Filas teñidas de carpeta (franjas de fondo coloreadas)

### Vista de línea de tiempo

Cambia vía el menú overflow → **Cambiar a vista de línea de tiempo** (o el icono de calendario).

Las conversaciones se agrupan automáticamente en cubos de tiempo:
- **Hoy**
- **Ayer**
- **Últimos 7 días**
- **Últimos 30 días**
- **Anteriores** (agrupados por mes, p. ej. «mayo 2025»)

![Vista de línea de tiempo, agrupando conversaciones bajo Hoy / Ayer / Últimos 7 días](/images/features/files-timeline-view.webp)

Arrastrar y soltar está desactivado en la vista de línea de tiempo. Todas las demás funciones (acciones de clic derecho, filtrado, modo por lotes) siguen funcionando.

:::tip
La vista de línea de tiempo es ideal para un repaso de «¿qué hice esta semana?», o para encontrar una conversación cuando recuerdas *cuándo* la tuviste pero no cómo la llamaste.
:::

## Compact Mode

Compact Mode oculta por completo la barra de iconos de la barra lateral, dejando solo el árbol. Menos botones, más espacio, menos que mirar.

Actívalo desde el menú **⋯** → **Entrar en Compact Mode**, o simplemente haz clic en el título **LIBRARY** del encabezado: hacer clic en él alterna compact mode de cualquier forma. Haz clic de nuevo para volver.

:::tip
Compact Mode más [Zen Mode](/en/guide/ui-customization/layout-and-width#zen-mode-gemini-only) te acerca tanto a un editor de texto plano como Gemini permite. Merece probarlo en sesiones largas de escritura.
:::

## Mantener el árbol sincronizado

Better Sidebar necesita saber de tus conversaciones antes de poder organizarlas.

### Automático

Cuando visitas Gemini o AI Studio, la extensión recoge conversaciones recientes por su cuenta. Para el uso diario no tienes que hacer nada.

Las conversaciones nuevas aterrizan en **Inbox** por defecto, así que nunca se pierden: solo esperan ahí hasta que las archives.

### Importar lista de chats

Solo las conversaciones recientes se capturan automáticamente. Para traer la lista completa, abre el menú **⋯** → **Importar lista de chats**. La extensión recorre tu lista de conversaciones e importa cada título y sus metadatos.

Esto importa **solo títulos y metadatos** (ID de conversación, fecha de creación, tipo). No descarga el contenido de los mensajes: eso es un paso aparte, porque es mucho más lento.

### Obtener contenido de mensajes

El contenido de los mensajes es lo que necesitan la búsqueda de texto completo, la exportación y el esquema.

- **AI Studio** — importación masiva desde una exportación de Google Drive. Consulta [Búsqueda → Importar historial de chats](/en/guide/sidebar/search-tab#import-chat-history).
- **Gemini** — el contenido se registra al abrir cada conversación. Para ponerte al día en bloque, pide al [agente](/en/guide/agent/better-sidebar-agent) que las sincronice: *«Comprueba cuántos chats no tienen mensajes guardados, luego sincroniza los últimos 30.»*

### Ignorar carpetas

**Ajustes → Biblioteca → Carpetas ignoradas** acepta una lista separada por comas de nombres de carpeta para ocultar del árbol por completo. Útil para archivos que nunca quieres ver pero no quieres eliminar.

:::tip
Justo después de una importación completa es el mejor momento para organizar. Entra en modo por lotes, filtra y barre cosas a carpetas — o entrega todo el trabajo al agente y ve a por un café.
:::
