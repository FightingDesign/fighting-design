import StickyCard from './src/sticky-card.vue'

import style from '../../fighting-theme/src/sticky-card.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FStickyCard: ComponentPublicInstance = installWebComponent(StickyCard, style)

export * from './src/interface'

export default FStickyCard
