---
title: 對話匯出
description: 將對話與精華片段匯出為 Markdown、純文字或 JSON，或直接發送至 Obsidian 與 Notion。支援單則匯出、整資料夾打包或批次多選。
---

# 對話匯出

資料庫中的任何資料均可自由遷出。在對話、片段或資料夾上按右鍵，選擇 **匯出** 並挑選目標格式。

![包含 Markdown、純文字、JSON、Obsidian 與 Notion 目標的匯出子選單](/images/features/export-formats.webp)

## 支援的匯出目標

| 目標格式 | 輸出結果 | 授權要求 |
| --- | --- | --- |
| **Markdown** | 包含 Frontmatter 標頭的標準 `.md` 檔案 | 免費版 |
| **純文字 (Plain Text)** | 無格式的乾淨 `.txt` 檔案 | 免費版 |
| **JSON** | 結構化的 `{ role, content }` 陣列 | 免費版 |
| **Obsidian** | 透過 URI 協議直接在你的本機庫中建立筆記 | [Power Pack](/zh-tw/guide/settings/packs) |
| **Notion** | 自動在指定目標頁面下建立區塊筆記 | [Power Pack](/zh-tw/guide/settings/packs) |

### Markdown

每輪問答帶有清晰的標題，完整保留程式碼區塊高亮與排版，是長期在筆記軟體中歸檔儲存的首選。

### 純文字 (Plain Text)

去除所有 Markdown 符號，僅保留對話本體。適合直接貼入 Email 或匯入不支援 Markdown 的工具。

### JSON

包含角色與內文的純淨資料結構，方便進行程式設計二次開發、分析或訓練個人資料集。

### Obsidian

透過 Obsidian URI 協議直接在本機筆記庫中生成 Markdown 檔案。電腦需已安裝並啟動 Obsidian。片段預設存入筆記庫中的 `Snippets` 資料夾。

### Notion

將對話即時轉換為 Notion 區塊並寫入目標頁面。初次使用需先配置整合金鑰，詳見 [Notion 與 Obsidian 整合](/zh-tw/guide/extras/integrations)。

## 匯出維度

- **單則對話匯出**：在對話上按右鍵 → 匯出，檔案會以對話標題自動命名並立即下載。
- **整資料夾打包匯出**：在資料夾上按右鍵 → 匯出資料夾。若選本機檔案格式，系統會打包成 ZIP 壓縮檔。
- **批次多選匯出**：進入批次模式（`Alt+Shift+B`），勾選所需項目後點擊批次工具列上的匯出按鈕。

## 提示「找不到內容」的疑難排解

若匯出失敗並提示無內容，代表擴充功能僅抓取過該對話的 *標題*，但尚未記錄其 *訊息內文*。

手動點擊開啟該對話一次即可完成記錄；若對話眾多，可吩咐 [AI 助手](/zh-tw/guide/agent/better-sidebar-agent#回補搜尋索引) 先批次完成同步再匯出。

## 匯出完整資料庫

以上格式適用於在外部閱讀；若要完整備份側邊欄結構（資料夾層級、標籤、配色與偏好設定），請前往 **設定 → 資料與儲存 → 匯出** 下載完整 `.db` 資料庫檔案。詳見 [資料備份與還原](/zh-tw/guide/extras/data-backup)。
