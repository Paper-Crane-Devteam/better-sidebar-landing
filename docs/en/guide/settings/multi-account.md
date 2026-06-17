---
title: Multi-Account
description: Create separate profiles for different Google accounts or use cases. Each profile has its own database, folders, tags, and settings — switch between them instantly.
---

# Multi-Account

If you use multiple Google accounts (personal, work, school) or want separate organization systems for different use cases, Multi-Account profiles let you keep everything cleanly separated. Each profile has its own independent database — its own folders, tags, favorites, and conversation index.

<!-- IMG_PLACEHOLDER: multi-account-overview — Screenshot of the Data Settings showing the active profile card with bound accounts, and other profiles listed below with Switch/Rename/Delete actions -->

## How Profiles Work

A profile is essentially a separate database. When you switch profiles:

- The entire sidebar reloads with that profile's data
- Folders, tags, favorites, prompts — all specific to the active profile
- Your conversations on the platform don't change (they live on Google's servers), but how they're *organized* in Better Sidebar changes completely

Think of it like having multiple desktops on your computer — same apps, different arrangements.

## Your First Profile

When you first install Better Sidebar, a default profile is created automatically. It's bound to whatever Google accounts you use on Gemini and AI Studio. You'll see it in Settings → Data as the active profile card, showing:

- The profile name
- Bound platform accounts (e.g., "Gemini: user@gmail.com")
- Export/Import/Reset buttons for that profile's database

## Creating a New Profile

1. Open **Settings → Data** tab
2. Scroll to the bottom of the storage section
3. Click **New Profile**
4. Type a name (e.g., "Work", "Personal", "Research")
5. Press Enter or click Create

<!-- IMG_PLACEHOLDER: multi-account-create — GIF showing clicking New Profile, typing "Work Projects", pressing Enter, and the new profile appearing in the list -->

The new profile starts with an empty database. Switch to it and the sidebar will be blank — ready for you to organize from scratch for that specific use case.

:::tip
Name profiles after accounts or roles: "Personal Gmail", "Work (company.com)", "Side Project". Clear names make it obvious which profile to switch to.
:::

## Switching Profiles

In the profiles list (Settings → Data), each inactive profile has a **Switch** button that appears on hover. Click it to:

1. Save the current profile's state
2. Load the target profile's database
3. Refresh the sidebar with the new profile's data

A toast notification confirms the switch: "Switched to: Work Projects"

<!-- IMG_PLACEHOLDER: multi-account-switch — Screenshot showing hovering over an inactive profile with the Switch, Rename, and Delete buttons visible -->

The switch is nearly instant — it's just swapping which database file is active.

## Account Binding

Profiles automatically bind to the Google accounts you use while they're active. If you switch to the "Work" profile and then visit Gemini logged into your work account, that account gets associated with the "Work" profile.

Bound accounts are shown as badges on the profile card:

- Platform icon (Gemini/AI Studio)
- Username/email

This helps you remember which profile goes with which account.

## Renaming a Profile

Hover over a profile → click the **pencil** icon (✏️). An inline text field appears — type the new name and press Enter. Press Escape to cancel.

## Deleting a Profile

Hover over a profile → click the **trash** icon (🗑️). A confirmation dialog appears explaining that the profile's database will be permanently deleted.

Rules:
- You cannot delete the currently active profile (switch to another one first)
- Deletion removes the profile's database file — all its folders, tags, and organization data are gone
- Conversations on Google's servers are not affected

:::warning
Deleting a profile is permanent. The entire database (folders, tags, favorites, prompts, indexed messages) for that profile is destroyed. Export the profile's database first if you might want it back.
:::

## Practical Use Cases

### Separate work and personal

- **Profile 1: Personal** — Fun projects, learning conversations, creative writing
- **Profile 2: Work** — Client conversations, meeting notes, code reviews

Each has its own folder structure, tag system, and favorites. Your work conversations don't clutter your personal sidebar and vice versa.

### Multiple Google accounts

If you log into Gemini with different accounts for different purposes, create a profile for each. The account binding helps you remember which is which.

### Clean slate experiments

Want to try a completely different organization system without losing your current one? Create a new profile, experiment freely, and switch back if it doesn't work out.

:::tip
Multi-Account profiles pair perfectly with [Google Drive Sync](/better-sidebar/en/guide/extras/drive-sync). Each profile can be backed up independently to Drive, giving you cloud safety for all your organizational systems.
:::
