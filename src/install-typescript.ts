let message: string = 'Hello, ts-node-dev!';
console.log({ message });

// typescriptの実行環境（コンパイラ）を導入する
// ▶︎ ターミナルで右記を実行: npm info typescript ▶︎ 現在公開されているTypescriptの最新バージョン情報が表示される

// npm コマンドでTypescript をインストールする: npm install --save-dev typescript@0.0.0（⇦@以降は、欲しいバージョンを入力する） 
// これで、「tsc」コマンドを使ってTypescriptファイルからjavaScriptファイルをコンパイル生成できる！
// ※実際には、tscコマンドは./node_modules/.bin/tsc配下（要するにnpm installしたディレクトリ配下に配置されるので、そのままでは実行できない）

// ▶︎ そこで、jsファイル生成のために右記を実行する: npx tsc [コンパイルしたいtsファイル]
//   ここで、対象のtsファイルの同ディレクトリ内にjsファイルが生成されれば成功

// ▶︎ nodeコマンドで生成したjsファイルが実行されれば、実行環境の構築を正常に完了している

// 🌟実際には、実行するツールを使って、開発に便利な状態を作ることを目指す！！
// ▶︎ ts-nodeコマンドでコンパイル〜実行を一気に行う: バージョン確認は npm info ts-node で確認
//   npm install --save-dev ts-node@0.0.0 でts-nodeコマンドを実行できるようになる
// ▶︎ 「npx ts-node [コンパイル〜実行したいtsファイル]」で出力結果が出れば完了

// 🌟ts-nodeより便利に実行するツール
// ▶︎ ts-node-devコマンド: 実行後にファイルの変更を監視し続け、変更を検知すると即座にコンパイル〜実行する
//   ※インストール方法は「ts-node」と同様（コマンド名だけきちんと変えること）
// ▶︎ npx ts-node-dev --respawn [実行したいファイル]: --respawnオプションでコンパイル〜実行のみを行ってくれる
// ※package.jsonの"scripts"要素内に「npm run」で「ts-node-dev --respawn」を指定して実行可能！！
//  "scripts"配下に「"dev": "ts-node-dev --respawn",」の様に持たせることで
//  devがキーになり、「npm run dev [実行したいファイル]」＝「npx ts-node-dev --respawn [実行したいファイル]」と同意になる

