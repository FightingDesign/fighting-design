export interface CreateBase64NeedWatermarkPropsInterface {
  content: string
  fontColor: string
  fontSize: string
  width: number
  height: number
}

export interface CreateBase64Interface {
  (props: createBase64NeedWatermarkPropsInterface): string
}
