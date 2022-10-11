import Calendar from './src/calendar.vue'

import { install } from '../_utils'

export const FCalendar = install(Calendar)

export type CalendarInstance = InstanceType<typeof Calendar>

export type { CalendarPropsType } from './src/calendar'

export type { CalendarEmitInterface, CalendarMemorandumType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FCalendar: typeof FCalendar
  }
}
