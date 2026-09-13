---
title: 快速開始
description: Better Sidebar for Gemini 與 AI Studio 快速入門指南 — 功能介紹、如何安裝與後續探索。
---

# 快速開始

Better Sidebar 是一款瀏覽器擴充功能，為 **Google Gemini** 與 **Google AI Studio** 帶來強大而細緻的整理層 —— 包含資料夾、標籤、全文搜尋、提示詞庫、片段庫，以及能替你分擔整理任務的 AI 助手。它完全在你的瀏覽器本地執行，無需外部伺服器，你的資料永遠屬於你自己。

![Better Sidebar 在 Gemini 上執行，顯示資料夾樹狀目錄、標籤與篩選器](/images/features/overview.webp)

## 你可以做些什麼

| | |
| --- | --- |
| **整理** | 帶有顏色的巢狀資料夾、標籤、收藏、置頂、拖曳移動、批次操作 |
| **尋找** | 跨越所有訊息的全文搜尋，以及單一對話的大綱導航 |
| **複用** | 支援變數與組合的提示詞庫，輸入 `/` 即可隨時喚起 |
| **保存** | 片段庫 —— 從 50 輪對話中只摘錄儲存那段真正有價值的內容 |
| **委派** | 依你的指令自動歸檔、標籤、重新命名與清理資料庫的 AI 助手 |
| **匯出** | Markdown、純文字、JSON、Obsidian、Notion |
| **備份** | 本地快照以及選用的 Google Drive 同步 |
| **風格** | 20+ 款主題、自訂寬度、Zen 專注模式、緊湊模式 |

