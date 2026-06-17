---
title: Google Drive Sync
description: Sync your Better Sidebar data to Google Drive for cross-device backup. Connect, auto-sync, merge, and restore your conversations, folders, and tags from the cloud.
---

# Google Drive Sync

Google Drive Sync lets you back up your entire Better Sidebar database (conversations, folders, tags, favorites, prompts) to your Google Drive account. This means you can restore your setup on a new device, recover from data loss, or keep multiple browsers in sync.

<!-- IMG_PLACEHOLDER: drive-sync-overview — Screenshot of the Google Drive Sync section in Data Settings, showing connected status, last sync time, auto-sync toggle, and backup/restore buttons -->

## Connecting Your Drive

1. Open **Settings** → **Data** tab
2. Find the **Google Drive Sync** section
3. Click **Connect**
4. A Google OAuth popup appears — sign in and grant permission
5. Once connected, the status shows "Connected" with your sync controls visible

<!-- IMG_PLACEHOLDER: drive-sync-connect — GIF showing clicking Connect, OAuth popup, then returning to the connected state -->

The extension only requests access to its own app-specific folder in Google Drive. It cannot read your other Drive files.

:::tip
You can also access Google Drive Sync from the Files tab header — click the overflow menu (⋮) and select the sync option. This opens the same sync panel in a modal for quick access without opening full settings.
:::

## Auto-Sync

Once connected, you can enable **Auto-Sync** with a toggle switch. When active:

- Your data automatically syncs to Drive at regular intervals
- A small status indicator shows when auto-sync is running
- No manual intervention needed — your cloud backup stays current

Auto-sync direction is a merge by default — it combines local and cloud data without overwriting either side.

## Sync Directions

Better Sidebar offers three sync modes:

### Merge Sync (recommended)

Click the **Merge Sync** button for a two-way sync that combines data from both sides:

- Conversations/folders/tags that exist only locally get uploaded
- Data that exists only in the cloud gets downloaded
- No data is lost from either side

This is the safest option and the one auto-sync uses.

### Backup (Upload)

Click **Backup** to push your local database to Drive. This *overwrites* whatever was previously in the cloud with your current local state.

A confirmation dialog appears before the upload proceeds — because this is destructive to cloud data.

### Restore (Download)

Click **Restore** to pull your cloud database down and replace your local data. This *overwrites* your local state with whatever's in the cloud.

A confirmation dialog appears before the download proceeds.

:::warning
Backup and Restore are one-directional operations that overwrite data on the target side. Use Merge Sync for everyday syncing. Only use Backup/Restore when you intentionally want to force one side to match the other — like setting up a fresh browser from your cloud backup.
:::

## Last Sync Status

The sync panel shows:

- **Last sync time** — When the most recent sync completed (formatted as date + time)
- **Sync direction** — Whether the last operation was up (backup), down (restore), or merge
- **Auto-syncing indicator** — Shows when background sync is currently running

<!-- IMG_PLACEHOLDER: drive-sync-status — Screenshot showing the connected state with "Last sync: 2025-01-15 14:32 (Merge)" and auto-sync active -->

## Disconnecting

Click **Disconnect** to unlink your Google Drive account. This:

- Stops all auto-sync activity
- Removes the OAuth token from the extension
- Does *not* delete your data from Drive (it remains in your app folder)
- Does *not* affect your local data

You can reconnect at any time and your cloud data will still be there.

## Practical Workflows

### Setting up a new device

1. Install Better Sidebar on the new browser
2. Open Settings → Data → Google Drive Sync
3. Connect with the same Google account
4. Click **Restore** to pull your existing data from the cloud
5. Everything appears — folders, tags, favorites, prompts, the works

### Keeping two browsers in sync

1. Connect both browsers to the same Google account
2. Enable Auto-Sync on both
3. Merge Sync keeps them aligned without conflicts

### Before a risky operation

About to reset your database or try something experimental? Click **Backup** first. If things go wrong, you can always **Restore** from Drive.

:::tip
Google Drive Sync is the single best insurance against data loss. The setup takes 30 seconds, and once auto-sync is on, you never have to think about backups again. Just set it and forget it.
:::
