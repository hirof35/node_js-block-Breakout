# 🎮 Node.js ブロック崩しゲーム (Retro Breakout)

Node.js (Express) をバックエンド、HTML5 Canvas をフロントエンドに使用した、ブラウザで遊べるシンプルなブロック崩しゲームです。
大画面のワイド設計、3段階の難易度選択、およびゲーム内リザルト画面（ゲームクリア・ゲームオーバー）の実装など、快適なプレイフィールにこだわっています。
<img width="1449" height="1029" alt="スクリーンショット 2026-05-28 085250" src="https://github.com/user-attachments/assets/b616ee36-be44-4398-9ed0-c936378d6dff" />

## 🚀 特徴

- **Node.js (Express) サーバー構築**: 静的ファイル配信をNode.js側で行うWebアプリケーション構成。
- **レスポンシブ・大画面**: `800x500` の迫力あるサイズ感でプレイ可能。
- **3段階の難易度設定**: 「かんたん」「ふつう」「むずかしい」のボタンを選択するだけで、ボール速度やブロックの総数がダイナミックに変化。
- **フル画面遷移演出**: JavaScriptとCSSを使った、シームレスなメニュー画面・リザルト画面（GAME OVER / CONGRATULATIONS）の切り替え。
- **快適な操作性**: マウスでの直感的な操作のほか、キーボード（左右矢印キー）でもストレスなく追いつける固定パドルスピードを採用。

## 🛠️ 技術スタック

- **Backend**: Node.js, Express
- **Frontend**: HTML5 Canvas, CSS3, JavaScript (Vanilla JS)

## 📦 使い方（ローカルでの実行方法）

### 1. リポジトリのクローン
まずはプロジェクトをローカル環境にダウンロードします。

```bash
git clone [https://github.com/あなたのユーザー名/node-breakout-game.git](https://github.com/あなたのユーザー名/node-breakout-game.git)
cd node-breakout-game
2. 依存関係のインストール
必要なパッケージ（Express）をインストールします。

Bash
npm install
3. サーバーの起動
Node.jsサーバーを起動します。

Bash
node server.js
4. ブラウザでプレイ
起動後、ブラウザを開いて以下のURLにアクセスしてください。

http://localhost:3000

🎮 操作方法
パドル移動 (左右): マウスの移動、またはキーボードの ← / ➔ (A / D) キー

リトライ: ゲーム終了後、画面内の「メニューに戻る」ボタンをクリック

📁 フォルダ構成
Plaintext
.
├── public/
│   └── index.html   # ゲーム画面・ロジック（HTML/CSS/JS）
├── .gitignore       # node_modules の除外設定
├── package.json     # プロジェクト設定・依存関係定義
├── README.md        # 本ドキュメント
└── server.js        # Node.js (Express) サーバー
📝 ライセンス
このプロジェクトは MITライセンス のもとで公開されています。商用・非商用問わず自由に変更・再配布が可能です。
