---
title: Full-Text Search
description: Find any conversation instantly with powerful full-text search across all your AI chats.
---

# Full-Text Search

Never lose a conversation again. Better Sidebar indexes all your conversations and lets you search their content instantly.

## How to Search

1. Click the search bar at the top of the sidebar (or press the keyboard shortcut)
2. Type your query
3. Results appear in real-time as you type

## What Gets Indexed

- Conversation titles
- Your messages (prompts)
- AI responses
- Notes you've added to conversations

## Search Tips

- Use quotes for exact phrases: `"how to deploy"`
- Search is case-insensitive
- Results are ranked by relevance
- Recent conversations appear higher in results

## Performance

The search index is built locally using SQLite FTS (Full-Text Search). Even with thousands of conversations, results appear within milliseconds.

:::tip
The index updates automatically when new messages are added to your conversations. No manual re-indexing is needed.
:::
