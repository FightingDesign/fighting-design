import { FMessage } from '../../../../packages/fighting-design/message'

/**
 * 复制方法
 *
 * @param { string } target 文本内容
 */
export const onCopy = (target: string): void => {
  /**
   * @see Navigator https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator
   * @see Clipboard.writeText() https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/writeText
   */
  navigator.clipboard.writeText(target)

  FMessage({ message: '复制成功', type: 'primary' })
}
