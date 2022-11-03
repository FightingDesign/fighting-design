import { useLoadingBar } from '../_hooks'

import { installFn } from '../_utils'

export const LoadingBar = installFn(useLoadingBar, 'FLoadingBar')

export * from './src/interface.d'
