/**
 * @description 连接 redis
 * @author still
 */

const redis = require('redis')
const { redisConf } = require('../config/index')

// 获取配置
const { host, port, password } = redisConf

const opt = {}
if (password) {
  opt.password = password
}

// 创建redis客户端
const redisClient = redis.createClient(port, host, opt)

// 监听错误
redisClient.on('error', err => {
  console.error('redis connect error', err)
})

// 测试连接
// redisClient.on('connect', () => {
//   console.log('redis connect success')

//   redisClient.set('foo', 'bar', redis.print)
//   redisClient.get('foo', redis.print)

//   redisClient.quit()
// })

module.exports = redisClient
