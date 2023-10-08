import StickyCard from './src/sticky-card.vue'

import style from '../../fighting-theme/src/sticky-card.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FStickyCard: ComponentPublicInstance = installWebComponent(StickyCard, style)

/** sticky-card 组件实例类型 */
export type StickyCardInstance = InstanceType<typeof StickyCard>

export * from './src/interface'

export default FStickyCard
