---
title: スラッシュコマンド
description: チャット入力で / と打ち、ライブラリの任意のプロンプトを挿入。変数は埋められ、インポートは解決され、キーボードから離れません。
---

# スラッシュコマンド

Gemini または AI Studio の入力欄で `/` と打つと、[プロンプトライブラリ](/en/guide/sidebar/prompts-tab) がインラインで出ます。

![チャット入力でスラッシュを打つとプロンプトピッカーが開く](/images/features/slash-command.png)

続けて打ってフィルター。矢印キーで移動。Enter で挿入。打った `/query` テキストはプロンプトの全文に置き換わります。

## マッチング

フィルターはファジーで複数語なので、`/rev code` は *Review code for security issues* を見つけます。マッチは単語の先頭から始まるので、タイトルの順序が重要です。

| タイトル | 見つかる入力 |
| --- | --- |
| `translate-jp` | `/tr`、`/jp` |
| `Japanese translation helper` | `/ja`、`/tran` — ただし `/jp` はすぐには |

:::tip
キーワードを先に。`review-security` が `My prompt for reviewing code security` に勝つのは短いからではなく、`/rev` がすぐ当たるからです。ライブラリを速く使うために一つだけするなら、このための改名です。
:::

## 変数が埋め込まれる

プロンプトに変数があると、挿入前に小さなフォームが出ます。

テキスト変数は入力ボックス、ドロップダウン変数は定義済み選択肢のセレクト。埋めると、変数が置換され [インポート](/en/guide/sidebar/prompts-tab#prompt-composition-import) がインラインされた解決済みテキストが入力欄に入ります。

たとえば次のようなプロンプト：

```
Translate the following to {{language:English,Japanese,Spanish}}.
Tone: {{tone:neutral,formal,casual}}.

{{@import:Translation Rules}}
```

は、3 キーストロークと 2 つのドロップダウン選択で、標準の翻訳ルールが付いた完成した指示になります。

## オフにする

スイッチは **ブラウザツールバーのポップアップ** にあります — アドレスバー横の Better Sidebar アイコンをクリックし、Gemini または AI Studio タブを選び、**スラッシュコマンド** を切り替えます。プラットフォームごとです。

:::tip
サイドバーの設定モーダルにない唯一のトグルで、多くの人が迷います。設定 → UI コントロールを探してもありません。詳しくは [プラットフォーム管理](/en/guide/settings/platform-manager) を参照してください。
:::

ファイルパス、正規表現、日付などでリテラルのスラッシュからメッセージを始めることが多いならオフにする価値があります。そうでなければオンのまま。

## 空のライブラリ

保存プロンプトがないと、ポップアップがそう伝え、Prompts タブへのボタンを出します。まだ挿入するものはありません。

## `/` する価値のあるライブラリを作る

すぐ元が取れるプロンプト例：

| 推奨タイトル | 内容の形 |
| --- | --- |
| `review-code` | 標準のコードレビュー基準 |
| `explain-simple` | 「詳しいが未経験の人に説明。比喩なし。」 |
| `translate` | 言語とトーンをドロップダウン変数に |
| `summarize` | 好みの出力形 — 箇条書き、長さ、省くもの |
| `rewrite-tone` | トーンをドロップダウンに |
| `commit-msg` | コミットメッセージの慣例 |

ライブラリに入れるかのテストは単純です。だいたいこれを二度打った？ なら保存。また打つでしょう。

## 関連

- [プロンプト](/en/guide/sidebar/prompts-tab) — ライブラリ構築、変数、合成
- [選択ツールバー](/en/guide/ui-customization/selection-toolbar) — 会話を離れずに良い言い回しをプロンプトとして保存
- [エージェント](/en/guide/agent/better-sidebar-agent) — 扱いにくくなったライブラリのリファクタを任せる
