const { readFile, writeFile } = require('fs')
const { join } = require('path')

const dist = join(__dirname, '../dist')

const fileList = [
  {
    file: './packages/fighting-design/package.json',
    target: `${dist}/package.json`
  },
  {
    file: './LICENSE',
    target: `${dist}/LICENSE`
  },
  {
    file: './README.md',
    target: `${dist}/README.md`
  }
]

fileList.map((item) => moveFile(item))

function moveFile(list) {
  readFile(list.file, (err, data) => {
    writeFile(list.target, data, (err) => {
      if (err) throw err
    })
  })
}
