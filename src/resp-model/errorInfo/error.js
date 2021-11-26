/**
 * @description 统一错误处理
 * @author still
 */

module.exports = {
	// 统一错误处理
	serverError: {
		errno: -1,
		message: '运行错误',
	},
	// 404
	notFoundError: {
		errno: -2,
		message: '404 Not Found',
	},
}
