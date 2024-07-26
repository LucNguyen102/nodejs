const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

// Cấu hình template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Các route cơ bản
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/abc', (req, res) => {
  res.send('what the hell');
});

app.get('/LucNguyen', (req, res) => {
  res.render('sample');  // bỏ đuôi .ejs khi render
});

// Khởi động server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
