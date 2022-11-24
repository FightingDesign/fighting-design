import fs from 'fs'

export function findFiles(src: string, exclude: Array<string> = []) {
  const files = fs.readdirSync(src)
  const index = files.findIndex(x => !exclude.includes(x))
  if (exclude.length && index !== -1) {
    files.splice(index, 1)
  }
  return files.filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts'))
}
