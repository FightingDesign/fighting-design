import Calendar from './src/calendar.vue'

import style from '../../fighting-theme/src/calendar.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCalendar: ComponentPublicInstance = installWebComponent(Calendar, style)

export * from './src/interface'

export default FCalendar
