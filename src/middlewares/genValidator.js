/**
 * @description 生成 ctx.request.body 格式校验中间件
 * @author still
 */

const Ajv = require('ajv')
const { ErrorResp } = require('../resp-model/index')
const { validateError } = require('../resp-model/errorInfo/index')

// 创建ajv对象
const ajv = new Ajv({
  allErrors: true, // 输出所有错误
})

/**
 * json schema 校验
 * @param {Object} schema json schema 规则
 * @param {Object} data 待校验的数据
 * @returns {Array|undefined} 错误信息|undefined
 */
function ajvValidate(schema, data = {}) {
  const valid = ajv.validate(schema, data)
  if (!valid) {
    return ajv.errors
  }
  return undefined
}

/**
 * 生成校验中间件
 * @param {Object} schema 规则
 */
function genValidator(schame) {
  /**
   * ctx.request.body 格式校验中间件
   * @param {Object} ctx ctx
   * @param {Function} next next
   */
  async function validator(ctx, next) {
    const data = ctx.request.body
    const validateRes = ajvValidate(schame, data)
    if (validateRes) {
      // 校验失败，返回
      ctx.body = new ErrorResp({
        ...validateError,
        data: validateRes,
      })
      return
    }
    // 校验成功，继续
    await next()
  }
  return validator
}

module.exports = genValidator
