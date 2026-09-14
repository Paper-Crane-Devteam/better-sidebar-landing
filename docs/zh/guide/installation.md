---
title: 安装指南
description: 在 Chrome、Firefox 或任何 Chromium 核心浏览器上安装 Better Sidebar，以及首次启动时的设置步骤。
---

# 安装指南

安装只需几秒钟。无需注册独立账号，无需繁琐设置。

## Chrome 与 Chromium 核心浏览器

1. 开启 [Chrome 网上应用店页面](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj)
2. 点击 **加到 Chrome**
3. 前往 [gemini.google.com](https://gemini.google.com) 或 [aistudio.google.com](https://aistudio.google.com)

同一版本亦完全相容于 Edge、Brave、Arc 与 Vivaldi —— 直接从 Chrome 网上应用店安装即可。

## Firefox

1. 开启 [Firefox 附加组件页面](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio)
2. 点击 **新增至 Firefox**
3. 前往 Gemini 或 AI Studio

:::warning
Google Drive 同步功能在 Firefox 上无法使用 —— 该功能需要依赖 Firefox 未开放的专用 Identity API。其余所有功能均正常运行，且你可随时使用 [本地备份](/zh/guide/extras/data-backup) 与手动数据库导出来达到相同的安全备份效果。
:::

## 必须登录 Google 账号

Better Sidebar 与账号紧密绑定。它会在你在平台页面 **登录 Google 账号后** 自动启动。若你以访客未登录状态造访 Gemini，侧边栏不会出现，直到你完成登录。

扩展程序侦测到的账号即为当前资料库归属的身分设置档。详情请参阅 [多账号管理](/zh/guide/settings/multi-account)。

## 首次启动

安装后的第一次造访，你将看到：

1. **欢迎引导画面**，介绍扩展程序的核心理念
2. **导入聊天记录列表提示** —— 强烈建议接受。若不导入，侧边栏初期只能显示平台当前载入的有限对话。详见 [导入聊天列表](/zh/guide/sidebar/library-tab#导入聊天记录列表)。
3. **功能导览导引**，快速了解各个标签页的位置

新建立的对话默认会进入 **收件匣 (Inbox)** 文件夹，让你无后顾之忧地随时归类。

:::tip
建议选择导入。这决定了侧边栏是只显示最近二十则对话，还是完整列出你的所有对话历史。过程只需数秒，若不小心略过，也可以随时从顶部 **⋯** 选单手动执行。
:::

## 语言设置

安装时界面语言会自动根据你的浏览器语系进行判定。支持包括简体中文在内的 7 种语言 —— 若判断有误，可随时在 **设置 → 一般 → 语言** 自由切换。

## 更新

浏览器会自动在背景更新扩展程序。你也可以在浏览器的扩展程序管理页面中手动检查更新。

每次更新后会弹出 **更新日志** 窗口，概述新版本功能并附有完整记录链接。日志可随时在 **设置 → 关于 → 查看更新日志** 重新开启。

## 若侧边栏没有出现

1. 确认你在该标签页上已成功登录 Google 账号
2. 重新整理页面
3. 检查浏览器工具栏图示的 [平台管理工具](/zh/guide/settings/platform-manager) 是否不小心关闭了该平台支持
4. 确认浏览器已启用该扩展程序

Google 偶尔更新前端界面可能会导致短暂不相容。若昨日正常而今天无法载入，请检查扩展程序更新，并可透过扩展程序内的 **意见回馈** 标签页回报，我们会迅速推出修复补丁。

## 解除安装

在浏览器工具栏的扩展程序图示上右键点击 → **从 Chrome 移除**。

:::warning
解除安装将一并删除浏览器中的本地数据库 —— 包括所有自定义文件夹、标签、收藏、提示词与片段。

若日后可能需要使用，请务必 **先导出备份**：前往 **设置 → 数据与存储 → 导出**，可下载单一 `.db` 档案，未来可随时导入新安装的环境中。此外，[Google Drive 备份](/zh/guide/extras/drive-sync) 在解除安装后依然保留在你的云端硬碟中。
:::
