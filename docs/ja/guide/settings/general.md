---
title: 一般
description: インターフェース言語、サイドバーに出すショートカットボタン、削除確認の動作。
---

# 一般

General ページには小さなものが 3 つあります。拡張機能の言語、サイドバーを散らかすショートカットボタン、削除前に確認するかです。

歯車アイコンまたは `Alt+Shift+,` で開き、**一般** を選びます。

## 言語

Better Sidebar は 7 言語に完全翻訳されています。

| 言語 | |
| --- | --- |
| English | `en` |
| 简体中文 | `zh-CN` |
| 繁體中文 | `zh-TW` |
| 日本語 | `ja` |
| Português | `pt` |
| Español | `es` |
| Русский | `ru` |

変更はすぐ適用されます — ラベル、ツールチップ、ダイアログ、changelog、すべて。初回インストール時はブラウザのロケールから推定されます。

この設定は Gemini 自体の言語とは独立です。

## サイドバーショートカット

サイドバーのクイックリンクボタンです。それぞれにスイッチがあり、押さないものを隠せます。

**両プラットフォーム共通**

| ショートカット | 行き先 |
| --- | --- |
| **お気に入り** | Favorites タブ |
| **元のサイドバーに切り替え** | プラットフォーム標準のサイドバー |

**Gemini のみ**

| ショートカット | 行き先 |
| --- | --- |
| **My Stuff** | Gemini の My Stuff ページ |
| **Gems** | Gemini の Gems 概要 |
| **Notebooks** | Gemini の Notebooks 概要 |

**AI Studio のみ**

| ショートカット | 行き先 |
| --- | --- |
| **Build** | AI Studio の Build ページ |
| **Dashboard** | AI Studio の Dashboard |
| **Documentation** | AI Studio のドキュメント |

見える一覧は今いるサイトに依存します — AI Studio にいるあいだ Gemini ショートカットは出ません。

:::tip
どうせ [Compact Mode](/en/guide/ui-customization/layout-and-width#compact-mode) を使うなら、これらを調整する必要はありません — Compact Mode はアイコンバー全体を隠します。このページは、素のサイドバーではなく *少し* すっきりさせたい人向けです。
:::

## 動作

### 確認なしで会話を削除

デフォルトはオフで、そのままでよいと思います。

オンにすると、単一会話の削除はクリックした瞬間に起きます — ダイアログなし、アンドゥなし、会話は Better Sidebar だけでなく Google のサーバーからも消えます。

一括削除はこの設定に関係なく確認を求めます。

:::warning
Better Sidebar で、ワンクリックの誤操作でデータを失える唯一の設定です。意図的に一件ずつの整理を大量にし、クリックしているものに自信があるときだけオンにしてください。一括削除には通常 Batch Mode の方が良く、実行前に何が選ばれているか正確に見えます。
:::

## 他の設定の場所

General ページは意図的に小さいです。人がよく探す設定は別の場所にあります。

| 探しているもの | 行く先 |
| --- | --- |
| テーマ、ライト／ダークモード | [テーマ](/en/guide/settings/themes) |
| デフォルト表示モード、並べ替え、無視フォルダ | [ライブラリ](/en/guide/settings/library) |
| 幅、Zen Mode、要素の表示 | [レイアウトと幅](/en/guide/ui-customization/layout-and-width) |
| ホットキー | [キーボードショートカット](/en/guide/settings/keyboard-shortcuts) |
| バックアップ、Drive 同期、プロファイル、リセット | [バックアップ](/en/guide/extras/data-backup) · [Drive Sync](/en/guide/extras/drive-sync) · [マルチアカウント](/en/guide/settings/multi-account) |
| Notion 接続 | [連携](/en/guide/extras/integrations) |
| エージェントの権限とスキル | [スキルとツール](/en/guide/agent/skills-and-tools) |
| ライセンスと有料内容 | [パック](/en/guide/settings/packs) |
