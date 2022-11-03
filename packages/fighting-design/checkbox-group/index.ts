import CheckboxGroup from './src/checkbox-group.vue'

import style from '../../fighting-theme/src/checkbox-group.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCheckboxGroup: ComponentPublicInstance = installWebComponent(CheckboxGroup, style)

export * from './src/interface.d'

export default FCheckboxGroup
