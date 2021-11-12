/**
 * @description 环境变量Tools
 * @author still
 */

// 获取启动命令中设置的NODE_ENV值
const ENV = process.env.NODE_ENV || ''

module.exports = {
  ENV,
  isPrd: ENV === 'production',
  isPrdDev: ENV === 'prd_dev',
  isDev: ENV === 'dev',
  isTest: ENV.indexOf('test') === 0,
  isTestLocal: ENV === 'test_local',
  isTestRemote: ENV === 'test_remote',
}