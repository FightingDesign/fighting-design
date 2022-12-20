import { compileTemplate, compileScript, parse } from '@vue/compiler-sfc'
import { ScriptOrStyleReplacePattern, ScriptSetupPattern, StylePattern, TemplateReplacePattern } from './patterns'
import type { SFCTemplateCompileOptions } from '@vue/compiler-sfc'

export const stripScript = (content: string, id: string): string => {
  /**
   * 匹配到 js 部分代码段
   * 
   * match() 方法检索返回一个字符串匹配正则表达式的结果
   * @see match  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match
   */
  const result: RegExpMatchArray | null = content.match(ScriptSetupPattern)

  /**
   * 获取到  js 内容
   */
  const source: string = result && result[0] ? result[0].trim() : ''

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

export const stripStyle = (content: string): string => {
  const result = content.match(StylePattern)
  return result && result[2] ? result[2].trim() : ''
}

/**
 * 编写例子时不一定有 template，所以采取的方案是剔除其他的内容
 * 
 * @see trim https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 * @param content 模板内容字符串
 * @returns 
 */
export const stripTemplate = (content: string): string => {
  content = content.trim()
  /**
   * @see replace https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   */
  return content ? content.replace(ScriptOrStyleReplacePattern, '').trim() : content
}

export const genInlineComponentText = (
  id: number,
  template: string,
  script: string
): string => {
  let source = template
  if (TemplateReplacePattern.test(source)) {
    source = source.replace(TemplateReplacePattern, '$1')
  }
  const finalOptions = {
    id: `inline-component-${id}`,
    source: `${source}`,
    filename: `inline-component-${id}.vue`,
    compilerOptions: {
      mode: 'function'
    }
  }
  const compiled = compileTemplate(finalOptions as SFCTemplateCompileOptions)

  let demoComponentContent = `
    ${compiled.code.replace('return function render', 'function render')}
  `
  // todo: 这里采用了硬编码有待改进
  script = script.trim()

  if (script) {
    script = script
      .replace(/export\s+default/, 'const demoComponentExport =')
      .replace(/import ({.*}) from 'vue'/g, (s, s1) => `const ${s1} = Vue`)
      .replace(
        /const ({ defineComponent as _defineComponent }) = Vue/g,
        'const { defineComponent: _defineComponent } = Vue'
      )

    const scriptReplaces = [
      {
        searchValue: /import ({.*}) from '@fighting-design\/fighting-icon'/g,
        replaceValue: (s, s1) => `const ${s1} = FightingIcon`
      },
      {
        searchValue: /import ({.*}) from 'fighting-design'/g,
        replaceValue: (s, s1) => `const ${s1} = FightingDesign`
      },
      // {
      //   searchValue: /import type ({.*}) from 'fighting-design'/g,
      //   replaceValue: (s, s1) => `const ${s1} = FightingDesign`
      // }
    ]

    if (scriptReplaces && scriptReplaces.length) {
      for (const s of scriptReplaces) {
        script = script.replace(s.searchValue, s.replaceValue as any)
      }
    }
  } else {
    script = 'const demoComponentExport = {}'
  }
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      ...demoComponentExport
    }
  })()`

  return demoComponentContent
}
