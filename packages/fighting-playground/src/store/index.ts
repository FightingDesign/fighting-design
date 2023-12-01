import { isString } from './../../../fighting-design/_utils'
import * as defaultCompiler from 'vue/compiler-sfc'
import { reactive, watchEffect, version } from 'vue'
import { compileFile, File } from '@vue/repl'
import { utoa, atou } from '../utils/index'
import { FMessage } from '../../../fighting-design/message'
import {
  defaultMainFile,
  fightingPlugin,
  fightingPluginCode,
  defaultCode,
  fightingImports,
  publicPath
} from '../utils/code'
import type { Store, SFCOptions, StoreState, OutputModes, StoreOptions } from '@vue/repl'

export class ReplStore {
  state: StoreState
  compiler = defaultCompiler
  options?: SFCOptions
  initialShowOutput: boolean
  initialOutputMode: OutputModes = 'preview'
  private readonly defaultVueRuntimeURL: string

  constructor ({
    serializedState = '',
    defaultVueRuntimeURL = `https://cdn.jsdelivr.net/npm/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`,
    showOutput = false,
    outputMode = 'preview'
  }: StoreOptions = {}) {
    let files: StoreState['files'] = {}

    if (serializedState) {
      const saved = JSON.parse(atou(serializedState))
      for (const filename of Object.keys(saved)) {
        files[filename] = new File(filename, saved[filename])
      }
    } else {
      files = {
        [defaultMainFile]: new File(defaultMainFile, defaultCode)
      }
    }

    this.defaultVueRuntimeURL = defaultVueRuntimeURL
    this.initialShowOutput = showOutput
    this.initialOutputMode = outputMode as OutputModes

    let mainFile: string = defaultMainFile

    if (!files[mainFile]) {
      mainFile = Object.keys(files)[0]
    }
    this.state = reactive({
      mainFile,
      files,
      activeFile: files[mainFile],
      errors: [],
      vueRuntimeURL: this.defaultVueRuntimeURL,
      fightingDesign: `${publicPath}es/index.js`
    }) as unknown as StoreState

    this.initImportMap()

    // 注入 Fighting Design
    this.state.files[fightingPlugin] = new File(fightingPlugin, fightingPluginCode)

    console.log(this.state)

    watchEffect(() => compileFile(this as unknown as Store, this.state.activeFile))

    for (const file in this.state.files) {
      if (file !== defaultMainFile) {
        compileFile(this as unknown as Store, this.state.files[file])
      }
    }
  }

  setActive = (filename: string): void => {
    this.state.activeFile = this.state.files[filename]
  }

  // don't start compiling until the options are set
  init = (): void => {
    watchEffect(() => compileFile(this as unknown as Store, this.state.activeFile))
    for (const file in this.state.files) {
      if (file !== defaultMainFile) {
        compileFile(this as unknown as Store, this.state.files[file])
      }
    }
  }

  addFile = (fileOrFilename: string | File): void => {
    const file = isString(fileOrFilename) ? new File(fileOrFilename) : fileOrFilename
    this.state.files[file.filename] = file
    if (!file.hidden) this.setActive(file.filename)
  }
  /**
   * 删除文件
   *
   * @param { string } filename 文件名
   */
  deleteFile = (filename: string): void => {
    /** 如果删除的 Fighting Design 的配置文件 */
    if (filename === fightingPlugin) {
      FMessage.danger('Fighting Design 依赖于这个文件，请勿删除！')
      return
    }
    /** 提示框 */
    if (confirm(`你确定删除 ${filename} 吗？`)) {
      if (this.state.activeFile.filename === filename) {
        this.state.activeFile = this.state.files[this.state.mainFile]
      }
      delete this.state.files[filename]
    }
  }

  serialize = (): string => {
    return '#' + utoa(JSON.stringify(this.getFiles()))
  }

  getFiles = (): Record<string, string> => {
    const exported: Record<string, string> = {}
    for (const filename in this.state.files) {
      exported[filename] = this.state.files[filename].code
    }
    return exported
  }

  setFiles = async (newFiles: Record<string, string>, mainFile = defaultMainFile): Promise<void> => {
    const files: Record<string, File> = {}
    if (mainFile === defaultMainFile && !newFiles[mainFile]) {
      files[mainFile] = new File(mainFile, defaultCode)
    }
    for (const [filename, file] of Object.entries(newFiles)) {
      files[filename] = new File(filename, file)
    }
    for (const file of Object.values(files)) {
      await compileFile(this as unknown as Store, file)
    }
    this.state.mainFile = mainFile
    this.state.files = files
    this.initImportMap()
    this.setActive(mainFile)
  }

  private initImportMap = (): void => {
    const map = this.state.files['import-map.json']
    if (!map) {
      this.state.files['import-map.json'] = new File(
        'import-map.json',
        JSON.stringify(
          {
            imports: {
              vue: this.defaultVueRuntimeURL,
              ...fightingImports
            }
          },
          null,
          2
        )
      )
    } else {
      try {
        const json = JSON.parse(map.code)
        if (!json.imports.vue) {
          json.imports.vue = this.defaultVueRuntimeURL
          map.code = JSON.stringify(json, null, 2)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  getImportMap = (): void | object => {
    try {
      return JSON.parse(this.state.files['import-map.json'].code)
    } catch (e) {
      this.state.errors = [`Syntax error in import-map.json: ${(e as Error).message}`]
      return {}
    }
  }
}
