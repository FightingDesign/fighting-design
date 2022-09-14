export type imageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | ''

export interface callbackInterface {
  (params: boolean, width: number): void
}

export interface handleCloseInterface {
  (evt: MouseEvent): void
}
