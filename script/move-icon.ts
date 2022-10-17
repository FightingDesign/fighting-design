const fs = require('fs')
const { version } = require('../packages/fighting-icon/package.json')

const files = [
  { input: './packages/fighting-icon/README.md', outDir: 'dist-icon/README.md' },
  {
    input: './packages/fighting-icon/package.json',
    outDir: 'dist-icon/package.json'
  },
  { input: './packages/fighting-icon/LICENSE', outDir: 'dist-icon/LICENSE' }
]

files.forEach((item) => {
  fs.copyFileSync(item.input, item.outDir)
})

console.warn('\n' + `Fighting Icon ${version} 版本打包成功 🎉🎉🎉` + '\n')
