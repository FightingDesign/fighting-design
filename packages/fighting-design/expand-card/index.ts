import ExpandCard from './src/expand-card.vue'

import style from '../../fighting-theme/src/expand-card.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FExpandCard: ComponentPublicInstance = installWebComponent(ExpandCard, style)

/** expand-card 组件实例类型 */
export type ExpandCardInstance = InstanceType<typeof ExpandCard>

export * from './src/interface'

export default FExpandCard
