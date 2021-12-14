/**
 * @description jest server
 * @author still
 */

const axios = require('axios')
const supertest = require('supertest')
const { isTestRemote, isTestLocal } = require('../../src/utils/envTools')

let request

// 本地测试，使用supertest
if (isTestLocal) {
  // 从app实例中获取request
  // eslint-disable-next-line global-require
  const server = require('../../src/app').callback()
  request = supertest(server)
}

// 存储登录 token，统一拼接 headers.Authorization
let TOKEN = ''

// 测试机 host
const REMOTE_HOST = 'http://182.92.168.192:8081'

/**
 * 封装接口请求方法ajax
 * @param {Object} param0
 * @returns
 */
async function ajax(method = 'get', url = '', bodyOrParams = {}, headers = {}) {
  // headers 加 tokens
  if (headers.Authorization == null) {
    Object.assign(headers, {
      Authorization: `Bearer ${TOKEN}`,
    })
  }

  // 本地测试，设置request相关参数，获取接口请求结果
  if (isTestLocal) {
    if (method === 'get') {
      res = await request[method](url).query(bodyOrParams).set(headers)
    } else {
      res = await request[method](url).send(bodyOrParams).set(headers)
    }
    result = res.body
  }

  // 远程测试，使用axios，获取接口请求结果
  if (isTestRemote) {
    const remoteUrl = `${REMOTE_HOST}${url}`
    const conf = { method, url: remoteUrl, headers }
    if (method === 'get') {
      config.params = bodyOrParams
    } else {
      config.data = bodyOrParams
    }
    const res = await axios(conf)
    result = res.data
  }

  // 返回结果
  return result // { data, errno }
}

module.exports = {
  setToken(token) {
    console.log(`setToken...${token}`)
    TOKEN = token
  },
  async get(url, params) {
    const res = await ajax('get', url, params)
    return res
  },
  async post(url, body) {
    const res = await ajax('post', url, body)
    return res
  },
  async patch(url, body) {
    const res = await ajax('patch', url, body)
    return res
  },
  async del(url, body) {
    const res = await ajax('delete', url, body)
    return res
  },
}
