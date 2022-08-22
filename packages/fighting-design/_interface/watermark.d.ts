export interface createBase64NeedWatermarkPropsInterface {
  content: string
  width: number
  height: number
  fontSize: string
  fontColor: string
}

export interface createBase64Interface {
  (props: createBase64NeedWatermarkPropsInterface): string
}
