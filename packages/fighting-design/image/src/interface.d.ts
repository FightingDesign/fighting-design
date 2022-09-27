export type imageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | ''

export interface callbackInterface {
  (params: boolean): void
}

export interface handleCloseInterface {
  (evt: MouseEvent): void
}
