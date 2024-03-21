# CHANGELOG

> English documents are not synchronized in time most of the time. Please refer to Chinese documents for details.

English | [Chinese](https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.md)

## 0.67.4 (2024-03-21)

- Fix `image` component parameter errors

## 0.67.3 (2024-03-05)

- Fix the issue where the list cannot be cleared under specific circumstances after configuring the `f-up-load` component with `show-list`
- Fix the issue of incorrect binding values for the `f-select` component configuration `filter`

## 0.67.2 (2024-03-01)

- Add `f-form-item` object deep validation
- Fix the issue of `f-form-item` not recognizing data type parameters and reporting errors

## 0.67.1 (2024-01-02)

- Fix package.json configuration issue

## 0.67.0 (2024-01-02)

- Update dependency versions vue@3.3.0 => vue@3.4.3
- Fix package.json configuration issue

## 0.66.4 (2023-12-24)

- Add `f-select` component `filter` configuration item

## 0.66.3 (2023-12-21)

- Fix the issue of responsive loss of parameter `data` in the `f-table` component

## 0.66.2 (2023-12-20)

- Add `f-table` components, `select` and `on-select` configuration items

## 0.66.1 (2023-12-19)

- Fix the issue of displaying page numbers incorrectly in the `f-pagination` component when the `total` is less than the `page-size`
- Fix the issue with the `f-pagination` component not executing `on-change` when executing `on-prev` and `on-text` callbacks

## 0.66.0 (2023-12-18)

- Fix the issue of the `f-table` component not breaking line styles for English letter text
- Fix the return type of the `f-table` component
- Fix the issue of `f-aside` component styles being squeezed
- Fix the issue where the height of the `f header` component cannot be automatically expanded
- Fix the type judgment criteria for the selected value of the `f-select` component
- New `f-table` component `noData` slot added

## 0.64.1 (2023-12-01)

- Fix the issue of slow folding animation of `f-submenu` components

## 0.63.1 (2023-08-28)

- Fix the issue of multiple ·f-select· components not triggering scrolling to selected elements

## 0.63.0 (2023-08-25)

- Optimize component styles for `f-dialog`
- Add a `f-select` component to expand and scroll to the selected element by default
- Optimize `f-calendar` components
- Fix the issue of `f-collapse-animation` component width transition failure

## 0.62.2 (2023-08-23)

- Fix `f-collapse-animation` component style details

## 0.62.1 (2023-08-23)

- Fix `f-collapse-animation` component style details

## 0.62.0 (2023-08-23)

- Add `width-animation` configuration item to the `f-collapse-animation` component

## 0.61.0 (2023-08-15)

- Optimize component styles for `f-drawer` and `f-dialog`
- Optimize style details for `f-radio` and `f-checkbox`
- Refactoring `f-tree` components
- Add a `f-confirm-box` component

## 0.60.0 (2023-08-04)

- Optimize the `f-radio` component styles
- Deprecate the `f-tabs-pane` component
- Add a new `f-tabs-item` component
- Add a `loading` configuration option to the `f-switch` component
- Remove the `edit-status` and `on-edit` configuration options from the `f-tabs` component
- Remove the `on-scroll-when` configuration option from the `f-infinite-scrolling` component
- Remove the `styles` configuration option from the `f-infinite-scrolling` component
- Remove the `loading` configuration option from the `f-infinite-scrolling` component
- Refactor the `f-infinite-scrolling` component
- Refactor the `f-tabs` component
- Modify the parameter type of `on-scroll-end` in the `f-infinite-scrolling` component
- Fix warning issues in the `f-textarea`, `f-input`, `f-dialog`, `f-drawer`, `f-date-picker`, `f-image-preview`, `f-input-number`, `f-pagination`, `f-radio-group`, `f-swap`, `f-select`, `f-switch`, `f-time-pick`, `f-up-load`, and `f-rate` components when binding empty values bidirectionally

## 0.52.0 (2023-07-14)

- Add `f-avatar-group` component

## 0.51.0 (2023-06-26)

- Refactoring the `f-input` component style
- Abolish the `f-input` component `background`, `active-background`, and `active-order-color` configuration items
- Refactoring `f-textarea` component styles

## 0.50.0 (2023-06-20)

**Add**

- Add `f-select` arrow style
- Add `f-trigger` component `width` configuration item
- Add `f-dropdown` component `width` configuration item

**Fix**

