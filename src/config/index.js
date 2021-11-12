/**
 * @description 配置入口文件
 * @author still
 */

const { isPrd, isPrdDev } = require('../utils/envTools')

// 获取各个环境的不同配置文件(默认开发环境dev.js)
let fileName = 'dev.js'

if (isPrdDev) {
	fileName = 'prd-dev.js'
}

if (isPrd) {
	fileName = 'prd.js'
}

// 导出执行fileName的配置（默认开发环境）
module.exports = require(`./envs/${fileName}`)