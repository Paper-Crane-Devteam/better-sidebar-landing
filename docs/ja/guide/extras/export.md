---
title: エクスポート
description: 会話とスニペットを取り出す — Markdown、プレーンテキスト、JSON、または Obsidian / Notion へ直接。単体、フォルダ全体、一括選択に対応。
---

# エクスポート

ライブラリのものはすべて外に出せます。会話、スニペット、フォルダを右クリックし、**Export** を選んで出力先を選びます。

![Markdown、プレーンテキスト、JSON、Obsidian、Notion の出力先があるエクスポートサブメニュー](/images/features/export-formats.webp)

## 出力先

| 出力先 | 結果 | 必要 |
| --- | --- | --- |
| **Markdown** | frontmatter 付き `.md` ファイル | 無料 |
| **Plain Text** | 書式なし `.txt` | 無料 |
| **JSON** | 構造化 `{ role, content }` 配列 | 無料 |
| **Obsidian** | vault にノートを直接作成 | [Power Pack](/en/guide/settings/packs) |
| **Notion** | 指定ページ配下にページを作成 | [Power Pack](/en/guide/settings/packs) |

### Markdown

各ターンが見出し、コードブロックはそのまま、frontmatter 付き。残しておくものにはこれを使います。

```markdown
## User

What's the best way to handle errors in Rust?

## Model

In Rust, error handling revolves around the `Result` type...
```

### Plain Text

書式を除いた対話だけ。メールに貼る、Markdown で詰まるツールに渡す、といった用途向けです。

### JSON

```json
[
  { "role": "user", "content": "What's the best way to handle errors in Rust?" },
  { "role": "model", "content": "In Rust, error handling revolves around the `Result` type..." }
]
```

プログラム利用向け — データセット作成、独自分析、別ツールへの入力。

### Obsidian

Obsidian の URI プロトコル経由で vault にノートを直接開きます。同じマシンに Obsidian がインストールされ、起動している必要があります。書式とコードブロックはそのまま残ります。

スニペットはデフォルトで vault 内の `Snippets` フォルダに入ります。

### Notion

設定した対象ページ配下に、内容を Notion ブロックへ変換してページを作成します。先にセットアップが必要です — [連携](/en/guide/extras/integrations) を参照してください。

## エクスポートできるもの

### 単一の会話

Library タブ（または Favorites、Gems、Notebooks — 会話が出るどこでも）で右クリック → **Export** → 出力先を選択。会話名のファイルがすぐダウンロードされます。

### フォルダ全体

フォルダを右クリック → **Export Folder**。中の会話がすべてエクスポートされます。ファイル形式の場合は、会話ごとに 1 ファイルの ZIP になります。

### 一括選択

Batch Mode（`Alt+Shift+B`）に入り、対象にチェックを入れ、一括ツールバーの **Export** を使います。同様にアイテムごとに 1 ファイルで ZIP にまとまります。

Notion への一括エクスポートはページ単位で進み、進捗トースト（`Exporting to Notion (7/23)…`）が出て、途中キャンセルできます。すでに作られたページは残ります。

### スニペット

スニペットも同じ出力先に、同じ手順で出せます。ナレッジベースへの想定ルートはこれです。読みながら [良い段落を保存](/en/guide/sidebar/snippets-tab) し、あとでコレクションを Obsidian へエクスポートします。

## 「No content found」

エクスポートが内容なしで失敗する場合、拡張機能はその会話の *タイトル* は持っていても *メッセージ* を見たことがありません。まだ出すものがありません。

一度会話を開いてメッセージを記録してから、もう一度エクスポートしてください。多数ある場合は、先に [エージェント](/en/guide/agent/better-sidebar-agent#sync-missing-messages) に同期を頼んでください。

> Work フォルダの 3 月以降のチャットをすべて Markdown で、チャットごとに 1 ファイル、zip でエクスポートして。メッセージ未同期のチャットがあれば、エクスポート前に教えて。

エージェントは先に確認し、フォルダの半分を黙って空のまま出すのではなく、欠けを報告します。

## データベース全体のエクスポート

上のどれもバックアップではありません。フォルダ構造、タグ、設定まで含めた完全なコピーには、**Settings → Data & Storage → Export** を使い、単一の `.db` ファイルを作ります。[バックアップと復元](/en/guide/extras/data-backup) を参照してください。

:::tip
役割が違います。Markdown エクスポートは会話を *別の場所で読む* ため。データベースエクスポートは Better Sidebar を *復元する* ため。一方を他方の仕事に使わないでください。
:::
