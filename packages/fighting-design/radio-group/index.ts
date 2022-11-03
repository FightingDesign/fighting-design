import RadioGroup from './src/radio-group.vue'

import style from '../../fighting-theme/src/radio-group.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FRadioGroup: ComponentPublicInstance = installWebComponent(RadioGroup, style)

export * from './src/interface.d'

export default FRadioGroup
