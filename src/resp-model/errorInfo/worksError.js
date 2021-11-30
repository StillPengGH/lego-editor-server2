/**
 * @description 错误响应信息-作品错误
 * @author still
 */

module.exports = {
  // 创建作品失败，数据库错误
  createWorkDbError: {
    errno: 13001,
    message: '创建作品失败 db error',
  },

  // 创建作品失败，数据库无错误
  createWorkError: {
    errno: 13002,
    message: '创建作品失败',
  },

  // 查询单个作品失败
  findOneWorkError: {
    errno: 13003,
    message: '查询单个作品失败',
  },

  // 查询单个作品失败，数据库错误
  findOneWorkDbError: {
    errno: 13004,
    message: '查询单个作品失败 db error',
  },

  // 修改作品失败
  updateWorkError: {
    errno: 13005,
    message: '修改作品失败',
  },

  // 修改作品失败，数据库错误
  updateWorkDbError: {
    errno: 13006,
    message: '修改作品失败 db error',
  },

  // 删除/恢复作品失败
  deleteWorkError: {
    errno: 13007,
    message: '删除/恢复 作品失败',
  },

  // 删除/恢复作品失败，数据库错误
  deleteWorkDbError: {
    errno: 13008,
    message: '删除/恢复 作品失败 db error',
  },

  // 转赠作品失败
  transferWorkError: {
    errno: 13009,
    message: '转赠作品失败',
  },

  // 查询 作品/模板 失败
  findWorkListError: {
    errno: 13010,
    message: '查询作品/模板失败',
  },

  // 发布作品失败
  publishWorkError: {
    errno: 13011,
    message: '发布作品失败',
  },

  // 发布作品失败，数据库错误
  publishWorkDbError: {
    errno: 13012,
    message: '发布作品失败 db error',
  },

  // 强制下线
  forceOffLineError: {
    errno: 13013,
    message: '操作失败，该作品被管理员强制下线，请联系管理员',
  },
}
