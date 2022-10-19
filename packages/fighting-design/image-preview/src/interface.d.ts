export type { ImagePreviewPropsType } from './image-preview'

export interface ImagePreviewSwitchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface ImagePreviewOptionClickTargetKey {
  key: string
}

export interface ImagePreviewOptionClickInterface {
  ({ key }: { key: string }): void
}

export interface ImagePreviewOnImgMousewheelInterface {
  (evt: WheelEvent): void
}

export type OptionFunInterface = Record<string, Function>
