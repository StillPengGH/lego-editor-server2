/**
 * @description mysql2 连接
 * @author still
 */

const mysql = require('mysql2/promise')
const { mysqlConf } = require('../config')

// 测试mysql是否连接成功
async function testMysqlConn() {
  // 获取连接
  const conn = await mysql.createConnection(mysqlConf)
  // 执行sql语句，查询当前时间
  const [rows] = await conn.execute('select now();')
  return rows
}

// 执行 node src/db/mysqls.js 直接测试
// ;(async () => {
//   const rows = await testMysqlConn()
//   console.log(rows)
// })()

module.exports = testMysqlConn