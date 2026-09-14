---
title: Notion 与 Obsidian 整合
description: 将对话与精华片段直接传送至 Notion 或 Obsidian。Notion 需一次性配置授权；Obsidian 开箱即用。
---

# Notion 与 Obsidian 整合

这两项功能可将内容流畅输出到浏览器外部的个人知识库中，均为 [Power Pack 进阶包](/zh/guide/settings/packs) 专属功能。

| 整合目标 | 前置配置 | 运行机制 |
| --- | --- | --- |
| **Obsidian** | 完全无需配置 | 透过 `obsidian://` 本机协议直接在 Vault 中建立笔记 |
| **Notion** | 一次性配置（约 3 分钟） | 透过官方 Notion API 在指定目标页面下建立子页面 |

## Obsidian

无需任何繁琐设置。在任一对话或片段上右键点击 → **导出** → **在 Obsidian 中开启**。

本机需已安装并启动 Obsidian。片段默认存入笔记库中的 `Snippets` 文件夹，标题阶层与代码区块排版完整保留。多选批量导出时会自动合并为一篇条理分明的长笔记。

:::tip
这是将 AI 对话转化为永久知识库阻力最小的途径：反白选取精华、存储为片段，累积几则后一键发送至 Obsidian。零复制贴上、排版完好无损。
:::

## Notion 配置步骤

在 **设置 → 整合** 中进行一次性设置：

### 1. 授予权限

Better Sidebar 在安装时不会预先索取 Notion API 权限 —— 仅在你明确点击启用该功能时，才会跳出浏览器选用权限确认。点击 **授予 Notion API 存取权限** 并批准。

### 2. 建立并填入 Integration Token

前往 [notion.so/my-integrations](https://www.notion.so/my-integrations) 建立一个全新的 **Internal Integration**。复制其产生的权杖（格式通常以 `ntn_` 开头）。

将其贴入 API Key 字段并点击 **存储**。扩展程序会自动测试连线并显示该整合名称。

### 3. 指定目标存放页面

从下拉选单中选择目标父页面。未来所有导出的内容都会作为其子页面建立。

### 疑难排解：「找不到页面 (No pages found)」

这通常是因为虽然建立了 Integration，但尚未在 Notion 中将具体页面的存取权限授予它。

Notion 要求必须按页面显式授权：在 Notion 中开启你打算存放导出内容的目标页面 → 右上角 **⋯** 选单 → **Connections** → 加入刚才建立的 Integration。随后在 Better Sidebar 点击 **重新整理** 即可。

## 解除链接

点击 API Key 旁的 **中断连线** 即可彻底清除本地快取的 Token 与页面资讯。Notion 中既有的页面完全不受影响。
