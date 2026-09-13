---
title: Notebooks
description: Gestiona tus Gemini Notebooks desde la barra lateral — escanea, explora, filtra y elimina notebooks con sus conversaciones anidadas en una vista organizada.
---

# Notebooks

La pestaña Notebooks es tu centro para la función Notebooks de Gemini. Los Notebooks son un tipo distinto de conversación: son contenedores tipo proyecto que pueden albergar varios hilos y fuentes. Better Sidebar te da una vista de árbol de todos tus notebooks, con la capacidad de expandir cada uno para ver sus conversaciones hijas.

![La pestaña Notebooks listando Gemini Notebooks sincronizados](/images/features/notebooks.webp)

:::tip
Esta pestaña es exclusiva de Gemini. AI Studio no tiene un concepto de Notebooks, así que no verás esta pestaña en esa plataforma.
:::

## Explorar tus notebooks

Como con los Gems, Better Sidebar necesita descubrir tus notebooks antes de poder mostrarlos.

Haz clic en el botón **Escanear** (🔄) en la barra de encabezado. La extensión contacta la API de Gemini e importa tu lista completa de notebooks. Aparece brevemente un spinner de carga mientras trabaja.

La extensión también recoge automáticamente notebooks nuevos que crees. Cuando creas un notebook a través de la UI nativa de Gemini, se dispara un evento del navegador y Better Sidebar actualiza sus datos en segundo plano.

## Explorar y filtrar

La pestaña Notebooks comparte la misma infraestructura de filtros que el resto de la barra lateral:

### Búsqueda

Haz clic en el icono 🔍 para abrir la búsqueda en línea. Escribe parte del nombre de un notebook: el árbol se poda para mostrar solo coincidencias.

### Filtro de etiquetas

Filtra por etiquetas que hayas aplicado a conversaciones de notebook. Solo quedan visibles los notebooks que contengan conversaciones etiquetadas (o notebooks que hayas etiquetado directamente).

### Favoritos

Activa ⭐ para ver solo elementos favoritos. Funciona tanto en encabezados de notebook como en conversaciones individuales dentro de ellos.

### Ordenar

Alterna entre orden alfabético y por fecha con el botón de ordenar del encabezado.

## Trabajar con notebooks

### Abrir un notebook

Haz clic en un notebook para expandirlo/colapsarlo en el árbol. Para navegar de verdad a la página del notebook, clic derecho → **Abrir Notebook**. Esto te lleva a `gemini.google.com/notebook/{id}`.

¿Quieres conservar tu página actual? Clic derecho → **Abrir en pestaña nueva** abre el notebook en una pestaña en segundo plano.

### Eliminar un notebook

Clic derecho → **Eliminar Notebook**. Un diálogo de confirmación te protege de accidentes. Al confirmar, el notebook se elimina de los servidores de Gemini vía su API interna.

:::warning
Eliminar un notebook es permanente y lo quita de los servidores de Google. Si estabas viendo ese notebook, Better Sidebar te lleva a un chat nuevo en blanco para evitar mostrar una página rota.
:::

### Empezar un chat nuevo de notebook

Clic derecho en un notebook → **Nuevo chat de Notebook**. La flecha del desplegable del botón **Nuevo chat** de la barra lateral también lo ofrece: clic izquierdo reutiliza tu último notebook, clic derecho abre un selector buscable.

## Carpetas predeterminadas — archivar chats de Notebook automáticamente

Clic derecho en un notebook → **Establecer carpeta predeterminada** y elige un destino. Cada chat nuevo empezado desde ese notebook aterriza allí automáticamente.

También puedes vincular desde el lado de la carpeta: **Ajustes de carpeta → Destino predeterminado para → Notebook**. La carpeta entonces muestra un botón de acceso rápido en su barra de acciones al pasar el ratón, más **Nuevo chat de Notebook** en su menú desplegable.

:::tip
Los notebooks suelen ya tener forma de proyecto, así que apuntar cada uno a una carpeta coincidente significa que la carpeta se convierte en un registro completo de ese proyecto: los hilos del notebook más cualquier otra cosa que arrastres. Configúralo una vez por notebook y deja de pensarlo.
:::

## Conversaciones de Notebook

Expande cualquier notebook para ver las conversaciones dentro. Estas conversaciones son los hilos e interacciones individuales que viven dentro del contenedor del notebook.

Cada conversación hija soporta el conjunto completo de acciones que esperarías:

- **Clic** para navegar directamente a esa conversación
- **Clic derecho** para el menú contextual completo — renombrar, mover a carpeta, añadir etiquetas, exportar, favorito, eliminar
- **Favorito** para acceso rápido
- **Etiquetar** para organización transversal

:::tip
Los notebooks son ideales para proyectos de investigación donde quieres varias conversaciones relacionadas en un sitio. Usa la pestaña Notebooks para saltar rápido entre hilos sin perder tu lugar en el proyecto.
:::

## Crear notebooks nuevos

Haz clic en el botón **+** que aparece en el estado vacío (o usa el flujo nativo de creación de notebooks de Gemini en `gemini.google.com/notebooks/create`). Tras crear, la extensión detecta automáticamente el notebook nuevo: no hace falta escaneo manual.

## Ver todos los notebooks

Haz clic en el icono **Notebooks** de la barra de encabezado para navegar a la página de vista general de notebooks de Gemini en `gemini.google.com/notebooks/view`. Esto muestra la vista nativa completa con todos los metadatos del notebook.

:::tip
Si usas mucho Notebooks, fija la pestaña Notebooks en tus accesos rápidos de la barra lateral (Ajustes → General → Accesos) para acceso de un clic. Combinado con el atajo `Alt+7`, puedes saltar a tus notebooks al instante desde cualquier sitio.
:::
