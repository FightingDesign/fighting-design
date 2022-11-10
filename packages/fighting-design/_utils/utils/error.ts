export const __DEV__ = process.env.NODE_ENV !== 'production'

export function debugWarn(scope: string, message: string):void {
  if (__DEV__) {
    console.warn(`[${scope}]: ${message}`)
  }
}