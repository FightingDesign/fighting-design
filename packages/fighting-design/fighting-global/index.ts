import FightingGlobal from './src/fighting-global.vue'

import style from '../../fighting-theme/src/fighting-global.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FFightingGlobal: ComponentPublicInstance = installWebComponent(FightingGlobal, style)

export * from './src/interface'

export default FFightingGlobal
