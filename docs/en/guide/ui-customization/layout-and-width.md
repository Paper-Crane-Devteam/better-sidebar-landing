---
title: Layout & Width
description: Fine-tune your workspace dimensions with adjustable sidebar width, chat content width, and input box width. Plus Focus Mode and Zen Mode for distraction-free work.
---

# Layout & Width

Better Sidebar gives you pixel-level control over how much screen real estate each part of the UI gets. No more fighting with Gemini's default layout — you decide exactly how wide the sidebar is, how much space the chat takes up, and whether the input box should stretch edge to edge.

<!-- IMG_PLACEHOLDER: layout-overview — Annotated screenshot showing the three width zones: sidebar panel, chat content area, and input box, each with their slider values displayed -->

## Sidebar Width

The sidebar panel itself can be resized. This is especially useful on smaller screens where you want the sidebar narrower, or on ultrawide monitors where you have pixels to spare.

### Gemini

- Range: **300px – 550px**
- Default: 380px

### AI Studio

- Range: **280px – 500px**
- Default: 320px

Adjust the slider in **Settings → Platform → Layout Dimensions → Sidebar Width**. The change applies instantly — no reload needed.

<!-- IMG_PLACEHOLDER: sidebar-width-slider — Screenshot of the sidebar width slider in platform settings, showing the current value in pixels -->

:::tip
On a standard 1080p monitor, 350–380px works well. On ultrawide, try 450px+ and use the extra width for longer conversation titles to show without truncation.
:::

## Chat Content Width (Gemini only)

This controls how wide the actual message area is within the main content panel. Gemini's default is often quite narrow — you can expand it to fill more of the screen.

- Range: **40% – 100%**
- Default: varies by Gemini's native behavior

At 100%, messages stretch across the full width of the content area. At lower percentages, messages are centered with whitespace on the sides (like a centered blog layout).

<!-- IMG_PLACEHOLDER: chat-width-comparison — Side-by-side comparison: left shows 60% chat width (centered), right shows 100% chat width (full) -->

:::tip
Code-heavy conversations benefit from 85–100% width. General text conversations are more readable at 60–75%, where the line length stays comfortable for your eyes.
:::

## Input Box Width (Gemini only)

Separate from chat content width, you can control how wide the input/prompt box is. This means you can have a wide chat area but a narrower input field, or match them for visual consistency.

- Range: **40% – 100%**
- Default: matches chat width

Adjust via the slider in **Settings → Platform → Layout Dimensions → Input Box Width**.

## Zen Mode (Gemini only)

Zen Mode is a distraction-free writing environment. When enabled, it hides non-essential UI elements so you can focus entirely on the conversation.

<!-- IMG_PLACEHOLDER: zen-mode — Before/after comparison: left shows normal UI with header, sidebar controls, disclaimer; right shows Zen Mode with just the chat and input visible -->

Toggle Zen Mode via:

- **Settings → Platform → Additional Features → Zen Mode** (switch)
- **Keyboard shortcut**: `Alt+Shift+Z` (default)

What Zen Mode hides:

- The Gemini logo/brand elements
- The AI disclaimer at the bottom
- Other visual chrome around the conversation

What remains:

- Your messages and the model's responses
- The input box for typing
- The Better Sidebar panel (if open)

:::tip
Zen Mode pairs well with a wider chat width (90–100%). Set both, and you get a clean full-screen writing experience that's great for long brainstorming sessions or deep work.
:::

## Element Visibility (Gemini only)

Beyond Zen Mode, you can individually toggle specific UI elements:

| Element | What it does when hidden |
| --- | --- |
| **Gemini Logo** | Removes the brand logo from the top area |
| **AI Disclaimer** | Hides the "Gemini may display inaccurate info" disclaimer |
| **Upgrade Button** | Removes the upsell button (if present on your account) |
| **Hotkey Helper** | Hides the keyboard shortcut hints overlay |

Each toggle is in **Settings → Platform → Element Visibility**. These are independent of Zen Mode — you can hide the disclaimer but keep everything else visible, for example.

## Auto-hide Input

Available on both Gemini and AI Studio. When enabled, the input box becomes translucent and shrinks when you're scrolling through a conversation. It reappears at full opacity when you move your cursor near it or scroll to the bottom.

This gives you more vertical space for reading long conversations while still keeping the input accessible.

- **Gemini**: Settings → Platform → Additional Features → Auto-hide Input
- **AI Studio**: Settings → Platform → Additional Features → Auto-hide Input

## Auto-hide Run Settings (AI Studio only)

On AI Studio, the "Run settings" panel (temperature, safety settings, etc.) can take up valuable space. Enable this toggle to auto-collapse it when you're not actively adjusting parameters.

Find it in **Settings → Platform → Additional Features → Auto-hide Run Settings**.

:::tip
If you find yourself constantly tweaking layout dimensions, remember that changes are saved instantly and persist across sessions. Spend a few minutes finding your sweet spot once, and you're set.
:::
