---
title: 快速开始
description: Better Sidebar for Gemini 与 AI Studio 快速入门指南 — 功能介绍、如何安装与后续探索。
---

# 快速开始

Better Sidebar 是一款浏览器扩展程序，为 **Google Gemini** 与 **Google AI Studio** 带来强大而细致的整理层 —— 包含文件夹、标签、全文搜索、提示词库、片段库，以及能替你分担整理任务的 AI 助手。它完全在你的浏览器本地执行，无需外部服务器，你的数据永远属于你自己。

![Better Sidebar 在 Gemini 上执行，显示文件夹树状目录、标签与筛选器](/images/features/overview.webp)

## 你可以做些什么

| | |
| --- | --- |
| **整理** | 带有颜色的嵌套文件夹、标签、收藏、置顶、拖拽移动、批量操作 |
| **寻找** | 跨越所有消息的全文搜索，以及单一对话的大纲导航 |
| **复用** | 支持变量与组合的提示词库，输入 `/` 即可随时唤起 |
| **保存** | 片段库 —— 从 50 轮对话中只摘录存储那段真正有价值的内容 |
| **委派** | 依你的指令自动归档、标签、重命名与清理资料库的 AI 助手 |
| **导出** | Markdown、纯文本、JSON、Obsidian、Notion |
| **备份** | 本地快照以及选用的 Google Drive 同步 |
| **风格** | 20+ 款主题、自定义宽度、Zen 专注模式、紧凑模式 |

每一项能力都有专门的指南 —— 请参阅 [下一步](#下一步)。

## 支持的平台

| 平台 | 支持状态 |
| --- | --- |
| Google Gemini (gemini.google.com) | ✅ 支持 |
| Google AI Studio (aistudio.google.com) | ✅ 支持 |

由于两个平台的内部架构不同，部分功能专属于特定平台。Gemini 专属功能包括 Zen 模式、智能滚动条、划词工具栏、Gems 与 Notebooks；AI Studio 专属功能包括批量历史导入与 Run Settings 自动折叠。其余所有功能均在两个平台上完美运行。

## 支持的浏览器

| 浏览器 | 下载链接 |
| --- | --- |
| Chrome | [Chrome 网上应用店](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj) |
| Firefox | [Firefox 附加组件](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio) |
| Edge | 即将推出 |

任何 Chromium 核心浏览器（Edge、Brave、Arc、Vivaldi）均可直接安装 Chrome 商店版本。

## 快速上手步骤

### 1. 安装扩展程序

前往 [Chrome 网上应用店](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj)（或 [Firefox 附加组件](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio)）点击安装。详细步骤请参阅 [安装指南](/zh/guide/installation)。

### 2. 登录你的 Google 账号

Better Sidebar 与 **账号绑定**。你必须在 Gemini 或 AI Studio 处于登录状态，扩展程序才能正常运行。侧边栏会自动侦测你目前使用的账号并为其建立独立资料库 —— 这也是 [多账号支持](/zh/guide/settings/multi-account) 的运行基础。

### 3. 开启 Gemini 或 AI Studio

前往 [gemini.google.com](https://gemini.google.com) 或 [aistudio.google.com](https://aistudio.google.com)。Better Sidebar 会自动取代原生侧边栏。

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">
  <img src="/images/features/overview-gemini.webp" alt="Better Sidebar on Gemini" />
  <img src="/images/features/overview-aistudio.webp" alt="Better Sidebar on AI Studio" />
</div>

你可以随时使用快捷键 `Alt+Shift+Q`，或点击侧边栏底部的 **切换至原生侧边栏** 按钮切换回去。切换时不会遗失任何资料 —— 当你切换回 Better Sidebar 时，所有文件夹与标签依然完好如初。

### 4. 导入你的对话列表

:::tip 重要提示
首次安装时，Better Sidebar 默认只能看到你 **最近开启过** 的对话（即平台当前载入的内容）。旧对话需要先导入才会出现在树状目录中。
:::

首次启动时会弹出引导提示，询问是否导入完整列表。若跳过，亦可随时点击侧边栏顶部 **⋯** 选单 → **导入聊天记录列表**。

此步骤仅导入标题与元数据，足以支持日常整理。若要让旧对话可被 *全文搜索*，请看下一步。

### 5. 让旧对话支持全文搜索

全文搜索仅能索引扩展程序实际读取过的消息内文。

**在 AI Studio 上** 提供批量导入功能：前往 **设置 → 数据与存储 → 导入聊天资料**。引导会带你将数据库导出至 Google Drive，下载 ZIP 并上传解析。详情请见 [搜索指南](/zh/guide/sidebar/search-tab#导入聊天记录)。

**在 Gemini 上**，Google 原生未提供批量导出，因此当你开启对话时消息会自动被记录。最快的补全方式是让 [AI 助手](/zh/guide/agent/overview) 帮你完成 —— 对它输入指令：*「帮我同步最近 20 则对话的内文」*，它就会自动帮你逐一完成。

### 6. 体验核心功能

- **建立文件夹** — 点击顶部文件夹+ 图示，输入名称并按 Enter，再将对话拖拽进去
- **快速搜索** — 按下 `Alt+2`，输入你记得的任何旧对话关键字
- **存储提示词** — 切换至 Prompt 库（`Alt+3`），点击 **+** 新增，之后在聊天输入框打 `/` 即可插入
- **保存精华片段** — 在 Gemini 回复中反白选取任意段落，在浮出的工具栏点击 **存储为片段**
- **唤起 AI 助手** — 在输入框输入 `>`，选择 **Better Sidebar**，吩咐它帮你整理未分类的对话

## 下一步

| 我想要… | 参考章节 |
| --- | --- |
| 将对话分类进文件夹与贴标签 | [资料库](/zh/guide/sidebar/library-tab) |
| 在旧对话中搜索特定内容 | [全文搜索](/zh/guide/sidebar/search-tab) |
| 导航并阅读超长对话 | [对话大纲](/zh/guide/sidebar/outline) · [智能滚动条](/zh/guide/ui-customization/smart-scrollbar) |
| 建立可复用的提示词库 | [提示词库](/zh/guide/sidebar/prompts-tab) · [斜杠命令](/zh/guide/ui-customization/slash-commands) |
| 保存回答中的精华重点 | [片段库](/zh/guide/sidebar/snippets-tab) |
| 让 AI 自动帮我整理库存 | [AI 助手概览](/zh/guide/agent/overview) |
| 配合 AI 一同处理本机档案与文件 | [工作区助手](/zh/guide/agent/workspace-agent) |
| 将对话导出到 Obsidian 或 Notion | [对话导出](/zh/guide/extras/export) · [外挂整合](/zh/guide/extras/integrations) |
| 调整宽度、Zen 模式、紧凑模式 | [版面与宽度](/zh/guide/ui-customization/layout-and-width) |
| 备份或跨装置同步资料 | [Google Drive 同步](/zh/guide/extras/drive-sync) · [资料备份](/zh/guide/extras/data-backup) |
| 更换色彩主题或调整快捷键 | [主题样式](/zh/guide/settings/themes) · [快捷键一览](/zh/guide/settings/keyboard-shortcuts) |
| 了解免费版与进阶功能包区别 | [功能包与授权](/zh/guide/settings/packs) |