- Fix errors caused by incorrect name of the `f-form-item` component

**Other**

- Optimize `f-space` component style details
- Optimize the implementation of Emit
- Change the default value of the `f-select` component `width` to 190

## 0.44.0 (2023-06-18)

- Modify the `f-tag` to close the logic and change the internal state to data startup
- Add `f-tag` component `on-click` configuration item

## 0.43.3 (2023-06-18)

- Fix style issues with `f-dialog`

## 0.43.2 (2023-06-18)

- Optimize component style details for `f-bag`, `f-tag`, `f-toolbar`, and `f-table`

## 0.43.1 (2023-06-16)

- Fix `f-dialog` component style details

## 0.42.0 (2023-06-16)

**Fix**

- Fix animation invalidation issue with `f-notification`
- Fix the issue of `f-input` component type responsive loss
- Fix the issue with `f-up load` continuing to reset previous files with multiple selections
- Fix the issue of animation failure when the `f-collapse-animation` component is initially expanded and closed

**Optimization**

- Optimize `f-message` component style details
- Optimize `f-notification` component style details
- Optimize `f-text` component style details

**Abolish**

- Abolish the `f-dialog` height configuration item
- Abolish the `f-drawer` size configuration item
- Abolish the `f-popup` component
- Refactoring the `f-dialog` and `f-drawer` components

**Add**

- Add `f-dialog` component `mask-background` `mask-opacity` `show-header` configuration item
- Add `f-drawer` component `mask-background` `mask-opacity` `show-header` configuration item

## 0.41.0 (2023-06-04)

**Fix**

- Fix `f-popup` hierarchy issue
- Fix the issue of `f-calendar` returning to the current time error
- Fix header style issue with `f-dialog`
- Fix `f-time picker` component style issue

**Other**

- The `f-calendar` component abolishes the `CalendarChangeParams` type
- Add `on-change` callback to the `f-calendar` component

## 0.40.5 (2023-06-04)

**Fix**

- Fix `f-popup` hierarchy issue
- Fix header style issue with `f-dialog`

## 0.40.4 (2023-06-04)

**Fix**

- Fix the issue of partial parameter responsive loss in the `f-button` component
- Fix the issue of `f-drawer` component content exceeding the display of scrollBars
- Fix the issue of `f-popup` component content exceeding the display of scrollBars

**Other**

- Change the default value of the `f-popup` component `z-index` configuration item to null

## 0.40.3 (2023-05-22)

- Fix unexpected margin display issue in the `f-avatar` component

## 0.40.2 (2023-05-20)

**Add**

- Add `width-animation`, `animation-time`, `on-open`, `on-close`, `on-open-end`, and `on-close-end` configuration items to the `f-collapse-animation` component

## 0.40.1 (2023-05-19)

**Update**

- Added `on-enter` configuration item for `f-textarea` component
- The `f-textarea` component does not trigger line breaks by pressing Enter, but instead uses Ctrl+Enter line breaks

**Fix**

- Fix the `f-textarea` component `close` button style error issue

## 0.40.0 (2023-05-19)

**Update**

- Change the default value of the `f-input` component `autocomplete` configuration item to `off`
- Add `auto-height` configuration item to the `f-textarea` component

**Fix**

- Fix `f-input` component `on-enter` type

## 0.39.0 (2023-05-18)

- Fix `f-option` closing error issue
- Fix the issue of `f-time-pick` closing error reporting
- Fix `f-main` component name error issue
- Fix the issue of `f-ripple` component name errors
- Fix `f-option` click error issue

## 0.38.0 (2023-05-11)

**Fix**

- Fix `f-form` type error
- Fix `f-skeleton` component style
- Fix the issue of incorrect trigger time for the `f-trigger` component

## 0.37.0 (2023-05-10)

**Update**

- Optimization of `f-skeleton` component style details
- Add `row gap` and `difference` configuration items to the `f-skeleton` component
- `f-form` component `on-submit` callback parameter type modification, changing from one object type to four parameter types
- `f-form item` component added `validator` validation method
- Added section `hooks` encapsulation

**Fix**

- Fix the issue where the `f-form` component did not pass rules and name, which also triggered form validation
- Fix the issue where clicking on the `f-trigger` content section will also close

## 0.36.1 (2023-05-08)

- Fix style issues with `f-dialog`
- Add `submit` and `validate` methods to the `f-form`

## 0.36.0 (2023-05-08)

