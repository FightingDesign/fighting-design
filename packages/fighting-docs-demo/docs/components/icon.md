# Icon 图标

## 基本使用

icon 的基本使用

通过 icon 属性来给 icon 添加类名，来显示不同的图标

<tyh-icon icon="tyh-ui-tyhui" />
<tyh-icon icon="tyh-ui-ashbin" />
<tyh-icon icon="tyh-ui-data-view" />

```html
<tyh-icon icon="tyh-ui-tyhui" />
<tyh-icon icon="tyh-ui-ashbin" />
<tyh-icon icon="tyh-ui-data-view" />
```

## 配置颜色

color 属性改变 icon 的颜色

<tyh-icon color="skyblue" icon="tyh-ui-favorite" />
<tyh-icon color="red" icon="tyh-ui-fabulous" />
<tyh-icon color="pink" icon="tyh-ui-good" />

```html
<tyh-icon color="skyblue" icon="tyh-ui-favorite" />
<tyh-icon color="red" icon="tyh-ui-fabulous" />
<tyh-icon color="pink" icon="tyh-ui-good" />
```

## 配置大小

size 属性可以改变 icon 的大小

这里采用的是字体大小形式，只需要传递具体数值，并不需要传递单位

<tyh-icon size="50" icon="tyh-ui-hide" />
<tyh-icon size="40" icon="tyh-ui-shouye-xianxing" />
<tyh-icon size="30" icon="tyh-ui-huojian" />

```html
<tyh-icon size="50" icon="tyh-ui-hide" />
<tyh-icon size="40" icon="tyh-ui-shouye-xianxing" />
<tyh-icon size="30" icon="tyh-ui-huojian" />
```

## Attributes

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| icon  | 类名     | string | ——     | ——     |
| color | 颜色     | string | ——     | ——     |
| size  | 字体大小 | string | ——     | 16     |

## Icon 集合

<div id="allIcon">
  <ul class="allIcon-ui">
    <li
      class="allIcon-li"
      v-for="(icon, index) in iconList"
      :key="index"
    >
      <i :class="['tyh-icon', icon]" />
      <p class="iconTitle">{{ icon }}</p>
    </li>
  </ul>
</div>

