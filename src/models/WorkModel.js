/**
 * @description 作品内容 Model ，存储到MongoDB
 * @author still
 */

const mongoose = require('../db/mongoose')

// 定义Work Model 数据规范Schema
const WorkSchema = mongoose.Schema(
  {
    // mongodb 会自动生成 _id , 不需要定义

    // 标题
    title: String,

    // 页面元素列表
    elements: [Object],

    // 页面的属性，保证扩展性
    props: Object,

    // 配置信息，保证扩展性
    setting: Object,
  },
  {
    timestamps: true,
  }
)

// 创建WorkModel，使用Schema规范work集合
const WorkModel = mongoose.model('work', WorkSchema)

module.exports = {
  WorkModel,
}
