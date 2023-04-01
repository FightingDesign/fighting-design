import Aside from './src/aside.vue'

import { install } from '../_utils'

export const FAside = install(Aside)

/** aside 组件实例类型 */
export type AsideInstance = InstanceType<typeof Aside>

export * from './src/interface'

export default FAside