**Optimization**

- Optimize style details for `f-trigger` and `f-dropdown`
- Optimize some component types
- Optimize some hooks parameters

**Fix**

- Fix the issue of `f-trigger` component hover state being moved out and content being immediately hidden
- Fixed issue with `f-back top` component adding event listening component uninstalling but not removing

## 0.35.0 (2023-05-07)

**Optimization**

- Optimize style details for `f-input` and `f-textarea`

**Add**

- Added `font-size` configuration items for `f-input` and `f-textarea` components
- Add a `height` configuration item to the `f-dialog` component
- Add `fullscreen` configuration item to the `f-popup` component

**Fix**

- Fix `f-radio` component style issue
- Fix component style issue with `f-checkbox`
- Abolish the `f-checkbox` component `indeterminate` configuration item
- Fix the issue of incorrect display of `f-trigger` component hierarchy and zoom position

## 0.34.0 (2023-05-05)

**Fix**

- Fix the issue of dynamic src images not changing when binding `f-avatar` and `f-image` components
- Fix alignment style issues with `f-avatar` and `f-image` components
- Fix type error in `f-dialog` and `f-popup`

**Add**

- Add a `f-count-down` countdown component

**Change**

- `f-dialog` width and height style modification
- Change the default value of `f-up-load` component `show-list` to false

## 0.33.2 (2023-05-01)

- Fix `f-avatar` component `round` for `text` invalidation issue

## 0.33.1 (2023-04-27)

- Add `label-position` configuration item to the `f-form` component
- Optimize `f-form` style details

## 0.33.0 (2023-04-25)

- Abolish the `f-table` component `optional` configuration item
- Optimization of `f-table` component type
- Optimize the implementation of `f-input` and `f-textarea` components

**Fix**

- Fix some cases of the `f-tooltip` component where `disabled` is invalid
- Fix the utils `isFunction `method to address some components `async` function failure issues

## 0.32.0 (2023-04-12)

- Fix the issue of incorrect pop-up positions for `FMessage`
- Fix `FMessage` multi pop offset error issue

## 0.31.1 (2023-04-10)

- Fix the issue of incorrect pop-up positions for `FMessage`

## 0.31.0 (2023-04-10)

- Change the default value of `FNotification` component type to null
- Change the default value of the `FNotification` component duration to 2500
- `FNotification` component cancels close events
- `FNotification` Component Style Optimization
- Change the default value of the `FMessage` component duration to 2500
- `FMessage` component abolishes close events
- Adding `on-close` callback parameter types to `FMessage` and `FNotification`
- Optimization of `f-stick-card` component style details

## 0.30.0 (2023-04-01)

- Fix message component export types

## 0.28.2 (2023-04-01)

- Fix global type errors

## 0.28.1 (2023-04-01)

- `f-progress` component adds a `start` configuration item
- Optimize type configuration files, repair packaging directory structure

## 0.28.0 (2023-03-21)

- Change the `f-image` component `no-select` configuration item to `select`
- Optimize `f-image` and `f-avatar` components
- `f-radio` component abolishes the `border` configuration item
- Add a `background` configuration item for the `f-radio` component
- `f-radio` component style refactoring

## 0.27.2 (2023-03-13)

**Fix**

- Fix the problem of `f-pagination` switch code number display error

## 0.27.1 (2023-03-10)

**New**

- `f-input` component adds `width` and `height` configuration items
- `f-input` component is compatible with global configuration

**Optimization**

- Optimize `f-textarea` style details

**Others**

- The default value of the `f-textarea` component `resize` configuration item is changed to null

## 0.27.0 (2023-03-08)

**Fix**

- Fix `f-select` component width failure
- Fix the `f-box` component style problem
- Fix the failure of `f-table` component style parameters
- Fix the failure of `f-pagination` component drop-down menu selection
- Fix `f-pagination` click misplacement
- Fix the `f-pagination` style problem

**Optimization**

- Optimize `f-toolbar` component callback parameters and types
- Optimize `f-input` component callback parameters and types
- Optimize `f-pagination` component style details

**New**

- `f-select` component adds`on-change`configuration item

## 0.26.2 (2023-03-01)

**Fix**

- Fix the `f-slider` component offset error

**Others**

- Add a `size` configuration item for the `f-select` component
- Optimize `f-pagination` components

## 0.26.1 (2023-02-28)

**Fix**

- Fix the `f-slider` component offset error

