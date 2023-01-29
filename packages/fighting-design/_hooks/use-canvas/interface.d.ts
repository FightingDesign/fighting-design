/**
 * 所需要的 props 参数对象类型接口
 *
 * @param { String } content 文字内容
 * @param { String } fontColor 文字颜色
 * @param { String } fontSize 文字大小
 * @param { Number } width 图片宽度
 * @param { Number } height 图片高度
 */
export interface CreateWatermarkProps {
  content: string
  fontColor: string
  fontSize: string
  width: number
  height: number
}

/**
 * useCanvas 返回值类型接口
 *
 * @param { Function } createWatermark 将 canvas 转换成 base64 图片格式
 */
export interface UseCanvasReturn {
  createWatermark: (props: CreateWatermarkProps) => string
}
