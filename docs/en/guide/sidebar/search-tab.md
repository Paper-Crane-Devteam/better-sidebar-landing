---
title: Search
description: Full-text search across every message in your Gemini and AI Studio conversation history, with advanced filtering and message preview.
---

# Search

The Search tab lets you find *any* message you've ever sent or received — not just by title, but by the actual content of your conversations. Think of it as Ctrl+F for your entire AI chat history.

<!-- IMG_PLACEHOLDER: search-tab-overview — Screenshot of the Search tab showing the search input with a query typed, and grouped results below with highlighted matches -->

## How It Works

Better Sidebar maintains a local SQLite database with full-text search indexing. When you type a query, it searches across the *content* of every message stored in your browser — both your prompts and the AI's responses.

- Queries of 3+ characters use FTS5 (fast, phrase-matching)
- Shorter queries fall back to simple text matching (still works, just slower on large databases)

Results appear instantly as you type, with a 500ms debounce to avoid hammering the database on every keystroke.

:::tip
The Search tab searches message *content*. If you just want to filter conversations by title, use the search filter in the [Files tab](/en/guide/sidebar/files-tab#text-search) instead — that's faster for quick title lookups.
:::

## The Search Input

<!-- IMG_PLACEHOLDER: search-input-options — Screenshot of the search input area with the advanced options panel expanded, showing all filter controls -->

The search bar has two inline toggle buttons on the right:

- **Aa** (Case Sensitive) — When on, "React" won't match "react"
- **W** (Whole Word) — When on, "port" won't match "import" or "portal"

Below the input, click the **⋯** icon to expand advanced options:

### Folders to Include

Type folder names separated by commas. Search will only look inside conversations in those folders (and their subfolders, recursively).

Example: `Work, Client Projects` — only searches conversations inside "Work" or "Client Projects" folders and any nested subfolders.

### Folders to Exclude

Same format, opposite effect. Conversations in these folders are excluded from results.

Example: `Archive, Junk` — skips anything you've filed away.

### Search Scope

- **All conversations** — searches your entire library (default)
- **Current conversation only** — limits search to the chat you're currently viewing

The "Current conversation only" option is disabled when you're not inside any conversation. It auto-resets to "All" when you navigate away.

:::tip
"Current conversation only" is essentially Ctrl+F for the active chat. Great for finding something specific in a long conversation without scrolling through 200 messages.
:::

### Role Filter

- **All** — search both your messages and the model's
- **User only** — only your prompts
- **Model only** — only AI responses

Useful when you remember phrasing something a specific way, or when you're looking for a piece of code the model generated.

## Platform Filter

In the tab header, there's a filter icon (🔽) that opens a platform dropdown:

- **Gemini** ✓
- **AI Studio** ✓

By default, only the current platform is selected. Check both to search across all platforms at once. The current platform can't be unchecked.

When searching across platforms, results show a small platform icon next to each match so you know which one it came from.

## Reading Results

<!-- IMG_PLACEHOLDER: search-results-grouped — Screenshot showing search results grouped by conversation, with one group expanded showing individual message matches with highlighted keywords -->

Results are **grouped by conversation**. Each group shows:

- The conversation title
- The folder it belongs to (as a small badge)
- The number of matching messages

Click a group header to collapse/expand it. All groups auto-expand when new results come in. Use the **Collapse All** button in the header if you have many groups and want to scan titles first.

### Match snippets

Each individual match shows:

- Who said it (User / Model) and the date
- A snippet of the message content with your search term **highlighted in yellow**
- The snippet shows ~40 characters before and ~60 after the match for context

### Message Preview

Click any match to open a **full preview modal** with:

1. The complete message rendered as Markdown (with search term highlighted throughout)
2. A copy button for the content
3. An expandable **Context** section showing the adjacent message — if you clicked a user message, it shows the model's response, and vice versa

<!-- IMG_PLACEHOLDER: search-message-preview — Screenshot of the message preview modal showing full rendered Markdown content and the context section expanded below -->

From the preview modal, you can:

- **Close** — dismiss and go back to results
- **Jump to Conversation** — navigate directly to that conversation (and on AI Studio, it even scrolls to the specific message)

### Quick navigation

Hover over any match in the results list — an external-link icon appears in the top-right corner. Click it to navigate directly to that conversation without opening the preview first.

:::tip
On AI Studio, "Jump to Conversation" actually scrolls to the specific message in the chat. On Gemini, it opens the conversation (scrolling to a specific message isn't supported by Gemini's UI yet).
:::

## Import Chat History

By default, Better Sidebar only has message content for conversations that were active *after* you installed the extension. Older conversations have titles and metadata, but their message content hasn't been indexed yet — which means they won't appear in search results.

To fix this, you need to import your history.

<!-- IMG_PLACEHOLDER: search-import-history — Screenshot of the Import History dialog showing the step-by-step guide and file upload area -->

### How to import (AI Studio)

1. Click the **Upload** icon (📤) in the Search tab header
2. The import dialog opens with a step-by-step guide. In short:
   - Go to [AI Studio Library](https://aistudio.google.com/app/library)
   - Click **Open in Drive** to sync your conversations to Google Drive
   - In Google Drive, select all conversation files and **Download** (creates a ZIP)
3. Upload that ZIP file in the import dialog
4. Better Sidebar matches each file to its corresponding conversation by title, then indexes all the message content

The dialog shows real-time processing logs and a success/failure count when done.

:::warning
The import matches files by conversation title. If you renamed a conversation after exporting, the match may fail. Conversations that can't be matched are skipped (your data isn't lost — they just aren't indexed).
:::

### For Gemini

On Gemini, message content is indexed automatically as you **open** each conversation. There's currently no way to batch-import history for Gemini — conversations get indexed one by one as you visit them.

**Scan Chat List** in the Files tab only imports conversation *titles and metadata*, not message content. So even after scanning, older conversations won't appear in full-text search until you actually open them.

:::tip
If you want older Gemini conversations to be searchable, just click through them one by one. The extension captures their content in the background as you view them. It's not ideal for hundreds of chats, but it works for the ones you care about most.
:::

## No Results?

If your search returns nothing for a term you're sure exists:

1. **The conversation might not be indexed yet** — click the "Why can't I find older conversations?" link that appears below the empty state. It explains how to import or scan your history.
2. **Check your filters** — make sure you haven't accidentally scoped to "Current conversation only" or excluded the relevant folder.
3. **Try a shorter query** — FTS5 does phrase matching by default. If your query is very long, try a key phrase from it instead.

:::tip
After installing Better Sidebar, spend 2 minutes importing your history. You only need to do it once, and it unlocks the full power of search — suddenly every conversation you've ever had becomes instantly findable.
:::
