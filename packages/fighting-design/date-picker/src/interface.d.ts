export type { DatePickerProps } from './date-picker'

/**
 * 不同尺寸类型
 */
export type DatePickerSize = 'large' | 'middle' | 'small' | 'mini'

export interface DatePickerCheckDate {
  YYYY: number
  MM: number
  DD: number
}
