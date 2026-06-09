---
title: 常见问题
description: Better Sidebar 的常见问题解答。
---

# 常见问题

## 通用

### Better Sidebar 免费吗？

是的，Better Sidebar 是免费且开源的，基于 GPL-3.0 许可证。

### 它同时支持 Gemini 和 AI Studio 吗？

是的。Better Sidebar 可以在 [gemini.google.com](https://gemini.google.com) 和 [aistudio.google.com](https://aistudio.google.com) 上使用。

### 我的数据安全吗？

所有数据使用 SQLite WASM 存储在浏览器本地。我们不会收集、存储或传输你的数据到任何服务器。详见我们的[隐私政策](/zh/privacy)。

## 技术问题

### 为什么扩展需要主机权限？

Better Sidebar 需要在 Gemini 和 AI Studio 页面上运行，以注入侧边栏覆盖层并读取对话标题/ID 用于组织管理。

### 它在隐身/无痕模式下工作吗？

默认情况下，Chrome 扩展不在隐身模式下运行。你可以在浏览器扩展设置中手动启用，但请注意隐身模式下存储的数据可能不会持久化。

### 它会让 Gemini 或 AI Studio 变慢吗？

不会。扩展运行一个轻量级覆盖层并使用优化的 SQLite 数据库。对页面性能的影响可以忽略不计。

### 我可以使用多个 Google 账户吗？

可以。Better Sidebar 支持多账户使用。它会检测当前活跃的账户，并将每个账户的对话分开管理。

## 故障排除

### 侧边栏没有出现

1. 确保扩展在浏览器扩展管理中已启用
2. 尝试刷新页面
3. 检查扩展是否有权限在当前网站上运行

### 搜索找不到最近的对话

搜索索引在对话加载时更新。尝试滚动浏览对话列表以触发旧对话的索引。

### 清除浏览器数据后数据消失了

Better Sidebar 将数据存储在浏览器本地存储（IndexedDB / OPFS）中。清除浏览器数据会删除它。请使用导出数据库功能进行定期备份。

## 参与贡献

Better Sidebar 是开源的。你可以：

- [报告 Bug](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio/issues)
- [提交功能建议](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio/issues)
- [贡献代码](https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio)
