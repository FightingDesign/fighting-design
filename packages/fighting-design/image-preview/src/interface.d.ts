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
