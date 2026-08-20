---
title: Conversation Export
description: Export any conversation as Plain Text, Markdown, or JSON. Download individual chats in the format that works best for your workflow.
---

# Conversation Export

Need to save a conversation outside the browser? Better Sidebar lets you export any chat as a downloadable file in three formats. Whether you want a clean Markdown file for documentation, raw text for pasting, or structured JSON for programmatic use — it's a right-click away.

<!-- IMG_PLACEHOLDER: export-menu — Screenshot showing right-click context menu on a conversation with the Export submenu expanded, showing Plain Text, Markdown, and JSON options -->

## How to Export

1. Find the conversation in the Files tab (or any other tab where conversations appear)
2. Right-click it
3. Hover over **Export**
4. Choose your format: **Plain Text**, **Markdown**, or **JSON**
5. The file downloads immediately with the conversation title as the filename

That's it. No dialogs, no configuration — just pick a format and the file appears in your downloads folder.

## Export Formats

### Plain Text

The simplest format. Strips all formatting and gives you the raw dialogue:

```
User: What's the best way to handle errors in Rust?

Model: In Rust, error handling revolves around the Result type...
```

Good for:
- Quick copy-paste into emails or documents
- Feeding into other tools that expect plain text
- Maximum compatibility

### Markdown

Preserves conversation structure with proper Markdown formatting:

```markdown
## User

What's the best way to handle errors in Rust?

## Model

In Rust, error handling revolves around the `Result` type...
```

Good for:
- Documentation and knowledge bases
- Blog post drafts
- Any Markdown-aware tool (Notion, Obsidian, GitHub)
- Preserving code blocks and formatting

### JSON

A structured array of message objects:

```json
[
  {
    "role": "user",
    "content": "What's the best way to handle errors in Rust?"
  },
  {
    "role": "model",
    "content": "In Rust, error handling revolves around the `Result` type..."
  }
]
```

Good for:
- Programmatic processing
- Feeding into other AI tools or APIs
- Data analysis
- Building datasets

## Where You Can Export From

Export is available anywhere a conversation appears in the sidebar:

- **Files tab** — right-click any conversation
- **Gems tab** — right-click a conversation under a gem
- **Notebooks tab** — right-click a conversation within a notebook
- **Favorites tab** — right-click any favorited conversation
- **Search results** — after finding a conversation, navigate to it and export from the tree

:::tip
For batch exports, there isn't a built-in "export all" button — but you can export conversations one at a time. If you need a full database backup (all conversations at once), use the [Data Backup](/en/guide/extras/data-backup) feature instead, which exports your entire database as a single file.
:::

## File Naming

The exported file uses the conversation title as its filename, with the appropriate extension:

- `My Rust Questions.txt` (Plain Text)
- `My Rust Questions.md` (Markdown)
- `My Rust Questions.json` (JSON)

Special characters in the title are preserved where the filesystem allows.

:::tip
If you're building a personal knowledge base, export your best conversations as Markdown and organize them in a tool like Obsidian or Notion. It's a great way to turn ephemeral AI chats into permanent reference material.
:::
