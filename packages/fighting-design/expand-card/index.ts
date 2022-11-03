import ExpandCard from './src/expand-card.vue'

import style from '../../fighting-theme/src/expand-card.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FExpandCard: ComponentPublicInstance = installWebComponent(ExpandCard, style)

export * from './src/interface.d'

export default FExpandCard
