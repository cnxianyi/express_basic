const mysql = require("mysql2");

const env = process.env.NODE_ENV || "development";
const envFile = `.env.${env}`;
process.loadEnvFile(envFile);
const host = process.env.MYSQL_HOST || "localhost";
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE || "hanlu";
const port = process.env.MYSQL_PORT || "3306";

let mysqlClient;

if (!user || !password) {
  console.info("MySQL未配置，取消连接 MySQL");
} else {
  mysqlClient = mysql.createPool({
    host,
    user,
    password,
    database,
    port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  mysqlClient.getConnection((err, connection) => {
    if (err) {
      if (err.code === "ER_BAD_DB_ERROR") {
        console.log("数据库不存在，尝试创建数据库");

        mysqlClient = mysql.createPool({
          host,
          user,
          password,
          port,
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0,
        });

        mysqlClient.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``, (err) => {
          if (err) {
            console.error("创建数据库失败:", err.message);
          } else {
            console.info("数据库创建成功:", database);

            mysqlClient = mysql.createPool({
              host,
              user,
              password,
              database,
              port,
              waitForConnections: true,
              connectionLimit: 10,
              queueLimit: 0,
            });

            console.log("连接池已连接到数据库:", database);
          }
        });
      } else {
        console.error("MySQL 连接失败:", err.message);
      }
    } else {
      console.info(`成功连接到 MySQL mysql://${user}:${password}@${host}/${database}`);
      connection.release();
    }
  });
}

module.exports = mysqlClient;
