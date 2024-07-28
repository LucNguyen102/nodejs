const express = require('express');
const path = require('path');
require('dotenv').config();

console.log(process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
// Cấu hình template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//config static files
app.use(express.static(path.join(__dirname, 'public')));

// Các route cơ bản
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/abc', (req, res) => {
  res.send('what the hell Luc');
});

app.get('/LucNguyen', (req, res) => {
  res.render('sample');  // bỏ đuôi .ejs khi render
});

// Khởi động server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
