# テキスト読み上げくん

シンプルで使いやすいテキスト読み上げWebアプリケーションです。Web Speech APIを使用して、入力したテキストを音声で読み上げます。

## 機能

- テキストの音声読み上げ
- 読み上げ速度の調整（0.5倍、1倍、1.5倍、2倍）
- 読み上げの開始・停止・一時停止・再開

## デモ

[GitHub Pagesでデモを見る](#) ※リンクは適宜設定してください

## 使い方

1. テキストエリアに読み上げたいテキストを入力
2. 速度を選択（デフォルトは1倍速）
3. 「開始」ボタンをクリックして読み上げを開始
4. 必要に応じて「一時停止」「再開」「停止」ボタンで操作

## 技術スタック

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Web Speech API

## ブラウザ対応

Web Speech APIをサポートするブラウザで動作します：

- Google Chrome（推奨）
- Microsoft Edge
- Safari
- その他のモダンブラウザ

※ブラウザによって読み上げの音声や品質が異なる場合があります

## インストール・起動方法

1. リポジトリをクローン
```bash
git clone https://github.com/taiyo8911/yomiage-kun.git
cd yomiage-kun
```

2. index.htmlをブラウザで開く
```bash
# Macの場合
open index.html

# Windowsの場合
start index.html

# Linuxの場合
xdg-open index.html
```

または、お気に入りのローカルサーバーを使用することもできます：
```bash
# Python 3の場合
python -m http.server 8000

# Node.jsのhttp-serverの場合
npx http-server
```

## ファイル構成

```
yomiage-kun/
├── index.html          # メインHTMLファイル
├── css/
│   └── style.css      # スタイルシート
├── js/
│   └── main.js        # メインJavaScriptファイル
└── README.md          # このファイル
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 貢献

プルリクエストを歓迎します。大きな変更の場合は、まずissueを開いて変更内容を議論してください。

---

# Text-to-Speech App (Yomiage-kun)

A simple and easy-to-use text-to-speech web application using the Web Speech API.

## Features

- Text-to-speech synthesis
- Adjustable speech rate (0.5x, 1x, 1.5x, 2x)
- Start, stop, pause, and resume controls

## Usage

1. Enter text in the textarea
2. Select speech rate (default is 1x)
3. Click "Start" button to begin speech
4. Use "Pause", "Resume", or "Stop" buttons as needed

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Web Speech API

## Browser Support

Works on browsers that support the Web Speech API:

- Google Chrome (Recommended)
- Microsoft Edge
- Safari
- Other modern browsers

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/taiyo8911/yomiage-kun.git
cd yomiage-kun
```

2. Open index.html in your browser or use a local server

## License

This project is licensed under the MIT License.
