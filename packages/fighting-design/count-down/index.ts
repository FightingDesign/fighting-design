import CountDown from './src/count-down.vue'

import style from '../../fighting-theme/src/count-down.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCountDown: ComponentPublicInstance = installWebComponent(CountDown, style)

export * from './src/interface'

export default FCountDown
