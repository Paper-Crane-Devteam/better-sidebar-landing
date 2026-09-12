---
title: Notion 與 Obsidian 整合
description: 將對話與精華片段直接傳送至 Notion 或 Obsidian。Notion 需一次性配置授權；Obsidian 開箱即用。
---

# Notion 與 Obsidian 整合

這兩項功能可將內容流暢輸出到瀏覽器外部的個人知識庫中，均為 [Power Pack 進階包](/zh-tw/guide/settings/packs) 專屬功能。

| 整合目標 | 前置配置 | 運作機制 |
| --- | --- | --- |
| **Obsidian** | 完全無需配置 | 透過 `obsidian://` 本機協議直接在 Vault 中建立筆記 |
| **Notion** | 一次性配置（約 3 分鐘） | 透過官方 Notion API 在指定目標頁面下建立子頁面 |

## Obsidian

無需任何繁瑣設定。在任一對話或片段上按右鍵 → **匯出** → **在 Obsidian 中開啟**。

本機需已安裝並啟動 Obsidian。片段預設存入筆記庫中的 `Snippets` 資料夾，標題階層與程式碼區塊排版完整保留。多選批次匯出時會自動合併為一篇條理分明的長筆記。

:::tip
這是將 AI 對話轉化為永久知識庫阻力最小的途徑：反白選取精華、儲存為片段，累積幾則後一鍵發送至 Obsidian。零複製貼上、排版完好無損。
:::

## Notion 配置步驟

在 **設定 → 整合** 中進行一次性設定：

### 1. 授予權限

Better Sidebar 在安裝時不會預先索取 Notion API 權限 —— 僅在你明確點擊啟用該功能時，才會跳出瀏覽器選用權限確認。點擊 **授予 Notion API 存取權限** 並批准。

### 2. 建立並填入 Integration Token

前往 [notion.so/my-integrations](https://www.notion.so/my-integrations) 建立一個全新的 **Internal Integration**。複製其產生的權杖（格式通常以 `ntn_` 開頭）。

將其貼入 API Key 欄位並點擊 **儲存**。擴充功能會自動測試連線並顯示該整合名稱。

### 3. 指定目標存放頁面

從下拉選單中選擇目標父頁面。未來所有匯出的內容都會作為其子頁面建立。

### 疑難排解：「找不到頁面 (No pages found)」

這通常是因為雖然建立了 Integration，但尚未在 Notion 中將具體頁面的存取權限授予它。

Notion 要求必須按頁面顯式授權：在 Notion 中開啟你打算存放匯出內容的目標頁面 → 右上角 **⋯** 選單 → **Connections** → 加入剛才建立的 Integration。隨後在 Better Sidebar 點擊 **重新整理** 即可。

## 解除連結

點擊 API Key 旁的 **中斷連線** 即可徹底清除本地快取的 Token 與頁面資訊。Notion 中既有的頁面完全不受影響。
