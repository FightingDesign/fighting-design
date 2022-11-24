export function stripScript(content: string) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export function stripStyle(content: string) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
function _stripTemplate(content: string) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

export function stripTemplate(content: string) {
  const result = _stripTemplate(content)
  if (result.indexOf('<template>') === 0) {
    const html = result.replace(/^<template>/, '').replace(/<\/template>$/, '')
    return html
      .replace(/^[\r?\n|\r]/, '')
      .replace(/[\r?\n|\r]$/, '')
      .trim()
  }
  return result
}
