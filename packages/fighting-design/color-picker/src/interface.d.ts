export interface ColorPickerInterface {
  /**
   * Current color value
   */
  modelValue?: string
  /**
   * Whether the color picker is disabled
   */
  disabled?: boolean
}

export type ColorPickerChangeType = (value: string) => void 
