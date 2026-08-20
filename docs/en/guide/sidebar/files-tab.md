---
title: Files
description: The main explorer tab — organize conversations with folders, drag-and-drop, timeline view, filtering, and batch operations.
---

# Files

The Files tab is your home base. Every conversation you have on Gemini or AI Studio shows up here, and this is where you turn a chaotic chat list into a well-organized library.

<!-- IMG_PLACEHOLDER: files-tab-overview — Full screenshot of the Files tab showing the header toolbar, filter bar, and a folder tree with a few conversations organized into colored folders -->

## Overview

The Files tab has a few layers stacked top to bottom:

1. **Header toolbar** — Quick actions like Collapse All, Sort, Batch Mode, New Folder, and New Chat
2. **Filter bar** — Toggle search, tag filter, type filter, and favorites-only mode
3. **File tree or timeline** — Your conversations and folders, displayed as either a draggable tree or a time-grouped list
4. **Batch toolbar** — Appears when you enter batch selection mode

You can switch between two view modes at any time:

- **Tree View** — A folder hierarchy you control. Drag conversations around, nest folders, assign colors.
- **Timeline View** — Conversations grouped automatically by when you last used them (Today, Yesterday, Last 7 Days, etc.)

:::tip
Tree View is best for long-term organization. Timeline View is great for quickly finding "that conversation from yesterday" without any setup.
:::

## Folders

Folders are the backbone of your organization system. You can nest them, color them, and drag things in and out freely.

### Creating a folder

You have a few ways:

- Click the **folder+** icon in the header toolbar
- Right-click any empty space in the tree → **New Folder**
- Right-click an existing folder → **New Folder** (creates a nested subfolder)

The folder is created with a default name and immediately enters rename mode — just type and press Enter.

<!-- IMG_PLACEHOLDER: files-create-folder — Short GIF or sequence showing right-click → New Folder → typing a name → pressing Enter -->

### Renaming

Right-click a folder → **Rename**, or select **Folder Settings** from the context menu to rename and change color in one go.

### Coloring folders

Colored folders make scanning your sidebar much faster. Right-click a folder → **Change Color** to see the preset palette, or pick a custom hex color.

<!-- IMG_PLACEHOLDER: files-folder-color — Screenshot of the color picker submenu with preset swatches and custom color input -->

The color tints the folder icon *and* gives the row a subtle background tint when selected, so you get a nice visual cue at a glance.

:::tip
Use colors to separate life areas — e.g. blue for work, green for personal projects, orange for learning. It sounds simple, but it makes a huge difference once you have 50+ conversations.
:::

### Nesting

Folders can go multiple levels deep. Just drag a folder onto another folder, or create one via right-click inside a parent. There's no hard limit on depth, but keep it reasonable — two or three levels is usually plenty.

### Deleting

Right-click → **Delete**. There's one guardrail: **you can't delete a folder that still has conversations inside it**. Move or delete the conversations first. This prevents accidental data loss.

## Conversations

Every conversation from Gemini or AI Studio appears as a file in your tree.

### Opening a conversation

Click it. That's it — the page navigates to that conversation. Want to keep your current chat open? Right-click → **Open in New Tab**.

### Renaming (True Rename)

Right-click → **Rename**, then type a new name.

This isn't just a local label — Better Sidebar syncs the rename to Google's servers in real time. Your conversation title updates everywhere, including when you visit without the extension.

<!-- IMG_PLACEHOLDER: files-rename-conversation — GIF showing right-click → Rename → typing new title → pressing Enter -->

### Favorites & Pinning

Right-click a conversation → **Add to Favorites**. Favorited conversations float to the top of their folder (or the root), marked with a ⭐.

To remove: right-click → **Remove from Favorites**.

You can also click the star icon that appears on hover in the action bar.

:::tip
Combine favorites with the "Favorites only" filter button for a quick-access shortlist of your most important chats.
:::

### Moving conversations

Two ways:

1. **Drag and drop** — Just grab it and drop it into a folder (Tree View only)
2. **Right-click → Move To** — Opens a folder picker dialog, useful when your target folder is collapsed or far away in the tree

<!-- IMG_PLACEHOLDER: files-drag-drop — GIF showing a conversation being dragged from root into a folder -->

### Tagging

Right-click a conversation → **Tags** — you'll see a submenu with checkboxes for all your tags. Check or uncheck to add/remove.

If you have multiple conversations selected (via multi-select in the tree), tagging applies to all of them at once.

:::tip
Tags and folders serve different purposes. Folders = "where does this live?" Tags = "what is this about?" A conversation can only be in one folder but can have many tags.
:::

### Exporting a single conversation

Right-click → **Export** → choose your format:

- **Plain Text** — Markdown stripped, just the raw dialogue
- **Markdown** — Preserves formatting with `## User` / `## Model` headings
- **JSON** — Array of `{ role, content }` objects, handy for programmatic use

The file downloads immediately with the conversation title as filename.

### Deleting (True Delete)

Right-click → **Delete**. A confirmation dialog appears. This is a **real server-side deletion** — the conversation is removed from Google's servers, not just hidden locally. No more ghost chats that keep reappearing.

:::warning
Deletion is permanent. There's no undo. If you want to keep a backup, export the conversation first.
:::

## New Chat

### Quick creation

Click the **New Chat** button (pencil+ icon) in the header toolbar. If you have a folder selected, the new conversation is automatically placed inside that folder.

### New Chat in a folder

Hover over any folder and click the **chat+** icon in the action bar. This creates a new chat directly inside that folder, no matter what's currently selected.

<!-- IMG_PLACEHOLDER: files-new-chat-in-folder — GIF showing hover on folder → clicking the chat+ icon → new chat appearing inside the folder -->

