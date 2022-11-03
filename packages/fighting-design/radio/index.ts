import Radio from './src/radio.vue'

import style from '../../fighting-theme/src/radio.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FRadio: ComponentPublicInstance = installWebComponent(Radio, style)

export * from './src/interface.d'

export default FRadio
