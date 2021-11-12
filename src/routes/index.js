const router = require('koa-router')()
const packageInfo = require('../../package.json')
const testMysqlConn = require('../db/mysql2')
const { ENV } = require('../utils/envTools')

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
router.get('/api/test-mysql', async ctx => {
  console.log(typeof testMysqlConn)
  const res = await testMysqlConn()
  ctx.body = {
    errno: 0,
    data: {
      name: 'test mysql conn',
      version: packageInfo.version,
      ENV,
      mysqlConn: res.length > 0,
      result: res
    }
  }
})

module.exports = router
