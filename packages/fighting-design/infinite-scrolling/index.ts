import InfiniteScrolling from './src/infinite-scrolling.vue'

import style from '../../fighting-theme/src/form.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FInfiniteScrolling: ComponentPublicInstance = installWebComponent(InfiniteScrolling, style)

export * from './src/interface'

export default FInfiniteScrolling
