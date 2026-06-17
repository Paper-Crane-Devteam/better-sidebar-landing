---
title: General Settings
description: Configure language, layout density, sidebar shortcuts, new chat behavior, and default sync folder. The core preferences that shape your everyday experience.
---

# General Settings

The General settings page is where you configure the fundamentals: what language the extension speaks, how dense the UI feels, which shortcuts appear in the sidebar, and how new chats behave.

Open it via **Settings** (gear icon or `Alt+Shift+,`) → **General** tab.

<!-- IMG_PLACEHOLDER: general-settings-overview — Screenshot of the General settings page showing the Appearance section with language dropdown and density toggle -->

## Appearance

### Language

Better Sidebar supports 7 languages:

| Language | Code |
| --- | --- |
| English | `en` |
| 简体中文 (Simplified Chinese) | `zh-CN` |
| 繁體中文 (Traditional Chinese) | `zh-TW` |
| 日本語 (Japanese) | `ja` |
| Português (Portuguese) | `pt` |
| Español (Spanish) | `es` |
| Русский (Russian) | `ru` |

Select your language from the dropdown. The change takes effect immediately — all UI labels, tooltips, and messages switch to the selected language.

### Layout Density

Controls the vertical spacing between items in the sidebar:

- **Relaxed** — More breathing room between rows. Easier to click, shows fewer items per screen.
- **Compact** — Tighter spacing, more items visible at once. Better for large libraries where you want to see more without scrolling.

<!-- IMG_PLACEHOLDER: density-comparison — Side-by-side: left shows Relaxed density with wider row spacing, right shows Compact density with tighter rows -->

:::tip
Try Compact if you have 100+ conversations. The tighter spacing means less scrolling to find what you need. If you often misclick items on touch or trackpad, Relaxed gives more target area.
:::

## Shortcuts

Shortcuts are the quick-access buttons that appear at the bottom or top of the sidebar. You can toggle each one on or off depending on what you actually use.

### Available on all platforms

| Shortcut | What it links to |
| --- | --- |
| **Favorites** | Jump to the Favorites tab |
| **Original UI** | Switch back to the native Gemini/AI Studio sidebar |

### Gemini-specific shortcuts

| Shortcut | What it links to |
| --- | --- |
| **My Stuff** | Gemini's "My Stuff" page |
| **Gems** | Gemini's Gems overview |
| **Notebooks** | Gemini's Notebooks overview |

### AI Studio-specific shortcuts

| Shortcut | What it links to |
| --- | --- |
| **Build** | AI Studio's Build page |
| **Dashboard** | AI Studio's Dashboard |
| **Documentation** | AI Studio's Documentation |

Toggle any shortcut off if you never use it — this keeps the sidebar footer clean and focused.

## Behavior

### New Chat Behavior

When you create a new conversation from the sidebar, where should it open?

- **Current Tab** (default) — The new chat replaces your current page. Fastest for sequential work.
- **New Tab** — The new chat opens in a background tab. Better when you want to keep your current conversation open and start a parallel one.

### Default Sync Folder

When Better Sidebar discovers a new conversation (via auto-sync or scanning), where should it be placed?

- **"Imported" folder** (default) — New conversations go into a default catch-all location
- **Root level** — New conversations appear at the top level of your tree
- **A specific folder** — Pick any folder you've created as the landing spot for new conversations

Click the folder picker button to choose a specific folder. To reset back to the default behavior, click the "↩ Imported" link below the picker.

<!-- IMG_PLACEHOLDER: default-sync-folder — Screenshot showing the Default Sync Folder setting with a folder picker button displaying "Work Projects" as the selected folder -->

:::tip
Set this to your "Inbox" or "Unsorted" folder and do a weekly triage — move conversations to their proper folders in batch. It keeps your tree tidy without requiring you to organize in real-time.
:::
