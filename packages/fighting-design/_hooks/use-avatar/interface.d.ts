import type { ComputedRef, CSSProperties } from 'vue'
import type { ClassListInterface } from '../../_interface'

export interface UseAvatarReturnInterface {
  nodeClassList: ComputedRef<ClassListInterface>
  classList: ComputedRef<ClassListInterface>
  styleList: ComputedRef<CSSProperties>
}
