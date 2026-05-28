const express = require('express');
const app = express();
const PORT = 3000;

// public フォルダ内の静的ファイル（HTMLやJS）を読み込めるようにする
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`サーバーが起動しました！ http://localhost:${PORT} にアクセスしてください`);
});