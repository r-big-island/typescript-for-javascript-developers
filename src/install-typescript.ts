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
// ▶︎ ts-nodeコマンドでコンパイル〜実行を一気に行う
//   npm install --save-dev ts-node@0.0.0 でts-nodeコマンドを実行できるようになる
// ▶︎ 「npx ts-node [コンパイル〜実行したいtsファイル]」で出力結果が出れば完了