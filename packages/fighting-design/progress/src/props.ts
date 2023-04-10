import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setNumberProp
} from '../../_utils'
import { FIGHTING_TYPE } from '../../_tokens'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { FightingType } from '../../_interface'
import type { ProgressProvide, ProgressState } from './interface'

export const Props = {
  /** 百分比 */
  percentage: setNumberProp(0),
  /** 状态 */
  state: setStringProp<ProgressState>('line', (val: ProgressState): boolean => {
    return ['line', 'circle'].includes(val)
  }),
  /**
   * 进度条类型
   *
   * @values default primary success danger warning info
   * @default primary
   */
  type: setStringProp<FightingType>('primary', (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /** 自定义高度 */
  height: setStringNumberProp(),
  /** 是否显示百分比文字内容 */
  showText: setBooleanProp(true),
  /** 直径 */
  diameter: setNumberProp(400),
  /** 是否在外部显示文本 */
  outsideText: setBooleanProp(),
  /** 百分比文字的颜色 */
  textColor: setStringProp(),
  /** 进度条颜色 */
  color: setStringProp(),
  /** 进度条背景色 */
  background: setStringProp(),
  /** 是否开启条纹效果 */
  stripe: setBooleanProp()
} as const

/** progress 组件 props 类型 */
export type ProgressProps = ExtractPropTypes<typeof Props>

/** progress 组件注入的依赖项 */
export const PROGRESS_PROPS_KEY: InjectionKey<ProgressProvide> =
  Symbol('progress-props-key')
