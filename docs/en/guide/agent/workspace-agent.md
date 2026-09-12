---
title: Workspace Agent
description: A private file area where AI can read, write and edit real files — text and code from scratch, plus Word, Excel, PDF and PowerPoint with formatting preserved.
---

# Workspace Agent

The Workspace is a file area that lives with the extension. Drop files in, or ask the agent to create them from nothing, and it can read, write and edit them directly.

Start it by typing `>` in the chat input and picking **Workspace**.

:::tip Beta
The Workspace agent is in beta. It works, and it's careful with your files, but you'll find rough edges. Bug reports get fast fixes.
:::

## Why It's Different From Attaching a File

When you attach a document to a chat, the model reads it and writes you a new version in the reply. You then copy that back into your document by hand and your formatting is gone.

The Workspace agent edits the actual file. Your styles, your numbering, your citations, your charts, your conditional formatting — all still there, because it changes the parts you asked about and leaves the rest of the file byte-identical.

That's the entire point of the feature.

## Getting Files In

Two ways:

**Drag and drop** into the workspace file tree. Necessary for Word, Excel, PDF and PowerPoint, since those can't be created from scratch.

**Ask for them.** For text and code, you don't need to upload anything:

> Build me a complete React todo app from scratch.

It writes the HTML, the component files, the stylesheet and the config into the workspace. No starting file required.

:::warning
This is the most common misunderstanding about the feature. People assume they must upload something first. For text and code files — `.md`, `.txt`, `.html`, `.js`, `.ts`, `.py`, `.css`, `.json`, `.csv`, `.srt`, anything plain — the agent creates and edits freely from nothing.
:::

## Formats

### Created from scratch and edited freely

All plain text and code: `.md` `.txt` `.html` `.css` `.js` `.ts` `.jsx` `.tsx` `.py` `.json` `.csv` `.yml` `.sh` `.srt` `.vtt` — and anything else that's text.

For these the agent has full range: write a new file, replace exact strings inside one, search across the workspace with regex, restructure a whole directory.

### Read, annotated and precisely edited

These are compound binary formats. Existing files only — the agent works inside them without rebuilding them.

| Format | Extensions | What it can do |
| --- | --- | --- |
| **Word** | `.docx` `.docm` | Read by outline and section. Insert **tracked changes** and **comments**, replace text, edit paragraphs and styles, insert or delete tables and rows |
| **Excel** | `.xlsx` `.xlsm` `.xltx` | Read the schema first, then compute. Set cells, add columns, add and rename sheets, write real formulas |
| **PDF** | `.pdf` | Read page text and bookmarks. Highlight, comment, add sticky notes, fill form fields, watermark, rotate, delete, extract and merge pages |
| **PowerPoint** | `.pptx` | Read and edit slide text, speaker notes and shapes. Reorder slides |

Generating a brand-new Word or Excel file from nothing isn't supported yet.

## What This Looks Like In Practice

### Reviewing a document

> Work through `thesis.docx` chapter by chapter. Comment where the argument is weak, and suggest fixes as tracked changes rather than rewriting the text.

It reads the outline first, then goes section by section. What comes out is a document you open in Word and accept or reject change by change — the same review you'd get from a supervisor, not a rewritten file you have to diff by hand.

Your formatting, citations and numbering are untouched.

### Analyzing a spreadsheet

> Read `sales.xlsx`, then add a column calculating month-on-month growth and a summary sheet with totals by region.

It reads your headers before computing, and writes **real Excel formulas** rather than pasting hardcoded numbers. So the numbers update when the data does.

It adds columns and sheets rather than altering your existing data, and your charts and conditional formatting survive.

:::tip
"Add a column, don't change the data" is the built-in instinct here, and it's the right one. If you *want* it to modify existing cells, say so explicitly.
:::

### Translating subtitles

> Translate `episode-03.srt` to Japanese and polish the phrasing.

Timestamps are treated as untouchable. Not one millisecond of the timeline shifts, so your sync stays exactly as it was.

### Reading and annotating a PDF

> Read `paper.pdf`, summarize the methodology, and highlight the key claims with sticky notes explaining why each one matters.

PDF body text can't be rewritten — that's a format limitation, not a missing feature. But extraction, highlighting, annotation and page operations all work.

### Building something from nothing

> Build a static landing page from scratch: semantic HTML, a stylesheet with CSS custom properties, and a small JS file for the mobile nav toggle. No frameworks.

Files appear in the workspace as it works. Then keep going conversationally: *"make the nav sticky"*, *"pull the accent colour toward teal"*, *"extract the button styles into their own file"*.

### Keeping notes across conversations

> Summarize our conclusions from this chat as a bulleted list and save it to `notes/decisions.md`. Append unresolved questions at the end. If the file exists, append with today's date instead of overwriting.

Workspace files persist across conversations **and across both platforms** — a file written from Gemini is readable from AI Studio. That makes the workspace a decent running log for an ongoing project.

## Workspaces

Files live in a named workspace. The default one is called `default`.

A conversation binds to whichever workspace it used, and can't switch mid-way — start a new chat to work in a different one. This prevents a long conversation half-remembering a file tree that changed underneath it.

Workspace controls are in the **Agent** tab → **Workspace**, where you can create, rename, clear and delete them, and browse the file tree.

| | Free | [Power Pack](/en/guide/settings/packs) |
| --- | --- | --- |
| Workspaces | 1 | Unlimited |
| Files per workspace | 5 | Unlimited |

Five files is enough to try the feature honestly — a document plus a few notes — and not enough for a real project.

## Safety

Every change is confirmed before it runs. The approval card names what will happen in plain language before you say yes.

Better Sidebar also keeps a version history for documents, so an overwrite isn't necessarily final. History files don't count against the free file limit.

:::warning
The workspace has no general undo. The agent's [undo](/en/guide/agent/overview#undo) restores database tables, not files. For a text file that's usually survivable — the agent can write it back. For a `.docx` it isn't, so keep your own copy of anything irreplaceable before handing it over. Version history helps, but a document you can't afford to lose deserves a copy outside the browser.
:::

The Workspace agent can only see the active workspace. Not your conversations, not your prompts, not anything else on your computer.

## Current Limitations

Honest list:

- Word, Excel, PDF and PowerPoint files must be dragged in — there's no way for a browser extension to open one from your disk on request
- No rich preview inside the sidebar. Text and code render; binary documents you download and open externally
- New compound binary files can't be generated from scratch
- PDF body text can't be rewritten, only annotated

These are browser-extension constraints rather than design choices, and some of them will improve.

## Skills

Four built-in skills carry format-specific instructions:

| Skill | For |
| --- | --- |
| **Review a Word Document** | Chapter-by-chapter review with comments and tracked changes |
| **Work Through a Spreadsheet** | Schema first, then compute — add rather than overwrite |
| **Read and Review a PDF** | Page text, bookmarks, comments, form fields, page operations |
| **Read and Edit PowerPoint** | Slide text, speaker notes, shapes, slide order |

They load automatically when the task calls for one. See [Skills & Tools](/en/guide/agent/skills-and-tools).
