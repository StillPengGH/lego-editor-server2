/**
 * @description User Model
 * @author still
 */

const seq = require('../db/sequelize/index')
const { STRING, DATE, BOOLEAN } = require('../db/sequelize/types')

const User = seq.define('user', {
  username: {
    type: STRING, // 类型
    allowNull: false, // 是否为空
    unique: 'username', // 是否唯一，不要用unique：true
    comment: '用户名，唯一', // 描述
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码',
  },
  phoneNumber: {
    type: STRING,
    allowNull: false,
    unique: 'phoneNumber',
    comment: '手机号，唯一',
  },
  nickName: {
    type: STRING,
    comment: '昵称',
  },
  gender: {
    type: STRING,
    allowNull: false,
    defaultValue: 0, // 默认值 0
    comment: '性别（1 男性，2 女性，0 保密）',
  },
  picture: {
    type: STRING,
    comment: '头像，图片地址',
  },
  city: {
    type: STRING,
    comment: '城市',
  },
  latestLoginAt: {
    type: DATE,
    defaultValue: null,
    comment: '最后登录时间',
  },
  isFrozen: {
    type: BOOLEAN,
    defaultValue: false,
    comment: '用户是否冻结',
  },
})

module.exports = User
