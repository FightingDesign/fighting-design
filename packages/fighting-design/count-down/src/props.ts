import type { ExtractPropTypes } from 'vue'
import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp,
  setFunctionProp
} from '../../_utils'

export const Props = {
  /** 倒计时时长，单位毫秒 */
  time: setStringNumberProp(0),
  /** 时间格式 */
  format: setStringProp<string>('HH:mm:ss'),
  /** 是否自动开始倒计时 */
  autoStart: setBooleanProp(true),
  /** 是否开启毫秒级渲染 */
  millisecond: setBooleanProp(false),
  /** 倒计时结束的回调 */
  finish: setFunctionProp()
} as const

export type CountDownProps = ExtractPropTypes<typeof Props>
