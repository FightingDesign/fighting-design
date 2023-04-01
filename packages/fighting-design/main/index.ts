import Main from './src/main.vue'

import { install } from '../_utils'

export const FMain = install(Main)

/** main 组件实例类型 */
export type MainInstance = InstanceType<typeof Main>

export * from './src/interface'

export default FMain
