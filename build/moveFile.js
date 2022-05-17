// https://blog.csdn.net/qq_36213140/article/details/122326804
// 导入fs模块
const fs = require('fs')
// import fs from 'fs'
// 导入path模块
const path = require('path')
// import path from 'path'
//把 src/style.css 复制到dist/目录下
const dist = path.join(__dirname, '../dist')


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
  }
]

fileList.map(item => moveFile(item))

function moveFile (list) {
  fs.readFile(list.file, (err, data) => {
    if (!fs.existsSync(dist)) {
      fs.mkdirSync(dist)
    }
    fs.writeFile(list.target, data, err => {
      if (err) {
        throw err
      } else {
        console.log('写入成功')
      }
    })
  })
}

// './src/style.css'
// fs.readFile('./packages/fighting-components/index.ts', (err, data) => {
//   //判断如果不存在dist目录，我们就创建一个dist目录
//   if (!fs.existsSync(dist)) {
//     fs.mkdirSync(dist)
//   }
//   fs.writeFile(`${dist}/index.ts`, data, (err) => {
//     if (err) {
//       throw err
//     } else {
//       console.log('写入成功')
//     }
//   })
// })
