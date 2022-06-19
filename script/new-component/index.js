/* eslint-disable no-lone-blocks */
const superEjs = require('super-ejs')
const changeCase = require('@juln/change-case')
const path = require('path')
const fs = require('fs-extra')

const logInfo = (...args) => console.info('\x1B[33m', ...args, '\x1B[0m')
const logError = (...args) => console.error('\x1B[31m', ...args, '\x1B[0m')

/** @type {(command: string, args?: readonly string[], options?: import('child_process').SpawnOptions) => import('child_process').ChildProcess} */
const spawn = (cmd, args, options) =>
  require('child_process').spawn(cmd, args, {
    stdio: 'inherit',
    shell: require('os').platform.name.includes('win'),
    ...options
  })

const compName = fetchCompName()
const displayName = `F${changeCase(compName, 'upper-camel-case')}`
const outputDir = path.resolve(
  __dirname,
  '../../packages/fighting-components',
  compName
)
const updatedFiles = []
const mainFilePath = path.join(
  'packages/fighting-components',
  compName,
  `${compName}.vue`
)

newComponent()

async function newComponent() {
  if (fs.existsSync(outputDir) && fs.fstatSync) {
    logError(`组件目录[${compName}]已存在\n    (${mainFilePath})\n`)
    return
  }

  try {
    await generate()
    logInfo(`组件[ ${compName} ]创建好了\n    (${mainFilePath})\n`)
    logInfo(`本次创建/修改的文件有: \n    ${updatedFiles.join('\n    ')}\n`)
  } catch (error) {
    logError(
      `不好意思，组件[${compName}]创建失败了\n    error: ${error}\n    ${
        error ? error.stack : ''
      }`
    )
    process.exit(0)
  }

  logInfo('\n自动commit中...\n')
  spawn('git', ['add', ...updatedFiles]).on('exit', () => {
    spawn('git', ['commit', '-m', `feat: 新增 ${displayName} 组件`]).on(
      'exit',
      () => {
        logInfo('\n完成✅\n')
      }
    )
  })
}

function fetchCompName() {
  const input = process.argv[2]

  if (input === undefined) {
    logError(
      '命令使用方法为: pnpm new <component-name>\n    例如: pnpm new user-avatar'
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

    `packages/fighting-test/${compName}.spec.ts`,

    `packages/fighting-theme/src/${compName}.scss`,
    'packages/fighting-theme/index.scss'
  )
  const catchError = async (callback, info) => {
    try {
      await callback()
    } catch (error) {
      logError(`${info}\n    error: ${error}\n    ${error ? error.stack : ''}`)
    }
  }
  return Promise.all([
    catchError(generateComponentDir, '组件目录创建失败'),
    catchError(updateComponentEntry, '组件入口修改失败'),

    catchError(incrementTest, '测试文件创建失败'),

    catchError(incrementStyle, '样式文件创建失败'),
    catchError(updateStyleEntry, '样式入口修改失败')
  ])
}

async function generateComponentDir() {
  const tplDir = path.resolve(__dirname, './template/component')

  // 编译文件内容
  await superEjsGerenateDir(outputDir, tplDir)
}

async function updateComponentEntry() {
  const entryFilePath = path.resolve(
    __dirname,
    '../../packages/fighting-components/index.ts'
  )
  let content = (await fs.readFile(entryFilePath)).toString()

  // 添加代码: import { FDemo } from './demo'
  {
    const latestStr = content.match(/import \{ .*? \} from '.*?'\n\n/m)[0]
    const appendIndex = content.indexOf(latestStr) + latestStr.length - 1
    content =
      content.slice(0, appendIndex) +
      `import { ${displayName} } from './${compName}'` +
      '\n' +
      content.slice(appendIndex)
  }

  // 添加代码： const components = { FDemo }
  {
    // logInfo('const components = { FDemo }', content)
    const latestStr = content.match(/const components = \{(.|\n)*?}/)[0]
    const appendIndex = content.indexOf(latestStr) + latestStr.length - 2
    content =
      content.slice(0, appendIndex) +
      ',\n' +
      '  ' +
      `${displayName}` +
      content.slice(appendIndex)
  }

  // 添加代码： export { FDemo }
  {
    // logInfo('export { FDemo }', content)
    const latestStr = content.match(/export \{(.|\n)*?}/)[0]
    const appendIndex = content.indexOf(latestStr) + latestStr.length - 2
    content =
      content.slice(0, appendIndex) +
      ',\n' +
      '  ' +
      `${displayName}` +
      content.slice(appendIndex)
  }

  // logInfo('writeFile', content)
  await fs.writeFile(entryFilePath, content)
}

async function incrementTest() {
  const outputDir = path.resolve(__dirname, '../../packages/fighting-test')
  const tplDir = path.resolve(__dirname, './template/test')

  // 编译文件内容
  await superEjsGerenateDir(outputDir, tplDir)
}

async function incrementStyle() {
  const outputDir = path.resolve(__dirname, '../../packages/fighting-theme/src')
  const tplDir = path.resolve(__dirname, './template/style')

  // 编译文件内容
  await superEjsGerenateDir(outputDir, tplDir)
}

async function updateStyleEntry() {
  const entryFilePath = path.resolve(
    __dirname,
    '../../packages/fighting-theme/index.scss'
  )
  let content = (await fs.readFile(entryFilePath)).toString()

  content = content.slice(0, -1) + `@use './src/${compName}.scss';` + '\n'

  // logInfo('writeFile', content)
  await fs.writeFile(entryFilePath, content)
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
      parseFilename: (original) =>
        original.replace(/(.*?)__name__([a-zA-Z0-9|\.]*?$)/, `$1${compName}$2`)
    }
  )
}
