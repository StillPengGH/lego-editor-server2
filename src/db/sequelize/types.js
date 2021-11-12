/**
 * @description 封装 sequelize 定义 Model 时的类型(为了使用方便)
 * @author still
 */

const Sequelize = require('sequelize')

module.exports = {
  STRING: Sequelize.STRING, // varchar(255)
  TEXT: Sequelize.TEXT,     // TEXT
  INTEGER: Sequelize.INTEGER,
  BOOLEAN: Sequelize.BOOLEAN,
  DATE: Sequelize.DATE
}