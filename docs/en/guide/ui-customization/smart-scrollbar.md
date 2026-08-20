---
title: Smart Scrollbar
description: A visual conversation outline that floats alongside your chat, showing message positions and letting you click to jump to any point in the conversation.
---

# Smart Scrollbar

Long conversations with Gemini can get unwieldy. The Smart Scrollbar adds a floating navigation panel on the side of your chat that shows an outline of the entire conversation — who said what, and where. Click any entry to scroll directly to that message.

<!-- IMG_PLACEHOLDER: smart-scrollbar-overview — Screenshot showing a Gemini conversation with the Smart Scrollbar visible on the right side, displaying a compact list of message nodes with the currently visible one highlighted -->

:::tip
This feature is Gemini-only. AI Studio has a different chat structure that doesn't support the Smart Scrollbar.
:::

## Enabling the Smart Scrollbar

Toggle it on via either:

- **Settings → Platform → Additional Features → Smart Scrollbar** (switch)
- The **Quick Controls** dropdown (the gear-like control panel in the top-right of Gemini)

Once enabled, a floating panel appears on the right side of your conversation.

## Three View Modes

The Smart Scrollbar adapts to your screen space with three modes you can switch between:

### Normal Mode (default)

A compact list showing abbreviated message previews. Each node shows:

- The role (User/Model) via positioning and styling
- A truncated preview of the message content
- The currently visible message highlighted

This is the everyday mode — enough context to navigate without taking up too much space.

<!-- IMG_PLACEHOLDER: smart-scrollbar-normal — Screenshot of the Smart Scrollbar in normal/compact mode, showing 8-10 message entries with one highlighted -->

### Maximized Mode

Click the expand button to switch to a full outline view. In maximized mode, the panel is wider and shows:

- Longer message previews with more context
- A clear visual hierarchy between user and model messages
- An overall "Conversation Outline" header with message count

This is best for very long conversations (50+ messages) where you need more context to identify which message is which.

<!-- IMG_PLACEHOLDER: smart-scrollbar-maximized — Screenshot of the Smart Scrollbar in expanded/maximized mode showing full message previews in a wider panel -->

### Minimized Mode

Click the collapse-to-icon button to shrink the scrollbar down to a tiny floating icon. It shows just the message count as a badge. Hover over it to see a tooltip, and click to restore it to normal mode.

Use this when you want the Smart Scrollbar available but don't need it visible right now.

<!-- IMG_PLACEHOLDER: smart-scrollbar-minimized — Screenshot showing the minimized Smart Scrollbar as a small icon with message count badge in the corner -->

## Click-to-Scroll Navigation

The primary purpose: click any entry in the Smart Scrollbar and the page smoothly scrolls to that message. The active message (the one currently in your viewport) is highlighted in the scrollbar, so you always know where you are in the conversation.

As you scroll through the chat naturally, the highlighted entry in the Smart Scrollbar updates to track your position. It's bidirectional — the scrollbar reflects where you are, and clicking it takes you where you want to go.

:::tip
The Smart Scrollbar is especially valuable after a long back-and-forth session where you need to reference something the model said 30 messages ago. Instead of scrolling manually for 10 seconds, click the entry and you're there instantly.
:::

## When Is It Most Useful?

The Smart Scrollbar shines in specific scenarios:

- **Code review conversations** — Jump back to the model's first code suggestion to compare with the latest version
- **Research sessions** — Quickly locate a specific fact or recommendation from earlier in the chat
- **Iterative writing** — Find the version of text you liked best from 20 messages back
- **Debug sessions** — Navigate between the error description and the fix attempts

For short conversations (under 10 messages), it's less necessary — but it's always there if you want it.

:::tip
Combine the Smart Scrollbar with [Zen Mode](/en/guide/ui-customization/layout-and-width#zen-mode-gemini-only) for a focused reading experience: maximum chat width, no distractions, and quick navigation to any point in the conversation.
:::
