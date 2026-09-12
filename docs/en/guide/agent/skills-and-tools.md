---
title: Skills & Tools
description: Control what the agent may do — approval policies, which tool groups are available, and writing your own skills.
---

# Skills & Tools

**Settings → Agent** is where you decide what each agent is allowed to do and what instructions it carries.

The page is organized by agent rather than as one flat list, because that's the thing that actually matters: the Better Sidebar agent can never use the file tools, and a list that mixed them together would imply otherwise.

## Approval Policies

These three switches live in the Agent Dock, under **What it may do**. They apply to any running task.

| Switch | Default | Effect |
| --- | --- | --- |
| **Run queries without asking** | On | Read-only queries execute directly |
| **Change data without asking** | **Off** | Every write asks first |
| **Keep going on its own** | On | Steps chain automatically; off means you press Enter after each one |

### Why reads default to on

Asking permission for every `SELECT` would make the agent unusable — a single question can involve a dozen queries. Reads can't damage anything, so they run.

### Why writes default to off

Because they can. A misread instruction that renames forty conversations is a bad afternoon. The default is that you see each change before it happens.

Once you've watched it work a few times and trust its judgment on a particular kind of task, **Don't ask again for this task** in the approval prompt gets you a hands-off run without permanently loosening the setting. Turning **Change data without asking** on permanently is available, and reasonable if you rely on the agent daily — just know that [undo](/en/guide/agent/overview#undo) only covers the most recent task.

### Why "keep going on its own" is separate

It looks redundant next to the other two, and it isn't. The other two are about *approval*; this one is about whether the loop may advance unattended at all.

Turn it off and you review every round before it continues — without having to confirm every individual query. Some people want to watch the reasoning, not police the permissions.

The two are combined by intersection, which means this switch can only ever make things *more* manual, never less. Approving a write by hand never causes results to be sent onward behind your back.

## Tool Groups

Each agent lists its tool servers with a switch, and expands to show the individual tools inside.

### Better Sidebar agent

**Better Sidebar data** — query and change conversations, folders, tags, prompts and snippets.

| Tool | What it does |
| --- | --- |
| `execute_sql` | Runs queries against the local database |
| `sync_conversation_messages` | Records message history for conversations that have none |
| `export` | Downloads conversations as files |

### Workspace agent

**Files** — read, write, edit and search text files.

| Tool | What it does |
| --- | --- |
| `read_file` | Reads a text file with line numbers |
| `write_file` | Creates a file, or replaces one entirely |
| `edit_file` | Replaces exact text inside a file |
| `list_files` | Lists a folder |
| `glob_files` | Finds files by name pattern |
| `grep_files` | Searches file contents by regex |
| `manage_files` | Deletes, moves, creates folders |

**Documents** — read and edit Word, Excel, PDF and PowerPoint by outline and section.

| Tool | What it does |
| --- | --- |
| `doc_read` | Reads a document: outline, sections, search |
| `doc_edit` | Applies changes — comments, tracked changes, cells, annotations |

### Core

Always on for every agent, with no switch:

| Tool | What it does |
| --- | --- |
| `activate_skill` | Loads specialized instructions for a task type |
| `complete_task` | Ends the loop and reports results |

`complete_task` has no switch because a session that can't end isn't a preference anyone should be able to express.

:::tip
Turning a tool group off removes those tools from the prompt entirely — the agent won't know they exist, rather than trying and failing. If you only ever want the agent as an analyst, switching **Better Sidebar data** off isn't the way to do it (that's the group it needs for reads too); leave **Change data without asking** off instead.
:::

## Skills

A skill is a block of specialized instructions the agent loads when a task calls for it. It's how the agent knows that spreadsheets should be read schema-first, or that tags should be reused rather than reinvented.

### Built-in skills

**Better Sidebar agent**

| Skill | For |
| --- | --- |
| Auto-Classify Conversations | Sorting conversations into folders and tags |
| Sync Missing Messages | Finding and filling conversations with no recorded messages |
| Export Conversations | Querying and exporting conversation data |
| Manage Prompt Library | Authoring and refactoring prompts, variables and imports |
| Manage Snippets | Organizing, deduping and searching snippets |

**Workspace agent**

| Skill | For |
| --- | --- |
| Review a Word Document | Chapter-by-chapter review with comments and tracked changes |
| Work Through a Spreadsheet | Schema first, then compute; add rather than overwrite |
| Read and Review a PDF | Page text, bookmarks, comments, form fields, page operations |
| Read and Edit PowerPoint | Slide text, speaker notes, shapes, slide order |

Built-in skills can be switched off, but not edited.

### Writing your own

Click **New skill** on the agent you want it to belong to. Four fields:

| Field | |
| --- | --- |
| **Title** | What it's called, e.g. *Weekly Triage* |
| **Description** | One line on what it does — this is what the agent reads to decide whether to load it |
| **Prompt Content** | The actual instructions |
| **Always on** | Load it every session rather than only when relevant |

Up to 20 custom skills.

The description does real work. It's how the agent decides whether this skill applies to what you asked, so describe the *situation* it's for, not just the action.

### What a good skill looks like

Skills earn their keep on workflows you repeat. Instead of retyping a careful five-sentence prompt every Friday, encode it once.

```markdown
## Task: Weekly triage

Sort everything currently in Inbox.

Steps:
1. List what's in Inbox with dates, and show me the count before doing anything.
2. Group by topic. Match against my existing folders first —
   only propose a new folder if nothing existing fits.
3. Show me the proposed mapping as a table and wait for approval.
4. After I approve, move them and apply tags.
   Reuse existing tags. Never create a tag that's a near-synonym
   of one I already have.
5. Report what moved where, and anything you couldn't classify.
```

Three things make this work rather than just being a long prompt:

- **It stops for approval at a defined point**, so you're not reviewing after the fact
- **It constrains creation** — folders and tags only get invented when genuinely needed
- **It asks for a report**, so you can tell what happened without reading every step card

:::tip
Write the prompt by hand a few times first. Watch where the agent goes off the rails, add a sentence to stop that, and *then* save it as a skill. Skills written before you know the failure modes tend to be too vague to help.
:::

### Editing and deleting

Custom skills get pencil and trash icons. Deleting is permanent. Unsaved edits prompt before discarding.

## Where the Agent Isn't Available

The agent needs an open chat with a working input box, because that's how it talks to the model. If you see *"Open a chat first"*, navigate into any conversation and try again.

It also refuses to start a second task while one is running. Stop the running one first, or wait for it.
