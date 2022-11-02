# fighting-resolver

用于 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 的导入配置

## 自动导入

首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件

```node
npm install -D unplugin-vue-components unplugin-auto-import
```
然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中
### vite

```js
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite' // 自动注入api
import Components from 'unplugin-vue-components/vite' // 自动注册组件
import FightingDesignResolver from 'fighting-design/resolver'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [FightingDesignResolver()],
    }),
    Components({
      resolvers: [FightingDesignResolver()],
    }),
  ],
})
```