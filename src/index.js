const express = require("express");
const path = require("path");
const app = express();

/**
 * 端口号
 * @type {number} _port
 */
const _port = 3001;

// 配置别名
require("module-alias/register");
const aliases = {
  "@": path.resolve(__dirname, "./"),
  "@router": path.resolve(__dirname, "./router"),
};
require("module-alias").addAliases(aliases);

// bodyParser 解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");

  // 允许content-type
  res.header("Access-Control-Allow-Origin", "*");
  // 允许前端请求中包含Content-Type这个请求头
  res.header(
    "Access-Control-Allow-Headers",
    "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type, X-Custom-Header, Access-Control-Expose-Headers, Token, Authorization",
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// 路由
const test = require("@router/test/test");
app.use("/test", test);

/**
 * 启动服务器
 * @param {number} port - 端口号
 */
function startServer(port) {
  app.get("/", (req, res) => {
    console.log(req);
    res.status(200).json("hello world");
  });

  // 指定 error链接
  app.use("/error", (req, res) => {
    res.status(404).send("error");
  });

  // 将未定义URL重定向 为 错误处理：未知请求
  app.use("*", (req, res, err) => {
    res.status(404).json(err);
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer(_port);
