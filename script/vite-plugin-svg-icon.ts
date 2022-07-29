import type { Plugin } from 'vite'
import { readFileSync, readdirSync } from 'fs'

let idPrefix = ''
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g
const hasViewBox = /(viewBox="[^>+].*?")/g
const clearReturn = /(\r)|(\n)/g

const isSvg = (name: string): boolean => {
  const splitList = name.split('.')
  const fileType = splitList[splitList.length - 1]
  return fileType === 'svg'
}

const findSvgFile = (dir: string): string[] => {
  const svgRes: string[] = []

  const direntList = readdirSync(dir, {
    withFileTypes: true
  })

  for (const dirent of direntList) {
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(dir + dirent.name + '/'))
    } else if (isSvg(dirent.name)) {
      const svg: string = readFileSync(dir + dirent.name)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, ($1, $2: string) => {
          let width = 0
          let height = 0
          let content = $2.replace(clearHeightWidth, (s1, s2, s3) => {
            if (s2 === 'width') {
              width = s3
            } else if (s2 === 'height') {
              height = s3
            }
            return ''
          })
          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`
          }
          return `<symbol id="${idPrefix}-${dirent.name.replace(
            '.svg',
            ''
          )}" ${content}>`
        })
        .replace('</svg>', '</symbol>')
      svgRes.push(svg)
    }
  }
  return svgRes
}

export const vitePluginSvgIcon = (
  path: string,
  prefix = 'icon'
): Plugin | undefined => {
  if (path === '') {
    return
  }
  idPrefix = prefix
  const res: string[] = findSvgFile(path)

  return {
    name: 'svg-transform',
    transformIndexHtml: (html): string => {
      return html.replace(
        '<body>',
        `
        <body>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
            ${res.join('')}
          </svg>
        `
      )
    }
  }
}
