import type { SFCTemplateCompileOptions } from '@vue/compiler-sfc'
import { compileTemplate, TemplateCompiler, compileScript, parse } from '@vue/compiler-sfc'
import type { DemoblockPluginOptions } from '../types'
import {
  ScriptOrStyleReplacePattern,
  ScriptSetupPattern,
  StylePattern,
  TemplateReplacePattern
} from './patterns'

export function stripScript(content: string, id: any) {
  const result = content.match(ScriptSetupPattern)
  const source = result && result[0] ? result[0].trim() : ''
  if (source) {
    const { descriptor } = parse(source)
    const { content: scriptContent } = compileScript(descriptor, {
      refSugar: true,
      id
    })
    return scriptContent
  }
  return source
}

export function stripStyle(content: string) {
  const result = content.match(StylePattern)
  return result && result[2] ? result[2].trim() : ''
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
export function stripTemplate(content: string) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(ScriptOrStyleReplacePattern, '').trim()
}

export function pad(source: string) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
    .join('\n')
}

export function genInlineComponentText(
  id: any,
  template: string,
  script: string,
  options: DemoblockPluginOptions
) {
  let source = template
  if (TemplateReplacePattern.test(source)) {
    source = source.replace(TemplateReplacePattern, '$1')
  }
  const finalOptions = {
    id: `inline-component-${id}`,
    source: `${source}`,
    filename: `inline-component-${id}.vue`,
    // compiler: TemplateCompiler,
    compilerOptions: {
      mode: 'function'
    }
  }
  const compiled = compileTemplate(finalOptions as SFCTemplateCompileOptions)
  // tips
  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach(tip => {
      console.warn(tip)
    })
  }
  // errors
  if (compiled.errors && compiled.errors.length) {
    console.error(
      `\n  Error compiling template:\n${pad(compiled.source)}\n` +
        compiled.errors.map(e => `  - ${e}`).join('\n') +
        '\n'
    )
  }
  let demoComponentContent = `
    ${compiled.code.replace('return function render', 'function render')}
  `
  // todo: 这里采用了硬编码有待改进
  script = script.trim()
  if (script) {
    script = script
      .replace(/export\s+default/, 'const democomponentExport =')
      .replace(/import ({.*}) from 'vue'/g, (s, s1) => `const ${s1} = Vue`)
      .replace(
        /const ({ defineComponent as _defineComponent }) = Vue/g,
        'const { defineComponent: _defineComponent } = Vue'
      )

    // 因为 vue 函数组件需要把 import 转换为 require，这里可附加一些其他的转换。
    if (options?.scriptReplaces) {
      for (const s of options.scriptReplaces) {
        script = script.replace(s.searchValue, s.replaceValue as any)
      }
    }
  } else {
    script = 'const democomponentExport = {}'
  }
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      ...democomponentExport
    }
  })()`
  return demoComponentContent
}
