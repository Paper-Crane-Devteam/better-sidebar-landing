---
title: Google Drive Sync
description: Sync your settings and prompts across devices using Google Drive while keeping chat content local.
---

# Google Drive Sync

Better Sidebar offers optional Google Drive sync to keep your settings and prompts consistent across devices.

## What Gets Synced

| Data | Synced? |
| --- | --- |
| Settings & preferences | ✅ Yes |
| Prompt library | ✅ Yes |
| Configuration | ✅ Yes |
| Chat content / messages | ❌ Never |
| Folder structure metadata | ✅ Yes |

## How to Enable

1. Open Better Sidebar settings (gear icon)
2. Navigate to the **Sync** section
3. Click **Connect Google Drive**
4. Authorize the extension (it only requests `drive.appdata` scope)

## Privacy & Security

- The extension uses the `drive.appdata` scope, which limits access to a hidden, app-specific folder in your Google Drive
- The extension **cannot** read or modify any other files in your Drive
- Chat content and conversation history are **never** uploaded
- Sync is initiated manually — no automatic background uploads

## Syncing to Another Device

1. Install Better Sidebar on the other device
2. Connect the same Google account
3. Click **Pull from Drive** to download your settings and prompts

:::tip
This is a one-way operation each time. You choose when to push (upload) and when to pull (download).
:::
