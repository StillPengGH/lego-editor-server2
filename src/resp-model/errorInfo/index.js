/**
 * @description 错误响应信息 index
 * @author still
 */
const error = require('./error')
const userError = require('./userError')
const workError = require('./worksError')
const channelError = require('./channelError')
const validateError = require('./validateError')
const utilsError = require('./utilsError')

module.exports = {
	...error,
	...userError,
	...workError,
	...channelError,
	...utilsError,
	...validateError,
}
