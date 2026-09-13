---
title: Slash Commands
description: Type / in the chat input to insert any prompt from your library, with variables filled in and imports resolved, without leaving the keyboard.
---

# Slash Commands

Type `/` in the Gemini or AI Studio input box and your [prompt library](/en/guide/sidebar/prompts-tab) appears inline.

![Typing a slash in the chat input opens the prompt picker](/images/features/slash-command.webp)

Keep typing to filter. Arrow keys to move. Enter to insert. The `/query` text you typed is replaced by the prompt's full content.

## Matching

Filtering is fuzzy and multi-word, so `/rev code` finds *Review code for security issues*. Matching starts from the beginning of words, which is why title order matters:

| Title | Found by |
| --- | --- |
| `translate-jp` | `/tr`, `/jp` |
| `Japanese translation helper` | `/ja`, `/tran` — but not `/jp` as quickly |

:::tip
Put the keyword first. `review-security` beats `My prompt for reviewing code security` not because it's shorter but because `/rev` lands on it immediately. If you're doing one thing to make your library faster to use, it's renaming for this.
:::

## Variables Get Filled In

If the prompt contains variables, a small form appears before insertion.

Text variables give you an input box. Dropdown variables give you a select with your predefined options. Fill them, and the resolved text — variables substituted, [imports](/en/guide/sidebar/prompts-tab#prompt-composition-import) inlined — goes into the input box.

So a prompt like:

```
Translate the following to {{language:English,Japanese,Spanish}}.
Tone: {{tone:neutral,formal,casual}}.

{{@import:Translation Rules}}
```

becomes, in three keystrokes and two dropdown picks, a fully-formed instruction with your standard translation rules attached.

## Turning It Off

The switch is in the **browser toolbar popup** — click the Better Sidebar icon next to your address bar, pick the Gemini or AI Studio tab, and toggle **Slash Commands**. It's per-platform.

:::tip
This is the one toggle that isn't in the sidebar's Settings modal, which catches people out. If you're looking for it in Settings → UI Controls, it isn't there. See [Platform Manager](/en/guide/settings/platform-manager).
:::

Worth turning off if you frequently start messages with a literal slash — file paths, regexes, dates. Otherwise leave it on.

## Empty Library

With no prompts saved, the popup says so and offers a button through to the Prompts tab. Nothing to insert yet.

## Building a Library Worth `/`-ing

A few prompts that pay for themselves immediately:

| Suggested title | Content shape |
| --- | --- |
| `review-code` | Your standard code review criteria |
| `explain-simple` | "Explain this as if to someone competent but unfamiliar. No analogies." |
| `translate` | With language and tone as dropdown variables |
| `summarize` | Your preferred output shape — bullets, length, what to omit |
| `rewrite-tone` | Tone as a dropdown |
| `commit-msg` | Your commit message conventions |

The test for whether something belongs in the library is simple: have you typed roughly this twice? Then save it. You'll type it again.

## Related

- [Prompts](/en/guide/sidebar/prompts-tab) — building the library, variables, composition
- [Selection Toolbar](/en/guide/ui-customization/selection-toolbar) — save a good phrasing as a prompt without leaving the conversation
- [Agent](/en/guide/agent/better-sidebar-agent) — have it refactor a library that's grown unwieldy
