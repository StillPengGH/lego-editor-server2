/**
 * @description pm2 线上-测试环境 配置
 * @author still
 */

const appConf = require('./pm2AppConfig')

// 为测试方便，pm2进程设置为1
appConf.instances = 1

module.exports = {
  apps: [appConf]
}