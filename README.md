# ディレクトリ構成

各演奏会のためのファイルは `concert` 下に演奏会ごとのディレクトリを作成し、その中に配置します。
(/ や /img に演奏会ごとにファイルが作られ管理しにくくなるのを避けるためです)
チラシの画像もそこに置き `index.html` や `concert/concert-info.html` からも、そのパスを参照してください。

# フォーマッター(自動整形)について

[Prettier](https://prettier.io/)を利用しています。

初回に、`npm install` を実行して、
`npm run format` で実行してください。

# TODO

開発に便利なプラグインの情報の共有
