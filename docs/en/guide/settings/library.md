---
title: Library
description: Defaults for the Library tab — which view mode and sort order it opens with, and which folder names to hide entirely.
---

# Library

Three settings that decide what the Library tab looks like when you open it.

**Settings → Library**

## Default View Mode

Which view the Library tab starts in:

- **Tree** — your folder hierarchy
- **Timeline** — conversations grouped by Today / Yesterday / Previous 7 Days / Previous 30 Days / older months

You can still flip between them any time with `Alt+Shift+T` or the **⋯** menu. This setting only decides where you begin.

:::tip
Pick Tree if you've actually built a folder structure and live in it. Pick Timeline if you mostly want "the thing I was doing yesterday" and haven't invested in organizing. Timeline needs zero setup to be useful, which makes it a reasonable default for the first few weeks.
:::

## Default Sort Order

- **Date** — most recently active first
- **Name** — alphabetical

Favorites and pinned folders always float to the top within their container, regardless of sort order.

:::tip
Date sorting inside project folders keeps your current work at the top. Name sorting at the root level makes folders findable. Since the setting is global, most people pick Date and rely on [pinning](/en/guide/sidebar/library-tab#pinning-folders-to-the-top) to keep important folders where they can see them.
:::

## Ignored Folders

A comma-separated list of folder names to hide from the tree completely.

```
archive, temp, old drafts
```

Matching folders and everything inside them disappear from the Library tab. Nothing is deleted — remove the name from this list and the folder comes back exactly as it was.

Maximum 200 characters.

:::tip
This is the right tool for an archive you want to keep but never see. Move last year's work into a folder called `archive`, add `archive` here, and your tree is clean without you having to delete anything. When you need it, blank the field for a minute.
:::

:::warning
Matching is by folder **name**, not by path. If you have two folders called `temp` in different places, both are hidden.
:::
