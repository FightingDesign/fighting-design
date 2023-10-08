import Calendar from './src/calendar.vue'

import style from '../../fighting-theme/src/calendar.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCalendar: ComponentPublicInstance = installWebComponent(Calendar, style)

/** calendar 组件实例类型 */
export type CalendarInstance = InstanceType<typeof Calendar>

export * from './src/interface'

export default FCalendar
