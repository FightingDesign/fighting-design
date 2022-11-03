import type { SetWebComponentNameInterface } from './interface'

export const setWebComponentName: SetWebComponentNameInterface = (
  name: string
): string => {
  const result = name.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}
