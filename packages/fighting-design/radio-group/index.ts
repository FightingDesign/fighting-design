import RadioGroup from './src/radio-group.vue'

import style from '../../fighting-theme/src/radio-group.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FRadioGroup: ComponentPublicInstance = installWebComponent(RadioGroup, style)

/** radio-group 组件实例类型 */
export type RadioGroupInstance = InstanceType<typeof RadioGroup>

export * from './src/interface'

export default FRadioGroup
