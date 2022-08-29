// import { useLoadingBar } from './src/method'

// import { install } from '../_utils'

// install(useLoadingBar, useLoadingBar.name)

// export type FLoadingBarInstance = InstanceType<typeof useLoadingBar>

// export default FLoadingBar
// export { useLoadingBar } from './src/method'

import { useLoadingBar } from './src/method'

import { installFn } from '../_utils'

installFn(useLoadingBar, 'FLoadingBar')

export default useLoadingBar
