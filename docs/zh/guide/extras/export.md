---
title: 对话导出
description: 将对话与精华片段导出为 Markdown、纯文本或 JSON，或直接发送至 Obsidian 与 Notion。支持单则导出、整文件夹打包或批量多选。
---

# 对话导出

资料库中的任何资料均可自由迁出。在对话、片段或文件夹上右键点击，选择 **导出** 并挑选目标格式。

![包含 Markdown、纯文本、JSON、Obsidian 与 Notion 目标的导出子选单](/images/features/export-formats.webp)

## 支持的导出目标

| 目标格式 | 输出结果 | 授权要求 |
| --- | --- | --- |
| **Markdown** | 包含 Frontmatter 标头的标准 `.md` 档案 | 免费版 |
| **纯文本 (Plain Text)** | 无格式的干净 `.txt` 档案 | 免费版 |
| **JSON** | 结构化的 `{ role, content }` 阵列 | 免费版 |
| **Obsidian** | 透过 URI 协议直接在你的本机库中建立笔记 | [Power Pack](/zh/guide/settings/packs) |
| **Notion** | 自动在指定目标页面下建立区块笔记 | [Power Pack](/zh/guide/settings/packs) |

### Markdown

每轮问答带有清晰的标题，完整保留代码区块高亮与排版，是长期在笔记软件中归档存储的首选。

### 纯文本 (Plain Text)

去除所有 Markdown 符号，仅保留对话本体。适合直接贴入 Email 或导入不支持 Markdown 的工具。

### JSON

包含角色与内文的纯净资料结构，方便进行程序设计二次开发、分析或训练个人资料集。

### Obsidian

透过 Obsidian URI 协议直接在本机笔记库中生成 Markdown 档案。电脑需已安装并启动 Obsidian。片段默认存入笔记库中的 `Snippets` 文件夹。

### Notion

将对话即时转换为 Notion 区块并写入目标页面。初次使用需先配置整合金钥，详见 [Notion 与 Obsidian 整合](/zh/guide/extras/integrations)。

## 导出维度

- **单则对话导出**：在对话上右键点击 → 导出，档案会以对话标题自动命名并立即下载。
- **整文件夹打包导出**：在文件夹上右键点击 → 导出文件夹。若选本机档案格式，系统会打包成 ZIP 压缩档。
- **批量多选导出**：进入批量模式（`Alt+Shift+B`），勾选所需项目后点击批量工具栏上的导出按钮。

## 提示「找不到内容」的疑难排解

若导出失败并提示无内容，代表扩展程序仅抓取过该对话的 *标题*，但尚未记录其 *消息内文*。

手动点击开启该对话一次即可完成记录；若对话众多，可吩咐 [AI 助手](/zh/guide/agent/better-sidebar-agent#回补搜索索引) 先批量完成同步再导出。

## 导出完整资料库

以上格式适用于在外部阅读；若要完整备份侧边栏结构（文件夹层级、标签、配色与偏好设置），请前往 **设置 → 数据与存储 → 导出** 下载完整 `.db` 数据库文件。详见 [数据备份与还原](/zh/guide/extras/data-backup)。
