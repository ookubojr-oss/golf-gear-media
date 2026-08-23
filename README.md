# GOLF GEAR NOW — 無料運用スターター

ゴルフギア特化の日本語メディア用Hugoプロジェクトです。

## 狙い
- PGA TOUR / JGTO / JLPGA の優勝者WITBを毎週掲載
- 海外の新作ドライバー、パター、アイアン、シャフト、ボール等を日本向けに紹介
- AI任せにせず「買う / 待つ / 見送る」の本人ジャッジを毎記事に追加
- n8nからMarkdownを追加するだけで量産できる構成

## Cloudflare Pages
- Production branch: `main`
- Build command: `hugo -b $CF_PAGES_URL`
- Build output directory: `public`
- 必要なら環境変数 `HUGO_VERSION` を設定

## 記事追加
`content/posts/` にMarkdownを追加します。

WITB: `00-witb-template.md` を複製
新作ギア: `00-latest-gear-template.md` を複製

`draft: false` にすると公開対象になります。

## n8nで自動化する時の最小処理
1. テーマを入力
2. Web検索・公式情報取得
3. AIで記事本文＋frontmatterを生成
4. GitHubの `content/posts/<slug>.md` に保存
5. Cloudflare Pagesが自動ビルド
6. 公開前運用では `draft: true` にして人間が確認後 `false`

## 注意
- 海外記事の本文・写真・比較表をコピーしない
- メーカー公式など一次情報を優先
- 使用していない製品を「実際に試した」と書かない
- アフィリエイト広告であることを明示
