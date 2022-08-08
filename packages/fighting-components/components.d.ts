import '@vue/runtime-core'
import type F from './index'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // FButton: typeof import('./button/src/button.vue')['default']
    FButton: typeof F.FButton
    FButtonGroup: typeof F.FButtonGroup
    FIcon: typeof F.FIcon
    FLink: typeof F.FLink
    FImage: typeof F.FImage
    FCard: typeof F.FCard
    FTag: typeof F.FTag
    FDivider: typeof F.FDivider
    FFooter: typeof F.FFooter
    FHeader: typeof F.FHeader
    FAside: typeof F.FAside
    FMain: typeof F.FMain
    FLayout: typeof F.FLayout
    FSwitch: typeof F.FSwitch
    FBadge: typeof F.FBadge
    FAvatar: typeof F.FAvatar
    FBackTop: typeof F.FBackTop
    FBreadcrumbItem: typeof F.FBreadcrumbItem
    FBreadcrumb: typeof F.FBreadcrumb
    FText: typeof F.FText
    FLoading: typeof F.FLoading
    FProgress: typeof F.FProgress
    FSpace: typeof F.FSpace
    FDialog: typeof F.FDialog
    FTooltip: typeof F.FTooltip
    FDrawer: typeof F.FDrawer
    FPageHeader: typeof F.FPageHeader
    FRate: typeof F.FRate
    FAlert: typeof F.FAlert
    FNovelCoronavirus: typeof F.FNovelCoronavirus
    FList: typeof F.FList
    FListItem: typeof F.FListItem
    FToolbar: typeof F.FToolbar
    FToolbarItem: typeof F.FToolbarItem
  }
}

export {}
