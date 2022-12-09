/**
 * 所需要的 props 参数对象类型接口
 *
 * @param content 文字内容
 * @param fontColor 文字颜色
 * @param fontSize 文字大小
 * @param width 图片宽度
 * @param height 图片高度
 */
export interface CreateWatermarkProps {
  content: string
  fontColor: string
  fontSize: string
  width: number
  height: number
}

export interface UseCanvasReturn {
  createWatermark(props: CreateWatermarkProps): string
}
