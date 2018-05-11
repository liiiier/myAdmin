var path = require('path')
function resolve(dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  // 配置别名
  chainWebpack: config => {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('config', resolve('src/config'))
      .set('base', resolve('src/base'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
}