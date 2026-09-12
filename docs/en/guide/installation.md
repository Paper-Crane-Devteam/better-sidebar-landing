---
title: Installation
description: Install Better Sidebar on Chrome, Firefox or any Chromium browser, and what happens on first launch.
---

# Installation

Installs in seconds. No account, no configuration, no sign-up.

## Chrome and Chromium Browsers

1. Open the [Chrome Web Store page](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj)
2. Click **Add to Chrome**
3. Visit [gemini.google.com](https://gemini.google.com) or [aistudio.google.com](https://aistudio.google.com)

The same build works on Edge, Brave, Arc and Vivaldi — install it from the Chrome Web Store.

## Firefox

1. Open the [Firefox Add-ons page](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio)
2. Click **Add to Firefox**
3. Visit Gemini or AI Studio

:::warning
Google Drive Sync isn't available on Firefox — it needs an identity API Firefox doesn't expose. Everything else works, and [local backups](/en/guide/extras/data-backup) plus manual database export cover the same ground.
:::

## You Must Be Signed In

Better Sidebar is account-bound. It activates on the platform page **after** you sign in to your Google account. If you land on Gemini signed out, nothing appears until you do.

The account it detects becomes the profile your data belongs to. See [Multi-Account](/en/guide/settings/multi-account).

## First Launch

On your first visit after installing, you'll see:

1. **A welcome screen** explaining what the extension does
2. **An offer to import your chat list** — worth accepting. Without it, only the conversations the platform happens to render are visible. See [Import Chat List](/en/guide/sidebar/library-tab#import-chat-list).
3. **An optional guided tour** of the sidebar tabs

New conversations land in an **Inbox** folder by default, so nothing gets lost while you're deciding on a folder structure.

:::tip
Say yes to the import. It's the difference between a sidebar showing your last twenty chats and one showing everything you've ever done. It only takes a moment and you can always run it later from the **⋯** menu.
:::

## Language

The interface language is guessed from your browser locale on install. Seven languages are supported — change it in **Settings → General → Language** if the guess was wrong.

## Updating

Browsers update extensions automatically. You can force a check from your browser's extension management page.

After an update you'll see a **What's New** dialog summarizing the release, with a link to the full changelog. It can be dismissed and reopened from **Settings → About → View Changelog**.

## If the Sidebar Doesn't Appear

1. Confirm you're signed in to Google on that page
2. Reload
3. Check the platform isn't switched off in the [browser toolbar popup](/en/guide/settings/platform-manager)
4. Confirm the extension is enabled in your browser

Platform UI updates occasionally break things. If the sidebar worked yesterday and doesn't today, update the extension — and report it through the in-app **Feedback** tab, since these get patched quickly.

## Uninstalling

Right-click the extension icon → **Remove extension**.

:::warning
Uninstalling deletes the local database — every folder, tag, favorite, prompt and snippet.

**Export first** if you want any of it back: **Settings → Data & Storage → Export** gives you a single `.db` file you can import into a fresh install. A [Drive backup](/en/guide/extras/drive-sync) also survives uninstalling, though it doesn't include message content.
:::
