export interface Props {
  percentage: number
  type: 'primary' | 'success' | 'wraning'
  square: boolean
  linear: boolean
  showText: boolean
  color: string
  background: string
  width: number
  height: number
}

export interface Emits {
  (e: 'full'): void
}
