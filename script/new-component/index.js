const superEjs = require('super-ejs')
const changeCase = require('@juln/change-case')
const { resolve, join } = require('path')
const { existsSync, fstatSync, readFile, writeFile } = require('fs-extra')

const logInfo = (...args) => console.info('\x1B[33m', ...args, '\x1B[0m')
const logError = (...args) => console.error('\x1B[31m', ...args, '\x1B[0m')

const updatedFiles = []
const compName = fetchCompName()
const displayName = `F${changeCase(compName, 'upper-camel-case')}`
const outputDir = resolve(
  __dirname,
  '../../packages/fighting-components',
  compName
)
const mainFilePath = join(
  'packages/fighting-components',
  compName,
  `${compName}.vue`
)

newComponent()

async function newComponent() {
  // 如果已经存在
  if (existsSync(outputDir) && fstatSync) {
    logError(`组件 ${compName}` + '\n' + `已存在${mainFilePath}`)
    return
  }

  try {
    await generate()
    logInfo(
      '本次创建/修改的文件有：' +
        '\n' +
        '\n' +
        `${updatedFiles.join('\n')}` +
        '\n'
    )
  } catch (error) {
    logError(
      `不好意思，组件[${compName}]创建失败了` +
        '\n' +
        `error: ${error}` +
        '\n ' +
        `${error ? error.stack : ''}`
    )
    process.exit(0)
  }

  logInfo(`${displayName} 组件创建完成 🎉🎉🎉` + '\n')
}

// 检测组件名是否规范
function fetchCompName() {
  const input = process.argv[2]

  if (input === undefined) {
    logError(
      '\n' +
        '命令使用方法为: pnpm new <component-name>' +
        '\n' +
        '例如: pnpm new user-avatar' +
        '\n'
    )
    process.exit(0)
  }

  if (
    input.match(/^[a-zA-Z]+?[-|_|a-zA-Z0-9]*?$/) &&
    !input.endsWith('-') &&
    !input.endsWith('_')
  ) {
    const compName = changeCase(input, 'param-case')
    return compName
  }

  logError('组件名不规范')
  process.exit(0)
}

async function generate() {
  updatedFiles.push(
    `packages/fighting-components/${compName}/**`,
    'packages/fighting-components/index.ts',
    `packages/fighting-theme/src/${compName}.scss`,
    'packages/fighting-theme/index.scss',
    `packages/fighting-test/${compName}.spec.ts`
  )
  const catchError = async (callback, info) => {
    try {
      await callback()
    } catch (error) {
      logError(
        info + '\n' + `error: ${error}` + '\n' + `${error ? error.stack : ''}`
      )
    }
  }
  return Promise.all([
    catchError(generateComponentDir, '🚧 组件源文件创建失败'),
    catchError(updateComponentEntry, '🚧 组件入口修改失败'),
    catchError(incrementStyle, '🚧 样式文件创建失败'),
    catchError(updateStyleEntry, '🚧 样式入口修改失败'),
    catchError(incrementTest, '🚧 测试文件创建失败')
  ])
}

async function generateComponentDir() {
  const tplDir = resolve(__dirname, './template/component')

  // 编译文件内容
  await superEjsGerenateDir(outputDir, tplDir)
}

// 修改组件入口文件
async function updateComponentEntry() {
  const entryFilePath = resolve(
    __dirname,
    '../../packages/fighting-components/components.ts'
  )
  let content = (await readFile(entryFilePath)).toString()

  content =
    content.slice(0, -1) +
    '\n' +
    '\n' +
    `export { default as ${displayName} } from './${compName}'` +
    '\n' +
    `export type { ${displayName}Instance } from './${compName}'` +
    '\n'

  await writeFile(entryFilePath, content)
}

// 创建样式文件
async function incrementStyle() {
  const outputDir = resolve(__dirname, '../../packages/fighting-theme/src')
  const tplDir = resolve(__dirname, './template/style')

  // 编译文件内容
  await superEjsGerenateDir(outputDir, tplDir)
}

// 添加样式入口
async function updateStyleEntry() {
  const entryFilePath = resolve(
    __dirname,
    '../../packages/fighting-theme/index.scss'
  )
  let content = (await readFile(entryFilePath)).toString()

  content =
    content.slice(0, -1) + '\n' + `@use './src/${compName}.scss';` + '\n'

  await writeFile(entryFilePath, content)
}

// 添加测试文件
async function incrementTest() {
  const outputDir = resolve(__dirname, '../../packages/fighting-test')
  const tplDir = resolve(__dirname, './template/test')
  await superEjsGerenateDir(outputDir, tplDir)
}

async function superEjsGerenateDir(outputDir, tplDir) {
  return await superEjs.gerenateDir(
    outputDir,
    tplDir,
    {
      name: compName,
      displayName,
      changeCase
    },
    {},
    {
      parseFilename: (original) => {
        return original.replace(
          /(.*?)__name__([a-zA-Z0-9|\.]*?$)/,
          `$1${compName}$2`
        )
      }
    }
  )
}
