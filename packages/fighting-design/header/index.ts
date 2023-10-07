import Header from './src/header.vue'

import style from '../../fighting-theme/src/header.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FHeader: ComponentPublicInstance = installWebComponent(Header, style)

export * from './src/interface'

export default FHeader