<script setup>
const iconList = [
  'tyh-ui-tyhui',
  'tyh-ui-githublogo',
  'tyh-ui-arrow-up-filling',
  'tyh-ui-arrow-down-filling',
  'tyh-ui-arrow-left-filling',
  'tyh-ui-arrow-right-filling',
  'tyh-ui-caps-unlock-filling',
  'tyh-ui-comment-filling',
  'tyh-ui-check-item-filling',
  'tyh-ui-clock-filling',
  'tyh-ui-delete-filling',
  'tyh-ui-decline-filling',
  'tyh-ui-dynamic-filling',
  'tyh-ui-intermediate-filling',
  'tyh-ui-favorite-filling',
  'tyh-ui-layout-filling',
  'tyh-ui-help-filling',
  'tyh-ui-history-filling',
  'tyh-ui-filter-filling',
  'tyh-ui-file-common-filling',
  'tyh-ui-news-filling',
  'tyh-ui-edit-filling',
  'tyh-ui-fullscreen-expand-filling',
  'tyh-ui-smile-filling',
  'tyh-ui-rise-filling',
  'tyh-ui-picture-filling',
  'tyh-ui-notification-filling',
  'tyh-ui-user-filling',
  'tyh-ui-setting-filling',
  'tyh-ui-switch-filling',
  'tyh-ui-work-filling',
  'tyh-ui-task-filling',
  'tyh-ui-success-filling',
  'tyh-ui-warning-filling',
  'tyh-ui-folder-filling',
  'tyh-ui-map-filling',
  'tyh-ui-prompt-filling',
  'tyh-ui-meh-filling',
  'tyh-ui-cry-filling',
  'tyh-ui-top-filling',
  'tyh-ui-home-filling',
  'tyh-ui-sorting',
  'tyh-ui-3column',
  'tyh-ui-column-4',
  'tyh-ui-add',
  'tyh-ui-add-circle',
  'tyh-ui-adjust',
  'tyh-ui-arrow-up-circle',
  'tyh-ui-arrow-right-circle',
  'tyh-ui-arrow-down',
  'tyh-ui-ashbin',
  'tyh-ui-arrow-right',
  'tyh-ui-browse',
  'tyh-ui-bottom',
  'tyh-ui-back',
  'tyh-ui-bad',
  'tyh-ui-arrow-double-left',
  'tyh-ui-arrow-left-circle',
  'tyh-ui-arrow-double-right',
  'tyh-ui-caps-lock',
  'tyh-ui-camera',
  'tyh-ui-chart-bar',
  'tyh-ui-attachment',
  'tyh-ui-code',
  'tyh-ui-close',
  'tyh-ui-check-item',
  'tyh-ui-calendar',
  'tyh-ui-calendar',
  'tyh-ui-comment',
  'tyh-ui-column-vertical',
  'tyh-ui-column-horizontal',
  'tyh-ui-complete',
  'tyh-ui-chart-pie',
  'tyh-ui-cry',
  'tyh-ui-customer-service',
  'tyh-ui-delete',
  'tyh-ui-direction-down',
  'tyh-ui-copy',
  'tyh-ui-cut',
  'tyh-ui-data-view',
  'tyh-ui-direction-down-circle',
  'tyh-ui-direction-right',
  'tyh-ui-direction-up',
  'tyh-ui-discount',
  'tyh-ui-direction-left',
  'tyh-ui-download',
  'tyh-ui-electronics',
  'tyh-ui-drag',
  'tyh-ui-elipsis',
  'tyh-ui-export',
  'tyh-ui-explain',
  'tyh-ui-edit',
  'tyh-ui-eye-close',
  'tyh-ui-email',
  'tyh-ui-error',
  'tyh-ui-favorite',
  'tyh-ui-file-common',
  'tyh-ui-file-delete',
  'tyh-ui-file-add',
  'tyh-ui-film',
  'tyh-ui-fabulous',
  'tyh-ui-file',
  'tyh-ui-folder-close',
  'tyh-ui-filter',
  'tyh-ui-good',
  'tyh-ui-hide',
  'tyh-ui-xiexian',
  'tyh-ui-guanbi',
  'tyh-ui-shouye-xianxing',
  'tyh-ui-huojian',
  'tyh-ui-huojian1',
  'tyh-ui-history',
  'tyh-ui-file-open',
  'tyh-ui-forward',
  'tyh-ui-import',
  'tyh-ui-image-text',
  'tyh-ui-keyboard-26',
  'tyh-ui-keyboard-26',
  'tyh-ui-keyboard-9',
  'tyh-ui-link',
  'tyh-ui-layout',
  'tyh-ui-fullscreen-shrink',
  'tyh-ui-layers',
  'tyh-ui-lock',
  'tyh-ui-fullscreen-expand',
  'tyh-ui-meh',
  'tyh-ui-menu',
  'tyh-ui-loading',
  'tyh-ui-help',
  'tyh-ui-minus-circle',
  'tyh-ui-modular',
  'tyh-ui-notification',
  'tyh-ui-mic',
  'tyh-ui-more',
  'tyh-ui-pad',
  'tyh-ui-operation',
  'tyh-ui-play',
  'tyh-ui-print',
  'tyh-ui-mobile-phone',
  'tyh-ui-minus',
  'tyh-ui-navigation',
  'tyh-ui-pdf',
  'tyh-ui-prompt',
  'tyh-ui-move',
  'tyh-ui-refresh',
  'tyh-ui-run-up',
  'tyh-ui-picture',
  'tyh-ui-run-in',
  'tyh-ui-pin',
  'tyh-ui-save',
  'tyh-ui-search',
  'tyh-ui-share',
  'tyh-ui-scanning',
  'tyh-ui-security',
  'tyh-ui-sign-out',
  'tyh-ui-select',
  'tyh-ui-stop',
  'tyh-ui-success',
  'tyh-ui-smile',
  'tyh-ui-switch',
  'tyh-ui-setting',
  'tyh-ui-survey',
  'tyh-ui-task',
  'tyh-ui-skip',
  'tyh-ui-text',
  'tyh-ui-time',
  'tyh-ui-telephone-out',
  'tyh-ui-toggle-left',
  'tyh-ui-toggle-right',
  'tyh-ui-telephone',
  'tyh-ui-top',
  'tyh-ui-unlock',
  'tyh-ui-user',
  'tyh-ui-upload',
  'tyh-ui-work',
  'tyh-ui-training',
  'tyh-ui-warning',
  'tyh-ui-zoom-in',
  'tyh-ui-zoom-out',
  'tyh-ui-add-bold',
  'tyh-ui-arrow-left-bold',
  'tyh-ui-arrow-up-bold',
  'tyh-ui-close-bold',
  'tyh-ui-arrow-down-bold',
  'tyh-ui-minus-bold',
  'tyh-ui-arrow-right-bold',
  'tyh-ui-select-bold'
]
</script>

<style>
#allIcon {
  width: 100%;
}

#allIcon .allIcon-ui {
  display: flex;
  flex-wrap: wrap;
}

#allIcon .allIcon-ui .allIcon-li {
  width: 140px;
  height: 120px;
  list-style: none;
  cursor: pointer;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#allIcon .allIcon-ui .allIcon-li .tyh-icon {
  font-size: 30px;
}

#allIcon .allIcon-ui .allIcon-li .iconTitle {
  font-size: 12px;
  color: #8a8a8a;
  display: inline-block;
  max-width: 100px;
  text-align: center;
  margin: 20px 0 0 0;
  height: 30px;
  line-height: 15px;
}

#allIcon .allIcon-ui .allIcon-li:hover {
  transition: background 0.3s;
  background: #dcdfe6;
}
</style>