每一項能力都有專門的指南 —— 請參閱 [下一步](#下一步)。

## 支援的平台

| 平台 | 支援狀態 |
| --- | --- |
| Google Gemini (gemini.google.com) | ✅ 支援 |
| Google AI Studio (aistudio.google.com) | ✅ 支援 |

由於兩個平台的內部架構不同，部分功能專屬於特定平台。Gemini 專屬功能包括 Zen 模式、智慧捲軸、選取文字工具列、Gems 與 Notebooks；AI Studio 專屬功能包括批次歷史匯入與 Run Settings 自動摺疊。其餘所有功能均在兩個平台上完美運作。

## 支援的瀏覽器

| 瀏覽器 | 下載連結 |
| --- | --- |
| Chrome | [Chrome 線上應用程式商店](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj) |
| Firefox | [Firefox 附加元件](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio) |
| Edge | 即將推出 |

任何 Chromium 核心瀏覽器（Edge、Brave、Arc、Vivaldi）均可直接安裝 Chrome 商店版本。

## 快速上手步驟

### 1. 安裝擴充功能

前往 [Chrome 線上應用程式商店](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj)（或 [Firefox 附加元件](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio)）點擊安裝。詳細步驟請參閱 [安裝指南](/zh-tw/guide/installation)。

### 2. 登入你的 Google 帳號

Better Sidebar 與 **帳號綁定**。你必須在 Gemini 或 AI Studio 處於登入狀態，擴充功能才能正常運作。側邊欄會自動偵測你目前使用的帳號並為其建立獨立資料庫 —— 這也是 [多帳號支援](/zh-tw/guide/settings/multi-account) 的運作基礎。

### 3. 開啟 Gemini 或 AI Studio

前往 [gemini.google.com](https://gemini.google.com) 或 [aistudio.google.com](https://aistudio.google.com)。Better Sidebar 會自動取代原生側邊欄。

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">
  <img src="/images/features/overview-gemini.webp" alt="Better Sidebar on Gemini" />
  <img src="/images/features/overview-aistudio.webp" alt="Better Sidebar on AI Studio" />
</div>

你可以隨時使用快速鍵 `Alt+Shift+Q`，或點擊側邊欄底部的 **切換至原生側邊欄** 按鈕切換回去。切換時不會遺失任何資料 —— 當你切換回 Better Sidebar 時，所有資料夾與標籤依然完好如初。

### 4. 匯入你的對話清單

:::tip 重要提示
首次安裝時，Better Sidebar 預設只能看到你 **最近開啟過** 的對話（即平台當前載入的內容）。舊對話需要先匯入才會出現在樹狀目錄中。
:::

首次啟動時會彈出引導提示，詢問是否匯入完整清單。若跳過，亦可隨時點擊側邊欄頂部 **⋯** 選單 → **匯入聊天記錄清單**。

此步驟僅匯入標題與中繼資料，足以支援日常整理。若要讓舊對話可被 *全文搜尋*，請看下一步。

### 5. 讓舊對話支援全文搜尋

全文搜尋僅能索引擴充功能實際讀取過的訊息內文。

**在 AI Studio 上** 提供批次匯入功能：前往 **設定 → 資料與儲存 → 匯入聊天資料**。引導會帶你將資料庫匯出至 Google Drive，下載 ZIP 並上傳解析。詳情請見 [搜尋指南](/zh-tw/guide/sidebar/search-tab#匯入聊天記錄)。

**在 Gemini 上**，Google 原生未提供批次匯出，因此當你開啟對話時訊息會自動被記錄。最快的補全方式是讓 [AI 助手](/zh-tw/guide/agent/overview) 幫你完成 —— 對它輸入指令：*「幫我同步最近 20 則對話的內文」*，它就會自動幫你逐一完成。

### 6. 體驗核心功能

- **建立資料夾** — 點擊頂部資料夾+ 圖示，輸入名稱並按 Enter，再將對話拖曳進去
- **快速搜尋** — 按下 `Alt+2`，輸入你記得的任何舊對話關鍵字
- **儲存提示詞** — 切換至 Prompt 庫（`Alt+3`），點擊 **+** 新增，之後在聊天輸入框打 `/` 即可插入
- **保存精華片段** — 在 Gemini 回覆中反白選取任意段落，在浮出的工具列點擊 **儲存為片段**
- **喚起 AI 助手** — 在輸入框輸入 `>`，選擇 **Better Sidebar**，吩咐它幫你整理未分類的對話

## 下一步

| 我想要… | 參考章節 |
| --- | --- |
| 將對話分類進資料夾與貼標籤 | [資料庫](/zh-tw/guide/sidebar/library-tab) |
| 在舊對話中搜尋特定內容 | [全文搜尋](/zh-tw/guide/sidebar/search-tab) |
| 導航並閱讀超長對話 | [對話大綱](/zh-tw/guide/sidebar/outline) · [智慧捲軸](/zh-tw/guide/ui-customization/smart-scrollbar) |
| 建立可複用的提示詞庫 | [提示詞庫](/zh-tw/guide/sidebar/prompts-tab) · [斜槓命令](/zh-tw/guide/ui-customization/slash-commands) |
| 保存回答中的精華重點 | [片段庫](/zh-tw/guide/sidebar/snippets-tab) |
| 讓 AI 自動幫我整理庫存 | [AI 助手概覽](/zh-tw/guide/agent/overview) |
| 配合 AI 一同處理本機檔案與文件 | [工作區助手](/zh-tw/guide/agent/workspace-agent) |
| 將對話匯出到 Obsidian 或 Notion | [對話匯出](/zh-tw/guide/extras/export) · [外掛整合](/zh-tw/guide/extras/integrations) |
| 調整寬度、Zen 模式、緊湊模式 | [版面與寬度](/zh-tw/guide/ui-customization/layout-and-width) |
| 備份或跨裝置同步資料 | [Google Drive 同步](/zh-tw/guide/extras/drive-sync) · [資料備份](/zh-tw/guide/extras/data-backup) |
| 更換色彩主題或調整快速鍵 | [主題樣式](/zh-tw/guide/settings/themes) · [快速鍵一覽](/zh-tw/guide/settings/keyboard-shortcuts) |
| 了解免費版與進階功能包區別 | [功能包與授權](/zh-tw/guide/settings/packs) |
