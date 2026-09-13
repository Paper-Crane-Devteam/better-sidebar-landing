---
title: テーマ
description: Gemini と AI Studio 向けの手作りテーマ 19 種、各 5 分の無料プレビュー、インポート可能な AI 生成カスタムテーマ。
---

# テーマ

Better Sidebar は自パネルだけでなくページ全体を再スタイルします。テーマを選ぶと Gemini または AI Studio も変わります — 背景、テキスト、アクセント、いくつかのテーマではタイポグラフィも。

**設定 → テーマ**

![各カードに色プレビューストリップがあるテーマグリッド](/images/features/themes-grid.webp)

## デフォルト

標準の見た目。ニュートラルでクリーン、ライト／ダーク／システムの切り替えがある唯一のテーマです。

- **Light** — 明るい背景、暗いテキスト
- **System** — OS の外観設定に従う
- **Dark** — 暗い背景、明るいテキスト

無料で、他が戻るときのフォールバックです。

## 19 のプリセット

各プリセットは固定のライトまたはダークパレットです。デザインされたテーマの要点は、デザイナーが色を選んだことだからです。モード切替はそれらには効きません。

### ダーク

| テーマ | 内容 |
| --- | --- |
| **Tokyo Night** | 深い青黒に紫、青、ピーチのアクセント |
| **Catppuccin Mocha** | 暖かなパステルダーク、ラベンダーとピーチ |
| **Dracula** | クラシック — 鮮やかな紫、緑、ピンク |
| **Nord Aurora** | 北極のダーク、クールな青にフロストグリーンのアクセント |
| **Gruvbox** | レトロ、暖かい土色。ろうそくの下でコードを読む感じ |
| **Everforest** | 落ち着いた森の緑に暖かいアンバーのタッチ |
| **Rosé Pine** | 柔らかいダークにミュートなローズと金 |
| **Solarized** | クラシックなバランスのダークパレット |
| **Midnight Purple** | 深い黒に紫とインディゴのグラデーション |
| **Cyberpunk Neon** | ほぼ黒の上にマゼンタと電光ブルー |
| **Retro Terminal** | 緑 on 黒の CRT、全体が等幅 |
| **High Contrast** | 真っ黒と白、アンバーのアクセント 1 つ。可読性最優先 |

### ライト

| テーマ | 内容 |
| --- | --- |
| **Ocean Breeze** | 爽やかなライトテーマ、海の青とコーラル |
| **Sakura** | 柔らかいピンクとセージグリーン。春の午後 |
| **Paper & Ink** | 読書向け、暖かい紙色と上品なセリフ書体 |
| **Solarized Light** | 愛される Solarized のライト側 |
| **Cupertino Glass** | すりガラス、システムフォント、ミニマルなパレット |
| **Grimoire** | 古びた羊皮紙、暖色、セリフタイポグラフィ |
| **Graphite** | 純粋なグレースケール。色のない構造 |

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px">
  <figure style="margin:0">
    <img src="/images/features/theme-tokyo-night.webp" alt="Gemini に適用された Tokyo Night テーマ" />
    <figcaption style="font-size:13px;opacity:.7;text-align:center">Tokyo Night</figcaption>
  </figure>
  <figure style="margin:0">
    <img src="/images/features/theme-everforest.webp" alt="Gemini に適用された Everforest テーマ" />
    <figcaption style="font-size:13px;opacity:.7;text-align:center">Everforest</figcaption>
  </figure>
  <figure style="margin:0">
    <img src="/images/features/theme-ocean-breeze.webp" alt="Gemini に適用された Ocean Breeze テーマ" />
    <figcaption style="font-size:13px;opacity:.7;text-align:center">Ocean Breeze</figcaption>
  </figure>
</div>

:::tip
テーマは装飾だけではありません。**Paper & Ink** と **Grimoire** はセリフ書体と暖かい背景を使い、長い読書セッションで本当に役立ちます。**High Contrast** は見た目より可読性のため。**Retro Terminal** はすべてを等幅にし、コード作業で好む人もいます。好みの美学でなくても、この 3 つを数分ずつ試してください — 特定の仕事に合うものがあるかもしれません。
:::

## 無料 5 分プレビュー

任意のプリセットをクリックすると、実際のページに本気ですぐ適用されます。バナーが出ます。

> Preview mode — theme will revert to default in 5 minutes.

5 分後に自動でデフォルトへ戻ります。プレビュー回数に上限はありません。

ティーザーのスクリーンショットではありません — 自分のワークスペース、自分の会話でのテーマ全体です。毎日使いたいかどうかを知るには 5 分で足ります。

プリセットを恒久的に保つには [Support Pack](/en/guide/settings/packs) を入手してください。一度の購入で、すべてのプリセットと今後のプリセットが含まれます。

## AI 生成テーマ

19 種が合わなければ、AI に作らせます。

### 1. ジェネレータープロンプトを作成

**設定 → テーマ → AI で作成**。テーマ生成プロンプトが [プロンプトライブラリ](/en/guide/sidebar/prompts-tab) に追加され、Prompts タブへ切り替わります。すでにあればそこへ案内するだけです。

### 2. 欲しいものを説明する

そのプロンプトを Gemini または AI Studio の会話で使い、テーマを説明します。

> 真夜中の森に着想したダークテーマ — 深い緑、柔らかな月光の白、樹皮の茶アクセント、臨床的ではなく少し暖かい感じ。

モデルは JSON のテーマ定義を返します。

:::tip
16 進値ではなく *雰囲気* や *参照* を書いてください。「海の上の暖かい夕焼け」は一貫したパレットを出し、「アクセントに #FF6B35」は良い色 1 つと恣意的な 18 色になります。同じ会話で調整も頼めます — 「彩度が高すぎる、アクセントを抑えて」で大丈夫です。
:::

### 3. インポート

**設定 → テーマ → テーマをインポート**、JSON を貼ると、確定前にダイアログが検証します。有効なテーマはすぐ適用され、グリッドにプリセットと並んで出ます。

カスタムテーマのインポートには [Support Pack](/en/guide/settings/packs) が必要です。

### インポートしたテーマの管理

インポートしたテーマのカードには削除ボタンがあります。現在アクティブなものを削除するとデフォルトに戻ります。いくつでも保持し、自由に切り替えられます。

:::tip
テーマはただの JSON なので共有できます。メッセージ、gist、Discord チャンネルに貼れば、他の人もインポートできます。
:::

## 無料で使えるもの

| | 無料 | Support Pack |
| --- | --- | --- |
| デフォルトテーマ、ライト／ダーク／システム | はい | はい |
| 19 プリセット | 5 分プレビュー | 恒久 |
| 今後のプリセット | 5 分プレビュー | 含む |
| AI ジェネレータープロンプト | はい | はい |
| カスタムテーマのインポート | いいえ | はい |

ジェネレータープロンプトの作成と使用は無料です — 支払わずにテーマ JSON を作れます。拡張機能へインポートする部分がパックを必要とします。
