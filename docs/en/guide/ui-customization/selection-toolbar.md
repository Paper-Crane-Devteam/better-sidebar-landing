---
title: Selection Toolbar
description: Highlight text in a Gemini conversation and act on it — quote it back, ask for an explanation, save it as a snippet or a prompt, or copy it.
---

# Selection Toolbar

Highlight any text in a Gemini conversation and a small toolbar appears above it. Six possible actions, all operating on exactly what you selected.

:::tip
Gemini only. AI Studio's conversation structure doesn't support it yet.
:::

## The Actions

| Action | What it does | Default |
| --- | --- | --- |
| **Reference** | Inserts the selection into the input box as a quoted reference | On |
| **Explain** | Asks the AI to explain the selection | On |
| **Summarize** | Asks the AI to summarize the selection | **Off** |
| **Save as Snippet** | Saves it to your [snippet library](/en/guide/sidebar/snippets-tab) | On |
| **Copy** | Copies it to the clipboard | On |
| **Save as Prompt** | Saves it to your [prompts inbox](/en/guide/sidebar/prompts-tab) | On |

Each has its own switch in **Settings → UI Controls → Selection Toolbar**, plus a master switch for the whole thing. Turn off the ones you don't use — a toolbar with three buttons is faster to hit than one with six.

## Reference

The most useful one, and the least obvious.

Highlight a specific claim in a long answer, click **Reference**, and it goes into your input box as a quote. Then type your follow-up.

The problem it solves: in a long answer, "what did you mean by that?" is ambiguous. The model has to guess which part you mean, and often guesses wrong. Quoting the exact sentence removes the guesswork.

:::tip
This is the fix for the most common failure mode of long AI answers — you want to push back on one specific point, but referring to it costs a paragraph of setup. Highlight, Reference, ask. Two seconds, zero ambiguity.
:::

## Explain and Summarize

**Explain** sends the selection back with a request to unpack it. Good for a term or a step you didn't follow, without derailing into a fresh conversation.

**Summarize** is off by default because it's the less common of the two — most people are selecting something they *didn't* understand rather than something too long. Turn it on if you regularly select big blocks.

## Save as Snippet

Precision saving. The whole-answer **Save as Snippet** button keeps everything; this keeps just the part worth keeping.

Formatting is preserved — headings, lists, code blocks all survive. Snippets land in your inbox.

The title is taken from the surrounding text, which produces awkward titles. See [Snippets](/en/guide/sidebar/snippets-tab#titles-are-usually-wrong-at-first) for how to fix them in bulk.

## Save as Prompt

For the opposite case: you improvised a good instruction, or the model produced a phrasing you want to reuse as an input. It goes to your prompts inbox, and from there it's available via [`/`](/en/guide/ui-customization/slash-commands).

:::tip
Watch for this one in your own behaviour. When you find yourself writing a genuinely well-constructed request mid-conversation, that's a prompt. Highlight your own message, Save as Prompt, and you have it forever instead of half-remembering it next month.
:::

## Copy

Copies the selection with its Markdown formatting intact. Different from a normal browser copy, which tends to flatten structure or bring along styling you don't want.

## Turning It Off

Master switch: **Settings → UI Controls → Selection Toolbar**.

Worth turning off if you select text a lot for reasons that aren't about acting on it — reading with your cursor, for instance — and find a popup appearing every time annoying.

## Related

- [Snippets](/en/guide/sidebar/snippets-tab) — where saved selections go
- [Prompts](/en/guide/sidebar/prompts-tab) — where saved phrasings go
- [Smart Scrollbar](/en/guide/ui-customization/smart-scrollbar) — jump to a message, then select from it
