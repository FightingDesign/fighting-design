# CHANGELOG

> English documents are not synchronized in time most of the time. Please refer to Chinese documents for details.

English | [Chinese](https://github.com/FightingDesign/fighting-design/blob/master/CHANGELOG.md)

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
