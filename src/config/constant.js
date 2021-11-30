/**
 * @description 常量配置
 * @author still
 */

module.exports = {
  // 密码加密 密钥
  PASSWORD_SECRET: 'Stillp_1217#',

  // jwt 密钥
  JWT_SECRET: 'Stillp_0823#',

  // jwt 可忽略的path：全部忽略即可，需要登录校验的，使用自己封装的loginCheck中间件
  JWT_IGNORE_PATH: [/\//],
  // JWT_IGNORE_PATH: '',

  // 查询列表，默认分页配置
  DEFAULT_PAGE_SIZE: 8,
}
