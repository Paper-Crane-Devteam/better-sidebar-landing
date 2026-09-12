---
title: Packs
description: What's free, what the Support Pack and Power Pack add, how activation works across profiles and computers, and how to move a licence.
---

# Packs

Better Sidebar's organizing tools are free and stay free. Two optional one-time purchases add extras and fund the work.

**Settings → Packs**

## What You Get

| | Free | Support Pack | Power Pack |
| --- | --- | --- | --- |
| Price | $0 | $5 | $19.99 |
| | forever | one-time, lifetime | one-time, lifetime |

### Free

Everything that makes the extension worth installing:

- Folders, tags, colors, pinning, drag-and-drop, batch operations
- Full-text search with chained filters
- Prompt library, variables, composition, slash commands
- Snippets, conversation outline, smart scrollbar, selection toolbar
- Gems, Notebooks, multi-account profiles
- Export to Markdown, plain text and JSON
- Google Drive backup and local backups with rollback
- The agent, **read-only** — query, analyze, report

No account, no sign-up, no nag screens.

### Support Pack — $5

Themes, and a way to say thanks.

- All 19 premium theme presets, unlocked permanently
- Future themes at no extra cost
- Import AI-generated custom themes
- Unlimited custom theme slots

See [Themes](/en/guide/settings/themes).

### Power Pack — $19.99

Everything in Support Pack, plus the agent stops being read-only.

- **Agent writes** — create folders, move conversations, batch-tag, rename, merge, clean up
- **Unlimited workspaces and files** (free is 1 workspace, 5 files)
- **Export to Obsidian and Notion**, single items and batches

See [Agent Overview](/en/guide/agent/overview) and [Workspace Agent](/en/guide/agent/workspace-agent).

:::tip
The honest way to decide: the free agent will tell you exactly what it *would* do to your library. Run it, read the plan, and see whether you'd want it carried out. If the answer is obviously yes, the Power Pack is the button that does it. If the plan doesn't look useful, don't buy it.
:::

## Buying

| Region | |
| --- | --- |
| International | [Gumroad](https://papercranedev.gumroad.com/l/support-pack) · [Power Pack](https://papercranedev.gumroad.com/l/power-pack) |
| China | 爱发电 — links in **Settings → Packs** |

Both are one-time purchases. There's no subscription.

**7-day no-questions-asked refund.** Email within 7 days for a full refund. No forms, no justification needed.

## Activating

Paste your token into **Settings → Packs** and click **Activate**.

Accepted formats:

| Source | Format |
| --- | --- |
| Gumroad | `XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX` |
| 爱发电 | `BS-SP-XXXXXXXX` (Support) / `BS-PP-XXXXXXXX` (Power) |

## Activation Slots

One licence covers **10 activations**, across browser profiles and computers.

An activation is consumed per **browser profile**. Worth understanding what that means in practice:

| Situation | Slots used |
| --- | --- |
| One Chrome profile on one computer | 1 |
| Work and personal Chrome profiles on the same computer | 2 |
| Chrome and Firefox on the same computer | 2 |
| Laptop and desktop, one profile each | 2 |
| Several Better Sidebar [profiles](/en/guide/settings/multi-account) inside one browser profile | 1 |

That last row is the one people get wrong. Better Sidebar's own multi-account profiles are free — they share the browser profile's activation. It's separate *browser* profiles that cost slots.

Ten is generous for normal use. You'd have to be deliberately spreading across machines to run out.

### Releasing a slot

Changing computers, or reinstalling your browser? Open **Settings → Packs** on the profile you're leaving and choose **Release this activation**.

That turns premium features off there and frees the slot. You can re-activate on that profile later with the same token.

If you see *"All 10 activation slots are in use"*, open settings on a profile you no longer use and release it.

:::warning
Release the slot *before* you wipe a browser profile or retire a machine. Releasing needs to run on the profile that holds it. If you've already lost access, contact support and it can be sorted out — but it's a round trip you can avoid with ten seconds of housekeeping.
:::

## Licence Checks

The extension re-validates the licence with the licence server periodically.

### If the server can't be reached

You get a notice, and **your licence stays active**. Retries continue in the background, and the notice tells you how long it stays valid regardless. Nothing breaks because your network had a bad day.

Common cause: a VPN or proxy blocking the request. Check that first if it persists.

### If the licence is genuinely rejected

Three possible reasons, and the extension says which:

| Reason | What happened |
| --- | --- |
| **Revoked** | Usually after a refund or chargeback |
| **Slots full** | All 10 are in use and this one is no longer among them |
| **Not recognized** | The server doesn't know this token |

If you think any of these is wrong, contact support. It's a small independent project — a real person reads the email.

## Trying Before Buying

**Themes** — click any premium theme for a genuine 5-minute preview on your actual page. Unlimited previews. See [Themes](/en/guide/settings/themes#free-5-minute-preview).

**Agent** — the read-only half is free and permanent. It'll tell you precisely what it would do to your library.

**Workspace** — 1 workspace, 5 files. Enough to run a real document review or build a small project and find out whether the feature suits how you work.

None of these are crippled demos. They're the actual features, bounded.

## Open Source

Better Sidebar is open source under GPL-3.0. The [source is on GitHub](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio).

The paid packs fund continued maintenance by a solo developer. The core organizing tools will stay free.
