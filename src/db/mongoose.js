/**
 * @description 封装 mongoose，连接mongodb
 * @author still
 */

const mongoose = require('mongoose')
const { mongodbConf } = require('../config/index')

// 获取配置项
const { host, port, dbName, user, password } = mongodbConf

// dev环境（本地连接mongodb默认不需要用户密码）
let url = `mongodb://${host}:${port}`
// prod环境 需要密码的时候，需要通过@进行拼接
if (user && password) {
  url = `mongodb://${user}:${password}@${host}:${port}`
}

// 获取连接数据库地址（url + dbName数据库名称）
let connectUrl = `${url}/${dbName}`
// 使用用户名和密码时，需要 ?authSource=admin
if (user && password) {
  connectUrl = `${url}/${dbName}?authSource=admin`
}

// 连接数据库
mongoose.connect(connectUrl, {
  useNewUrlParser: true, // 使用新的url解析器
  useUnifiedTopology: true, // 使用新的服务器发现和监视引擎
})

// 获取数据连接对象
const db = mongoose.connection

// 监听错误，打印错误
db.on('error', err => {
  console.error('mongoose connect error', err)
})

// 执行 node src/db/mongoose.js 测试连接 , 测试是否连接正确
// db.once('open', () => {
//   console.log('mongoose connect success')
// })

// 将mongoose对象导出
module.exports = mongoose
