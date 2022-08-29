import superEjs from 'super-ejs'
import changeCase from '@juln/change-case'
import path from 'path'
import fsExtra from 'fs-extra'

const logInfo = (...args: string[]): void => console.info('\x1B[33m', ...args, '\x1B[0m')
const logError = (...args: string[]): void => console.error('\x1B[31m', ...args, '\x1B[0m')

const updatedFiles: string[] = []
const compName = fetchCompName()
const displayName = `F${changeCase(compName, 'upper-camel-case')}`
const __dirname = path.resolve()
const outputDir = path.resolve(
  __dirname,
  '../fighting-design',
  // '../../packages/fighting-design',
  compName
)
const mainFilePath = path.join(
  'packages/fighting-design',
  compName,
  `${compName}.vue`
)

const detectPublic = async () => {
  // 如果已经存在
  if (fsExtra.existsSync(outputDir)) {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
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

detectPublic()

// 检测组件名是否规范
function fetchCompName () {
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

async function generate () {
  updatedFiles.push(
    `packages/fighting-design/${compName}/**`,
    'packages/fighting-design/index.ts',
    `packages/fighting-theme/src/${compName}.scss`,
    'packages/fighting-theme/index.scss',
    `packages/fighting-design/__test__/${compName}.spec.ts`
  )
  const catchError = async (callback: Function, info: string) => {
    try {
      await callback()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
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

async function generateComponentDir () {
  const tplDir = path.resolve(__dirname, './template/component')

  // 编译文件内容
  await superEjsGerenateDir(outputDir, tplDir)
}

// 修改组件入口文件
async function updateComponentEntry () {
  const entryFilePath = path.resolve(
    __dirname,
    '../fighting-design/components.ts'
  )
  let content = (await fsExtra.readFile(entryFilePath)).toString()

  content =
    content.slice(0, -1) +
    '\n' +
    '\n' +
    `export { default as ${displayName} } from './${compName}'` +
    '\n' +
    `export type { ${displayName}Instance } from './${compName}'` +
    '\n'

  await fsExtra.writeFile(entryFilePath, content)
}

// 创建样式文件
async function incrementStyle () {
  const outputDir = path.resolve(__dirname, '../fighting-theme/src')
  const tplDir = path.resolve(__dirname, './template/style')

  // 编译文件内容
  await superEjsGerenateDir(outputDir, tplDir)
}

// 添加样式入口
async function updateStyleEntry () {
  const entryFilePath = path.resolve(
    __dirname,
    '../fighting-theme/index.scss'
  )
  let content = (await fsExtra.readFile(entryFilePath)).toString()

  content =
    content.slice(0, -1) + '\n' + `@use './src/${compName}.scss';` + '\n'

  await fsExtra.writeFile(entryFilePath, content)
}

// 添加测试文件
async function incrementTest () {
  const outputDir = path.resolve(__dirname, '../fighting-design/__test__')
  const tplDir = path.resolve(__dirname, './template/test')
  await superEjsGerenateDir(outputDir, tplDir)
}

async function superEjsGerenateDir (outputDir: string, tplDir: string) {
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
