const fs = require('fs')
const path = require('path')

/** 写入文件路径 */
const writeUrl = path.join(__dirname, '../../docs/docs/changelog.md')

/** 读取的文件内容 */
const sayUrl = path.join(__dirname, '../../CHANGELOG.md')

/** 读取到文件内容 */
const file = fs.readFileSync(sayUrl, 'utf-8')

/** 先清空文件 */
fs.writeFileSync(writeUrl, '')

try {
  /** 将修改的内容重新写入 */
  fs.writeFileSync(writeUrl, file)

  /** 打印成功信息 */
  console.log('更新日志写入成功 🚀🚀🚀')
}

catch (err) {
  /** 如果失败打印错误信息 */
  console.error(`写入失败：${err} 🚦🚦🚦`)
}
