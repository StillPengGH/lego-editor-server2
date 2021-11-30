/**
 * @description 数据库连接测试
 * @author still
 */

const seq = require('../index')

// 测试连接，直接运行 node src/db/sequelize/utils/test-conn.js
seq
  .authenticate()
  .then(() => {
    console.log('conn ok')
  })
  .catch(() => {
    console.log('conn fail')
  })
  .finally(() => {
    process.exit()
  })
