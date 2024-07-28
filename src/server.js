require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
console.log(process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
// Cấu hình template engine
configViewEngine(app);

app.use('/',webRoutes);
// Khởi động server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
