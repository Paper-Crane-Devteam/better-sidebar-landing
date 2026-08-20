---
title: Platform Manager
description: Platform-specific settings for Gemini and AI Studio — control layout dimensions, element visibility, and enhanced features unique to each platform.
---

# Platform Manager

The Platform Manager contains settings that are specific to the platform you're currently using. Since Gemini and AI Studio have different UIs, the available options change depending on which site you're on.

Open it via **Settings** → **Platform** tab.

<!-- IMG_PLACEHOLDER: platform-settings-overview — Screenshot of the Platform settings tab showing the Gemini platform view with Layout Dimensions, Element Visibility, and Additional Features sections -->

## Gemini Settings

When you're on `gemini.google.com`, the Platform tab shows Gemini-specific controls.

### Layout Dimensions

| Setting | Range | Default | Description |
| --- | --- | --- | --- |
| **Sidebar Width** | 300–550px | 380px | Width of the Better Sidebar panel |
| **Chat Content Width** | 40–100% | varies | How wide the message area is within the main content |
| **Input Box Width** | 40–100% | varies | Width of the prompt input field |

All three are slider controls with a live pixel/percentage readout. Changes apply immediately — drag the slider and watch the layout adjust in real time.

<!-- IMG_PLACEHOLDER: platform-gemini-sliders — Screenshot of the three width sliders in Gemini Platform settings, each showing their current value -->

:::tip
For details on using these width controls effectively, see the dedicated [Layout & Width](/en/guide/ui-customization/layout-and-width) page.
:::

### Element Visibility

Toggle individual Gemini UI elements on or off:

| Element | What the toggle does |
| --- | --- |
| **Gemini Logo** | Show/hide the Gemini brand logo in the header area |
| **AI Disclaimer** | Show/hide the "Gemini may display inaccurate info" warning |
| **Upgrade Button** | Show/hide the subscription upsell button (only appears if your account has one) |
| **Hotkey Helper** | Show/hide the keyboard shortcut hints overlay |

Each toggle is independent. Hide whatever you find distracting while keeping elements you find useful.

### Additional Features

Enhanced functionality toggles:

| Feature | Description |
| --- | --- |
| **Zen Mode** | Distraction-free mode that hides most chrome. [Learn more](/en/guide/ui-customization/layout-and-width#zen-mode-gemini-only) |
| **Quick Resend** | Adds a resend button to quickly re-submit your last prompt |
| **Show Conversation Tag** | Displays the conversation's tag in the top bar for quick context |
| **Remove Auto Watermark** | Disables SynthID watermark on AI-generated images. [Learn more](/en/guide/ui-customization/image-download) |
| **Smart Scrollbar** | Shows a floating conversation outline for navigation. [Learn more](/en/guide/ui-customization/smart-scrollbar) |
| **Auto-hide Input** | Makes the input box semi-transparent when scrolling through messages |

## AI Studio Settings

When you're on `aistudio.google.com`, the Platform tab shows AI Studio-specific controls.

### Layout Dimensions

| Setting | Range | Default | Description |
| --- | --- | --- | --- |
| **Sidebar Width** | 280–500px | 320px | Width of the Better Sidebar panel |

AI Studio has a simpler layout model, so there's just the one width control (no separate chat/input width sliders).

<!-- IMG_PLACEHOLDER: platform-aistudio-settings — Screenshot of the AI Studio Platform settings showing the sidebar width slider and feature toggles -->

### Additional Features

| Feature | Description |
| --- | --- |
| **Auto-hide Input** | Collapses the input area when scrolling through messages. Re-appears on hover or at the bottom of the chat. |
| **Auto-hide Run Settings** | Auto-collapses the "Run settings" panel (temperature, safety, etc.) when not in use. Gives more vertical space for the chat. |
| **Hotkey Helper** | Show/hide the keyboard shortcut hints overlay |

## Quick Access

You don't always need to open the full Settings modal to adjust platform settings. On Gemini, there's a **Quick Controls** dropdown accessible from the top bar that mirrors the most common platform toggles (width, visibility, features). It's a compact floating panel for rapid adjustments.

:::tip
The Platform Manager is context-aware — it only shows settings relevant to the platform you're currently on. You won't see Gemini settings while on AI Studio, and vice versa. This keeps the settings panel focused and free of options that don't apply.
:::

## Settings Persistence

All platform settings are saved instantly and persist across browser sessions. They're also included in your database exports and Google Drive backups, so restoring a backup brings back your layout preferences too.

:::tip
If you switch between Gemini and AI Studio regularly, each platform remembers its own settings independently. Set up your preferred sidebar width on Gemini (say 420px) and a different width on AI Studio (say 300px) — both are saved and applied automatically when you visit each site.
:::
