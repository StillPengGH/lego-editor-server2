/**
 * @description redis 数据缓存处理
 * @author still
 */

const redisClient = require('../db/redis')

/**
 * redis set
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timeout 过期时间，单位s，默认1h
 */
function cacheSet(key, val, timeout = 60 * 60) {
	let formatValue
	if (typeof val === 'object') {
		// 如果是对象，转为string
		formatValue = JSON.stringify(val)
	} else {
		formatValue = val
	}
	redisClient.set(key, formatValue)
	redisClient.expire(key, timeout) // 设置过期时间
}

/**
 * redis get
 * @param {string} key
 */
function cacheGet(key) {
	// 因为redisClient.get异步，所以返回一个Promise对象
	const promise = new Promise((resolve, reject) => {
		redisClient.get(key, (err, val) => {
			if (err) {
				reject(err)
				return
			}
			if (val === null) {
				resolve(null)
				return
			}

			try {
				// 转为JSON对象
				resolve(JSON.parse(val))
			} catch (ex) {
				resolve(val)
			}
		})
	})

	return promise
}

module.exports = {
  cacheGet,
  cacheSet
}