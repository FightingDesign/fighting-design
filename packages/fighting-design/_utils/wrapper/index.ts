import type { SetWebComponentNameInterface } from './interface'

export const setWebComponentName: SetWebComponentNameInterface = (name: string): string => {
  return 'f-' + name.toLowerCase().slice(1)
}
