/**
 * @description pm2 app 配置信息
 * @author still
 */

const os = require('os')

const cpuCoreLength = os.cpus().length // CPU 几核

module.exports = {
  name: 'lego-editor-server', // 应用名称
  script: 'bin/www', // 启动脚本
  // watch: true, // 无特殊情况，不用实时监听文件，否则可能会导致很多 restart
  ignore_watch: ['node_modules', '__test__', 'logs'], // 忽略的监听文件
  instances: cpuCoreLength, // 线上环境根据cpu个数设置开启几个进程（多进程）
  error_file: './logs/err.log', // 错误日志
  out_file: './logs/out.log', // 输出日志
  log_date_format: 'YYYY-MM-DD HH:mm:ss Z', // 日志格式(Z 表示使用当前时区的时间格式)
  combine_logs: true, // 多个实例，合并日志（instances多个时）
  max_memory_restart: '300M', // 内存占用超过300M 重启服务
}