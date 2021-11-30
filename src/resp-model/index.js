/**
 * @description resp model 响应对象封装
 * @author still
 */

// 基础模型，包括 errno data 和 message
class BaseResp {
  constructor({ errno, data, message }) {
    this.errno = errno
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

// 执行失败的数据模型
class ErrorResp extends BaseResp {
  // addMessage 追加信息
  constructor({ errno = -1, message = '', data }, addMessage = '') {
    super({
      errno,
      message: addMessage ? `${message} - ${addMessage}` : message,
      data,
    })
  }
}

// 执行成功的数据模型
class SuccessResp extends BaseResp {
  constructor(data = {}) {
    super({
      errno: 0,
      data,
    })
  }
}

module.exports = {
  ErrorResp,
  SuccessResp,
}
