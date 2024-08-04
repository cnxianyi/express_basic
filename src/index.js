const express = require('express');
const app = express();

/**
 * 启动服务器
 * @param {number} port - 端口号
 */
function startServer(port) {
  app.get('/', (req, res) => {
    console.log(req);
    res.status(200).json('hello world');
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer(3000);
