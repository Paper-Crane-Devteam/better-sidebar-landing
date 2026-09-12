---
title: Themes
description: 19 handcrafted themes for Gemini and AI Studio, a 5-minute free preview on each, plus AI-generated custom themes you can import.
---

# Themes

Better Sidebar restyles the whole page, not just its own panel. Pick a theme and Gemini or AI Studio changes with it — backgrounds, text, accents, and in several themes the typography too.

**Settings → Themes**

![The theme grid with colour preview strips on each card](/images/features/themes-grid.png)

## Default

The stock look. Neutral, clean, and the only theme with a light/dark/system switch:

- **Light** — light backgrounds, dark text
- **System** — follows your OS appearance setting
- **Dark** — dark backgrounds, light text

Free, and the fallback everything else reverts to.

## The 19 Presets

Every preset has a fixed light or dark palette, because the whole point of a designed theme is that the designer picked the colours. The mode switch doesn't apply to them.

### Dark

| Theme | What it is |
| --- | --- |
| **Tokyo Night** | Deep blue-black with purple, blue and peach accents |
| **Catppuccin Mocha** | Warm pastel dark, lavender and peach |
| **Dracula** | The classic — vivid purple, green and pink |
| **Nord Aurora** | Arctic dark, cool blues with frost-green accents |
| **Gruvbox** | Retro, warm earthy tones. Reading code by candlelight |
| **Everforest** | Muted forest greens with a touch of warm amber |
| **Rosé Pine** | Soft dark with muted rose and gold |
| **Solarized** | The classic balanced dark palette |
| **Midnight Purple** | Deep black with purple and indigo gradients |
| **Cyberpunk Neon** | Magenta and electric blue on near-black |
| **Retro Terminal** | Green-on-black CRT, monospace throughout |
| **High Contrast** | Stark black and white, one amber accent. Built for legibility above all |

### Light

| Theme | What it is |
| --- | --- |
| **Ocean Breeze** | Fresh light theme, ocean blue and coral |
| **Sakura** | Soft pinks and sage greens. A spring afternoon |
| **Paper & Ink** | Reading-focused, warm paper tones and elegant serif type |
| **Solarized Light** | The beloved light half of Solarized |
| **Cupertino Glass** | Frosted glass, system fonts, minimal palette |
| **Grimoire** | Aged parchment, warm tones, serif typography |
| **Graphite** | Pure grayscale. Structure with no colour at all |

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px">
  <figure style="margin:0">
    <img src="/images/features/theme-tokyo-night.png" alt="The Tokyo Night theme applied to Gemini" />
    <figcaption style="font-size:13px;opacity:.7;text-align:center">Tokyo Night</figcaption>
  </figure>
  <figure style="margin:0">
    <img src="/images/features/theme-everforest.png" alt="The Everforest theme applied to Gemini" />
    <figcaption style="font-size:13px;opacity:.7;text-align:center">Everforest</figcaption>
  </figure>
  <figure style="margin:0">
    <img src="/images/features/theme-ocean-breeze.png" alt="The Ocean Breeze theme applied to Gemini" />
    <figcaption style="font-size:13px;opacity:.7;text-align:center">Ocean Breeze</figcaption>
  </figure>
</div>

:::tip
Themes aren't purely decorative. **Paper & Ink** and **Grimoire** use serif typography and warmer backgrounds, which genuinely helps on long reading sessions. **High Contrast** exists for legibility rather than looks. **Retro Terminal** puts everything in monospace, which some people prefer when working with code. Try those three for a few minutes each even if they aren't your aesthetic — you may find one fits a particular kind of work.
:::

## Free 5-Minute Preview

Click any preset and it applies immediately, for real, on your actual page. A banner appears:

> Preview mode — theme will revert to default in 5 minutes.

After five minutes it reverts to Default on its own. There's no limit on how many previews you take.

This isn't a teaser screenshot — it's the whole theme, in your own workspace, with your own conversations. Five minutes is long enough to find out whether you'd actually enjoy using it every day.

To keep presets permanently, get the [Support Pack](/en/guide/settings/packs). One purchase, all presets, all future presets included.

## AI-Generated Themes

If none of the 19 fit, have the AI build one.

### 1. Create the generator prompt

**Settings → Themes → Create with AI**. This adds a theme-generator prompt to your [prompt library](/en/guide/sidebar/prompts-tab) and switches you to the Prompts tab. If the prompt already exists, it just takes you there.

### 2. Describe what you want

Use that prompt in a Gemini or AI Studio conversation and describe the theme:

> A dark theme inspired by a midnight forest — deep greens, soft moonlight whites, bark-brown accents, and a slightly warm feel rather than a clinical one.

The model returns a JSON theme definition.

:::tip
Describe a *mood* or a *reference*, not hex values. "Warm sunset over the ocean" produces a coherent palette; "use #FF6B35 for the accent" produces one nice colour and eighteen arbitrary ones. You can always ask for adjustments in the same conversation — "too saturated, pull the accents back" works fine.
:::

### 3. Import it

**Settings → Themes → Import Theme**, paste the JSON, and the dialog validates it before you commit. Valid themes are applied immediately and appear in the grid alongside the presets.

Importing custom themes requires the [Support Pack](/en/guide/settings/packs).

### Managing imported themes

Imported themes get a delete button on their card. Deleting one that's currently active drops you back to Default. You can keep as many as you like and switch freely.

:::tip
Because themes are just JSON, they're shareable. Paste one into a message, a gist, or a Discord channel and anyone else can import it.
:::

## What's Free

| | Free | Support Pack |
| --- | --- | --- |
| Default theme, light/dark/system | Yes | Yes |
| 19 presets | 5-minute preview | Permanent |
| Future presets | 5-minute preview | Included |
| AI generator prompt | Yes | Yes |
| Importing a custom theme | No | Yes |

The generator prompt is free to create and use — you can produce theme JSON without paying. Importing it into the extension is the part that needs the pack.
