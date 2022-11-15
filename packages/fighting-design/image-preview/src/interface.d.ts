export type { ImagePreviewPropsType } from './props'
import type { ToolbarClickEmitInterface } from '../../toolbar/src/interface'

export interface ImagePreviewSwitchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface ImagePreviewOptionClickInterface {
  (target: ToolbarClickEmitInterface): void
}

export type OptionFunInterface = Record<string, Function>

export interface ImagePreviewCloseInterface {
  (): void
}
