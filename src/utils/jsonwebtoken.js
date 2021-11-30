/**
 * @description jsonwebtoken 签名 验签
 * @author still
 */

const util = require('util')
const jsonwebtoken = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/constant')
const { jwtExpiresIn } = require('../config/index')

// 将callback改为promise（jsonwebtoken.verify是基于callback的回调）
const verify = util.promisify(jsonwebtoken.verify)

/**
 * 验签
 * @param {string} token
 * @returns
 */
async function jwtVerify(token) {
  // 去掉前面的 Bearer
  const data = await verify(token.split(' ')[1], JWT_SECRET)
  return data
}

/**
 * 签名
 * @param {Object} data
 * @returns
 */
async function jwtSign(data) {
  const token = await jsonwebtoken.sign(data, JWT_SECRET, {
    expiresIn: jwtExpiresIn,
  })
  return token
}

module.exports = {
  jwtSign,
  jwtVerify,
}
