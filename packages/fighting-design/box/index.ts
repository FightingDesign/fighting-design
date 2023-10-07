import Box from './src/box.vue'

import style from '../../fighting-theme/src/box.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBox: ComponentPublicInstance = installWebComponent(Box, style)

export * from './src/interface'

export default FBox
