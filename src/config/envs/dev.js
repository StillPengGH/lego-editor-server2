/**
 * @description 开发环境（dev）配置
 * @author stil
 */

module.exports = {
  // mysql连接配置
  mysqlConf: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'still_lego'
  },

  // MongDB连接配置
  mongodbConf: {
    host: 'localhost',
    port: '27017',
    dbName: 'still_lego'
  },

  // redis配置
  redisConf: {
    host: '127.0.0.1',
    port: '6379'
  }
}