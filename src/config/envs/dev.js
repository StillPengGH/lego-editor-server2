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
    password: '',
    database: 'still_lego',
  },

  // MongDB连接配置
  mongodbConf: {
    host: 'localhost',
    port: '27017',
    dbName: 'still_lego',
  },

  // redis配置
  redisConf: {
    host: '127.0.0.1',
    port: '6379',
  },

  // jsonwebtoken 签名（token）过期时间
  jwtExpiresIn: '1d', // 1.字符串，如'1h' '2d'; 2.数字，单位s

  // 跨域配置
  corsOrigin: '*',
}
