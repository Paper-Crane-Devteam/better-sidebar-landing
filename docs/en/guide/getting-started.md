---
title: Getting Started
description: Quick introduction to Better Sidebar for Gemini and AI Studio — what it does, how to set it up, and where to go next.
---

# Getting Started

Better Sidebar is a browser extension that gives **Google Gemini** and **Google AI Studio** a proper organizational layer — folders, tags, full-text search, a prompt library, a snippet library, and an AI agent that can do the filing for you. It runs entirely in your browser with no external servers. Your data stays yours.

![Better Sidebar running on Gemini, with the folder tree, tags and filters visible](/images/features/overview.webp)

## What You Can Do

| | |
| --- | --- |
| **Organize** | Nested folders with colors, tags, favorites, pinning, drag-and-drop, batch operations |
| **Find** | Full-text search across every message, plus a per-conversation outline |
| **Reuse** | Prompt library with variables and composition, triggered by typing `/` |
| **Keep** | Snippet library — save the one good paragraph out of a 50-turn chat |
| **Delegate** | An AI agent that files, tags, renames and cleans up your library on request |
| **Export** | Markdown, plain text, JSON, Obsidian, Notion |
| **Back up** | Local snapshots plus optional Google Drive sync |
| **Restyle** | 20+ themes, adjustable widths, Zen Mode, Compact Mode |

Each of these has its own guide — see [Next Steps](#next-steps).

## Supported Platforms

| Platform | Status |
| --- | --- |
| Google Gemini (gemini.google.com) | Supported |
| Google AI Studio (aistudio.google.com) | Supported |

Some features are platform-specific because the two sites are built differently. Gemini-only features include Zen Mode, the Smart Scrollbar, the selection toolbar, Gems and Notebooks. AI Studio-only features include bulk history import and the Run Settings auto-collapse. Everything else works on both.

## Supported Browsers

| Browser | Link |
| --- | --- |
| Chrome | [Chrome Web Store](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj) |
| Firefox | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio) |
| Edge | Coming soon |

Any Chromium browser (Brave, Arc, Vivaldi, Edge) can install the Chrome Web Store build.

## Quick Start

### 1. Install the extension

Head to the [Chrome Web Store](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj) (or [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio)) and install. For detailed steps, see the [Installation guide](/en/guide/installation).

### 2. Sign in to your Google account

Better Sidebar is **account-bound**. You must be signed in on Gemini or AI Studio for the extension to work. The sidebar detects your active account and creates an independent database for it — this is also how [multi-account support](/en/guide/settings/multi-account) works.

### 3. Open Gemini or AI Studio

Navigate to [gemini.google.com](https://gemini.google.com) or [aistudio.google.com](https://aistudio.google.com). Better Sidebar replaces the native sidebar automatically.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">
  <img src="/images/features/overview-gemini.webp" alt="Better Sidebar on Gemini" />
  <img src="/images/features/overview-aistudio.webp" alt="Better Sidebar on AI Studio" />
</div>

You can flip back to the platform's own sidebar at any time with `Alt+Shift+Q`, or the **Switch to Original Sidebar** button in the sidebar footer. Nothing is lost when you do — your folders and tags are still there when you switch back.

### 4. Import your chat list

:::tip Important
On first install, Better Sidebar only sees your **most recent** conversations — the ones the platform happens to render. Older chats need to be imported before they show up in the tree.
:::

A prompt appears on first launch offering to import the full list. If you skipped it, run it any time from the **⋯** menu in the sidebar header → **Import Chat List**.

This imports titles and metadata only, which is enough for organizing. To make old conversations *searchable*, see the next step.

### 5. Make old conversations searchable

Full-text search only works on messages the extension has actually seen.

**On AI Studio** there's a bulk import: **Settings → Data & Storage → Import Chat Data**. It walks you through exporting your library to Google Drive, downloading the ZIP, and uploading it. See [Search](/en/guide/sidebar/search-tab#import-chat-history).

**On Gemini** there's no bulk export from Google, so messages get recorded as you open each conversation. The fastest way to catch up is to let the [agent](/en/guide/agent/overview) do it — ask it to *"sync the contents of my 20 most recent chats"* and it will walk through them for you.

### 6. Try the basics

- **Create a folder** — click the folder+ icon in the header, type a name, press Enter, then drag a conversation into it
- **Search** — press `Alt+2`, type any word you remember from an old chat
- **Save a prompt** — go to Prompts (`Alt+3`), click **+**, then type `/` in the chat input to insert it
- **Save a snippet** — highlight any part of a Gemini answer and click **Save as Snippet** in the toolbar that appears
- **Ask the agent** — type `>` in the chat input, pick **Better Sidebar**, and ask it to organize your unfiled chats

## Next Steps

| I want to… | Go to |
| --- | --- |
| Organize conversations into folders and tags | [Library](/en/guide/sidebar/library-tab) |
| Find something in an old conversation | [Search](/en/guide/sidebar/search-tab) |
| Navigate a very long conversation | [Outline](/en/guide/sidebar/outline) · [Smart Scrollbar](/en/guide/ui-customization/smart-scrollbar) |
| Build a reusable prompt library | [Prompts](/en/guide/sidebar/prompts-tab) · [Slash Commands](/en/guide/ui-customization/slash-commands) |
| Keep the good parts of an answer | [Snippets](/en/guide/sidebar/snippets-tab) |
| Have AI clean up my library for me | [Agent](/en/guide/agent/overview) |
| Work on files and documents with AI | [Workspace Agent](/en/guide/agent/workspace-agent) |
| Get chats out into Obsidian or Notion | [Export](/en/guide/extras/export) · [Integrations](/en/guide/extras/integrations) |
| Adjust widths, Zen Mode, Compact Mode | [Layout & Width](/en/guide/ui-customization/layout-and-width) |
| Sync or back up my data | [Drive Sync](/en/guide/extras/drive-sync) · [Backups](/en/guide/extras/data-backup) |
| Change theme or hotkeys | [Themes](/en/guide/settings/themes) · [Keyboard Shortcuts](/en/guide/settings/keyboard-shortcuts) |
| Understand what's free and what's paid | [Packs](/en/guide/settings/packs) |
