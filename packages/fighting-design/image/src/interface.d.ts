export type { ImagePropsType } from './props'

export type ImageFitType = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | ''

export interface ImageCallBackInterface {
  (evt: MouseEvent): void
}
