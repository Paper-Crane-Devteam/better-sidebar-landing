---
title: Temas
description: 19 temas hechos a mano para Gemini y AI Studio, vista previa gratuita de 5 minutos en cada uno, más temas personalizados generados por IA que puedes importar.
---

# Temas

Better Sidebar restiliza toda la página, no solo su propio panel. Elige un tema y Gemini o AI Studio cambian con él: fondos, texto, acentos y, en varios temas, también la tipografía.

**Ajustes → Temas**

![La cuadrícula de temas con franjas de vista previa de color en cada tarjeta](/images/features/themes-grid.webp)

## Predeterminado

El aspecto de fábrica. Neutro, limpio, y el único tema con interruptor claro/oscuro/sistema:

- **Claro** — fondos claros, texto oscuro
- **Sistema** — sigue el ajuste de apariencia del SO
- **Oscuro** — fondos oscuros, texto claro

Gratis, y el valor al que vuelve todo lo demás.

## Los 19 preajustes

Cada preajuste tiene una paleta fija clara u oscura, porque el punto de un tema diseñado es que el diseñador eligió los colores. El interruptor de modo no se les aplica.

### Oscuros

| Tema | Qué es |
| --- | --- |
| **Tokyo Night** | Azul-negro profundo con acentos púrpura, azul y melocotón |
| **Catppuccin Mocha** | Oscuro pastel cálido, lavanda y melocotón |
| **Dracula** | El clásico: púrpura, verde y rosa vivos |
| **Nord Aurora** | Oscuro ártico, azules fríos con acentos verde escarcha |
| **Gruvbox** | Retro, tonos terrosos cálidos. Leer código a la luz de una vela |
| **Everforest** | Verdes de bosque apagados con un toque de ámbar cálido |
| **Rosé Pine** | Oscuro suave con rosa y oro apagados |
| **Solarized** | La clásica paleta oscura equilibrada |
| **Midnight Purple** | Negro profundo con degradados púrpura e índigo |
| **Cyberpunk Neon** | Magenta y azul eléctrico sobre casi negro |
| **Retro Terminal** | Verde sobre negro tipo CRT, monoespaciado en todo |
| **High Contrast** | Blanco y negro austeros, un acento ámbar. Hecho para la legibilidad por encima de todo |

### Claros

| Tema | Qué es |
| --- | --- |
| **Ocean Breeze** | Tema claro fresco, azul océano y coral |
| **Sakura** | Rosas suaves y verdes salvia. Una tarde de primavera |
| **Paper & Ink** | Enfocado a la lectura, tonos de papel cálidos y tipografía serif elegante |
| **Solarized Light** | La querida mitad clara de Solarized |
| **Cupertino Glass** | Vidrio esmerilado, fuentes del sistema, paleta mínima |
| **Grimoire** | Pergamino envejecido, tonos cálidos, tipografía serif |
| **Graphite** | Escala de grises pura. Estructura sin color alguno |

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px">
  <figure style="margin:0">
    <img src="/images/features/theme-tokyo-night.webp" alt="El tema Tokyo Night aplicado a Gemini" />
    <figcaption style="font-size:13px;opacity:.7;text-align:center">Tokyo Night</figcaption>
  </figure>
  <figure style="margin:0">
    <img src="/images/features/theme-everforest.webp" alt="El tema Everforest aplicado a Gemini" />
    <figcaption style="font-size:13px;opacity:.7;text-align:center">Everforest</figcaption>
  </figure>
  <figure style="margin:0">
    <img src="/images/features/theme-ocean-breeze.webp" alt="El tema Ocean Breeze aplicado a Gemini" />
    <figcaption style="font-size:13px;opacity:.7;text-align:center">Ocean Breeze</figcaption>
  </figure>
</div>

:::tip
Los temas no son puramente decorativos. **Paper & Ink** y **Grimoire** usan tipografía serif y fondos más cálidos, lo que de verdad ayuda en sesiones de lectura largas. **High Contrast** existe por la legibilidad más que por el aspecto. **Retro Terminal** pone todo en monoespaciado, que algunas personas prefieren al trabajar con código. Prueba esos tres unos minutos cada uno aunque no sean tu estética: puede que uno encaje con un tipo concreto de trabajo.
:::

## Vista previa gratuita de 5 minutos

Haz clic en cualquier preajuste y se aplica de inmediato, de verdad, en tu página real. Aparece un banner:

> Modo vista previa — el tema volverá al predeterminado en 5 minutos.

Tras cinco minutos vuelve solo a Predeterminado. No hay límite de cuántas vistas previas tomes.

Esto no es una captura de teaser: es el tema completo, en tu propio espacio de trabajo, con tus propias conversaciones. Cinco minutos bastan para saber si de verdad te gustaría usarlo cada día.

Para conservar los preajustes de forma permanente, obtén el [Support Pack](/en/guide/settings/packs). Una compra, todos los preajustes, todos los preajustes futuros incluidos.

## Temas generados por IA

Si ninguno de los 19 encaja, haz que la IA construya uno.

### 1. Crear el prompt generador

**Ajustes → Temas → Crear con IA**. Esto añade un prompt generador de temas a tu [biblioteca de prompts](/en/guide/sidebar/prompts-tab) y te lleva a la pestaña Prompts. Si el prompt ya existe, solo te lleva allí.

### 2. Describe lo que quieres

Usa ese prompt en una conversación de Gemini o AI Studio y describe el tema:

> Un tema oscuro inspirado en un bosque a medianoche: verdes profundos, blancos de luz de luna suaves, acentos marrón corteza y una sensación un poco cálida en lugar de clínica.

El modelo devuelve una definición de tema en JSON.

:::tip
Describe un *estado de ánimo* o una *referencia*, no valores hex. «Atardecer cálido sobre el océano» produce una paleta coherente; «usa #FF6B35 para el acento» produce un color bonito y dieciocho arbitrarios. Siempre puedes pedir ajustes en la misma conversación: «demasiado saturado, baja los acentos» funciona bien.
:::

### 3. Importarlo

**Ajustes → Temas → Importar tema**, pega el JSON y el diálogo lo valida antes de confirmar. Los temas válidos se aplican de inmediato y aparecen en la cuadrícula junto a los preajustes.

Importar temas personalizados requiere el [Support Pack](/en/guide/settings/packs).

### Gestionar temas importados

Los temas importados tienen un botón de eliminar en su tarjeta. Eliminar uno que esté activo te devuelve a Predeterminado. Puedes conservar tantos como quieras y cambiar libremente.

:::tip
Como los temas son solo JSON, se pueden compartir. Pega uno en un mensaje, un gist o un canal de Discord y cualquiera más puede importarlo.
:::

## Qué es gratis

| | Gratis | Support Pack |
| --- | --- | --- |
| Tema predeterminado, claro/oscuro/sistema | Sí | Sí |
| 19 preajustes | Vista previa de 5 minutos | Permanente |
| Preajustes futuros | Vista previa de 5 minutos | Incluidos |
| Prompt del generador de IA | Sí | Sí |
| Importar un tema personalizado | No | Sí |

El prompt del generador es gratis de crear y usar: puedes producir JSON de tema sin pagar. Importarlo en la extensión es la parte que necesita el pack.
