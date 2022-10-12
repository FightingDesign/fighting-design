## 组件相关

- [Loading Bar 加载条](https://fighting.tianyuhao.cn/components/loading-bar.html) 组件计划重构
- [dialog 对话框](https://fighting.tianyuhao.cn/components/dialog.html) 组件优化（**我正在开发中**）
- [rate 评分](https://fighting.tianyuhao.cn/components/rate.html) 需要支持半选
- 需要新增 `svg-icon` 组件，使用 `svg` 代替 `icon-font`
- [Checkbox 复选框](https://fighting.tianyuhao.cn/components/checkbox.html) 需要加入 `indeterminate` 属性
- [Loading 加载](https://fighting.tianyuhao.cn/components/loading.html) 组件计划重构，改为自定义指令方式，可以给指定标签加入 `loading`

## 打包相关

- 目前打包 [umd](https://fighting.tianyuhao.cn/docs/import.html#%E4%BD%BF%E7%94%A8-umd) 模式不能正确的引入使用
- 打包的类型文件会导致文件路径丢失。可以先执行 `pnpm build` 之后，查看 `dist\es\components.d.ts` 文件中的类型，其实是引入失败的（**重点**）
- 目前 [install](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-design/_utils/install.ts) 函数的类型还是有些问题，在按需引入组件 `app.use(xxx)` 的时候，会有类型报错（**重点**）

## 测试

- 需要完善更多[单元测试](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/__test__)

## 新组件

- 目前还有一个新组件正则开发中 [select 选择器](https://github.com/FightingDesign/fighting-design/discussions/171)（**也许正在开发中**）
- 后续会推出新组件 `input` 、 `自定义右键菜单`

## 文档相关

- 文档需要支持将代码片段改为使用 [StickyCard 粘性卡片](https://fighting.tianyuhao.cn/components/sticky-card.html) 进行展示，需要自定义 `markdown` 指令，详情参考 [config.ts](https://github.com/FightingDesign/fighting-design/blob/8277b877362bc66957a939162827c1cad8bc31e1/docs/docs/.vitepress/config.ts#L33)
