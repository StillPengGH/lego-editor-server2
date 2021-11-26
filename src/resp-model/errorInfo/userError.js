/**
 * @description 错误响应信息-用户错误
 * @author still
 */

module.exports = {
	// 登录校验失败
	loginCheckError: {
		errno: 12001,
		message: '登录校验失败',
	},

	// 发送短信验证码过于频繁
	sendVeriCodeFrequentlyError: {
		errno: 12002,
		message: '请勿频繁获取短信验证码',
	},

	// 发送短信验证码错误
	sendVeriCodeError: {
		errno: 12003,
		message: '发送短信失败，请稍后重试',
	},

	// 登录时，验证码不正确
	loginVeriCodeIncorrectError: {
		errno: 12004,
		message: '验证码不正确',
	},

	// 创建用户，写入数据库，失败
	createUserDbError: {
		errno: 12005,
		message: '创建用户失败 db error',
	},

	// 修改用户信息，写入数据库，失败
	updateUserDbError: {
		errno: 12006,
		message: '修改用户失败 db error',
	},

	// 修改用户信息失败（非DB问题）
	updateUserError: {
		errno: 12007,
		message: '修改用户信息失败',
	},

	// 用户被冻结
	userFrozenError: {
		errno: 12008,
		message: '您的账户已被冻结，请联系管理员',
	},
}
