/**
 * @description 登录校验中间件
 * @author still
 */

const { jwtVerify } = require('../utils/jsonwebtoken');
const { ErrorResp } = require('../resp-model/index');
const { loginCheckError } = require('../resp-model/errorInfo/index')

/**
 * 登录校验
 * @param {Object} ctx 
 * @param {Function} next 
 */
module.exports = async function loginCheck(ctx, next) {
  // 错误响应信息(登录校验错误信息)
  const errorResp = new ErrorResp(loginCheckError) 

  // 获取token
  const token = ctx.header.authorization
  // 没有token，返回错误信息
  if(!token){
    ctx.body = errorResp
    return
  }

  let flag = true;
  try{
    // 验签token，返回用户信息
    const userInfo = await jwtVerify(token)
    // 屏蔽密码
    delete userInfo.password 
     // 验证成功，获取userInfo
    ctx.userInfo = userInfo
  }catch( ex ) {
    flag = false
    ctx.body = errorResp
  }

  // 如果验签成功，继续下一步操作
  if(flag){
    // 继续下一步操作
    await next()
  }
}