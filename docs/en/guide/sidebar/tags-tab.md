---
title: Tags
description: Create, color-code, and manage tags to categorize your conversations across folders.
---

# Tags

Tags give you a second axis of organization on top of folders. A conversation can only live in one folder, but it can have as many tags as you want. Think of folders as "where does this live?" and tags as "what is this about?"

## Creating a Tag

1. Type a name in the input field at the top of the Tags tab
2. Press Enter or click the **+** button
3. A color picker appears — choose a color for your tag (or leave it default)
4. Done. Your tag is ready to use.

Tag names are limited to 30 characters. Keep them short and clear — "Work", "Side Project", "Learning", "To Review".

## Assigning Tags to Conversations

Tags are assigned from the **Library tab**, not from the Tags tab itself. Right-click any conversation → **Tags** → check the tags you want to apply.

You can also assign tags in bulk: enter batch mode in the Library tab, select multiple conversations, and use the batch "Add Tags" action.

:::tip
The Tags tab is for *managing* your tags (creating, renaming, recoloring, deleting). For *using* them on conversations, you work in the Library tab.
:::

## Colors

Every tag can have a custom color. Colors appear:
- Next to the tag name in the Tags tab
- In the filter dropdown when selecting tags
- As a visual indicator when browsing conversations

### Changing a tag's color

Right-click the tag → **Change Color** → pick from preset colors or use the custom color picker.

The preset palette matches the one used for folders, so you can create a cohesive color system across your whole sidebar.

## Managing Tags

### Renaming

Right-click → **Rename**. The tag switches to an inline editable field. Type the new name and press Enter. The rename applies everywhere the tag is referenced.

### Deleting

Right-click → **Delete**. A confirmation dialog appears. Deleting a tag removes it from all conversations it was assigned to.

:::warning
Deleting a tag is permanent. Conversations won't be affected (they stay where they are), but the tag association is removed.
:::

## Using Tags to Filter

Tags unlock powerful filtering in other tabs:

- **Library tab** — Click the tag filter icon (🏷️) to expand the tag selector. Pick one or more tags, and only matching conversations remain visible.
- **Favorites tab** — Same tag filter applies to your starred items.

Tag filtering uses OR logic: if you select "Work" and "Coding", you'll see conversations that have *either* tag (not just both).

:::tip
A good tagging strategy: use folders for *structure* (Client A, Client B, Personal) and tags for *properties* (urgent, reference, completed). This way you can quickly find all urgent items across every folder, or all reference material regardless of which project it belongs to.
:::

## Let the Agent Do the Tagging

Tagging 300 conversations by hand is not a good use of an afternoon. The [agent](/en/guide/agent/better-sidebar-agent) can read titles and message content and tag in bulk:

> Tag each chat in my Inbox based on its content. Reuse my existing tags wherever they fit rather than inventing near-duplicates, and show me the plan before you apply it.

That last clause matters. Left to its own devices an AI will happily create `coding`, `code`, `programming` and `dev` as four separate tags. Telling it to reuse what exists keeps your tag list from turning into a mess.

You can also point it at the mess you already have:

> Look at my tags and tell me which ones overlap or are near-duplicates. Suggest a merged set, then apply it.

Changes are confirmed before they run, and can be undone afterwards.