**Others**

- Optimize `f-expand-card` component details
- `f-expand-card` component adds `on-change` configuration item

## 0.26.0 (2023-02-24)

- Optimize `f-back-top` component implementation
- `f-menu` component adds `on-menu item click` `on-submenu-click` configuration item
- Fix the `f-menu` component folding problem
- Refactoring the `f-collapse-animation` component

## 0.25.1 (2023-02-21)

- Fix the `f-submenu` component class name problem

## 0.25.0 (2023-02-21)

- Optimize the `f-image-preview` component pop-up animation effect
- `f-image-preview` component adds `append-to-body` configuration item
- Complete all component ts type notes
- `f-expand-card` component adds a `vertical` configuration item

## 0.24.0 (2023-02-17)

- `f-progress` component `type` adds `info` and `default` configuration items
- `f-swap` component `type` abrogate `default` configuration item
- The `bag` optional value of the `f-link` component `state` configuration item is changed to `background`
- The `f-link` component cancels the `beforeIcon` and `afterIcon` slots
- The `f-provider` component adds a `height` configuration item to optimize some parameter configurations

## 0.23.1 (2023-02-16)

- Optimization part ts type error
- Add some browser compatible adapters
- Optimize the strictness of partial utils methods

## 0.23.0 (2023-02-15)

- `f-badge` component optimization details
- `f-slider` component cancels the `range` configuration item
- The `f-slider` component adds a `background` `active-color` `width` configuration item
- The `f-card` component adds a `border-color` `background` `title-color` `title-bold` `close` `on-close` configuration item
- `f-input` component adds `autocomplete` configuration item
- `f-input` component adds `before` slot
- `f-date-picker` component adds `placeholder` `add-zero` configuration item
- Fix the warning prompt when clearing `f-date-picker`

## 0.22.1 (2023-02-07)

- `f-calendar` component abolishes `memorandum` configuration item
- Optimize the priority display status of the `f-calendar` component lunar calendar description
- Substantially optimize internal code implementation

## 0.22.0 (2023-02-03)

- `f-button` `f-alert` `f-bag` `f-tag` The new type of the component is info optional
- `f-alert` component style fine-tuning
- Add a `background` configuration item for the `f-aside` component
- `f-input` style fine tuning
- The `f-input` component adds a `background` `text-color` `active-background` `active-border-color` configuration item

## 0.21.0 (2023-02-01)

