import { existsSync } from 'fs'

const setWebComponentName = (
  name: string
): string => {
  /**
   * 区分F、f-
   */
  if (name.includes('F')) {
    const result = name.slice(1).replace(/([A-Z])/g, ' $1').trim()
    return result.split(' ').join('-').toLowerCase()
  } else if (name.includes('f-')) {
    return name.slice(2)
  }
  return ''
}

interface ResolveReturnInterface {
  name: string
  from: string
  sideEffects: string[]
}

export function FightingDesignResolver(): {
  type: string,
  resolve: (name: string) => ResolveReturnInterface | undefined
}
export function FightingDesignResolver() {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(F[A-Z]|f-[a-z])/)) {
        const cssPath = `fighting-design/theme/${setWebComponentName(name)}.css`
        const sideEffects = existsSync(cssPath) ? [cssPath] : []

        return {
          name,
          sideEffects,
          from: 'fighting-design'
        }
      }
    }
  }
}