# CHANGELOG

> English documents are not synchronized in time most of the time. Please refer to Chinese documents for details.

English | [Chinese](https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.md)

## 0.12.0 (2022-12-20)

**New Features**

- Add `f-form` component
- Add `f-form-item` component

**Repair**

- Fix `f-space` component style details
- Fix the failure of `f-back-top` component `z-index`

**Other Updates**

- Cancel the `loading-bar` component
- Optimize `f-input` component types

## 0.11.2 (2022-12-15)

**New**

- Add `f-button` component `spread` configuration item

**Repair**

- Fix the warning error of  `f-image-preview`
- Fix `f-button` component style details
- Fix `f-tag` component style details
- Fix `f-space` component style details

**Other changes**

- `f-space` component cancels `wrap` configuration item
- `f-space` component adds `nowrap` configuration item
- `f-space` component `row-gap` `column-gap` configuration item supports `number` type

## 0.11.1 (2022-12-13)

- Fix the failure of `f-tag` component `size` [issues#309](https://github.com/FightingDesign/fighting-design/issues/309)
- Fix some detail type problems
- Optimize the style processing optimization during the loading of `f-image` and `f-avatar` components

**New Features**

- `f-fighting-global` component adds `lang` configuration item
- The `f-toolbar` component `width` and `height` configuration items support the `number` type

**Other Updates**

- Fixed the type of global component

## 0.10.0 (2022-12-11)

**Repair**

- Fix the `f-list` and `f-list-item` component bugs
- Fix the failure of disabling the `f-trigger` component

**New**

- Add `f-fighting-global` component
- Add `f-list` component `zebra-color` configuration item
- Add `f-list` component `size` configuration item Add `mini` option

**Other Updates**

- `f-button` Component style detail optimization
- `f-stick-card` component removal `open-height` configuration item
- The default value of the `f-rate` component `size` configuration item is changed to 25

## 0.9.0 (2022-12-07)

- Complete `f-menu` components
- Optimize the `role` attribute of some components
- Optimize `f-svg-icon` component style details

## 0.9.0-alpha. 8 (2022-12-06)

**New Features**

- Add `f-slider` component

**Optimization item**

- Optimize the logic related to clicking `f-toolbar` components
- Optimize the implementation of `f-pagination` component style
- Optimize the internal logic of the `f-tag` component
- Optimize the implementation of `f-button` components
- Optimize the implementation of `f-ripple` components
- Cancel the `f-ripple` component `no-select` configuration item

**Other changes**

- Modify the default value of the `f-card` component `padding` configuration item
- Modify optional parameters of `f-card` component `shadow` configuration item
- Change the `f-pagination` component `prev-click` configuration item to `on-prev`
- Change the `f-pagination` component `next-click` configuration item to `on-text`
- Change the `f-pagination` component`change` configuration item to `on-change`
- `f-tooltip` component `content` configuration item supports `number` type
- Some changes have been made to the `f-breadcrumb` and `f-breadcrumb-item` component parameters
- The global export type has been greatly changed. For details, refer to the document Component Export Type

## 0.9.0-alpha.7 (2022-12-01)

**New**

- Add `f-breadcrumb-item` component `to` configuration item
- Improve more `f-menu` component functions

**Optimization**

- Optimize `f-switch` detail style and performance
- Optimize the `f-button` style processing logic
- Optimize `f-dropdown-item` style details
- Optimize `f-option` style details
- Optimize `f-select` style details

**Changes**

- Change the `f-link` component `prohibit` configuration item to `disabled`
- Change `f-switch` component `open-color` to `active-color`
- Change `f-switch` component `open-text` to `active-text`

## 0.9.0-alpha.6 (2022-11-29)

**New Features**

- Add `f-menu` component
- Add `f-menu-item` component
- Add `f-menu-item-group` component
- Add `f-submenu` component
- Add `f-collapse-animation` component
- Add `f-button-group` component `direction` configuration item

**Repair**

- Fix `f-pagination` component details
- Fix `f-button` component style details

**Other changes**

- Revoke the `f-button group` component `vertical` configuration item
- Optimize `f-stick-card` components

## 0.9.0-alpha.5 (2022-11-25)

**New Features**

- Add `f-trigger` component

**Other Updates**

- Optimize `f-space` component style details
- Change the `f-stick-card` component `open-end` `close-end` callback parameter to `on-open` `on-close`

## 0.9.0-alpha.4 (2022-11-23)

**New Features**

- Add `f-date-picker` component
- Add `f-time-picker` component
- Add `f-input-number` component
- Add `f-input` component `type` attribute `number` type
- Add `f-input` component `after-icon` configuration item
- Add `f-input` component `on-input` configuration item
- Add `f-input` component `after` slot
- Add `f-textarea` component `on-input` configuration item
- Add `f-input` component to view password switching animation effect
- Add `f-breadcrumb item` component `color` `icon-color` `separator` configuration item
- Add `f-tag` component to close animation
- Add `f-card` component padding to implement the number type parameter

**Fix Bugs**

- Fix the problem of `f-input` component `on-change` callback error
- Fix the callback error of `f-textarea` component `on-change`
- Fix the problem of using `f-list item` independently

**Other Updates**

- Optimize the password viewing method of the `f-input` component
- Optimize `f-dropdown` component style details
- Optimize `f-alert` component style details
- Optimize `f-back top` component style details
- Refactoring `f-calendar` component header style
- Reconstruct the internal details of the `f-calendar` component
- Reconstruct the internal details of the `f-tag` component
- Revoke the `f-list` component `list-style` configuration item
- Reconstruct `f-skeleton` component `size` configuration item
- Revoke the `f-skeleton` component `circled` configuration item
- Cancel the `f-close btn` component `no-over` configuration item
- Change the `f-breadcrumb` component `separator-color` parameter to `icon-color`
- Change the `f-breadcrumb` component `item color` parameter to `color`
- Change the `f-skeleton` component `rounded` parameter to `round`
- Update the default values of the `f-back-top` component `bottom` `right` `background` `color` parameters
- Change the `f-toolbar-item` component `click` parameter to `on click`
- Change the `f-toolbar-item` component `data-key` parameter to `index`
- Change the `f-toolbar-item` component `icon-size` parameter to the default value of 16
- Change the `f-toolbar` component `click` parameter to `on-click`
- Change the `f-image-preview` component `close` callback to `on-close`
- Change the `f-alert` component `close-end` callback to `on-close`
- Change `f-button` component `click` callback to `on-click` callback`
- Change `f-avatar` component `load` `error` callback to `on-load` `on-error`
- Change `f-image` component `load` `error` callback to `on-load` `on-error`
- `f-calendar` component `change-switch` `change-date` callback is changed to `on-change-month` `on-change-date`
- Change the `f-card` component `padding` parameter to the default value of 20
- Change the `f-checkbox` component `change` parameter to `on-change`
- Change the `f-checkbox-group` component `change` parameter to `on-change`
- Change the `f-close btn` component `click` parameter to `on click`
- Change `f-dialog` component `open` `open-end` `close` `close-end` to `on-open` `on-open-end` `on-close` `on-close-end`
- Change `f-drawer` component `open` `open-end` `close` `close-end` to `on-open` `on-open-end` `on-close` `on-close-end`
- Change `f-popup` component `open` `open-end` `close-end` `close-end` to `on-open` `on-open-end` `on-close` `on-close-end`
- Change the `f-dropdown-item` component `click` parameter to `on-click`
- Change the `f-link` component `click` parameter to `on-click`
- Change the `f-message` component `close-end` parameter to `on-close`
- Change the `f-notification` component `close-end` parameter to `on-close`
- Change the `f-page header` component `back` parameter to `on-back`
- Change the `f-radio` component `change` parameter to `on-change`
- Change the `f-radio-group` component `change` parameter to `on-change`
- Change the `f-svg-icon` component `click` parameter to `on-click`
- Change the `f-switch` component `change` parameter to `on-change`
- Change the `f-tag` component `close-end` parameter to `on-close`
- Change the `f-up-load` component `change` `load` parameter to `on-change` `on-load`

## 0.9.0-alpha.3 (2022-11-18)

- Fix the `f-checkbox-group` type error
- Update Type Profile

## 0.9.0-alpha.2 (2022-11-18)

**Fix Bug**

- Fix `f-swap` component style details
- Fix `f-empty` component style details
- Fix `f-pagination` component style details
- Fix `f-up-load` component style details
- Fix `f-switch` component style details
- Fix `f-card` component style details
- Fix `f-textarea` component style details
- Fix the `f-checkbox-group` type error
- Update Type Profile

## 0.9.0-alpha.1 (2022-11-17)

**New Features**

- Add `f-checkbox` component `indeterminate` configuration item
- Add `f-textarea` component
- Add `f-pagination` component
- Add `f-tabs` component
- Refactoring `loading` components
- `f-empty` component `content-size` configuration item supports `number` type
- `f-empty` component adds`icon-size`configuration item

**Fix Bug**

- Fix the problem that the `f-select` component does not display `label` after the binding value exists
- Fix `f-radio-group` component style details
- Fix `f-text` component style details
- Fix `f-button` component style details

**Others**

- `f-switch` component `size` configuration item adding `mini` can be selected
- `f-switch` component adds `icon-size` configuration item
- Optimize global component partial parameter defaults

## 0.8.1-alpha.4 (2022-11-13)

- Add `f-back-top` component to display hidden animation style
- Add `f-alert` component to display hidden animation style
- Optimize `f-popup` pop-up animation style
- Optimize `f-dropdown` pop-up animation style

## 0.8.1-alpha.3 (2022-11-11)

**Fest**

- Add `f-dropdown` component
- Add `f-dropdown-item` component
- Add `f-option` component
- Add `f-select` component
- Add `f-table` component `show-head` configuration item

**Fix**

- Fix `f-button` component style details
- Fix the failure of `f-drawer` and `f-dialog` component callback parameters

## 0.8.1-alpha.2 (2022-11-08)

**Fix**

- Fix the style details of the `f-button` components custom colors
- Fix `f-table` component style details

## 0.8.1-alpha.1 (2022-11-08)

**New features**

- `f-checkbox` component adds `show-label` configuration item
- `f-checkbox` component `modelValue` configuration item adding `array` type
- Add `f-table` component

**Others**

- Optimized the style details of some `f-button` components
- Optimize some internal implementations and types of `f-toolbar` components

## 0.8.0-alpha.6 (2022-11-06)

**Fix Bugs**

- Fix the failure of clicking the `f-image-preview` image preview component operation bar
- Optimize some component types

## 0.8.0-alpha.5 (2022-11-04)

- Further optimization has been made for the ts type
- Add `f-up-load` component

## 0.8.0-alpha.4 (2022-11-02)

- Mainly standardized the directory structure
- Optimize the bit of some types of files

## 0.8.0-alpha.3 (2022-11-01)

**Fix Bug**

- Fix the error reported by the `FMessage` `FNotification` component
- Fix the style problem of disabled `f-radio` `f-radio-group` components
- Fix the style problem of disabled `f-checkbox` `f-checkbox-group` components
- Fix `f-alert` close button style details
- Fix `f-tag` close button style details

**Improve optimization**

- `f-image` `f-avatar` component cancels `error` and `load` exit callback, and adds `error` and `load` props options
- `f-calendar` component cancels `change-date` and `change-switch`exit callback, and adds `change-date` and `change-switch` props options
- The `f-alert` component cancels the `close-end` exit callback, and adds the `close-end` props option
- The `f-tag` component cancels the `close-end` exit callback, and adds the `close-end` props option
- The `f-page-header` component cancels the `back` exit callback, and adds the `back` props option
- The `f-rate` component cancels the `change` exit callback, and adds the `change` props option
- The `f-checkbox-group` component cancels the `change` exit callback, and adds the `change` props option
- The `f-link` component cancels the `click` exit callback and adds the `click` props option
- The `f-button` component cancels the `click` exit callback, and adds the `click` props option
- The `f-toolbar` component cancels the `click` exit callback, and adds the `click` props option
- `f-toolbar item` component cancels `click` exit callback, and adds `click` props option
- The `f-switch` component cancels the `change` exit callback, and adds the `change` props option
- The `f-close btn` component cancels the `click` exit callback, and adds the `click` props option
- The `f-loading` component cancels the `close` emit callback, and adds the `close-end` props option
- The `f-svg-icon` component cancels the `click` exit callback, and adds the `click` props option
- The `f-radio` component cancels the `change` exit callback, and adds the `change` props option
- `f-radio-group` component cancels `change` exit callback, and adds `change` props option
- The style of the `f-radio` component has changed in the border state
- `f-close-btn` Add `no-cover` configuration item

## 0.8.0-alpha.2 (2022-10-28)

- Fix problems with importing component types on demand [#232](https://github.com/FightingDesign/fighting-design/pull/232)

## 0.8.0-alpha.1 (2022-10-28)

- Fix some types of problems
- Optimize component code attribute prompt
- Optimize construction products
- Optimize the style details of `f-image-preview` component [#227](https://github.com/FightingDesign/fighting-design/pull/227)

## 0.7.1-alpha.2 (2022-10-26)

- Optimize the type of packaged components

## 0.7.1-alpha.1 (2022-10-25)

- Add `f-swap` component
- Fix the wrong rotation direction of the `f-image-preview` component preview
- Optimize the internal performance of the `f-image-preview` component
- Change `f-popup` component `open` `open-end` `close` `close-end` to `props` parameter

## 0.7.0-beta.2 (2022-10-22)

- Add `f-input` component

## 0.7.0-beta.1 (2022-10-21)

**Important Updates**

- Permanently revoke `f-icon` component
- Update the `class` naming convention for all components

**New Features**

- Add `f-close btn` component `icon` configuration item
- Add `f-close btn` component `color` attribute
- Add `f-alert` component `beforeIcon` and `closeIcon` slots
- Add `f-alert` component `before-icon` and `close-icon` configuration items
- Add `f-dialog` component `closeIcon` slot
- Add `f-dialog` component `close-icon` configuration item
- Add `f-drawer` component `closeIcon` slot
- New `f-drawer` component `close-icon` configuration item
- Add `f-link` component `beforeIcon` `afterIcon` slot
- Add `f-avatar` component `icon` slot
- New `f-avatar` component `icon` configuration item is changed to `VNode / Component` type, and the default value is changed to `null`
- Add `f-loading` component `icon` slot
- Add `f-svg icon` component `icon` configuration item

**Other changes**

- The `f-link` component `before-icon` `after-icon` configuration item is changed to the `VNode / Component` type, and the default value is changed to `null`
- The `f-button` component `before-icon` `after-icon` `loading icon` configuration item is changed to the `VNode / Component` type, and the default value is changed to `null`
- The `f-avatar` component `icon` configuration item is changed to the `VNode / Component` type, and the default value is changed to `null`
- The `f-loading` component `icon` configuration item is changed to the `VNode / Component` type, and the default value is changed to `null`
- `f-page header` component `icon size` supports`number`type
- The `f-page-header` component `icon` configuration item is changed to the `VNode / Component` type, and the default value is changed to `null`
- The `f-rate` component `icon` is changed to the `VNode / Component` type, and the default value is changed to `null`
- `f-toolbar-item` component `icon` is changed to `VNode / Component` type, and the default value is changed to `null`
- The `f-tag` component `before-icon` `after-icon` is changed to the `VNode / Component` type, and the default value is changed to `null`
- The `f-breadcrumb` component `separator-icon` configuration item is renamed as` separator`
- The `f-breadcrumb` component `separator` configuration item is changed to the `VNode / Component` type, and the default value is changed to `null`
- The default value of the `f-notification` component `close-btn` parameter is changed to `null`
- The `f-button` component `before-icon` `loading icon` `after-icon` configuration item is changed to the `VNode / Component` type, and the default value is changed to `null`
- The `f-stick card` component slot name is changed from `option-left` `option-right` to `optionLeft` `optionRight`
- Update `f-message` component `icon` default values and optional types
- Cancel the `f-calendar` component `show-footer` configuration item
- Revoke the `f-alert` component `icon` attribute
- Revoke the `f-avatar` component `load-initialization` configuration item

## 0.7.0-alpha.9 (2022-10-19)

- 更新类型入口配置文件

## 0.7.0-alpha.8 (2022-10-19)

- Mainly optimized for packaging type files

## 0.7.0-alpha.7 (2022-10-17)

**fest**

- Add `f-svg-icon` components
- Add `f-close-btn` components

**fix**

- Fix the parameter error of the `f-dialog` component
- Fix `f-dialog` component style details

## 0.7.0-alpha.6 (2022-10-15)

**Key updates**

- The `f-mask` component has been renamed as `f-popup`
- Further optimize and encapsulate relevant pop-up components for `f-popup` `f-drawer` `f-dialog`

**Fix Bugs**

- Fix the loss of the `z-index` attribute of the `f-popup` component
- The `f-popup` component adds `mask-background` and` mask-opacity` `popup-size` `padding` configuration items

## 0.7.0-alpha.5 (2022-10-13)

**New**

- Add `f-mask` component

**New features**

- Change the `f-drawer` component `with-header` configuration item to `show-header`
- `f-drawer` component adds `show-close-btn` configuration item
- `f-drawer` component adds `modal-blur` configuration item
- `f-dialog` component adds `module-blue` configuration item
- Remove the `top` configuration item from the `f-dialog` component
- `f-dialog` component adds `show-close-icon `configuration item
- `f-dialog` component `width` `height` configuration item supports `number` type
- The `open`, `open-end`, `close-end` and `close-end` callback parameters of the `f-dialog` component have been changed from `emit` to `props`
- `f-loading` component adds `icon-color `attribute
- `f-dialog` component cancels `height` component

**Fix Bugs**

- Fix the spelling error of the `message` `f-dialog` `f-switch` component props verifier

## 0.7.0-alpha.4 (2022-10-11)

- Add `checkbox` component
- Add `rate` component
- Revoke the `f-radio-group` component `circle` configuration item
- Repair the `f-radio` component `border` status, disable style details
- Optimize the semantic properties of some components

## 0.7.0-alpha.3 (2022-10-06)

- Update `umd` packaging entry
- Optimize the implementation of `f-icon` component style
- `f-link` component class name specification optimization
- Optimize the internal implementation of `f-link` components
- Optimize the internal implementation of `f-text` components
- The `f-text` component `size` `spacing` `line-height` `text-indent` `padding` `width` attribute supports the `number` type parameter
- Change the attribute of `f-text` component `text-indent` to `indent`
- `f-text` Internal Export New Type `TextDecorationType`

## 0.7.0-alpha.2 (2022-09-29)

- Fix some component type specification problems

## 0.7.0-alpha.1 (2022-09-27)

**fix**

- Fix the default value of the `f-button` component `font-color`
- Fix the default value of `f-button` component `font-size`

**fest**

- `f-back-top` component `right` `bottom` configuration item supports `number` type
- `f-image` component `round` configuration item supports `number` type
- `f-image` component cancels `caption` and `caption-color` configuration items
- `f-watermark` component `font-size` configuration item supports `number` type parameter
- `f-progress` component `width` `height` configuration item supports `number` type parameter
- `f-alert` component cancels `fixed-style` configuration item
- `f-alert` component `font-size` configuration item supports `number` type parameter
- The default value of `f-alert` component `type` is changed to `default`
- The default value of `f-alert` component `font-size` is changed to `15px`
- The `f-alert` component adds `title-size` and `title-color` attributes
- `f-alert` component `overflow` configuration item removal `ellipsis` option
- Default value for adding `f-footer` component `height` `padding` configuration item
- `f-header` component `height` `padding` add default value for configuration item
- Default value for adding `f-main` component `padding` configuration item
- `f-toolbar` component cancels `fixed-style` configuration item

**perf**

- Optimized `props` prompt of components
- New Type Export
- Optimize the implementation of partial styles of `f-avatar` components to reduce code overhead
- Optimize the implementation of `f-back-top` component styles to reduce code overhead
- Optimize the `props` default value of the `f-back-top` component
- Optimize the implementation of `f-badge` component style

## 0.6.5-alpha.5 (2022-09-25)

**fest**

- Add `sticky-card` component
- The `f-list` component adds `header` and `footer` slots
- Optimize the performance of `f-button` components

**fix**

- Fix some date display errors in the `f-calendar` component

## 0.6.5-alpha.4 (2022-09-23)

**fix**

- Fix the problem of `f-image review` and `f-calendar` component content being imported on demand

## 0.6.5-alpha.3 (2022-09-22)

**fest**

- `f-header` component adds a `padding` type
- The `height` attribute of the `f-header` component supports the `number` type
- `f-footer` component adds`padding`configuration item
- The `height` attribute of the `f-footer` component supports the `number` type
- The `padding` attribute of the `f-main` component supports the `number` type
- The `width` attribute of the `f-aside` component supports the `number` type
- `f-aside` component adds a `padding` configuration item

**fix**

- Fix the packaging type error caused by component `name`

## 0.6.5-alpha.2 (2022-09-21)

- Add `f-calendar` component
- The `size` attribute of the `f-text` component supports the `number` type
- New component type export

## 0.6.5-alpha.1 (2022-09-16)

- Add `f-expand-card` component
- Optimize `f-toolbar-item` and `f-toolbar` component style details
- `f-toolbar-item` Add `data-key` `icon` `icon size` configuration item
- `f-toolbar` Add `click` callback parameter
- `f-toolbar` is compatible with Apple `Safari `click failure
- `f-toolbar` component cancels`vague`configuration item

## 0.6.4-alpha.10 (2022-09-14)

- Test Repair On Demand Import

## 0.6.4-alpha.9 (2022-09-14)

- Test Repair On Demand Import

## 0.6.4-alpha.8 (2022-09-14)

- Test Repair On Demand Import

## 0.6.4-alpha.7 (2022-09-14)

**fix**

- Fix the `hover` and `disabled` styles of the `f-button` component`s custom colors
- Fix `f-page-header` component style details
- Fix `f-button` component `text` configuration item style details
- Fix some problems with the `width` attribute of the `f-image` component

**fest**

- The `size` attribute of the `f-icon` component supports the `number` type
- The `font size` attribute of the `f-button` component supports the `number` type
- The `f-image ` component `root-margin` `width` `height` attributes support the `number` type
- The `f-avatar` component `rootMargin` attribute supports the `number` type
- Add `f-image preview` component
- `click ` callback added to `f-image` component

**other**

- Abolish the `title-class` and` subtitle-class` configuration items of `f-page-header`
- The `f-lint` component `left icon` `right-icon` configuration item is renamed to `before-icon` `after-icon`
- The `f-button` component `left icon` `right-icon` configuration item is renamed to `before-icon` `after-icon`
- The `f-tag` component `left-icon` `right-icon` configuration item is renamed to `before-icon` `after-icon`
- The `text-color` `text-size` configuration item of the `f-loading` component is renamed to `font-color` `font-size`
- `f-empty` component revokes`style list`configuration item
- Split `f-empty` components
- Optimize `f-avatar` style details
- The `f-image` component cancels clicking the big picture preview function, which is separated from the `f-image preview` component
- `f-image` Component Revocation Attribute: `module-close` `show-close-btn` `preview-list` `preview-show-index` `preview-z-index` `preview-show option` `preview-round`
- Test Repair On Demand Import

## 0.6.4-alpha.6 (2022-09-11)

**fest**

- Add `f-ripple` ripple component
- Add `f-radio` `f-radio-group` component

**fix**

- Fix `f-button` and `f-loading` animation style problems
- Fix the problem that the feed height of `f-list-item` is not adaptive

## 0.6.4-alpha.5 (2022-09-06)

- Test and repair side effect component registration

## 0.6.4-alpha.4 (2022-09-06)

- Test and repair side effect component registration

## 0.6.4-alpha.3 (2022-09-05)

- Test and repair side effect component registration

## 0.6.4-alpha.2 (2022-09-05)

- Test and repair side effect component registration

## 0.6.4-alpha.1 (2022-09-03)

- Fix type

## 0.6.3-alpha.3 (2022-09-03)

- 修复了部分组件类型
- 修复了按需引入仍然全部打包的问题

## 0.6.3-alpha.2 (2022-09-02)

- Fix config file
- A bug fixed in `vitepress`

## 0.6.3-alpha.1 (2022-09-02)

- Fixed issues related to package import
- However, there are still problems in `vitepress`, which can be used normally in normal projects

## 0.6.2-alpha.10 (2022-09-02)

- Test and repair problems introduced by build

## 0.6.2-alpha.9 (2022-09-02)

- Test and repair problems introduced by build

## 0.6.2-alpha.8 (2022-09-02)

- Test and repair problems introduced by build

## 0.6.2-alpha.7 (2022-09-02)

- Test and repair problems introduced by build

## 0.6.2-alpha.6 (2022-08-31)

- Fix some known introduction related configuration problems

## 0.6.2-alpha.5 (2022-08-30)

**fest**

- Add `f-loading-bar` component
- Add `notification` component

**fix**

- Repair button component style
- Update the default value of the `shadow` parameter of the `f-card` component. Now changed to `never`

## 0.6.2-alpha.4 (2022-08-29)

**fest**

-New ` title` configuration item for `f-image` component

**fix**

- Fix `F-card` component style details
- Fix some style related details of `f-skeleton`

## 0.6.2-alpha.3 (2022-08-28)

- Add `f-skeleton` skeleton screen component
- Optimize the fillet style of `f-button` `f-alert` components
- Optimize `f-alert` style details
- Optimize the `overflow` configuration item of the `f-alert` component
- Remove the `Roll` optional parameter of the `overflow` configuration item of the `f-alert` component
- Remove the `f-novel-coronavirus` component
- Fix the problem of `load` image loading class loading loop
- Optimize the tear pattern during the loading of the `f-image` component

## 0.6.2-alpha.2 (2022-08-20)

- Fix known packaging issues

## 0.6.2-alpha.1 (2022-08-20)

- Repair button ripple effect class
- Fix known packaging issues

## 0.6.1 (2022-08-19)

- Optimize `f-list` components
- Fix `F-card` component style details
- Update color number details of `success` and`warning`
- Add `f-empty` empty status component
- Optimize the implementation of `hover` and `active` of button custom color configuration items
- The `f-tooltip` component adds`background`and `font-color`configuration items
- Optimize picture loading class
- `F-avatar` adds error handling slots and error handling prompts
- Optimize `f-avatar` loading details
- New `load animation`configuration item for `f-avatar` component
- Optimize the logic of the `f-drawer` part that causes the document package to report an error
- Added `hooks` to extract the parameters of some classes and functions, and optimized the performance of `f-image` `f-avatar` `f-button` and `f-watermark` components
- The `f-button` optimizes the ripple effect in the singleton mode

## 0.6.0-bate.2 (2022-08-11)

- Update entry file

## 0.6.0-bate.1 (2022-08-11)

- Change the file name introduction method of the style sheet
- Repair packaging configuration item

## 0.5.1-bate.5 (2022-08-10)

- `F-alert` style Introduction
- `F-text` detail style optimization
- Add version number export
- Update the type of prop

## 0.5.1-bate.4 (2022-08-09)

- Test and fix the problem of path error introduced by packaging

## 0.5.1-bate.3 (2022-08-09)

- Test and fix the problem of path error introduced by packaging

## 0.5.1-bate.2 (2022-08-09)

- Test and fix the problem of path error introduced by packaging

## 0.5.1-bate.1 (2022-08-09)

- Fixed issues related to packaging type

## 0.5.0-bate.2 (2022-08-08)

- Fixed issues related to packaging type

## 0.5.0-bate.1 (2022-08-08)

It mainly fixes the related configuration items of packaging. In the [previous version](<(https://github.com/FightingDesign/fighting-design/releases/tag/0.4.2-bate.9)>), if you need to import components on demand, there will be many abnormal error messages. This version is mainly optimized for packaging and has fixed the fatal error caused by on-demand import.

The directory structure has also been optimized to a great extent. Previously, the utils directory was separated from the component, but now it is also the same level as the component, just for better packaging.

## 0.4.2-bate.9 (2022-07-04)

**fest**

- `alert` component added `fixed` and `fixed style` configuration items
- Add `f-list` component
- Add `f-list-item` component
- New `message` component
- `F-text` component adds `center` configuration item
- New `f-watermark` component

**fix**

- Repair `f-tag` component style details
- Optimize `F-card` component detail style

## 0.4.2-bate.8 (2022-07-23)

**fest**

- The `tag` component adds a `text` configuration item to implement text labels
- The `tag` component has changed some style details and added borders
- Add `font-size`, `font-color`, `text`, `root-margin` configuration items for `Avatar` component
- The `Avatar` component changes the `size` attribute to a configurable `number` type parameter
- New style on-demand import

## 0.4.1-bate.7 (2022-07-19)

- It mainly fixes the error reporting configuration of the imported style

## 0.3.2-bate.5 (2022-07-17)

**feat**

- The `tooltip` component removes some configuration items
- Redo `tooltip` component

**fix**

- Fix the problem that the `tag` component is not displayed
- Repair the display status and close callback of the `alert` component

## 0.3.1-bate.4 (2022-07-15)

- `link` component new `default` configuration `type`
- The default value of `button` component `ripple` is changed to `false`

## 0.3.0-bate.3 (2022-07-13)

**feat**

- Add `progress` component config
- Add `alert` component

**fix**

- 修复 `progress` 组件百分百展示状态
- 修复 `text` 组件样式细节
- 修复 `button` 组件样式细节
- 修改 `button` 组件文字按钮的样式
- 移除 `tag` 组件 `info` 属性，改为 `default`

**fix**

- Fix the 100% display state of the `progress` component
- Fix `text` component style details
- Fix `button` component style details
- Modify the style of the `button` component text button
- Remove the `info` attribute of the `tag` component and change it to `default`

## 0.2.0-bate.2 (2022-07-08)

**feat**

- Add `drawer` component
- Add `page-header` component

**fix**

- Fix `tag` base style
- Fix `switch` base style

## 0.1.0-bate.1 (2022-07-05)

**feat**

- Add `dialog` component
- Add `space` component
- Add `progress` component
- Add `captcha` component (bate)
- Add `tooltip` component (bate)

**fix**

- Fix the problem of listening target error of `backTop` component

## 0.0.12-alpha.12 (2022-06-29)

**fix**

- Repair the function of the `back-top` component

**feat**

- `Back-top` component add `z-index`、`top`、`listen-el`、`background`、`color` configuration item
- Add `breadcrumb` component

## 0.0.11-alpha.11 (2022-06-26)

**fix**

- Fix packaging path errors

## 0.0.10-alpha.10 (2022-06-26)

**feat**

- Add `FText` component
- Add `FAvatar` component
- Add `FLoading` component

**fix**

- The `FButton` component `blob` configuration item is changed to `blob` for Text bold

## 0.0.8-alpha.8 (2022-06-12)

**feat**

- Add `FTag` component
- Add `FDivider` component
- Add `Badge` component
- Add `FContainer` component
- Add `FSwitch` component
- New `FButton` component `color` configuration item

**fix**

- The `FButton` component `link` attribute is changed to `href`
- Refactoring `FButton` components
- Abolish the `info` type of `FButton`
- Abolish the `border` attribute of `FButton`
- Abolish the `long` attribute of `FButton`
- Abolish the `info` type of `flex`
- Abolish the `opacity` attribute of `FIcon`

## 0.0.7-alpha.7 (2022-06-04)

**feat**

- Add `FCard` component
- Add `FButton` component click ripple effect

**fix**

- Fix the fillet degree of `FButton` component
- Fix `FButtonGroup` type

## 0.0.6-alpha.6 (2022-05-31)

**fix**

- Fix the problem of consistent rotation direction of `FImage` components
- Fix the click failure problem of `FIcon` component preview window operation, and handle the click focus position
- Fix the type problem of `FIcon` and `FButton` components
- The select attribute of the `FImage` component is changed to no select to prohibit selection

**feat**

- New image preloading function of `FImage` component preview window
- New `FImage` component preview window fade in animation effect
- Add the mask layer hiding function in the preview window of the `FImage` component, which can be configured through the `modal-close` configuration item
- New `FImage` component preview window icon style optimizes some details
- Add the left and right buttons of the preview image of the `FImage` component to switch and add the image length recognition. Whether to display the effect
- Add the `show-close-btn` configuration item of the `FImage` component to configure whether to display the close button of the preview window
- The new `FImage` component can zoom in and out the picture through the mouse wheel
- Add the `preview-round` configuration item of the `FImage` component to configure the fillet of the preview image

## 0.0.5-alpha.5 (2022-05-27)

- Add `FImage` component
- Add new `icon`

## 0.0.4-alpha.4 (2022-05-23)

- Add `FLink` component
- Cancel `FButton` fixed height
- Abolish the `icon` and `iconPosition` attributes of the `FButton` component
- Add the `leftIcon` and `rightIcon` attributes of the `FButton` component

## 0.0.3-alpha.3 (2022-05-18)

- Fix some display styles of button components
- Deleted an `icon` that is not displayed
- Cancel component default export
- Compression component code

## 0.0.2-alpha.2 (2022-05-17)

- Update profile
- Add package file

## 0.0.1-alpha.1 (2022-05-17)

- Newly added `FButton`、`FButtonGroup`、`FIcon` components
