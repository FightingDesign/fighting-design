import type * as components from './components'

/**
 * Volar 插件实现代码提示
 *
 * https://github.com/johnsoncodehk/volar/blob/master/extensions/vscode-vue-language-features/README.md
 */

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
    FUpLoad: typeof components.FUpLoad
    FTable: typeof components.FTable
    FDropdown: typeof components.FDropdown
    FDropdownItem: typeof components.FDropdownItem
    FTextarea: typeof components.FTextarea
    FSelect: typeof components.FSelect
    FOption: typeof components.FOption
    FInput: typeof components.FInput
    FTabs: typeof components.FTabs
    FTabsItem: typeof components.FTabsItem
    FPagination: typeof components.FPagination
    FCheckbox: typeof components.FCheckbox
    FCheckboxGroup: typeof components.FCheckboxGroup
    FSwap: typeof components.FSwap
    FDatePicker: typeof components.FDatePicker
    FTimePicker: typeof components.FTimePicker
    FInputNumber: typeof components.FInputNumber
    FCloseBtn: typeof components.FCloseBtn
    FTrigger: typeof components.FTrigger
    FMenu: typeof components.FMenu
    FMenuItem: typeof components.FMenuItem
    FMenuItemGroup: typeof components.FMenuItemGroup
    FSubmenu: typeof components.FSubmenu
    FCollapseAnimation: typeof components.FCollapseAnimation
    FSlider: typeof components.FSlider
    FFightingGlobal: typeof components.FFightingGlobal
    FForm: typeof components.FForm
    FFormItem: typeof components.FFormItem
    FBox: typeof components.FBox
    FSvgIcon: typeof components.FSvgIcon
    FRate: typeof components.FRate
    FInfiniteScrolling: typeof components.FInfiniteScrolling
    FNumberAnimate: typeof components.FNumberAnimate
    FCountDown: typeof components.FCountDown
    FAvatarGroup: typeof components.FAvatarGroup
  }

  interface ComponentCustomProperties {
    FMessage: typeof components.FMessage
    FNotification: typeof components.FNotification
  }
}

export {}
