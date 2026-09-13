---
title: Búsqueda
description: Búsqueda de texto completo en cada mensaje de tu historial de conversaciones de Gemini y AI Studio, con filtrado avanzado y vista previa de mensajes.
---

# Búsqueda

La pestaña Búsqueda te permite encontrar *cualquier* mensaje que hayas enviado o recibido: no solo por título, sino por el contenido real de tus conversaciones. Piénsalo como Ctrl+F para todo tu historial de chats de IA.

![Resultados de búsqueda de texto completo agrupados por conversación con coincidencias resaltadas](/images/features/search-fulltext.webp)

## Cómo funciona

Better Sidebar mantiene una base de datos SQLite local con indexación de búsqueda de texto completo. Cuando escribes una consulta, busca en el *contenido* de cada mensaje almacenado en tu navegador: tanto tus prompts como las respuestas de la IA.

- Las consultas de 3+ caracteres usan FTS5 (rápido, coincidencia de frases)
- Las consultas más cortas caen a coincidencia de texto simple (sigue funcionando, solo más lento en bases de datos grandes)

Los resultados aparecen al instante mientras escribes, con un debounce de 500 ms para no martillar la base de datos en cada pulsación.

:::tip
La pestaña Búsqueda busca el *contenido* de los mensajes. Si solo quieres filtrar conversaciones por título, usa el filtro de búsqueda de la [pestaña Biblioteca](/en/guide/sidebar/library-tab#text-search) en su lugar: es más rápido para búsquedas rápidas por título.
:::

## La entrada de búsqueda

La barra de búsqueda tiene dos botones de interruptor en línea a la derecha:

- **Aa** (Distinguir mayúsculas) — Cuando está activado, «React» no coincidirá con «react»
- **W** (Palabra completa) — Cuando está activado, «port» no coincidirá con «import» o «portal»

Debajo de la entrada, haz clic en el icono **⋯** para expandir opciones avanzadas:

### Carpetas a incluir

Escribe nombres de carpeta separados por comas. La búsqueda solo mirará dentro de las conversaciones de esas carpetas (y sus subcarpetas, de forma recursiva).

Ejemplo: `Work, Client Projects` — solo busca conversaciones dentro de las carpetas «Work» o «Client Projects» y cualquier subcarpeta anidada.

### Carpetas a excluir

Mismo formato, efecto opuesto. Las conversaciones de estas carpetas se excluyen de los resultados.

Ejemplo: `Archive, Junk` — omite cualquier cosa que hayas archivado.

### Alcance de la búsqueda

- **Todas las conversaciones** — busca en toda tu biblioteca (predeterminado)
- **Solo la conversación actual** — limita la búsqueda al chat que estás viendo

La opción «Solo la conversación actual» se desactiva cuando no estás dentro de ninguna conversación. Se restablece automáticamente a «Todas» cuando navegas fuera.

:::tip
«Solo la conversación actual» es esencialmente Ctrl+F para el chat activo. Ideal para encontrar algo concreto en una conversación larga sin recorrer 200 mensajes.
:::

### Filtro de rol

- **Todos** — buscar tanto tus mensajes como los del modelo
- **Solo usuario** — solo tus prompts
- **Solo modelo** — solo respuestas de la IA

Útil cuando recuerdas haber fraseado algo de una forma concreta, o cuando buscas un trozo de código que generó el modelo.

## Filtro de plataforma

En el encabezado de la pestaña hay un icono de filtro (🔽) que abre un desplegable de plataforma:

- **Gemini** ✓
- **AI Studio** ✓

Por defecto, solo está seleccionada la plataforma actual. Marca ambas para buscar en todas las plataformas a la vez. La plataforma actual no se puede desmarcar.

Al buscar entre plataformas, los resultados muestran un pequeño icono de plataforma junto a cada coincidencia para saber de cuál vino.

## Leer resultados

Los resultados están **agrupados por conversación**. Cada grupo muestra:

- El título de la conversación
- La carpeta a la que pertenece (como un badge pequeño)
- El número de mensajes coincidentes

Haz clic en el encabezado de un grupo para colapsarlo/expandirlo. Todos los grupos se expanden solos cuando llegan resultados nuevos. Usa el botón **Colapsar todo** del encabezado si tienes muchos grupos y quieres recorrer primero los títulos.

### Fragmentos de coincidencia

Cada coincidencia individual muestra:

- Quién lo dijo (Usuario / Modelo) y la fecha
- Un fragmento del contenido del mensaje con tu término de búsqueda **resaltado en amarillo**
- El fragmento muestra ~40 caracteres antes y ~60 después de la coincidencia para contexto

### Vista previa del mensaje

Haz clic en cualquier coincidencia para abrir un **modal de vista previa completa** con:

1. El mensaje completo renderizado como Markdown (con el término de búsqueda resaltado en todo)
2. Un botón de copiar para el contenido
3. Una sección expandible **Contexto** que muestra el mensaje adyacente: si hiciste clic en un mensaje de usuario, muestra la respuesta del modelo, y viceversa

Desde el modal de vista previa, puedes:

- **Cerrar** — descartar y volver a los resultados
- **Ir a la conversación** — navegar directamente a esa conversación (y en AI Studio, incluso se desplaza al mensaje concreto)

### Navegación rápida

Pasa el ratón sobre cualquier coincidencia en la lista de resultados: aparece un icono de enlace externo arriba a la derecha. Haz clic para navegar directamente a esa conversación sin abrir primero la vista previa.

:::tip
En AI Studio, «Ir a la conversación» de verdad se desplaza al mensaje concreto del chat. En Gemini, abre la conversación (desplazarse a un mensaje concreto aún no lo soporta la UI de Gemini).
:::

## Importar historial de chats

Por defecto, Better Sidebar solo tiene contenido de mensajes de conversaciones que estuvieron activas *después* de instalar la extensión. Las conversaciones más antiguas tienen títulos y metadatos, pero su contenido de mensajes aún no se ha indexado: lo que significa que no aparecerán en los resultados de búsqueda.

Para corregirlo, necesitas importar tu historial.

![El botón Open in Drive en la biblioteca de AI Studio, usado para empezar una exportación masiva del historial](/images/features/aistudio-open-in-drive.png)

### Cómo importar (AI Studio)

Abre el diálogo de importación desde cualquiera de estos sitios:

- El icono **Subir** en el encabezado de la pestaña Búsqueda
- **Ajustes → Datos y almacenamiento → Importar datos de chats**

El diálogo te guía, pero en resumen:

1. Ve a [AI Studio Library](https://aistudio.google.com/app/library) y haz clic en **Open in Drive**

   ![El botón Open in Drive en la biblioteca de AI Studio](/images/features/aistudio-open-in-drive.png)

2. En Google Drive, abre el desplegable de la carpeta **AI Studio** y elige **Download**. Google lo comprime en un ZIP por ti.

   ![Descargar la carpeta AI Studio desde Google Drive](/images/features/aistudio-download-conversations.webp)

3. Sube ese ZIP de vuelta en el diálogo de importación
4. Better Sidebar empareja cada archivo con su conversación por título y luego indexa el contenido de los mensajes

El diálogo muestra logs de procesamiento en vivo y un recuento de importados/sin coincidencia cuando termina.

:::warning
Las imágenes dentro de las conversaciones se omiten durante la importación: solo se indexa el texto.
:::

:::warning
La importación empareja archivos por título de conversación. Si renombraste una conversación después de exportar, la coincidencia puede fallar. Las conversaciones que no se pueden emparejar se omiten (tus datos no se pierden: simplemente no se indexan).
:::

### Para Gemini

Google no ofrece una exportación masiva para Gemini, así que el contenido de los mensajes se registra al **abrir** cada conversación.

**Importar lista de chats** en la pestaña Biblioteca trae solo *títulos y metadatos*. Incluso después de ejecutarlo, las conversaciones más antiguas se quedan fuera de la búsqueda de texto completo hasta que se hayan visto sus mensajes.

Tienes dos formas de ponerte al día:

- **Haz clic por ellas.** Abre las conversaciones que te importan; la extensión las registra en segundo plano mientras las ves.
- **Deja que el agente lo haga.** Esta es la opción práctica para bibliotecas grandes. Escribe `>` en el campo de chat, elige **Better Sidebar** y pide:

  > Comprueba cuántos chats solo tienen título sin mensajes guardados. Dame el total primero, luego sincroniza el contenido de los últimos 30 para que aparezcan en la búsqueda.

  El agente encuentra los vacíos, abre cada uno por turno e informa de lo que consiguió registrar. Algunos chats muy antiguos simplemente ya no están del lado de Google: te dirá cuáles son. Consulta [Agente Better Sidebar](/en/guide/agent/better-sidebar-agent#sync-missing-messages).

## ¿Sin resultados?

Si tu búsqueda no devuelve nada para un término que estás seguro de que existe:

1. **La conversación puede no estar indexada aún** — haz clic en el enlace «¿Por qué no puedo encontrar conversaciones antiguas?» que aparece bajo el estado vacío. Explica cómo importar o escanear tu historial.
2. **Comprueba tus filtros** — asegúrate de no haber acotado accidentalmente a «Solo la conversación actual» o excluido la carpeta relevante.
3. **Prueba una consulta más corta** — FTS5 hace coincidencia de frases por defecto. Si tu consulta es muy larga, prueba una frase clave de ella en su lugar.

:::tip
Tras instalar Better Sidebar, dedica 2 minutos a importar tu historial. Solo tienes que hacerlo una vez, y desbloquea todo el poder de la búsqueda: de pronto cada conversación que hayas tenido se vuelve encontrable al instante.
:::
