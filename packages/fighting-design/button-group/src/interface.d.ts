export type { ButtonGroupPropsType } from './props'
import type { ButtonSizeType, ButtonType } from '../../button'

/**
 * 向自组件注入的依赖项类型接口
 */
export interface ButtonGroupProvideInterface {
  size: ButtonSizeType
  type: ButtonType
}
