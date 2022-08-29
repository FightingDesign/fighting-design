const { copyFileSync } = require('fs')
const { version } = require('../packages/fighting-design/package.json')

const FILE = [
  { input: './README.md', outDir: 'dist/README.md' },
  {
    input: './packages/fighting-design/package.json',
    outDir: 'dist/package.json'
  },
  { input: './LICENSE', outDir: 'dist/LICENSE' }
]

FILE.forEach((item) => {
  copyFileSync(item.input, item.outDir)
})

console.warn('\n' + `Fighting Design ${version} 版本打包成功 🎉🎉🎉` + '\n')
