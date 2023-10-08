import Card from './src/card.vue'

import style from '../../fighting-theme/src/card.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCard: ComponentPublicInstance = installWebComponent(Card, style)

/** card 组件实例类型 */
export type CardInstance = InstanceType<typeof Card>

export * from './src/interface'

export default FCard
