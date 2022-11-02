export interface CreateWatermarkPropsInterface {
  content: string
  fontColor: string
  fontSize: string
  width: number
  height: number
}

export interface CreateBase64Interface {
  (props: CreateWatermarkPropsInterface): string
}
