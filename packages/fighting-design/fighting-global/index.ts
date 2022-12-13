import FightingGlobal from './src/fighting-global.vue'

import { install } from '../_utils'

export const FFightingGlobal = install(FightingGlobal)

export type FightingGlobalInstance = InstanceType<typeof FightingGlobal>

export * from './src/interface.d'

export default FightingGlobal
