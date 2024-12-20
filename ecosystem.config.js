// NODE_ENV=development pm2 start ecosystem.config.js --env development #开发环境
// NODE_ENV=production pm2 start ecosystem.config.js --env production  #生产环境
module.exports = {
  apps: [
    {
      script: "src/index.js",
      instances: "1", // 启动实例数量
      exec_mode: "cluster",
      autorestart: true, // 自动重启
      watch: false, // 是否监视文件变化
      max_memory_restart: "1G", // 最大内存限制
      // 使用相对路径设置日志文件
      error_file: "./pm2log/error.log", // 错误日志
      out_file: "./pm2log/output.log", // 输出日志
      log_file: "./pm2log/combined.log", // 综合日志
      merge_logs: true, // 将日志合并输出
      time: true,
    },
  ],
};
