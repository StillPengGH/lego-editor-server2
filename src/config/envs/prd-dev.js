/**
 * @description 生产-开发环境
 * @author still
 */

// 将dev下的配置都拿过来
const devConf = require('./dev')

// 修改哪个改哪个，这里我们该redisConf内容
Object.assign(devConf.redisConf, {
  // 和docker-compose中配置的service name 一致
  // 注：端口依然是6379，而不是6378，后者是宿主机的端口
  host: 'editor-redis',
})

// 修改mongodb配置
Object.assign(devConf.mongodbConf, {
  host: 'editor-mongo',
})

// 修改mysql配置
Object.assign(devConf.mysqlConf, {
  host: 'editor-mysql',
})

module.exports = devConf
