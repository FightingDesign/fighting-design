import BreadcrumbItem from './src/breadcrumb-item.vue'

import style from '../../fighting-theme/src/breadcrumb-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBreadcrumbItem: ComponentPublicInstance = installWebComponent(BreadcrumbItem, style)

export default FBreadcrumbItem
