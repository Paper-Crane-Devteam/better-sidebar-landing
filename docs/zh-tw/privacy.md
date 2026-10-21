---
title: 隱私權政策
description: Better Sidebar 與 Web Agent Connector 如何處理你的資料。本地優先，沒有接收你聊天內容的開發者伺服器，不做追蹤。
---

# 隱私權政策

*最後更新：2026 年 10 月 21 日*

本隱私權政策適用於 Paper Crane Dev（以下稱「我們」）發布的兩款瀏覽器擴充功能：

- **Better Sidebar for Gemini & AI Studio**（以下稱「Better Sidebar」）
- **Better Sidebar Web Agent Connector**（以下稱「Connector」），Better Sidebar 的選用配套擴充功能

以下合稱「本擴充功能」。簡單來說：你的資料留在你的瀏覽器裡，我們沒有任何接收你聊天內容或整理資料的伺服器，也不會出售資料或用於廣告。

## 1. 本地優先儲存

- 資料夾、標籤、收藏、筆記、提示詞、摘錄、同步下來的訊息記錄、Agent 工作階段和工作區檔案，都儲存在你的裝置上：瀏覽器內的 SQLite 資料庫和擴充功能儲存空間。
- 你在 Better Sidebar 裡建立的每個 profile 都有各自獨立的本地資料庫。
- 自動備份是保存在同一本地儲存空間裡的快照。
- 解除安裝擴充功能或清除它的瀏覽器資料，會刪除以上全部內容，我們無法替你找回。

## 2. 我們不收集什麼

- 我們**不**接收、儲存或讀取你的聊天記錄、提示詞、AI 回覆、檔案或瀏覽活動。
- 我們**不**收集姓名、電子郵件、電話等個人資訊。
- 我們**不**使用統計分析、追蹤像素或廣告 SDK。
- 我們**不**出售或分享你的資料，也絕不用它訓練 AI 模型。

## 3. 讀取 Gemini 與 AI Studio

Better Sidebar 在 **gemini.google.com** 和 **aistudio.google.com** 上執行，會讀取那裡的對話標題、ID 和訊息，用來整理和搜尋。選用的背景訊息同步會用你目前的 Google 登入狀態，從 Google 自己的伺服器擷取你既有的對話，並儲存在本地。這些都不會傳送給我們。

## 4. AI Agent

Better Sidebar 的 Agent（BetterSidebar Agent、Workspace Agent、Browser Agent、Web Agent）都透過你瀏覽器裡自己的 Gemini 工作階段運作。Agent 執行時，它需要的資訊會放進你的 Gemini 對話並傳送給 Google，和你自己輸入或貼上沒有差別。可能包括：

- **BetterSidebar Agent：** 它替你查詢的對話標題、資料夾、標籤和筆記。
- **Workspace Agent：** 你請它處理的工作區檔案內容。
- **Browser Agent：** 開啟中的分頁和書籤的標題與網址。僅在你授予選用的 `tabs`、`tabGroups` 或 `bookmarks` 權限後，而且只在你開啟的開關範圍內。
- **Web Agent：** 你交給它的網頁上的文字、連結、結構和表單內容。密碼欄位永遠不會被讀取。

