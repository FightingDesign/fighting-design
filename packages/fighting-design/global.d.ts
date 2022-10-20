import type * as components from './components'

// https://github.com/johnsoncodehk/volar/blob/master/extensions/vscode-vue-language-features/README.md

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FAlert: typeof components.FAlert
    FAside: typeof components.FAside
    FAvatar: typeof components.FAvatar
    FBackTop: typeof components.FBackTop
    FBadge: typeof components.FBadge
    FBreadcrumb: typeof components.FBreadcrumb
    FBreadcrumbItem: typeof components.FBreadcrumbItem
    FButton: typeof components.FButton
    FButtonGroup: typeof components.FButtonGroup
    FCalendar: typeof components.FCalendar
    FCard: typeof components.FCard
    FDialog: typeof components.FDialog
    FDivider: typeof components.FDivider
    FDrawer: typeof components.FDrawer
    FEmpty: typeof components.FEmpty
    FExpandCard: typeof components.FExpandCard
    FFooter: typeof components.FFooter
    FHeader: typeof components.FHeader
    FImage: typeof components.FImage
    FImagePreview: typeof components.FImagePreview
    FLayout: typeof components.FLayout
    FLink: typeof components.FLink
    FList: typeof components.FList
    FListItem: typeof components.FListItem
    FLoading: typeof components.FLoading
    FMain: typeof components.FMain
    FPageHeader: typeof components.FPageHeader
    FProgress: typeof components.FProgress
    FRadio: typeof components.FRadio
    FRadioGroup: typeof components.FRadioGroup
    FRipple: typeof components.FRipple
    FSkeleton: typeof components.FSkeleton
    FSpace: typeof components.FSpace
    FStickyCard: typeof components.FStickyCard
    FSwitch: typeof components.FSwitch
    FTag: typeof components.FTag
    FText: typeof components.FText
    FToolbar: typeof components.FToolbar
    FToolbarItem: typeof components.FToolbarItem
    FTooltip: typeof components.FTooltip
    FTree: typeof components.FTree
    FWatermark: typeof components.FWatermark
  }

  interface ComponentCustomProperties {
    FMessage: typeof components.FMessage
    FNotification: typeof components.FNotification
    useLoadingBar: typeof components.useLoadingBar
  }
}

export { }
