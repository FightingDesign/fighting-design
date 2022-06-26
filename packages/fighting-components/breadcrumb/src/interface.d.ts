import type { Slots } from 'vue'

export interface IBreadcrumbContext {
    total: number
    maxCount: number
    needHide: boolean
    slots: Slots
}