- Add default configuration item for `f-badge` component type
- Change the configuration item of `f-badge` component `color` to `background``
- Change the configuration item of `f-badge` component `font-color` to `color`
- All component style optimization

## 0.20.3 (2023-01-31)

- The `f-button` component style has been greatly optimized, and the internal style has been optimized

## 0.20.2 (2023-01-30)

- Fix the failure of `f-switch` under `f-lighting-global`

## 0.20.1 (2023-01-29)

- Fix the problem of `FNotification` component name error
- Optimize the public methods of `FMessage` and `FNotification` components

## 0.20.0 (2023-01-17)

- Optimize `f-space` style details
- Fix some known problems of `f-tabs`
- Abolish the `f-progress` component `width`,`square`,`linear` and `text-inside` configuration items
- Add `f-progress` component `outside-text` configuration item

## 0.19.1 (2023-01-13)

- Optimize `f-dropdown-item` style details
- Optimize `f-trigger` to turn off display details

## 0.19.0 (2023-01-12)

**Optimization**

- Optimize `f-tag` style details
- Optimize `f-button` style details
- Optimize `f-alert` style details

**Fix**

- Fix the problem of reactive failure of `f-tipple` components
- Fix `f-text` component reactive failure
- Fix `f-button` ripple failure

## 0.18.0 (2023-01-12)

**Fix**

- Fix `f-tree` type problem

## 0.17.3 (2023-01-11)

**Fix**

- Fix unexpected margin problems caused by `f-button` in icon state
- Fix `f-input-number` component size failure

**New**

- Add `f-input-number` component `button-type` configuration item

## 0.17.2 (2023-01-11)

**Fix**

- Fix `f-alert` rolling failure

## 0.17.1 (2023-01-10)

**Fix**

- Fix `f-alert` `f-link` `f-rip` `f-tag` `f-text` reactive failure
- Fix the problem of `f-number-animate` returning NaN

## 0.17.0 (2023-01-09)

**Optimization**

- Optimize some components css
- The `f-tabs` component has been greatly optimized
- Optimize the `f-tabs` style

**Packaging**

- Optimized css packaging and added postcss configuration items

## 0.16.0 (2023-01-05)

**Fix**

- Fix the problem that `f-input` does not display `placeholder` in dark mode [issues#330](https://github.com/FightingDesign/fighting-design/issues/330)
- Fix the `type` failure of the `f-ripple` component in the global configuration
- Fix reactive loss of global configuration components

**Add**

- Add `f-input` component `placeholder-color` configuration item
- New `f-calendar` component internationalization configuration
- Add `f-page-header` component internationalization configuration

**Other changes**

- The default value of `f-avatar` component `font-size` is changed to null
- The default value of `f-avatar` component `font-color` is changed to null
- The default value of `f-calendar` component `border-color` is changed to null
- The default value of `f-calendar` component `day-cell-height` is changed to null
- The default value of `f-calendar` component `week-cell-height` is changed to null
- The default value of `f-page-header` component `back-text` is changed to null
- Revoke the `f-stick-card` component `background` configuration item

## 0.15.0 (2023-01-03)

**Fix**

- Fix the failure of `f-alert` component `center`

**Add**

- Add `f-infinite-crawling` component
- Add `f-number-animate` component

## 0.14.0 (2022-12-30)

**Add**

- Add `f-alert` component `alert-list` configuration item

**Optimization**

- Revoke the `f-alert` component `overflow` configuration item
- Optimize the handling of the pop-up status of the `f-popup` component for the scroll bar
- Optimize `f-dialog` `f-drawer` component style details

**Fix**

- Fix the problem of `f-checkbox` component `border` status style
- Fix `f-input-number` warning error

## 0.13.2 (2022-12-29)

- Fix the failure of `f-ripple` components

## 0.13.1 (2022-12-29)

**修复**

- Fix `f-svg-icon` type
- fix `f-rate` type
- Fix the `f-calendar` component style problem [#315](https://github.com/FightingDesign/fighting-design/pull/315)

## 0.13.0 (2022-12-28)

**New Features**

- Add `f-box` component
- Complete `f-tree` components

**Fix**

- Fix the error reported by `f-button` component ripple effect

## 0.12.0 (2022-12-20)

**New Features**

- Add `f-form` component
- Add `f-form-item` component

**Fix**

- Fix `f-space` component style details
- Fix the failure of `f-back-top` component `z-index`

**Other Updates**

- Cancel the `loading-bar` component
- Optimize `f-input` component types

## 0.11.2 (2022-12-15)

**Add**

- Add `f-button` component `spread` configuration item

**Fix**

- Fix the warning error of `f-image-preview`
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

**Fix**

- Fix the `f-list` and `f-list-item` component bugs
- Fix the failure of disabling the `f-trigger` component

**Add**

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

**Add**

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

**Fix**

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

**Add**

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

**Add**

- Add `f-svg-icon` components
- Add `f-close-btn` components

**Fix**

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

**Add**

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
- fix the `f-radio` component `border` status, disable style details
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

**Fix**

- Fix the default value of the `f-button` component `font-color`
- Fix the default value of `f-button` component `font-size`

**Add**

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

**Add**

- Add `sticky-card` component
- The `f-list` component adds `header` and `footer` slots
- Optimize the performance of `f-button` components

**Fix**

- Fix some date display errors in the `f-calendar` component

## 0.6.5-alpha.4 (2022-09-23)

**Fix**

- Fix the problem of `f-image review` and `f-calendar` component content being imported on demand

## 0.6.5-alpha.3 (2022-09-22)

**Add**

- `f-header` component adds a `padding` type
- The `height` attribute of the `f-header` component supports the `number` type
- `f-footer` component adds`padding`configuration item
- The `height` attribute of the `f-footer` component supports the `number` type
- The `padding` attribute of the `f-main` component supports the `number` type
- The `width` attribute of the `f-aside` component supports the `number` type
- `f-aside` component adds a `padding` configuration item

**Fix**

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

- Test fix On Demand Import

## 0.6.4-alpha.9 (2022-09-14)

- Test fix On Demand Import

## 0.6.4-alpha.8 (2022-09-14)

- Test fix On Demand Import

## 0.6.4-alpha.7 (2022-09-14)

**Fix**

- Fix the `hover` and `disabled` styles of the `f-button` component`s custom colors
- Fix `f-page-header` component style details
- Fix `f-button` component `text` configuration item style details
- Fix some problems with the `width` attribute of the `f-image` component

