const router = require('koa-router')()
const packageInfo = require('../../package.json')
const testMysqlConn = require('../db/mysql2')
const { ENV } = require('../utils/envTools')
const { WorkModel } = require('../models/WorkModel')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
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
router.get('/api/test-db', async ctx => {
  // 测试mysql数据库连接
  const res = await testMysqlConn()

  // 测试MongoDB数据库连接
  const mongdbRes = await WorkModel.findOne()

  ctx.body = {
    errno: 0,
    data: {
      name: 'test mysql conn',
      version: packageInfo.version,
      ENV,
      mysqlConn: res.length > 0,
      result: res,
      mongodbRes: mongdbRes
    }
  }
})

module.exports = router
