export interface ImagePreviewSwitchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface ImagePreviewOptionClickTargetKey {
  // key: string
  key: '1' | '2' | '3' | '4' | '5'
}

export interface ImagePreviewOptionClickInterface {
  ({ key }: { key: string }): void
}

export interface ImagePreviewOnImgMousewheelInterface {
  (evt: WheelEvent): void
}
