---
title: 安裝指南
description: 在 Chrome、Firefox 或任何 Chromium 核心瀏覽器上安裝 Better Sidebar，以及首次啟動時的設定步驟。
---

# 安裝指南

安裝只需幾秒鐘。無需註冊獨立帳號，無需繁瑣設定。

## Chrome 與 Chromium 核心瀏覽器

1. 開啟 [Chrome 線上應用程式商店頁面](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj)
2. 點擊 **加到 Chrome**
3. 前往 [gemini.google.com](https://gemini.google.com) 或 [aistudio.google.com](https://aistudio.google.com)

同一版本亦完全相容於 Edge、Brave、Arc 與 Vivaldi —— 直接從 Chrome 線上應用程式商店安裝即可。

## Firefox

1. 開啟 [Firefox 附加元件頁面](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio)
2. 點擊 **新增至 Firefox**
3. 前往 Gemini 或 AI Studio

:::warning
Google Drive 同步功能在 Firefox 上無法使用 —— 該功能需要依賴 Firefox 未開放的專用 Identity API。其餘所有功能均正常運作，且你可隨時使用 [本地備份](/zh-tw/guide/extras/data-backup) 與手動資料庫匯出來達到相同的安全備份效果。
:::

## 必須登入 Google 帳號

Better Sidebar 與帳號緊密綁定。它會在你在平台頁面 **登入 Google 帳號後** 自動啟動。若你以訪客未登入狀態造訪 Gemini，側邊欄不會出現，直到你完成登入。

擴充功能偵測到的帳號即為當前資料庫歸屬的身分設定檔。詳情請參閱 [多帳號管理](/zh-tw/guide/settings/multi-account)。

## 首次啟動

安裝後的第一次造訪，你將看到：

1. **歡迎引導畫面**，介紹擴充功能的核心理念
2. **匯入聊天記錄清單提示** —— 強烈建議接受。若不匯入，側邊欄初期只能顯示平台當前載入的有限對話。詳見 [匯入聊天清單](/zh-tw/guide/sidebar/library-tab#匯入聊天記錄清單)。
3. **功能導覽導引**，快速了解各個分頁的位置

新建立的對話預設會進入 **收件匣 (Inbox)** 資料夾，讓你無後顧之憂地隨時歸類。

:::tip
建議選擇匯入。這決定了側邊欄是只顯示最近二十則對話，還是完整列出你的所有對話歷史。過程只需數秒，若不小心略過，也可以隨時從頂部 **⋯** 選單手動執行。
:::

## 語言設定

安裝時介面語言會自動根據你的瀏覽器語系進行判定。支援包括繁體中文在內的 7 種語言 —— 若判斷有誤，可隨時在 **設定 → 一般 → 語言** 自由切換。

## 更新

瀏覽器會自動在背景更新擴充功能。你也可以在瀏覽器的擴充功能管理頁面中手動檢查更新。

每次更新後會彈出 **更新日誌** 視窗，概述新版本功能並附有完整記錄連結。日誌可隨時在 **設定 → 關於 → 查看更新日誌** 重新開啟。

## 若側邊欄沒有出現

1. 確認你在該分頁上已成功登入 Google 帳號
2. 重新整理頁面
3. 檢查瀏覽器工具列圖示的 [平台管理工具](/zh-tw/guide/settings/platform-manager) 是否不小心關閉了該平台支援
4. 確認瀏覽器已啟用該擴充功能

Google 偶爾更新前端介面可能會導致短暫不相容。若昨日正常而今天無法載入，請檢查擴充功能更新，並可透過擴充功能內的 **意見回饋** 分頁回報，我們會迅速推出修復修補程式。

## 解除安裝

在瀏覽器工具列的擴充功能圖示上按右鍵 → **從 Chrome 移除**。

:::warning
解除安裝將一併刪除瀏覽器中的本地資料庫 —— 包括所有自訂資料夾、標籤、收藏、提示詞與片段。

若日後可能需要使用，請務必 **先匯出備份**：前往 **設定 → 資料與儲存 → 匯出**，可下載單一 `.db` 檔案，未來可隨時匯入新安裝的環境中。此外，[Google Drive 備份](/zh-tw/guide/extras/drive-sync) 在解除安裝後依然保留在你的雲端硬碟中。
:::
