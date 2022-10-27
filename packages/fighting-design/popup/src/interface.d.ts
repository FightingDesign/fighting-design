export type PopupDirectionType = 'left' | 'right' | 'top' | 'bottom' | 'center'

export interface PopupCallbackInterface {
  (evt: MouseEvent): void
}
