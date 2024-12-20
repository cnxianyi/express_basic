const Redis = require("ioredis");

const env = process.env.NODE_ENV || "development";
const envFile = `.env.${env}`;
process.loadEnvFile(envFile);
const redisURL = process.env.REDIS_URL;
const db = process.env.REDIS_DB || 0;

let redisClient;

if (!redisURL) {
  console.info("Redis未配置 , 取消连接Redis");
} else {
  // @ts-ignore
  redisClient = new Redis(redisURL, {
    db,
    reconnectOnError: (err) => {
      console.warn("Redis 连接错误:", err);
      return true; // 返回 true 来尝试重连
    },
  });

  // 处理 Redis 各类事件
  redisClient.on("ready", () => {
    console.info("成功连接到 Redis", redisURL, db);
  });

  redisClient.on("error", (err) => {
    console.warn("Redis 连接错误Event:", err);
  });

  redisClient.on("reconnecting", () => {
    console.warn("Redis 重新连接中...");
  });

  redisClient.on("close", () => {
    console.warn("Redis 连接已关闭");
  });

  // 处理应用程序退出时的 Redis 关闭
  process.on("SIGINT", async () => {
    try {
      await redisClient.quit();
      console.info("Redis 客户端已关闭");
      process.exit(0);
    } catch (err) {
      console.error("关闭 Redis 客户端时发生错误:", err);
      process.exit(1);
    }
  });
}

module.exports = redisClient;