### Pre-naming your chat

When you create a new chat, a temporary entry appears in the tree with an editable text field. You can type a title *before* the conversation even exists on Google's servers. Once the first message is sent, Better Sidebar renames the conversation to your custom title.

If you leave it empty, the AI-generated title is used as usual.

:::tip
Pre-naming is great for work logs. Create a chat called "2024-06-16 Debug session" before you even start typing, and it'll be properly labeled from the beginning.
:::


## Filtering & Sorting

When your library grows beyond a screenful, filters become essential. The filter bar sits just below the header and offers four toggles:

<!-- IMG_PLACEHOLDER: files-filter-bar — Screenshot of the filter bar showing all four filter buttons (Search, Tags, Type, Favorites), with one or two active -->

### Text search

Click the 🔍 button (or use the hotkey) to open an inline search field. As you type, the tree prunes to show only conversations and folders that match your query. Folders are kept visible if any of their children match.

This is a quick local filter — for full-text search across message content, use the dedicated [Search tab](/en/guide/sidebar/search-tab).

### Tag filter

Click the tag icon to expand a tag selector. Pick one or more tags, and only conversations with those tags remain visible. Useful when you've tagged conversations by project or topic.

### Type filter

Click the grid icon to cycle through types:

- **All** (default) — show everything
- **Conversations** — only chat conversations
- **Images** — only text-to-image generations
- **Gems** — only Gem conversations (Gemini)
- **Notebooks** — only notebook entries (Gemini)

### Favorites only

Click the ⭐ button to show only your favorited conversations. Combine this with tag filters for very precise results.

### Sorting

The sort button in the header toggles between:

- **Date** (clock icon) — Most recently active conversations first. Folders are still sorted alphabetically.
- **Alphabetical** (A-Z icon) — Everything sorted by name.

In both modes, favorited items always float to the top within their container.

:::tip
A typical workflow: set sort to "Date" for your active project folder so your latest work stays at the top, but keep the root level sorted alphabetically so you can find folders by name.
:::

## Batch Operations

When you need to clean up, reorganize, or tag a bunch of conversations at once, batch mode is your friend.

### Entering batch mode

Click the **checklist** icon (☑) in the header toolbar. The tree switches to checkbox mode — every item gets a checkbox.

<!-- IMG_PLACEHOLDER: files-batch-mode — Screenshot showing the tree in batch mode with several items checked, and the batch toolbar visible at the bottom -->

### Selecting items

- Click any item to toggle its checkbox
- Click a folder's checkbox to select/deselect all conversations inside it
- Click **Select All** in the batch toolbar to grab everything visible (respects current filters)
- Folders show an indeterminate state (—) when some but not all children are selected

### Batch actions

The batch toolbar at the bottom shows your selected count and offers three actions:

| Action | What it does |
| --- | --- |
| 🗑️ **Delete** | Permanently deletes all selected conversations from Google's servers |
| 📁 **Move** | Opens a folder picker to move all selected items to a target folder |
| 🏷️ **Add Tags** | Opens a tag picker to add one or more tags to all selected conversations |

### Exiting batch mode

Click the **X** button in the batch toolbar, or click the checklist icon in the header again.

:::tip
Batch mode + the Favorites filter is a fast way to "un-favorite everything" — filter to favorites only, select all, then remove from favorites (by deleting and re-creating, or by switching to single-item mode). Or use batch + tag filter to retag a whole category at once.
:::

## View Modes

### Tree View

The default. Your folders and conversations form a draggable hierarchy. You control exactly where everything lives.

Key features exclusive to Tree View:
- Drag and drop (reorder, move into folders)
- Nested folder creation
- Canvas right-click → New Folder
- Folder tint rows (colored background bands)

### Timeline View

Switch via the overflow menu → **Switch to Timeline View** (or the calendar icon).

Conversations are automatically grouped into time buckets:
- **Today**
- **Yesterday**
- **Previous 7 Days**
- **Previous 30 Days**
- **Older** (grouped by month, e.g. "May 2025")

<!-- IMG_PLACEHOLDER: files-timeline-view — Screenshot of Timeline View showing conversations grouped under Today / Yesterday / Previous 7 Days headers -->

Drag and drop is disabled in Timeline View. All other features (right-click actions, filtering, batch mode) still work.

:::tip
Timeline View is ideal for a "what did I do this week?" review, or for finding a conversation when you remember *when* you had it but not what you called it.
:::

## Library Sync

Better Sidebar needs to know about your conversations before it can organize them.

### Automatic sync

When you visit Gemini or AI Studio, the extension automatically detects and imports your recent conversations. You don't need to do anything for day-to-day use.

### Manual scan

If conversations are missing from the sidebar, open the overflow menu (⋮) and click **Scan Chat List**. A loading overlay appears while the extension walks through your conversation list and imports titles and metadata.

Note: Scan Chat List only imports **titles and metadata** (conversation ID, creation date, type). It does *not* download message content. Message content gets indexed when you actually open a conversation, or when you use the Import History feature (AI Studio only).

### First-time setup

On a fresh install, only your most recent conversations are captured automatically. To import older conversations:

- **AI Studio** — Use the **Import Chat History** feature in the [Search tab](/en/guide/sidebar/search-tab#import-chat-history) to bulk-import message content from a Google Drive export.
- **Gemini** — Run **Scan Chat List** to import titles, then open individual conversations to index their message content. There's no bulk import for Gemini at this time.

:::tip
After importing history, it's a good time to enter Batch Mode and drag everything into folders. Spend 10 minutes organizing now, save hours of scrolling later.
:::
