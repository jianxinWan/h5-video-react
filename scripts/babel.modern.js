// 新浏览器的babel配置
const config = require('./babel.base')

const modernBrowsers = [
  'Chrome >= 60',
  'Safari >= 10.1',
  'iOS >= 10.3',
  'Firefox >= 54',
  'Edge >= 15',
]

const newConfig = JSON.parse(JSON.stringify(config))

// esmodule存在时，browsers会被忽略，理论上不需要browsers配置
newConfig.presets[0][1].targets = {
  browsers: modernBrowsers,
  esmodules: true,
}

module.exports = newConfig