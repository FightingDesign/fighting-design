export type imageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | ''

export interface callbackInterface {
  (params: boolean, width: number): void
}

export interface switchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface optionClickInterface {
  (evt: Event): void
}

export interface onImgMousewheelInterface {
  (evt: WheelEvent): void
}

export interface handleCloseInterface {
  (evt: MouseEvent): void
}