Google 會依據 [Google 隱私權政策](https://policies.google.com/privacy) 和 Gemini 的條款處理這些內容。Agent 不需要 API 金鑰，也不經過我們的任何伺服器。

## 5. Web Agent 與 Web Agent Connector

Web Agent 是選用功能，在你同意風險告知之前不會開啟。它透過 Chrome 的頁面偵錯工具操作網頁，這項權限由獨立的 Connector 擴充功能持有，Better Sidebar 本身不持有。

Connector：

- 只接受 Better Sidebar 的請求，網站和其他擴充功能都無法呼叫它；
- 只 attach 到你交給 Web Agent 的分頁，Chrome 會在每個這樣的頁面上顯示「已開始對這個瀏覽器進行偵錯」提示列；
- 拒絕操作 Gemini、AI Studio、Chrome 線上應用程式商店、Google 登入頁面和瀏覽器內部頁面；
- 頁面內容只回傳給 Better Sidebar，不傳送到任何伺服器；
- 只儲存目前 attach 的分頁 ID（瀏覽器關閉即清除）和你的「暫停」設定。

Web Agent 從網頁讀到的內容會依第 4 節所述進入你的 Gemini 對話。它在網站上執行的操作（提交表單、傳送訊息等），網站會視為你本人的操作。

## 6. 會離開你瀏覽器的資料

除了你透過 Gemini 和 AI Studio 傳送給 Google 的內容，只有以下幾種情況資料會離開你的瀏覽器，而且都由你發起：

- **Google Drive 同步（選用）：** 你的整理資料（資料夾、標籤、收藏、筆記、含標題的對話清單、提示詞、摘錄、Gem 和筆記本清單）會儲存到你自己 Google Drive 中一個隱藏的應用程式專用資料夾（`drive.appdata` 權限範圍）。擴充功能看不到你 Drive 裡的其他任何檔案。訊息記錄不會同步。連結 Drive 後變更會自動上傳，還原一律需要你手動操作。你可以隨時中斷連結。
- **匯出到 Notion（選用）：** 匯出時，你選擇的內容和你的 Notion 整合權杖會傳送到 `api.notion.com`。權杖儲存在你本地的瀏覽器中。
- **匯出到 Obsidian：** 透過 `obsidian://` 連結開啟你電腦上的 Obsidian，不經過網路。
- **啟用授權：** 啟用 Support Pack 或 Power Pack 時，你的授權金鑰和擴充功能隨機產生的裝置 ID 會傳送到我們的授權伺服器，用來驗證金鑰和計算啟用次數。不傳送其他任何內容，也不需要註冊帳號。購買由 Gumroad 或愛發電處理，適用它們各自的隱私權政策。
- **主題：** 部分主題會從 Google Fonts（`fonts.googleapis.com`）載入字型，對方會看到一次來自你瀏覽器的一般網路請求。

## 7. 權限說明

**Better Sidebar**

- `storage`、`unlimitedStorage`：在本地儲存你的資料和設定。
- `offscreen`：執行本地 SQLite 資料庫。
- `alarms`：排程背景訊息同步、備份和 Drive 同步。
- `scripting`：把側邊欄加到 Gemini 和 AI Studio 頁面上。
- `identity`：為選用的 Drive 同步登入 Google。
- `gemini.google.com`、`aistudio.google.com` 的網站存取權：在這兩個網站上顯示側邊欄並讀取你的對話。
- `sidePanel`、`contextMenus`、`declarativeNetRequestWithHostAccess`（Chrome）：在 Chrome 側邊面板中開啟 Web Agent，新增右鍵選單項目「讓 Web Agent 操作此頁面」，並讓 Gemini 能在該面板中載入。
- 選用的 `tabs`、`tabGroups`、`bookmarks`：只在你開啟 Browser Agent 時要求。
- 選用的 `api.notion.com` 存取權：只在你設定 Notion 匯出時要求。

**Web Agent Connector**

- `debugger`：依第 5 節所述操作你交給 Web Agent 的分頁。
- `storage`：記住 attach 的分頁和你的「暫停」設定。

## 8. 你的控制權

- 隨時可以在 Better Sidebar 設定中匯出資料，或從本地備份還原。
- 隨時可以關閉背景同步、Drive 同步或任何 Agent。
- 停止 Web Agent：按下 Chrome 偵錯提示列上的「取消」、關閉側邊面板，或在 Connector 裡按「Disconnect all」/「Pause」。
- 解除安裝任一擴充功能即會刪除它的本地資料。

## 9. 兒童

本擴充功能不以 13 歲以下兒童為對象，我們也不會蓄意收集他們的任何資料。

## 10. 政策變更

功能變動時我們可能會更新本政策，頂部日期即為最新版本。重要變更也會寫在擴充功能的更新說明裡。

## 11. 聯絡我們

對本政策有疑問，可以透過 [GitHub Issues](https://github.com/Paper-Crane-Devteam/better-sidebar/issues) 或 [Discord](https://discord.gg/FRzesxaGAx) 與我們聯絡。
