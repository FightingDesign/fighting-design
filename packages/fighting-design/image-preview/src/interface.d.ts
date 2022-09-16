export interface switchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface optionClickTargetKey {
  key: string
}

export interface optionClickInterface {
  ({ key }: { key: string }): void
}

export interface onImgMousewheelInterface {
  (evt: WheelEvent): void
}

export interface handleCloseInterface {
  (evt: MouseEvent): void
}
