import Calendar from './src/calendar.vue'

import { install } from '../_utils'

export const FCalendar = install(Calendar)

export type FCalendarInstance = InstanceType<typeof Calendar>

declare module 'vue' {
  export interface GlobalComponents {
    FCalendar: typeof FCalendar
  }
}

export type { calendarEmitInterface, memorandumType } from './src/interface'
