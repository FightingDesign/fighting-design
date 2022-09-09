export interface createBase64NeedWatermarkPropsInterface {
  content: string
  fontColor: string
  fontSize: string
  width: number
  height: number
}

export interface createBase64Interface {
  (props: createBase64NeedWatermarkPropsInterface): string
}
