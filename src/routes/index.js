const router = require('koa-router')()
const packageInfo = require('../../package.json')
const { ENV } = require('../utils/envTools')
const testMysqlConn = require('../db/mysql2')
const { WorkModel } = require('../models/WorkModel')
const { cacheGet, cacheSet } = require('../cache/index')
const loginCheck = require('../middlewares/loginCheck')

// router.get('/', loginCheck, async (ctx, next) => {
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
  })
})

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

// 测试mysql数据连接
router.get('/api/db-check', async ctx => {
  // 测试mysql数据库连接
  const res = await testMysqlConn()
  // 测试MongoDB数据库连接
  let mongodbConn
  try {
    mongodbConn = true
    await WorkContentModel.findOne()
  } catch (ex) {
    mongodbConn = false
  }

  // 测试redis
  cacheSet('name', 'still-redis test')
  const redisTestVal = await cacheGet('name')
  ctx.body = {
    errno: 0,
    data: {
      name: 'test mysql conn',
      version: packageInfo.version,
      ENV,
      mysqlConn: res.length > 0,
      result: res,
      mongodbRes: mongodbConn,
      redisRes: redisTestVal,

      // Dockerfile 的环境变量
      SERVER_NAME: process.env.SERVER_NAME,
      AUTHOR_NAME: process.env.AUTHOR_NAME,
    },
  }
})

module.exports = router
