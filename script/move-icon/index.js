const { resolve } = require('path')
const { readdirSync, mkdirSync, copyFileSync, readFile, writeFile } = require('fs')

const inputSvg = resolve(__dirname, '../packages/fighting-icon/svg')
const inputSrc = resolve(__dirname, '../packages/fighting-icon/src')

readdirSync(inputSvg).forEach(name => {
  /** 创建文件夹 */
  mkdirSync(`${inputSrc}/${name.slice(0, name.length - 4)}`)

  /** 移动文件 */
  copyFileSync(`${inputSvg}/${name}`, `${inputSrc}/${name.slice(0, name.length - 4)}/index.vue`)
})

readdirSync(inputSrc).forEach(name => {
  const newPath = `${inputSrc}/${name}/index.vue`

  /** 读取 */
  readFile(newPath, (err, data) => {
    if (data) {
      const content = '<template>' + '\n' + '  ' + data.toString() + '\n' + '</template>' + '\n'

      /** 重新写入 */
      writeFile(newPath, content, err => {
        !err && console.log(`${name} 成功 🎉`)
      })
    }
  })
})
