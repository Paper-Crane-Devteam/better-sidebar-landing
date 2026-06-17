---
title: Themes
description: Choose from built-in themes, preview premium presets, generate custom themes with AI, or import community-made themes. Light, dark, and system mode support included.
---

# Themes

Better Sidebar ships with multiple visual themes and gives you tools to create your own. From the default look to retro terminal green-on-black, there's a preset for every taste — and if none fit, the AI theme generator helps you design exactly what you want.

Open theme settings via **Settings** → **Themes** tab.

<!-- IMG_PLACEHOLDER: themes-overview — Screenshot of the Themes settings page showing the 2x grid of theme cards with color preview strips, and the light/dark/system toggle above -->

## Light, Dark & System

When using the Default or Classic theme, a mode toggle appears at the top:

- **Light** ☀️ — Light backgrounds, dark text
- **System** 🖥️ — Follows your OS appearance setting automatically
- **Dark** 🌙 — Dark backgrounds, light text

This toggle only shows for themes that support both modes. Custom preset themes typically have a fixed color scheme.

## Built-in Themes

### Default

The standard Better Sidebar look. Clean, neutral, professional. Works well in both light and dark modes. This is what you get out of the box.

### Classic (Gemini only)

The classic Gemini aesthetic — a slightly blue-tinted background that matches Gemini's original sidebar design. If you prefer the familiar Google look, this is for you.

## Premium Theme Presets

Better Sidebar includes designer themes that are part of the **Supporter Pack**. These are fully usable — you can preview them for 5 minutes before they revert, or unlock them permanently by purchasing the Supporter Pack.

<!-- IMG_PLACEHOLDER: themes-premium-grid — Screenshot showing the premium theme cards with sparkle badges, each showing a distinct color palette preview -->

### Grimoire

A warm, parchment-toned theme with deep burgundy accents. Think old books and magical artifacts. Great for long reading sessions where you want something easy on the eyes.

### Cupertino Glass

A clean, Apple-inspired look with pure whites, subtle grays, and that signature blue accent. Minimal and modern.

### Retro Terminal

Green text on black — the classic terminal aesthetic. Bright green accents with amber secondary highlights. Perfect for the developer who wants their AI chat to feel like hacking in a movie.

### Preview Mode

Click any premium theme to activate a **5-minute preview**. The theme applies immediately with a banner showing:

> 👁 Preview active — theme will revert in 5 minutes

After 5 minutes, it automatically reverts to your previous theme. To keep a premium theme permanently, purchase the [Supporter Pack](/better-sidebar/en/guide/settings/multi-account).

:::tip
Preview mode lets you test drive premium themes in your actual workflow before deciding. Try each one for a few minutes to see which one you'd actually enjoy using daily.
:::

## AI Theme Generator

Don't like any of the presets? Generate your own using AI:

<!-- IMG_PLACEHOLDER: themes-ai-generator — Screenshot of the AI Theme Generator section with "Create Prompt" and "Import Theme" buttons -->

### Step 1: Create the Generator Prompt

Click **Create Prompt**. This adds a special prompt template to your [Prompt Library](/better-sidebar/en/guide/sidebar/prompts-tab) called "Better Sidebar Theme Generator". It contains instructions for the AI to generate theme CSS variables.

### Step 2: Use the Prompt with Gemini

Switch to the Prompts tab, find the theme generator prompt, and use it in a conversation. Describe the colors, mood, or aesthetic you want:

> "Create a dark theme inspired by a midnight forest — deep greens, soft moonlight whites, bark-brown accents"

The AI generates a JSON/CSS variable block you can copy.

### Step 3: Import the Theme

Click **Import Theme** back in the Themes settings. Paste the generated theme JSON into the import dialog and click "Import & Apply". Your custom theme is saved locally and appears in the theme grid alongside the built-in options.

:::tip
The AI theme generator works best when you describe a *mood* or *reference* rather than specific hex values. "Warm sunset over the ocean" gives better results than "use #FF6B35 for the accent".
:::

## User-Created Themes

Imported themes appear in the grid with a small delete button (🗑) in the corner. To remove a user theme:

1. Hover over the theme card
2. Click the trash icon
3. The theme is deleted immediately

If the deleted theme was currently active, Better Sidebar reverts to the Default theme.

You can have multiple user themes installed at once and switch between them freely.

## Supporter Pack

The Supporter Pack unlocks:

- All premium theme presets (no 5-minute preview limit)
- Unlimited AI-generated theme usage
- Cross-device theme sync (via Google Drive)
- Support for continued development

Purchase links are available on the **Supporter Pack** tab in Settings, with options via Gumroad or 爱发电 (Afdian).

:::tip
Even without the Supporter Pack, you have full access to the Default theme, Classic theme, light/dark/system modes, the AI theme generator, and custom theme imports. The pack just adds the curated premium presets and removes the preview timer.
:::
