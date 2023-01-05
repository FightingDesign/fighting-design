const fs = require('fs')
const path = require('path')

/** 获取到输入的版本号 */
const version = process.env.npm_config_setv

/** 文件路径 */
const url = path.join(__dirname, '../../packages/fighting-design/package.json')

/** 读取到文件内容 */
const file = fs.readFileSync(url, 'utf-8')

try {
  /** 获取到读取的文件内容 */
  const json = JSON.parse(file)

  /** 重新赋值版本号 */
  json.version = version

  /** 将修改的内容重新写入 */
  fs.writeFileSync(url, JSON.stringify(json, null, 2))

  /** 打印成功信息 */
  console.log(`${version} 版本修改成功 🚀🚀🚀`)
}

catch (err) {
  /** 如果失败打印错误信息 */
  console.error(`写入失败：${err} 🚦🚦🚦`)
}
