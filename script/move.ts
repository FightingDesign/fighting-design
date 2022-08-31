const fs = require('fs')
const { version } = require('../packages/fighting-design/package.json')

const files = [
  { input: './README.md', outDir: 'dist/README.md' },
  {
    input: './packages/fighting-design/package.json',
    outDir: 'dist/package.json'
  },
  { input: './LICENSE', outDir: 'dist/LICENSE' }
]

files.forEach((item) => {
  fs.copyFileSync(item.input, item.outDir)
})

console.warn('\n' + `Fighting Design ${version} 版本打包成功 🎉🎉🎉` + '\n')
