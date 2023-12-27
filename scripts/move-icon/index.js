const path = require('path')
const fs = require('fs')

const inputSvg = path.resolve(__dirname, '../packages/fighting-icon/svg')
const inputSrc = path.resolve(__dirname, '../packages/fighting-icon/src')

fs.readdirSync(inputSvg).forEach(name => {
  // 创建文件夹
  fs.mkdirSync(`${inputSrc}/${name.slice(0, name.length - 4)}`)

  // 移动文件
  fs.copyFileSync(
    `${inputSvg}/${name}`,
    `${inputSrc}/${name.slice(0, name.length - 4)}/index.vue`
  )
})

fs.readdirSync(inputSrc).forEach(name => {
  /** 文件路径 */
  const newPath = `${inputSrc}/${name}/index.vue`

  // 读取
  fs.readFile(newPath, (err, data) => {
    if (data) {
      const content =
        '<template>' + '\n' + '  ' + data.toString() + '\n' + '</template>' + '\n'

      // 重新写入
      fs.writeFile(newPath, content, err => {
        !err && console.log(`${name} 成功 🎉`)
      })
    }
  })
})
