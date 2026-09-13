---
title: Gems
description: Explora, filtra y gestiona tus Gemini Gems desde la barra lateral. Empieza chats nuevos con gems, recorre tu colección y organízalos con etiquetas y favoritos.
---

# Gems

La pestaña Gems te da un espacio dedicado para gestionar todos tus Gemini Gems: esas personas de IA personalizadas que has creado para tareas concretas. En lugar de buscar en la UI nativa de Gemini, obtienes una vista de árbol limpia y filtrable de cada gem que posees, más acciones rápidas para empezar chats, editar o crear nuevos.

![La pestaña Gems listando Gemini Gems sincronizados](/images/features/gems.webp)

:::tip
Esta pestaña es exclusiva de Gemini. Si estás en AI Studio, no la verás en la barra lateral: los Gems son una función solo de Gemini.
:::

## Explorar tus gems

Better Sidebar no conoce automáticamente todos tus gems en la primera instalación. Necesitas ejecutar un escaneo para importarlos.

Haz clic en el botón **Escanear** (🔍) en la barra de encabezado. La extensión llama a la API interna de Gemini para obtener tu lista completa de gems y los almacena en local. Un spinner de carga se muestra mientras corre el escaneo: suele tardar solo unos segundos.

Tras escanear, tus gems aparecen como carpetas expandibles en el árbol. Cada gem muestra su nombre y se puede expandir para revelar las conversaciones que has tenido con ese gem.

:::tip
Ejecuta un escaneo tras crear gems nuevos en gemini.google.com. La extensión se actualiza sola cuando creas un gem *a través de* Better Sidebar, pero los gems creados en la UI nativa necesitan un escaneo manual para aparecer.
:::

## Explorar y filtrar

### Búsqueda

Haz clic en el icono de búsqueda de la barra de filtros para abrir un campo de texto en línea. Escribe un nombre de gem y la lista se poda al instante: solo quedan visibles los gems que coinciden con tu consulta.

### Filtro de etiquetas

Si has etiquetado tus conversaciones de gem, usa el filtro de etiquetas para acotar la lista. Solo se mostrarán gems (o sus conversaciones hijas) con etiquetas coincidentes.

### Solo favoritos

Activa el botón ⭐ para mostrar solo gems o conversaciones de gem que hayas marcado como favoritos. Ideal para acceso rápido a tus personas más usadas.

### Ordenar

El botón de ordenar del encabezado alterna entre:

- **Alfabético** (A-Z) — gems ordenados por nombre
- **Fecha** (reloj) — gems ordenados por actividad más reciente

## Trabajar con gems

### Empezar un chat nuevo

La forma más rápida: clic derecho en un gem → **Nuevo chat de Gem**. Esto te lleva a una conversación nueva con ese gem preseleccionado como persona. También puedes pasar el ratón sobre un gem y usar el menú de tres puntos.

Desde cualquier sitio de la barra lateral, la flecha del desplegable del botón **Nuevo chat** también ofrece **Nuevo chat de Gem**. Hacer clic reutiliza tu último gem; clic derecho abre un selector buscable.

### Ocultar un gem

Clic derecho → **Ocultar Gem** lo quita de tu barra lateral sin tocar Gemini. Ejecuta un escaneo de nuevo para traerlo de vuelta. Úsalo para gems que hiciste una vez y nunca usas: es la alternativa reversible a eliminar.

### Abrir la página del gem

Clic derecho → **Abrir Gem** te lleva a la página de configuración/inicio del gem en Gemini. ¿Quieres conservar tu pestaña actual? Usa **Abrir en pestaña nueva** en su lugar.

### Editar un gem

Clic derecho → **Editar Gem** navega a `gemini.google.com/gems/edit/{id}` donde puedes cambiar las instrucciones, el nombre o el avatar del gem.

### Copiar un gem

Clic derecho → **Copiar Gem** navega a la página de duplicación de gems de Gemini. Útil cuando quieres crear una variante de un gem existente sin empezar de cero.

### Eliminar un gem

Clic derecho → **Eliminar Gem**. Aparece un diálogo de confirmación antes de que ocurra nada. La eliminación quita el gem tanto de tu barra lateral local como de los servidores de Gemini.

:::warning
Eliminar un gem es permanente. El gem y su configuración desaparecen de Gemini por completo: no solo se ocultan de Better Sidebar. Las conversaciones que tuviste con el gem permanecen, pero no puedes usar el gem para chats nuevos.
:::

## Carpetas predeterminadas — archivar chats de Gem automáticamente

Esta es la función que merece configurarse el primer día.

Clic derecho en un gem → **Establecer carpeta predeterminada**, y elige una carpeta. A partir de entonces, cada chat nuevo que empieces con ese gem se coloca en esa carpeta automáticamente. Sin arrastrar, sin archivar, sin triaje semanal para esa categoría nunca más.

También puedes hacerlo desde la otra dirección: abre **Ajustes de carpeta** en cualquier carpeta y añade el gem bajo **Destino predeterminado para**. El panel de ajustes de carpeta lista todo lo que apunta actualmente a ella, así que puedes vincular y desvincular desde cualquiera de los lados.

Una vez que una carpeta tiene un gem predeterminado adjunto:

- Su barra de acciones al pasar el ratón gana un botón que empieza un chat con ese gem directamente
- Su menú desplegable gana **Nuevo chat de Gem**

:::tip
Piénsalo como una regla de archivo. Un gem «Code Review» apuntado a una carpeta «Code Reviews» significa que toda esa categoría de trabajo se archiva sola para siempre. Si tienes cinco gems que usas con regularidad, cinco minutos de configuración aquí eliminan la mayor parte de tu trabajo continuo de organización.
:::

## Conversaciones de Gem

Expande cualquier gem para ver las conversaciones que has tenido con él. Estos elementos hijos funcionan exactamente como las conversaciones de la [pestaña Biblioteca](/en/guide/sidebar/library-tab):

- Haz clic para navegar a la conversación
- Clic derecho para el menú contextual completo (renombrar, mover, etiquetar, exportar, eliminar)
- Márcalos como favoritos para acceso rápido
- Etiquétalos para organización

## Crear gems nuevos

Dos formas de crear un gem:

1. **Desde el encabezado** — Haz clic en el icono gem+ (💎+) para navegar directamente a `gemini.google.com/gems/create`
2. **Desde el estado vacío** — Si aún no tienes gems, el estado vacío muestra un botón «Crear Gem»

Tras crear, ejecuta un escaneo para verlo aparecer en tu árbol.

## Ver todos los gems

Haz clic en el icono de **ojo** (👁) del encabezado para navegar a la página nativa de vista general de gems de Gemini en `gemini.google.com/gems/view`. Útil para ver detalles del gem que no se muestran en la vista compacta de la barra lateral.

:::tip
La pestaña Gems es más valiosa cuando tienes 5+ gems. Si solo tienes uno o dos, el filtro de tipo de la pestaña Biblioteca (puesto en «Gems») funciona bien. Pero cuando tu colección crece, tener una pestaña dedicada con búsqueda y ordenación hace encontrar la persona correcta instantáneo.
:::
