/**
 * @description 封装 jwt 中间件
 * @author still
 */

const jwtKoa = require('koa-jwt')
const { JWT_SECRET, JWT_IGNORE_PATH } = require('../config/constant')

module.exports = jwtKoa({
  secret: JWT_SECRET,
  cookie: 'jwt_token', // 使用 cookie 存储 token
}).unless({
  path: JWT_IGNORE_PATH,
})
