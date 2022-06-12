export type imageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | ''

export interface ordinaryFunctionInterface {
  (): void
}

export interface callbackInterface {
  (params: boolean, width: number): void
}

export interface switchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface optionClickInterface {
  (evt: Event): void
}
