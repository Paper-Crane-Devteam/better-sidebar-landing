---
title: Data Backup & Restore
description: Export your entire Better Sidebar database as a portable file, import it on another browser, or reset to a fresh start. Full control over your data.
---

# Data Backup & Restore

Better Sidebar stores all your organization data (folders, tags, favorites, conversation metadata, message content) in a local SQLite database. The Data section in Settings gives you full control: export the whole thing as a file, import a backup, or reset everything.

<!-- IMG_PLACEHOLDER: data-backup-overview — Screenshot of the Data Settings section showing the active profile card with Export, Import, and Reset buttons -->

## Exporting Your Database

Click **Export** to download your entire database as a `.db` file. This is a raw SQLite database containing everything Better Sidebar knows:

- Folder structure and colors
- Tags and tag assignments
- Favorites
- Conversation metadata (titles, dates, types)
- Indexed message content
- Prompt library entries
- All settings and preferences

The file downloads immediately to your downloads folder, named with a timestamp for easy identification.

:::tip
Export regularly if you're not using [Google Drive Sync](/better-sidebar/en/guide/extras/drive-sync). It only takes a second and gives you a safety net in case anything goes wrong with your browser or extension.
:::

## Importing a Database

Click **Import** to restore from a previously exported `.db` file. The file picker accepts `.db`, `.sqlite`, and `.sql` files.

When you import:

1. Select your backup file
2. The extension reads the file and replaces your current database
3. The page reloads to reflect the new data

<!-- IMG_PLACEHOLDER: data-import — GIF showing clicking Import, selecting a .db file, and the page refreshing with restored data -->

:::warning
Importing a database replaces your current data entirely. Export your current database first if you want to keep a backup of what you have now. There's no merge — it's a full replacement.
:::

## Resetting Your Database

The nuclear option. Click **Reset Database** to wipe all Better Sidebar data and start fresh:

- All folders, tags, favorites — gone
- All conversation metadata and indexed messages — cleared
- Prompt library — emptied
- Settings — preserved (they're stored separately)

A confirmation dialog makes sure you really mean it. This is not reversible unless you have a backup.

The reset button is visually distinct (red, in a warning-styled container) to prevent accidental clicks.

:::warning
Reset is permanent and irreversible. Always export your database first if there's even a small chance you'll want any of that data back.
:::

## Library Sync

Before exporting, you might want to make sure your database is up to date with your latest conversations.

### Scan Library

Click **Scan Library** to walk through your conversation list on the current platform and import any titles/metadata that might be missing. This is useful if:

- You've been using Gemini/AI Studio without the extension installed
- Some conversations aren't showing up in the sidebar
- You want to ensure completeness before backing up

### Import Conversation Data (AI Studio)

For AI Studio specifically, you can import full message content from a Google Drive export. Click **Import Conversation Data** to open the import dialog, which guides you through:

1. Exporting your AI Studio conversations to Google Drive
2. Downloading them as a ZIP
3. Uploading the ZIP for Better Sidebar to index

This indexes the actual *content* of your messages, making them searchable via the [Search tab](/better-sidebar/en/guide/sidebar/search-tab).

## Where to Find These Controls

All backup/restore operations live in **Settings → Data** tab, inside the active profile card. You'll see:

| Action | What it does |
| --- | --- |
| **Export** | Downloads your full database as a `.db` file |
| **Import** | Replaces your database with an uploaded `.db` file |
| **Reset** | Wipes all data and starts fresh |
| **Scan Library** | Re-imports conversation titles/metadata |
| **Import Conversation Data** | Bulk-indexes message content from export files |

:::tip
A good rhythm: export your database once a week (or enable Google Drive auto-sync). If something ever goes wrong — a corrupted database, a bad extension update, accidentally deleted data — you can be back up and running in seconds by importing your backup.
:::
