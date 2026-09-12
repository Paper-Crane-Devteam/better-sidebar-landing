---
title: FAQ
description: Common questions about Better Sidebar — cost, privacy, the agent, missing conversations, search gaps, and troubleshooting.
---

# FAQ

## Cost and Licensing

### Is Better Sidebar free?

The organizing tools are free and stay free: folders, tags, search, prompts, snippets, export to Markdown, backups, and the agent in read-only mode. No account needed.

Two optional one-time purchases add extras — $5 for themes, $19.99 to let the agent make changes. See [Packs](/en/guide/settings/packs).

### Is it open source?

Yes, GPL-3.0. [Source on GitHub](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio).

### Is there a subscription?

No. Both packs are one-time purchases with a 7-day no-questions-asked refund.

### How many computers can I use my licence on?

Ten activations, and one activation is consumed per *browser profile*. Better Sidebar's own multi-account profiles inside a browser don't cost extra slots. See [Activation Slots](/en/guide/settings/packs#activation-slots).

## Privacy

### Where is my data stored?

In your browser, in a local SQLite database (WASM, backed by OPFS). There is no Better Sidebar server. See the [Privacy Policy](/en/privacy).

### Does the agent send my data anywhere?

The agent runs through your existing Gemini or AI Studio session. No API keys, no extra cost, no third-party service.

What reaches Google is the same as when you type a message by hand: the prompt, which includes whatever data the agent read in order to answer. That's inherent to running on a hosted model — but nothing goes anywhere Google isn't already involved.

### Why does it need host permissions?

To run on Gemini and AI Studio pages: inject the sidebar, read conversation titles and IDs, and capture message content for search. It only requests those two sites.

Notion API access is a *separate optional* permission, requested only if you enable the Notion integration.

## Platforms

### Does it work on both Gemini and AI Studio?

Yes. Some features are platform-specific because the two sites are built differently — Zen Mode, Smart Scrollbar, selection toolbar, Gems and Notebooks are Gemini-only; bulk history import is AI Studio-only. See the [comparison table](/en/guide/settings/platform-manager#platform-differences).

### Does it work with ChatGPT or Claude?

Not currently.

### Which browsers?

Chrome and any Chromium browser (Edge, Brave, Arc, Vivaldi) from the Chrome Web Store, plus Firefox from Add-ons.

Note that Google Drive Sync is unavailable on Firefox — it needs an identity API Firefox doesn't expose. [Local backups](/en/guide/extras/data-backup) work everywhere.

### Does it work in Incognito?

Extensions don't run in Incognito unless you enable it manually in your browser's extension settings. Even then, data stored in an Incognito session may not persist.

### Will it slow Gemini down?

No. It's an overlay plus a local database. There's no network round-trip in the hot path.

## Missing Data

### My old conversations aren't in the sidebar

Only recent conversations get picked up automatically. Run **⋯ menu → Import Chat List** to pull in the full list. See [Keeping the Tree in Sync](/en/guide/sidebar/library-tab#keeping-the-tree-in-sync).

### Search can't find old conversations

Importing the chat list brings in *titles*, not *messages*. Full-text search needs message content, which is a separate step.

- **AI Studio** — bulk import from a Drive export
- **Gemini** — content is recorded as you open each chat, or ask the [agent](/en/guide/agent/better-sidebar-agent#sync-missing-messages) to sync them in bulk

Details in [Search](/en/guide/sidebar/search-tab#import-chat-history).

### Some conversations sync empty

Very old conversations are sometimes no longer retrievable from Google's side. The agent reports which ones came back empty rather than pretending it worked. There's nothing to recover in that case.

### The outline doesn't match what's on screen

Usually after branching a conversation. Use the clear-and-reload button on the [Smart Scrollbar](/en/guide/ui-customization/smart-scrollbar#when-the-outline-doesnt-match-the-page) to rebuild that conversation's saved messages.

## The Agent

### Do I need an API key?

No. It uses your existing session.

### Does it cost tokens?

No separate budget. It's the same as talking to the model yourself — because that's what it's doing.

### Can it delete things by accident?

Writes ask for approval by default, and after a task that changed data there's an **Undo changes** button. The undo window closes when the next task starts. Bulk deletes trigger an automatic [local backup](/en/guide/extras/data-backup) first.

See [Staying in Control](/en/guide/agent/overview#staying-in-control).

### It stopped in the middle and said it was looping

Deliberate. The engine detects repeated identical tool calls and repeated failures, and interrupts rather than grinding on. Read what it did, then either rephrase or start again. See [It stops itself](/en/guide/agent/overview#it-stops-itself).

### It paused and said "12 steps done on its own"

That's a check-in, not an error. After a long unattended run it pauses so you can review before it continues. **Keep going** or **Stop here**.

## Data Safety

### What happens if I clear my browser data?

Better Sidebar's database goes with it. Protect against that with [Drive Sync](/en/guide/extras/drive-sync), or an occasional database export.

Note that Drive Sync doesn't include message content — for a complete copy, use **Settings → Data & Storage → Export**.

### Can I move my data to another computer?

Yes, two ways: Drive Sync (structure only, no messages) or a database export/import (everything). See [Backups & Restore](/en/guide/extras/data-backup).

### Does deleting a conversation in Better Sidebar delete it on Google?

Yes. Delete is a real server-side deletion. If you only want it out of your sidebar, use **Hide** where available.

## Troubleshooting

### The sidebar doesn't appear

1. Confirm you're signed in to your Google account — the extension is account-bound
2. Check the platform isn't switched off in the [toolbar popup](/en/guide/settings/platform-manager)
3. Reload the page
4. Confirm the extension is enabled in your browser

### The sidebar stopped working after it was fine

Usually a platform UI update. Update the extension, or wait for a patch — these get fixed quickly. Reporting it via the in-app Feedback tab helps.

### It became unresponsive after the tab was idle a long time

Reload the page. This was fixed in v2.9.0, so make sure you're up to date.

### Where's the slash command toggle?

In the **browser toolbar popup**, not the sidebar's Settings modal. Click the Better Sidebar icon in your browser toolbar, pick the platform tab. See [Slash Commands](/en/guide/ui-customization/slash-commands#turning-it-off).

### Notion says "no pages found"

Your integration exists but hasn't been given access to any page. Notion requires connecting the integration to each page explicitly. See [Integrations](/en/guide/extras/integrations#no-pages-found).

## Getting Help

- [Report a bug or request a feature](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio/issues)
- [Discord](https://discord.gg/FRzesxaGAx)
- The in-app **Feedback** tab in the sidebar

It's a solo project. Please reach out before leaving a bad review — bugs usually get fixed fast.
