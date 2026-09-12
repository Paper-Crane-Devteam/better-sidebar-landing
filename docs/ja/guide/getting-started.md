---
title: はじめに
description: Better Sidebar for Gemini / AI Studio のクイック紹介 — 何ができ、どう始め、次にどこを読めばよいか。
---

# はじめに

Better Sidebar は、**Google Gemini** と **Google AI Studio** に本格的な整理レイヤーを追加するブラウザ拡張機能です。フォルダ、タグ、全文検索、プロンプトライブラリ、スニペットライブラリ、そして整理作業を任せる AI エージェントまで揃っています。すべてブラウザ内で完結し、外部サーバーは使いません。データはあなたのものとして手元に残ります。

![Gemini 上で動作する Better Sidebar。フォルダツリー、タグ、フィルターが見える](/images/features/overview.png)

## できること

| | |
| --- | --- |
| **整理** | 色付きの入れ子フォルダ、タグ、お気に入り、ピン留め、ドラッグ＆ドロップ、一括操作 |
| **検索** | すべてのメッセージを対象にした全文検索と、会話ごとのアウトライン |
| **再利用** | 変数と合成に対応したプロンプトライブラリ。`/` 入力で呼び出し |
| **保存** | スニペットライブラリ — 50 往復のチャットから、本当に良い一段落だけを残す |
| **委任** | 依頼に応じて整理・タグ付け・改名・クリーンアップしてくれる AI エージェント |
| **エクスポート** | Markdown、プレーンテキスト、JSON、Obsidian、Notion |
| **バックアップ** | ローカルスナップショットと、任意の Google Drive 同期 |
| **見た目** | 20 以上のテーマ、幅の調整、Zen Mode、Compact Mode |

それぞれ専用のガイドがあります — [次のステップ](#次のステップ) を参照してください。

## 対応プラットフォーム

| プラットフォーム | 状態 |
| --- | --- |
| Google Gemini（gemini.google.com） | 対応 |
| Google AI Studio（aistudio.google.com） | 対応 |

2 つのサイトの作りが違うため、一部機能はプラットフォーム固有です。Gemini 専用は Zen Mode、Smart Scrollbar、選択ツールバー、Gems、Notebooks。AI Studio 専用は一括履歴インポートと Run Settings の自動折りたたみです。それ以外は両方で動作します。

## 対応ブラウザ

| ブラウザ | リンク |
| --- | --- |
| Chrome | [Chrome Web Store](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj) |
| Firefox | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio) |
| Edge | 近日公開 |

Chromium 系ブラウザ（Brave、Arc、Vivaldi、Edge）は、Chrome Web Store 版をそのままインストールできます。

## クイックスタート

### 1. 拡張機能をインストール

[Chrome Web Store](https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj)（または [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio)）からインストールします。詳しい手順は [インストールガイド](/en/guide/installation) を参照してください。

### 2. Google アカウントにサインイン

Better Sidebar は **アカウントに紐づきます**。Gemini または AI Studio にサインインしていないと動作しません。サイドバーはアクティブなアカウントを検出し、そのアカウント専用の独立したデータベースを作ります — これが [マルチアカウント対応](/en/guide/settings/multi-account) の仕組みでもあります。

### 3. Gemini または AI Studio を開く

[gemini.google.com](https://gemini.google.com) または [aistudio.google.com](https://aistudio.google.com) に移動します。Better Sidebar がネイティブのサイドバーを自動で置き換えます。

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">
  <img src="/images/features/overview-gemini.png" alt="Gemini 上の Better Sidebar" />
  <img src="/images/features/overview-aistudio.png" alt="AI Studio 上の Better Sidebar" />
</div>

いつでも `Alt+Shift+Q`、またはサイドバーフッターの **元のサイドバーに切り替え** でプラットフォーム標準のサイドバーに戻せます。切り替えてもデータは失われません — 戻ればフォルダやタグはそのままです。

### 4. チャット一覧をインポート

:::tip 重要
初回インストール時、Better Sidebar が見えるのは **直近の** 会話だけです — プラットフォームが表示している分だけです。古いチャットは、ツリーに出す前にインポートが必要です。
:::

初回起動時に、一覧全体のインポートを促すダイアログが出ます。スキップした場合は、サイドバーヘッダーの **⋯** メニュー → **チャット一覧をインポート** からいつでも実行できます。

これはタイトルとメタデータだけのインポートで、整理には十分です。古い会話を *検索可能* にするには、次のステップへ進みます。

### 5. 古い会話を検索可能にする

全文検索は、拡張機能が実際に見たメッセージにだけ効きます。

**AI Studio** には一括インポートがあります：**設定 → データとストレージ → チャットデータをインポート**。ライブラリを Google Drive にエクスポートし、ZIP をダウンロードしてアップロードする流れです。詳しくは [検索](/en/guide/sidebar/search-tab#import-chat-history) を参照してください。

**Gemini** には Google 側の一括エクスポートがないため、会話を開くたびにメッセージが記録されます。追いつく一番早い方法は [エージェント](/en/guide/agent/overview) に任せることです — *「直近 20 件のチャット内容を同期して」* と頼めば、代わりに巡回してくれます。

### 6. 基本操作を試す

- **フォルダを作成** — ヘッダーのフォルダ+ アイコンをクリックし、名前を入力して Enter。会話をドラッグして入れる
- **検索** — `Alt+2` を押し、古いチャットから覚えている単語を入力
- **プロンプトを保存** — プロンプト（`Alt+3`）へ行き **+** をクリック。チャット入力で `/` と打てば挿入できる
- **スニペットを保存** — Gemini の回答の一部を選択し、出たツールバーの **スニペットとして保存** をクリック
- **エージェントに依頼** — チャット入力で `>` と打ち、**Better Sidebar** を選んで、未整理のチャットを整理してもらう

## 次のステップ

| やりたいこと | 行く先 |
| --- | --- |
| 会話をフォルダとタグで整理する | [ライブラリ](/en/guide/sidebar/library-tab) |
| 古い会話の中身を探す | [検索](/en/guide/sidebar/search-tab) |
| とても長い会話を移動する | [アウトライン](/en/guide/sidebar/outline) · [Smart Scrollbar](/en/guide/ui-customization/smart-scrollbar) |
| 再利用できるプロンプトライブラリを作る | [プロンプト](/en/guide/sidebar/prompts-tab) · [スラッシュコマンド](/en/guide/ui-customization/slash-commands) |
| 回答の良い部分だけ残す | [スニペット](/en/guide/sidebar/snippets-tab) |
| AI にライブラリ整理を任せる | [エージェント](/en/guide/agent/overview) |
| ファイルや文書を AI と一緒に扱う | [ワークスペースエージェント](/en/guide/agent/workspace-agent) |
| チャットを Obsidian や Notion に出す | [エクスポート](/en/guide/extras/export) · [連携](/en/guide/extras/integrations) |
| 幅、Zen Mode、Compact Mode を調整する | [レイアウトと幅](/en/guide/ui-customization/layout-and-width) |
| データを同期・バックアップする | [Drive 同期](/en/guide/extras/drive-sync) · [バックアップ](/en/guide/extras/data-backup) |
| テーマやホットキーを変える | [テーマ](/en/guide/settings/themes) · [キーボードショートカット](/en/guide/settings/keyboard-shortcuts) |
| 無料と有料の違いを知る | [パック](/en/guide/settings/packs) |
