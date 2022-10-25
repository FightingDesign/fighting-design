export type { ImagePreviewPropsType } from './image-preview'
import type { ToolbarClickEmitInterface } from '../../toolbar/src/interface'

export interface ImagePreviewSwitchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface ImagePreviewOptionClickInterface {
  (target: ToolbarClickEmitInterface): void
}

export interface ImagePreviewOnImgMousewheelInterface {
  (evt: WheelEvent): void
}

export type OptionFunInterface = Record<string, Function>
