import { resolve, dirname } from 'path'
import fs from 'fs/promises'
import { createFilter } from '@rollup/pluginutils'
import { normalizePath } from 'vite'
import { Project } from 'ts-morph'

import type { Plugin } from 'vite'
import type { SourceFile } from 'ts-morph'

export default (): Plugin => {
  const filter = createFilter(['**/*.vue', '**/*.ts'], 'node_modules/**')
  const sourceFiles: SourceFile[] = []

  const project = new Project({
    compilerOptions: {
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      allowJs: true, // 如果想兼容 js 语法需要加上
      outDir: 'dist' // 可以设置自定义的打包文件夹，如 'types'
    },
    tsConfigFilePath: resolve(__dirname, '../tsconfig.json'),
    skipAddingFilesFromTsConfig: true
  })

  let root: string

  return {
    name: 'gen-dts',
    apply: 'build',
    enforce: 'pre', // 需要在 pre 才能正确拿到 ts 的 script 部分
    configResolved(config) {
      root = config.root
    },
    transform(code, id) {
      if (!code || !filter(id)) return null

      // 拆分后的文件 id 具有一些特征，可以用正则的方式来捕获
      if (/\.vue(\?.*type=script.*)$/.test(id)) {
        const filePath = resolve(root, normalizePath(id.split('?')[0]))

        sourceFiles.push(
          project.createSourceFile(filePath + (/lang.ts/.test(id) ? '.ts' : '.js'), code)
        )
      } else if (/\.ts$/.test(id)) {
        const filePath = resolve(root, normalizePath(id))

        sourceFiles.push(project.addSourceFileAtPath(filePath))
      }
    },
    async generateBundle() {
      const diagnostics = project.getPreEmitDiagnostics()

      // 输出解析过程中的错误信息
      console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))

      project.emitToMemory()

      // 随后将解析完的文件写道打包路径
      for (const sourceFile of sourceFiles) {
        const emitOutput = sourceFile.getEmitOutput()

        for (const outputFile of emitOutput.getOutputFiles()) {
          const filePath = outputFile.getFilePath()

          await fs.mkdir(dirname(filePath), { recursive: true })
          await fs.writeFile(filePath, outputFile.getText(), 'utf8')
        }
      }
    }
  }
}