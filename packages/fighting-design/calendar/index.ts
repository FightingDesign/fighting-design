import Calendar from './src/calendar.vue'

import { install } from '../_utils'

export const FCalendar = install(Calendar)

/** calendar 组件实例类型 */
export type CalendarInstance = InstanceType<typeof Calendar>

export * from './src/interface'

export default FCalendar
