---
title: Integrations
description: Send conversations and snippets straight into Notion or Obsidian. Notion needs a one-time setup; Obsidian works immediately.
---

# Integrations

Two destinations outside the browser. Both are [Power Pack](/en/guide/settings/packs) features.

| | Setup needed | How it works |
| --- | --- | --- |
| **Obsidian** | None | Opens the note in your vault via the `obsidian://` protocol |
| **Notion** | One-time, ~3 minutes | Creates a page under a page you pick, via the Notion API |

## Obsidian

Nothing to configure. Right-click a conversation or snippet → **Export** → **Open in Obsidian**.

Obsidian must be installed and running on the same computer, since this uses its URI protocol.

Snippets go into a `Snippets` folder in your vault. Formatting and code blocks survive intact.

Batch export combines the selected items into a single note rather than creating one per item.

:::tip
This is the lowest-friction path from an AI conversation into a permanent knowledge base. Highlight the good part, save it as a snippet, export to Obsidian when you've collected a few. No copy-paste, no lost formatting, no reconstructing code fences by hand.
:::

## Notion

Three steps, done once.

**Settings → Integrations**

### 1. Grant permission

Better Sidebar doesn't request Notion API access on install — it's an optional permission, requested only when you actually want the feature.

Click **Grant Notion API Access** and approve the browser prompt.

:::tip
This is deliberate. An extension that asks for access to an API you may never use is an extension asking for more than it needs. The permission is only requested at the point you decide to use Notion.
:::

### 2. Create and paste an integration token

Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) and create a new **internal integration**. Copy its token — it starts with `ntn_`.

Paste it into the API Key field and click **Save**. Better Sidebar tests the connection and shows the integration name on success.

### 3. Pick a target page

Choose a page from the dropdown. Exported content is created as sub-pages of it.

Use the **Refresh** button if you've just connected a new page in Notion and it isn't listed yet.

### "No pages found"

Almost always the same cause: the integration exists but hasn't been given access to any page.

Notion integrations are opt-in per page. Creating the integration doesn't grant it anything.

Fix it in Notion: open the page you want to use → **⋯** menu → **Connections** → add your integration. Then hit **Refresh** in Better Sidebar.

:::warning
This trips up nearly everyone the first time. A valid token with no page connections looks like a broken integration, but the token is fine — Notion just hasn't been told which pages it may touch. You can also check from the other side: Notion → Settings → Connections → find your integration → verify its page access.
:::

## Exporting

Once set up, Notion appears as an export target everywhere export does: conversations, snippets, folders, batch selections. See [Export](/en/guide/extras/export).

Batch export to Notion runs page by page with a progress toast (`Exporting to Notion (7/23)…`) and can be cancelled part-way. Pages already created stay.

On success you get a toast with a **View** button that opens the new page.

## Disconnecting

Click **Disconnect** next to the API key field. This clears the token, the target page and the cached page list from Better Sidebar. Nothing in Notion is affected — pages you already exported stay where they are.

## Which To Use

**Obsidian** if your notes are local files and you want the export to be a file. Zero setup, works offline, and the notes are yours in plain Markdown.

**Notion** if your team or your own system lives there. More setup, but exported content lands somewhere shared and searchable by other people.

Nothing stops you using both.
