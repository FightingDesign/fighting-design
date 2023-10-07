import FightingGlobal from './src/fighting-global.vue'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FFightingGlobal: ComponentPublicInstance = installWebComponent(FightingGlobal, '')

export * from './src/interface'

export default FFightingGlobal
