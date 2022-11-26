/**
 * 所需要的 props 参数对象类型接口
 * 
 * @param content 文字内容
 * @param fontColor 文字颜色
 * @param fontSize 文字大小
 * @param width 图片宽度
 * @param height 图片高度
 */
export interface CreateWatermarkPropsInterface {
  content: string
  fontColor: string
  fontSize: string
  width: number
  height: number
}

/**
 * createWatermark 方法类型接口
 * 
 * @param props 所需要的 props 参数对象
 * @returns { String } base64 格式的图片
 */
export interface CreateBase64Interface {
  (props: CreateWatermarkPropsInterface): string
}
