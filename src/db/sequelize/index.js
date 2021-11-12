/**
 * @description 配置 sequelize 连接 mysql
 * @@author still
 */

const Sequelize = require('sequelize')
const { mysqlConf } = require('../../config')
const { isPrd, isTest } = require('../../utils/envTools')

// 获取mysql配置项
const { host, port, database, user, password } = mysqlConf
const seqConf = {
	host,
	port,
	dialect: 'mysql',
}

// 测试环境不打印日志
if (isTest) {
	seqConf.logging = () => {} // 默认是console.log
}

// 线上环境用 连接池
if(isPrd) {
  seqConf.pool = {
    max: 5,       // 连接池中最大的连接数
    min: 0,       // 连接池中最小的连接数
    idle: 10000,  // 如果一个线程 10 秒内没有被使用的话，那么就释放线程
  }
}

// 创建Sequelize连接对象，并导出
const seq = new Sequelize(database, user, password , seqConf)

module.exports = seq