**Add**

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
- Test fix On Demand Import

## 0.6.4-alpha.6 (2022-09-11)

**Add**

- Add `f-ripple` ripple component
- Add `f-radio` `f-radio-group` component

**Fix**

- Fix `f-button` and `f-loading` animation style problems
- Fix the problem that the feed height of `f-list-item` is not adaptive

## 0.6.4-alpha.5 (2022-09-06)

- Test and fix side effect component registration

## 0.6.4-alpha.4 (2022-09-06)

- Test and fix side effect component registration

## 0.6.4-alpha.3 (2022-09-05)

- Test and fix side effect component registration

## 0.6.4-alpha.2 (2022-09-05)

- Test and fix side effect component registration

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

- Test and fix problems introduced by build

## 0.6.2-alpha.9 (2022-09-02)

- Test and fix problems introduced by build

## 0.6.2-alpha.8 (2022-09-02)

- Test and fix problems introduced by build

## 0.6.2-alpha.7 (2022-09-02)

- Test and fix problems introduced by build

## 0.6.2-alpha.6 (2022-08-31)

- Fix some known introduction related configuration problems

## 0.6.2-alpha.5 (2022-08-30)

**Add**

- Add `f-loading-bar` component
- Add `notification` component

**Fix**

- fix button component style
- Update the default value of the `shadow` parameter of the `f-card` component. Now changed to `never`

## 0.6.2-alpha.4 (2022-08-29)

**Add**

-New ` title` configuration item for `f-image` component

**Fix**

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

- fix button ripple effect class
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
- fix packaging configuration item

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

**Add**

- `alert` component added `fixed` and `fixed style` configuration items
- Add `f-list` component
- Add `f-list-item` component
- New `message` component
- `F-text` component adds `center` configuration item
- New `f-watermark` component

**Fix**

- fix `f-tag` component style details
- Optimize `F-card` component detail style

## 0.4.2-bate.8 (2022-07-23)

**Add**

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

**Fix**

- Fix the problem that the `tag` component is not displayed
- fix the display status and close callback of the `alert` component

## 0.3.1-bate.4 (2022-07-15)

- `link` component new `default` configuration `type`
- The default value of `button` component `ripple` is changed to `false`

## 0.3.0-bate.3 (2022-07-13)

**feat**

- Add `progress` component config
- Add `alert` component

**Fix**

- 修复 `progress` 组件百分百展示状态
- 修复 `text` 组件样式细节
- 修复 `button` 组件样式细节
- 修改 `button` 组件文字按钮的样式
- 移除 `tag` 组件 `info` 属性，改为 `default`

**Fix**

- Fix the 100% display state of the `progress` component
- Fix `text` component style details
- Fix `button` component style details
- Modify the style of the `button` component text button
- Remove the `info` attribute of the `tag` component and change it to `default`

## 0.2.0-bate.2 (2022-07-08)

**feat**

- Add `drawer` component
- Add `page-header` component

**Fix**

- Fix `tag` base style
- Fix `switch` base style

## 0.1.0-bate.1 (2022-07-05)

**feat**

- Add `dialog` component
- Add `space` component
- Add `progress` component
- Add `captcha` component (bate)
- Add `tooltip` component (bate)

**Fix**

- Fix the problem of listening target error of `backTop` component

## 0.0.12-alpha.12 (2022-06-29)

**Fix**

- fix the function of the `back-top` component

**feat**

- `Back-top` component add `z-index`、`top`、`listen-el`、`background`、`color` configuration item
- Add `breadcrumb` component

## 0.0.11-alpha.11 (2022-06-26)

**Fix**

- Fix packaging path errors

## 0.0.10-alpha.10 (2022-06-26)

**feat**

- Add `FText` component
- Add `FAvatar` component
- Add `FLoading` component

**Fix**

- The `FButton` component `blob` configuration item is changed to `blob` for Text bold

## 0.0.8-alpha.8 (2022-06-12)

**feat**

- Add `FTag` component
- Add `FDivider` component
- Add `Badge` component
- Add `FContainer` component
- Add `FSwitch` component
- New `FButton` component `color` configuration item

**Fix**

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

**Fix**

- Fix the fillet degree of `FButton` component
- Fix `FButtonGroup` type

## 0.0.6-alpha.6 (2022-05-31)

**Fix**

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
