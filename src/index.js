const express = require("express");
const redisClient = require("./config/redisClient");
const mysqlClient = require("./config/mysqlClient");
const app = express();

process.loadEnvFile();
const env = process.env.NODE_ENV || "development";
const envFile = `.env.${env}`;
process.loadEnvFile(envFile);

const port = process.env.PORT || 3000;

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type, X-Custom-Header, Access-Control-Expose-Headers, Token, Authorization",
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./router/user/user"));

app.use("*", (req, res) => {
  res.status(404).json({
    code: 404,
    error: "path not found",
  });
});

app.listen(port, () => {
  console.log(`当前环境: ${env}`);
  console.log(`Listening: ${port}`);
});
