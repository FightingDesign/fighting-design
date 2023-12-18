/**
 * 同步更新文档下的更新日志
 *
 * 因为在修改的时候，只是更新根目录的更新日志
 *
 * 所以在发布新版本的时候，也需要同步修改文档的更新日志
 */

const fs = require('fs')
const path = require('path')

/** 写入文件路径 */
const writeUrl = path.join(__dirname, '../../docs/docs/changelog.md')
/** 读取的文件内容 */
const sayUrl = path.join(__dirname, '../../CHANGELOG.md')
/** 读取到文件内容 */
const file = fs.readFileSync(sayUrl, 'utf-8')

// 先清空文件
fs.writeFileSync(writeUrl, '')

try {
  // 将修改的内容重新写入
  fs.writeFileSync(writeUrl, file)

  console.log('更新日志写入成功 🚀🚀🚀')
} catch (err) {
  console.error(`写入失败：${err} 🚦🚦🚦`)
}
