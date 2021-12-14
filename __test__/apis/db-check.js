/**
 * @description 测试数据库连接 API
 * @author still
 */

const { get } = require('./_server')

test('数据库连接', async () => {
  const res = await get('/api/db-check')
  const { data, errno } = res

  // 断言
  expect(errno).toBe(0)
  expect(data.mysqlConn).toBeTruthy()
  // eslint-disable-next-line no-underscore-dangle
  // expect(data.mongodbRes._id).not.toBe('')
  // expect(data.redisRes).not.toBe('')
})
