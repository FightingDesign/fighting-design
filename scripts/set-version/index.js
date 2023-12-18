/**
 * 每次发布新版本需要手动修改版本号
 *
 * 该脚步解决手动修改版本号的问题
 */

const fs = require('fs')
const path = require('path')

/**
 * 获取到输入的命令键值
 *
 * 获取到的内容格式为 node scripts/set-version "x.x.x"
 */
const scriptContent = process.env.npm_lifecycle_script
/** 获取到版本号 */
const version = scriptContent.slice(26, scriptContent.length - 1)
/** 文件路径 */
const url = path.join(__dirname, '../../packages/fighting-design/package.json')
/** 读取到文件内容 */
const file = fs.readFileSync(url, 'utf-8')

try {
  /** 获取到读取的文件内容 */
  const json = JSON.parse(file)

  // 重新赋值版本号
  json.version = version

  // 将修改的内容重新写入
  fs.writeFileSync(url, JSON.stringify(json, null, 2))

  console.log(`${version} 版本修改成功 🚀🚀🚀`)
} catch (err) {
  console.error(`写入失败：${err} 🚦🚦🚦`)
}
