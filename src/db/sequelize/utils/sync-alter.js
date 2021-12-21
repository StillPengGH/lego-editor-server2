/**
 * @description 同步数据库，以修改数据表的方式，不会清空数据库，比较安全
 * @author still
 */

const path = require('path')
const simpleGit = require('simple-git') // 模型git操作
const seq = require('../index')
const { isDev } = require('../../../utils/envTools')

// 引入models下的所有Model模型
require('require-all')({
  dirname: path.resolve('src', 'models'), // models目录下会有mongoose的model，但是获取了也没关系
  filter: /\.js$/, // .js结尾的文件
  excludeDirs: /^\.(git|svn)$/, // 排除.git和.svn结尾的文件
  recursive: true, // 递归
})

// 创建同步数据库方法
async function syncDb() {
  // 是否需要执行同步标识
  let isNeedSyncDb = true

  // 开发环境
  // 开发环境下，修改频繁，每次重启都同步数据表，消耗太大
  // 所以，开发环境下，判断是否修改了 src/models 中的内容
  // 如果修改了src/models中的内容，则同步数据表。否则，不用同步数据表。
  if (isDev) {
    // 相当于执行了git status，获取了一个
    const git = simpleGit()
    const { modified, not_added: nodeAdded, created, deleted, renamed } = await git.status()
    const fileChanged = modified.concat(nodeAdded).concat(created).concat(deleted).concat(renamed)
    if (fileChanged.length) {
      // 到此说明 git status 有改动
      // 是否改动了 db 相关文件
      const changeDbFiles = fileChanged.some(file => {
        // 改动了 src/models ，需要同步数据库
        if (file.indexOf('src/models/') === 0) {
          return true
        }
        // 改动了 src/db/sequelize ，需要同步数据库
        if (file.indexOf('src/db/sequelize/') === 0) {
          return true
        }
        // 其他情況，不同步
        return false
      })
      // 没有改动 db 相关文件，不同步
      if (!changeDbFiles) {
        isNeedSyncDb = false
      }
    }
  }

  if (isNeedSyncDb) {
    console.log('执行同步数据库操作...')
    // 执行同步操作
    // await seq.sync({ alert: true })
    try {
      await seq.sync({ alter: true })
    } catch (e) {
      console.error(e)
    }
  }
}

// 导出同步方法：同步方法会在bin/www启动项目前执行
module.exports = syncDb
