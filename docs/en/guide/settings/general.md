---
title: General
description: Interface language, which shortcut buttons appear in the sidebar, and the delete-confirmation behaviour.
---

# General

The General page holds three small things: what language the extension speaks, which shortcut buttons clutter your sidebar, and whether deleting asks first.

Open it with the gear icon or `Alt+Shift+,`, then pick **General**.

## Language

Better Sidebar is fully translated into 7 languages:

| Language | |
| --- | --- |
| English | `en` |
| 简体中文 | `zh-CN` |
| 繁體中文 | `zh-TW` |
| 日本語 | `ja` |
| Português | `pt` |
| Español | `es` |
| Русский | `ru` |

The change applies immediately — labels, tooltips, dialogs, changelog, everything. On first install the language is guessed from your browser's locale.

This setting is independent of what language Gemini itself is running in.

## Sidebar Shortcuts

These are the quick-link buttons in the sidebar. Each one has a switch, so you can hide the ones you never press.

**On both platforms**

| Shortcut | Goes to |
| --- | --- |
| **Favorites** | Your Favorites tab |
| **Switch to Original Sidebar** | The platform's own sidebar |

**Gemini only**

| Shortcut | Goes to |
| --- | --- |
| **My Stuff** | Gemini's My Stuff page |
| **Gems** | Gemini's Gems overview |
| **Notebooks** | Gemini's Notebooks overview |

**AI Studio only**

| Shortcut | Goes to |
| --- | --- |
| **Build** | AI Studio's Build page |
| **Dashboard** | AI Studio's Dashboard |
| **Documentation** | AI Studio's docs |

The list you see depends on which site you're on — Gemini shortcuts don't appear while you're in AI Studio.

:::tip
If you're going to use [Compact Mode](/en/guide/ui-customization/layout-and-width#compact-mode) anyway, don't bother tuning these — compact mode hides the whole icon bar. This page is for people who want a *slightly* tidier sidebar rather than a bare one.
:::

## Behavior

### Delete conversations without confirmation

Off by default, and we'd suggest leaving it that way.

With it on, deleting a single conversation happens the instant you click — no dialog, no undo, and the conversation is removed from Google's servers as well as from Better Sidebar.

Batch delete still asks for confirmation regardless of this setting.

:::warning
This is the only setting in Better Sidebar that can lose data with a single misclick. Turn it on only if you're deliberately doing a lot of one-at-a-time cleanup and you're confident about what you're clicking. Batch Mode is usually the better answer for bulk deletion, because it shows you exactly what's selected before it runs.
:::

## Where Everything Else Lives

The General page is intentionally small. The settings people usually come looking for are elsewhere:

| Looking for | Go to |
| --- | --- |
| Theme, light/dark mode | [Themes](/en/guide/settings/themes) |
| Default view mode, sort order, ignored folders | [Library](/en/guide/settings/library) |
| Widths, Zen Mode, element visibility | [Layout & Width](/en/guide/ui-customization/layout-and-width) |
| Hotkeys | [Keyboard Shortcuts](/en/guide/settings/keyboard-shortcuts) |
| Backups, Drive sync, profiles, reset | [Backups](/en/guide/extras/data-backup) · [Drive Sync](/en/guide/extras/drive-sync) · [Multi-Account](/en/guide/settings/multi-account) |
| Notion connection | [Integrations](/en/guide/extras/integrations) |
| Agent permissions and skills | [Skills & Tools](/en/guide/agent/skills-and-tools) |
| Licences and what's paid | [Packs](/en/guide/settings/packs) |
