import Card from './src/card.vue'

import style from '../../fighting-theme/src/card.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCard: ComponentPublicInstance = installWebComponent(Card, style)

export * from './src/interface.d'

export default FCard
