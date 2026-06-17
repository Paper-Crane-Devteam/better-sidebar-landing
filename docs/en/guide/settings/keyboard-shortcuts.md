---
title: Keyboard Shortcuts
description: Customize 16 keyboard shortcuts across 3 categories. Record new bindings, detect conflicts, and reset to defaults — all without leaving the settings panel.
---

# Keyboard Shortcuts

Better Sidebar comes with 16 customizable keyboard shortcuts that let you control the sidebar, switch tabs, and trigger actions without touching your mouse. Every shortcut can be rebound to whatever key combination feels natural to you.

Open the hotkey settings via **Settings** (gear icon or `Alt+Shift+,`) → **Keyboard Shortcuts** tab.

<!-- IMG_PLACEHOLDER: hotkeys-overview — Screenshot of the Keyboard Shortcuts settings page showing three sections (General, Navigation, Actions) with several hotkeys listed with their current bindings -->

## Default Shortcuts

### General

| Action | Default Binding | What it does |
| --- | --- | --- |
| Toggle Sidebar | `Alt+Shift+S` | Show/hide the Better Sidebar panel |
| New Conversation | `Alt+Shift+N` | Start a new chat |
| Open Search | `Alt+Shift+F` | Jump to the Search tab |
| Open Settings | `Alt+Shift+,` | Open the Settings modal |

### Navigation

| Action | Default Binding | What it does |
| --- | --- | --- |
| Explorer | `Alt+1` | Switch to the Files tab |
| Search | `Alt+2` | Switch to the Search tab |
| Prompts | `Alt+3` | Switch to the Prompts tab |
| Tags | `Alt+4` | Switch to the Tags tab |
| Favorites | `Alt+5` | Switch to the Favorites tab |
| Gems | `Alt+6` | Switch to the Gems tab (Gemini only) |
| Notebooks | `Alt+7` | Switch to the Notebooks tab (Gemini only) |

### Actions

| Action | Default Binding | What it does |
| --- | --- | --- |
| Toggle Zen Mode | `Alt+Shift+Z` | Enable/disable Zen Mode (Gemini only) |
| Switch to Original UI | `Alt+Shift+Q` | Toggle between Better Sidebar and native sidebar |
| Toggle Batch Mode | `Alt+Shift+B` | Enter/exit batch selection mode |
| Collapse All | `Alt+Shift+C` | Collapse all folders in the current tree |
| Toggle View Mode | `Alt+Shift+T` | Switch between Tree and Timeline views |

:::tip
The `Alt+1` through `Alt+7` navigation shortcuts are the fastest way to jump between tabs. Once you memorize them, you'll rarely need to click the tab icons.
:::

## Recording a New Binding

To change any shortcut:

1. Click the current binding button (shows the key combo like `Alt+Shift+S`)
2. The button enters **recording mode** — it pulses and shows "Recording..."
3. Press your desired key combination
4. The new binding is saved immediately

<!-- IMG_PLACEHOLDER: hotkey-recording — GIF showing clicking a binding, the button entering recording mode (pulsing), pressing a new key combo, and the binding updating -->

### Recording rules

- **Escape** cancels recording without changing the binding
- **Backspace** or **Delete** unbinds the shortcut entirely (sets it to "—")
- Click anywhere outside the recording button to cancel
- You need at least one modifier key (Alt, Ctrl/Cmd, Shift) plus a regular key

While recording, the extension temporarily disables all hotkey listeners so your keypress isn't intercepted before it reaches the recorder.

## Conflict Detection

If you assign a key combination that's already used by another action, Better Sidebar warns you immediately. A red-tinted binding button appears with a conflict message below it:

> ⚠️ Conflicts with: Toggle Sidebar

The conflicting binding still *works* — it's not blocked. But the warning helps you notice so you can fix it.

<!-- IMG_PLACEHOLDER: hotkey-conflict — Screenshot showing a binding with a red border and conflict warning text below it -->

:::warning
Conflicting bindings are allowed but unpredictable. Only one action will fire when you press the keys, and which one wins depends on registration order. Fix conflicts by rebinding one of the two actions.
:::

## Resetting Shortcuts

### Reset a single shortcut

After changing a binding, a small ↩ (undo) icon appears next to it. Click it to reset that one shortcut back to its default.

### Reset all shortcuts

Click the **Reset All** button in the top-right corner of the Keyboard Shortcuts page. This reverts every binding to the factory defaults — useful if you've gotten your bindings into a confusing state.

## Platform-Specific Shortcuts

Some shortcuts are only available on certain platforms:

- **Gems** and **Notebooks** navigation — Gemini only (these tabs don't exist on AI Studio)
- **Toggle Zen Mode** — Gemini only (Zen Mode is a Gemini feature)

These shortcuts won't appear in the settings panel when you're on a platform that doesn't support them.

## Modifier Key Display

On macOS, modifier keys display as symbols:

| Symbol | Key |
| --- | --- |
| ⌘ | Cmd (shown as Ctrl in bindings) |
| ⌥ | Alt/Option |
| ⇧ | Shift |

On Windows/Linux, modifiers display as text: `Ctrl+Alt+Shift+N`.

:::tip
If you use multiple keyboard-heavy extensions, check for conflicts with those too. Better Sidebar can't detect conflicts with other extensions — only within its own shortcuts. A quick test: press your new binding and make sure only the expected action fires.
:::

## Helper Tips

At the bottom of the settings page, you'll find three reminders:

- **Recording**: Click a binding then press your key combo
- **Unbinding**: Press Backspace/Delete during recording to remove a shortcut
- **Canceling**: Press Escape to cancel recording
