import FightingGlobal from './src/fighting-global.vue'

import { install } from '../_utils'

export const FFightingGlobal = install(FightingGlobal)

/** fighting-global 组件实例类型 */
export type FightingGlobalInstance = InstanceType<typeof FightingGlobal>

export * from './src/interface'

export default FFightingGlobal
