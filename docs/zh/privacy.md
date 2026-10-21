---
title: 隐私政策
description: Better Sidebar 与 Web Agent Connector 如何处理你的数据。本地优先，没有接收你聊天内容的开发者服务器，不做追踪。
---

# 隐私政策

*最后更新：2026 年 10 月 21 日*

本隐私政策适用于 Paper Crane Dev（下称「我们」）发布的两款浏览器扩展：

- **Better Sidebar for Gemini & AI Studio**（下称「Better Sidebar」）
- **Better Sidebar Web Agent Connector**（下称「Connector」），Better Sidebar 的可选配套扩展

以下合称「本扩展」。简单说：你的数据留在你的浏览器里，我们没有任何接收你聊天内容或整理数据的服务器，也不会出售数据或用于广告。

## 1. 本地优先存储

- 文件夹、标签、收藏、备注、提示词、摘录、同步下来的消息记录、Agent 会话和工作区文件，都保存在你的设备上：浏览器内的 SQLite 数据库和扩展存储。
- 你在 Better Sidebar 里创建的每个 profile 都有各自独立的本地数据库。
- 自动备份是保存在同一本地存储里的快照。
- 卸载扩展或清除它的浏览器数据，会删除以上全部内容，我们无法替你找回。

## 2. 我们不收集什么

- 我们**不**接收、保存或读取你的聊天记录、提示词、AI 回复、文件或浏览活动。
- 我们**不**收集姓名、邮箱、电话等个人信息。
- 我们**不**使用统计分析、追踪像素或广告 SDK。
- 我们**不**出售或分享你的数据，也绝不用它训练 AI 模型。

## 3. 读取 Gemini 与 AI Studio

Better Sidebar 运行在 **gemini.google.com** 和 **aistudio.google.com** 上，会读取那里的对话标题、ID 和消息，用来整理和搜索。可选的后台消息同步会用你当前的 Google 登录状态，从 Google 自己的服务器拉取你已有的对话，并保存在本地。这些都不会发给我们。

## 4. AI Agent

Better Sidebar 的 Agent（BetterSidebar Agent、Workspace Agent、Browser Agent、Web Agent）都通过你浏览器里自己的 Gemini 会话工作。Agent 运行时，它需要的信息会放进你的 Gemini 对话并发送给 Google，和你自己输入或粘贴进去没有区别。可能包括：

- **BetterSidebar Agent：** 它替你查询的对话标题、文件夹、标签和备注。
- **Workspace Agent：** 你让它处理的工作区文件内容。
- **Browser Agent：** 打开的标签页和收藏夹的标题与网址。仅在你授予可选的 `tabs`、`tabGroups` 或 `bookmarks` 权限后，并且只在你打开的开关范围内。
- **Web Agent：** 你交给它的网页上的文字、链接、结构和表单内容。密码框永远不会被读取。

Google 会依据 [Google 隐私权政策](https://policies.google.com/privacy) 和 Gemini 的条款处理这些内容。Agent 不需要 API Key，也不经过我们的任何服务器。

## 5. Web Agent 与 Web Agent Connector

Web Agent 是可选功能，在你同意风险告知之前不会开启。它通过 Chrome 的页面调试器操作网页，这个权限由独立的 Connector 扩展持有，Better Sidebar 本身不持有。

Connector：

- 只接受 Better Sidebar 的请求，网站和其他扩展都无法调用它；
- 只 attach 到你交给 Web Agent 的标签页，Chrome 会在每个这样的页面上显示「已开始调试此浏览器」提示条；
- 拒绝操作 Gemini、AI Studio、Chrome 应用商店、Google 登录页和浏览器内部页面；
- 页面内容只回传给 Better Sidebar，不发送到任何服务器；
- 只保存当前 attach 的标签页 ID（浏览器关闭即清空）和你的「暂停」设置。

Web Agent 从网页读到的内容会按第 4 节所述进入你的 Gemini 对话。它在网站上做的操作（提交表单、发送消息等），网站会视为你本人的操作。

## 6. 会离开你浏览器的数据

除了你通过 Gemini 和 AI Studio 发给 Google 的内容，只有以下几种情况数据会离开你的浏览器，并且都由你发起：

- **Google Drive 同步（可选）：** 你的整理数据（文件夹、标签、收藏、备注、含标题的对话列表、提示词、摘录、Gem 和笔记本列表）会保存到你自己 Google Drive 中一个隐藏的应用专属文件夹（`drive.appdata` 权限范围）。扩展看不到你 Drive 里的其他任何文件。消息记录不会同步。连接 Drive 后改动会自动上传，恢复始终需要你手动操作。你可以随时断开。
- **导出到 Notion（可选）：** 导出时，你选择的内容和你的 Notion 集成令牌会发送到 `api.notion.com`。令牌保存在你本地浏览器中。
- **导出到 Obsidian：** 通过 `obsidian://` 链接打开你电脑上的 Obsidian，不经过网络。
- **激活许可证：** 激活 Support Pack 或 Power Pack 时，你的许可证密钥和扩展随机生成的设备 ID 会发送到我们的许可证服务器，用来校验密钥和统计激活数。不发送其他任何内容，也不需要注册账号。购买由 Gumroad 或爱发电处理，适用它们各自的隐私政策。
- **主题：** 部分主题会从 Google Fonts（`fonts.googleapis.com`）加载字体，对方会看到一次来自你浏览器的普通网络请求。

## 7. 权限说明

**Better Sidebar**

- `storage`、`unlimitedStorage`：在本地保存你的数据和设置。
- `offscreen`：运行本地 SQLite 数据库。
- `alarms`：调度后台消息同步、备份和 Drive 同步。
- `scripting`：把侧边栏加到 Gemini 和 AI Studio 页面上。
- `identity`：为可选的 Drive 同步登录 Google。
- `gemini.google.com`、`aistudio.google.com` 的站点权限：在这两个网站上显示侧边栏并读取你的对话。
- `sidePanel`、`contextMenus`、`declarativeNetRequestWithHostAccess`（Chrome）：在 Chrome 侧边面板中打开 Web Agent，添加右键菜单「让 Web Agent 操作此页」，并让 Gemini 能在该面板中加载。
- 可选的 `tabs`、`tabGroups`、`bookmarks`：只在你开启 Browser Agent 时申请。
- 可选的 `api.notion.com` 访问权限：只在你设置 Notion 导出时申请。

**Web Agent Connector**

- `debugger`：按第 5 节所述操作你交给 Web Agent 的标签页。
- `storage`：记住 attach 的标签页和你的「暂停」设置。

## 8. 你的控制权

- 随时可以在 Better Sidebar 设置中导出数据，或从本地备份恢复。
- 随时可以关闭后台同步、Drive 同步或任何 Agent。
- 停止 Web Agent：点 Chrome 调试提示条上的「取消」、关闭侧边面板，或在 Connector 里点「Disconnect all」/「Pause」。
- 卸载任一扩展即会删除它的本地数据。

## 9. 儿童

本扩展不面向 13 岁以下儿童，我们也不会有意收集他们的任何数据。

## 10. 政策变更

功能变化时我们可能会更新本政策，顶部日期即最新版本。重要变更也会写在扩展的更新说明里。

## 11. 联系我们

对本政策有疑问，可以通过 [GitHub Issues](https://github.com/Paper-Crane-Devteam/better-sidebar/issues) 或 [Discord](https://discord.gg/FRzesxaGAx) 联系我们。
