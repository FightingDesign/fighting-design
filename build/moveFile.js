// https://blog.csdn.net/qq_36213140/article/details/122326804
const fs = require('fs')
const path = require('path')
const dist = path.join(__dirname, '../dist')
const theme = path.join(__dirname, '../dist/theme')

const fileList = [
  {
    file: './packages/fighting-components/index.ts',
    target: `${dist}/packages/index.ts`
  },
  {
    file: './packages/fighting-design/package.json',
    target: `${dist}/package.json`
  },
  {
    file: './README.md',
    target: `${dist}/README.md`
  },
  {
    file: './packages/fighting-theme/dist/style.css',
    target: `${theme}/index.css`
  }
]

fileList.map(item => moveFile(item))

function moveFile (list) {
  fs.readFile(list.file, (err, data) => {
    if (!fs.existsSync(dist)) {
      fs.mkdirSync(dist)
    }
    fs.mkdirSync(theme)
    fs.writeFile(list.target, data, err => {
      if (err) {
        throw err
      } else {
        console.log('写入成功')
      }
    })
  })
}
