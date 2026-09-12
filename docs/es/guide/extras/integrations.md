---
title: Integraciones
description: Envía conversaciones y snippets directamente a Notion u Obsidian. Notion necesita una configuración única; Obsidian funciona de inmediato.
---

# Integraciones

Dos destinos fuera del navegador. Ambos son funciones del [Power Pack](/en/guide/settings/packs).

| | Configuración necesaria | Cómo funciona |
| --- | --- | --- |
| **Obsidian** | Ninguna | Abre la nota en tu vault mediante el protocolo `obsidian://` |
| **Notion** | Una vez, ~3 minutos | Crea una página bajo una página que eliges, vía la API de Notion |

## Obsidian

Nada que configurar. Clic derecho en una conversación o snippet → **Exportar** → **Abrir en Obsidian**.

Obsidian debe estar instalado y en ejecución en el mismo ordenador, porque esto usa su protocolo URI.

Los snippets van a una carpeta `Snippets` de tu vault. El formato y los bloques de código sobreviven intactos.

La exportación por lotes combina los elementos seleccionados en una sola nota en lugar de crear una por elemento.

:::tip
Este es el camino de menor fricción de una conversación de IA a una base de conocimiento permanente. Selecciona la parte buena, guárdala como snippet, exporta a Obsidian cuando hayas reunido unas cuantas. Sin copiar y pegar, sin perder formato, sin reconstruir cercas de código a mano.
:::

## Notion

Tres pasos, una sola vez.

**Ajustes → Integraciones**

### 1. Conceder permiso

Better Sidebar no solicita acceso a la API de Notion al instalar: es un permiso opcional, que solo se pide cuando realmente quieres la función.

Haz clic en **Conceder acceso a la API de Notion** y aprueba el aviso del navegador.

:::tip
Es deliberado. Una extensión que pide acceso a una API que quizá nunca uses es una extensión que pide más de lo que necesita. El permiso solo se solicita en el momento en que decides usar Notion.
:::

### 2. Crear y pegar un token de integración

Ve a [notion.so/my-integrations](https://www.notion.so/my-integrations) y crea una **integración interna** nueva. Copia su token: empieza por `ntn_`.

Pégalo en el campo API Key y haz clic en **Guardar**. Better Sidebar prueba la conexión y muestra el nombre de la integración si tiene éxito.

### 3. Elegir una página destino

Elige una página del desplegable. El contenido exportado se crea como subpáginas de ella.

Usa el botón **Actualizar** si acabas de conectar una página nueva en Notion y aún no aparece.

### «No se encontraron páginas»

Casi siempre la misma causa: la integración existe pero no tiene acceso a ninguna página.

Las integraciones de Notion son opt-in por página. Crear la integración no le concede nada.

Corrígelo en Notion: abre la página que quieras usar → menú **⋯** → **Connections** → añade tu integración. Luego pulsa **Actualizar** en Better Sidebar.

:::warning
Esto tropieza a casi todo el mundo la primera vez. Un token válido sin conexiones de página parece una integración rota, pero el token está bien: Notion simplemente no ha recibido indicación de qué páginas puede tocar. También puedes comprobarlo desde el otro lado: Notion → Settings → Connections → encuentra tu integración → verifica su acceso a páginas.
:::

## Exportar

Una vez configurado, Notion aparece como destino de exportación dondequiera que haya exportación: conversaciones, snippets, carpetas, selecciones por lotes. Consulta [Exportar](/en/guide/extras/export).

La exportación por lotes a Notion corre página a página con un toast de progreso (`Exportando a Notion (7/23)…`) y se puede cancelar a mitad. Las páginas ya creadas se quedan.

Si tiene éxito, recibes un toast con un botón **Ver** que abre la nueva página.

## Desconectar

Haz clic en **Desconectar** junto al campo de API key. Esto borra el token, la página destino y la lista de páginas en caché de Better Sidebar. Nada en Notion se ve afectado: las páginas que ya exportaste se quedan donde están.

## Cuál usar

**Obsidian** si tus notas son archivos locales y quieres que la exportación sea un archivo. Cero configuración, funciona sin conexión y las notas son tuyas en Markdown plano.

**Notion** si tu equipo o tu propio sistema viven ahí. Más configuración, pero el contenido exportado aterriza en un sitio compartido y buscable por otras personas.

Nada te impide usar ambos.
