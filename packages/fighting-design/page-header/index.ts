import PageHeader from './src/page-header.vue'

import style from '../../fighting-theme/src/page-header.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FPageHeader: ComponentPublicInstance = installWebComponent(PageHeader, style)

export * from './src/interface'

export default FPageHeader
