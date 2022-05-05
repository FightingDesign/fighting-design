// 组件样式打包
const { src, dest, series, parallel } = require('gulp')
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const del = require('del')
// 打包配置
const config = {
  input: '../packages/theme-default/',
  output: '../lib/theme-default'
}
// 导出配置项
exports.config = config
// 复制字体
exports.copyfont = () => src([`${config.input}fonts/*`, `!${config.input}fonts/*.css`]).pipe(dest(`${config.output}/fonts`))
// 压缩font 里的 CSS
exports.minifontCss = () =>
  src(`${config.input}fonts/*.css`)
    .pipe(cssmin())
    .pipe(dest(`${config.output}/fonts`))
// 删除之前css打包文件
exports.clean = done => {
  del(
    ['*.css', 'fonts'].map(name => `${config.output}/${name}`),
    { force: true }
  )
  done()
}
