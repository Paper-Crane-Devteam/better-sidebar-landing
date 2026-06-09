---
title: FAQ
description: Frequently asked questions about Better Sidebar for Gemini and AI Studio.
---

# FAQ

## General

### Is Better Sidebar free?

Yes, Better Sidebar is free and open source under the GPL-3.0 license.

### Does it work with both Gemini and AI Studio?

Yes. Better Sidebar works on both [gemini.google.com](https://gemini.google.com) and [aistudio.google.com](https://aistudio.google.com).

### Is my data safe?

All data is stored locally in your browser using SQLite WASM. We do not collect, store, or transmit your data to any server. See our [Privacy Policy](/en/privacy) for details.

## Technical

### Why does the extension need host permissions?

Better Sidebar needs to run on Gemini and AI Studio pages to inject the sidebar overlay and read conversation titles/IDs for organization.

### Does it work in Incognito/Private mode?

By default, Chrome extensions don't run in Incognito mode. You can enable it manually in your browser's extension settings, but note that data stored in Incognito mode may not persist.

### Will it slow down Gemini or AI Studio?

No. The extension runs a lightweight overlay and uses an optimized SQLite database. Impact on page performance is negligible.

### Can I use it with multiple Google accounts?

Yes. Better Sidebar supports multi-account usage. It detects which account is active and keeps each account's conversations separate.

## Troubleshooting

### The sidebar doesn't appear

1. Make sure the extension is enabled in your browser's extension management
2. Try refreshing the page
3. Check if the extension has permission to run on the current site

### Search doesn't find recent conversations

The search index updates when conversations are loaded. Try scrolling through your conversation list to trigger indexing of older conversations.

### Data disappeared after clearing browser data

Better Sidebar stores data in your browser's local storage (IndexedDB / OPFS). Clearing browser data will remove it. Use the Export Database feature for regular backups.

## Contributing

Better Sidebar is open source. You can:

- [Report bugs](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio/issues)
- [Submit feature requests](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio/issues)
- [Contribute code](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio)
