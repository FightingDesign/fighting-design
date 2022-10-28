import Calendar from './src/calendar.vue'

import { install } from '../_utils'

export const FCalendar = install(Calendar)

export type CalendarInstance = InstanceType<typeof Calendar>

export * from './src/interface.d'

export default Calendar
