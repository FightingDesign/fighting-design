import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FButton: typeof import('./button/src/button.vue')['default']
    FButtonGroup: typeof import('./button-group/src/button-group.vue')['default']
    FIcon: typeof import('./icon/src/icon.vue')['default']
    FLink: typeof import('./link/src/link.vue')['default']
    FImage: typeof import('./image/src/image.vue')['default']
    FCard: typeof import('./card/src/card.vue')['default']
    FTag: typeof import('./tag/src/tag.vue')['default']
    FDivider: typeof import('./divider/src/divider.vue')['default']
    FFooter: typeof import('./footer/src/footer.vue')['default']
    FHeader: typeof import('./header/src/header.vue')['default']
    FAside: typeof import('./aside/src/aside.vue')['default']
    FMain: typeof import('./main/src/main.vue')['default']
    FLayout: typeof import('./layout/src/layout.vue')['default']
    FSwitch: typeof import('./switch/src/switch.vue')['default']
    FBadge: typeof import('./badge/src/badge.vue')['default']
    FAvatar: typeof import('./avatar/src/avatar.vue')['default']
    FBackTop: typeof import('./back-top/src/back-top.vue')['default']
    FBreadcrumbItem: typeof import('./breadcrumb-item/src/breadcrumb-item.vue')['default']
    FBreadcrumb: typeof import('./breadcrumb/src/breadcrumb.vue')['default']
    FText: typeof import('./text/src/text.vue')['default']
    FLoading: typeof import('./loading/src/loading.vue')['default']
    FProgress: typeof import('./progress/src/progress.vue')['default']
    FSpace: typeof import('./space/src/space.vue')['default']
    FDialog: typeof import('./dialog/src/dialog.vue')['default']
    FTooltip: typeof import('./tooltip/src/tooltip.vue')['default']
    FDrawer: typeof import('./drawer/src/drawer.vue')['default']
    FPageHeader: typeof import('./page-header/src/page-header.vue')['default']
    FAlert: typeof import('./alert/src/alert.vue')['default']
    FNovelCoronavirus: typeof import('./novel-coronavirus/src/novel-coronavirus.vue')['default']
    FList: typeof import('./list/src/list.vue')['default']
    FListItem: typeof import('./list-item/src/list-item.vue')['default']
    FToolbar: typeof import('./toolbar/src/toolbar.vue')['default']
    FToolbarItem: typeof import('./toolbar-item/src/toolbar-item.vue')['default']
    FWatermark: typeof import('./watermark/src/watermark.vue')['default']
  }
}

export {}
