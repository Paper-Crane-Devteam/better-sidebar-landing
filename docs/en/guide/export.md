---
title: Conversation Export
description: Export your AI conversations in multiple formats for backup, sharing, or analysis.
---

# Conversation Export

Better Sidebar lets you export conversations in multiple formats so your data is always portable.

## Supported Formats

- **Markdown** — Clean, readable format suitable for documentation
- **JSON** — Structured data for programmatic analysis
- **Plain Text** — Simple text dump

## How to Export

### Single Conversation

1. Right-click a conversation in the sidebar
2. Select **Export**
3. Choose your format
4. The file will download to your default downloads folder

### Bulk Export

1. Open Settings → Export
2. Select the conversations or folders you want to export
3. Choose the format
4. Click **Export Selected**

## Database Backup

For a complete backup of all your data (folders, tags, notes, and conversation metadata):

1. Open Settings → Data
2. Click **Export Database**
3. A `.db` file will download — this contains your full SQLite database

To restore:

1. Open Settings → Data
2. Click **Import Database**
3. Select a previously exported `.db` file

:::warning
Importing a database will overwrite your current data. Make sure to export your current state first if needed.
:::
