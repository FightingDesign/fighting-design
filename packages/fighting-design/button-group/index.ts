import ButtonGroup from './src/button-group.vue'

import style from '../../fighting-theme/src/button-group.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FButtonGroup: ComponentPublicInstance = installWebComponent(ButtonGroup, style)

export * from './src/interface'

export default FButtonGroup
