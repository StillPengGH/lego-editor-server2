/**
 * @description 错误响应信息-渠道错误
 * @author still
 */

module.exports = {
  // 创建渠道失败
  createChannelError: {
    error: 15001,
    message: '创建渠道失败',
  },

  // 创建渠道失败，数据库错误
  createChannelDbError: {
    errno: 15002,
    message: '创建渠道失败 db error',
  },

  // 更新、删除渠道失败
  updateChannelError: {
    errno: 15003,
    message: '更新/删除渠道失败',
  },

  // 更新、删除渠道失败，数据库错误
  updateChannelDbError: {
    errno: 15004,
    message: '更新/删除渠道失败 db error',
  },

  // 获取渠道列表失败
  findChannelListError: {
    errno: 15005,
    message: '获取渠道列表失败',
  },
}
