import {
  setBooleanProp,
  setStringProp,
  setNumberProp,
  setArrayProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 文件列表 */
  files: setArrayProp<File[]>([]),
  /** 接受的文件类型 */
  accept: setStringProp(),
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: setStringProp(),
  /** 是否可拖拽上传 */
  drag: setBooleanProp(),
  /** 是否可删除 */
  isRemove: setBooleanProp(true),
  /** 是否展示文件列表 */
  showList: setBooleanProp(true),
  /** 是否可多选 */
  multiple: setBooleanProp(),
  /** 最大上传尺寸 */
  maxSize: setNumberProp(),
  /** 最大上传数量 */
  maxLength: setNumberProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 上传成功后执行的回调 */
  onLoad: {
    type: Function,
    default: (): null => null
  },
  /** 绑定的文件列表发生改变时触发的回调 */
  onChange: {
    type: Function,
    default: (): null => null
  }
} as const

export type UpLoadProps = ExtractPropTypes<typeof Props>
