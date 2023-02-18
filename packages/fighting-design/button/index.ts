/**
 * button 是我开发的第一个组件，这里将下面的一些类型和变量详细说明介绍一下
 *
 * @description 1. 引入 button 单文件组件
 *
 * 什么是单文件组件？可以参考下面：
 *
 * @see single-file-components https://cn.vuejs.org/guide/scaling-up/sfc.html#single-file-components
 *
 * @description 2. 引入注册方法
 *
 * @description 3. 注册组件
 *
 * 注册组件参考：
 *
 * @see registration https://cn.vuejs.org/guide/components/registration.html
 *
 * @description 4. 导出组件实例类型
 *
 * 组件实例类型有什么用处？
 *
 * 我们在 vue3 中可以使用 ref 来获取 dom 节点
 *
 * 那么如果将 ref 作用在组件上，可以获取组件的实例，那么这个变量的类型就是组件实例
 *
 * 例如下面伪代码：
 *
 * ```vue
 * <script lang="ts" setup>
 *   import { ref } from 'vue'
 *   import type { ButtonInstance } from 'fighting-design'
 *
 *   const buttonEl = ref<ButtonInstance>()
 * </script>
 *
 * <template>
 *   <f-button ref="buttonEl">按钮</f-button>
 * </template>
 * ```
 *
 * TypeScript 中的 InstanceType 是一个用来获取构造函数类型实例的类型工具
 *
 * @see InstanceType<Type> https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype
 *
 * 在 TypeScript 中，typeof 是一个运算符，可以用于获取一个值的类型
 *
 * @see typeof https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards
 *
 * @description 5. 导出组件内部类型
 *
 * @description 6. 默认导出组件
 */

/** 引入 button 单文件组件 */
import Button from './src/button.vue'

/** 引入注册方法 */
import { install } from '../_utils'

/** 注册组件导出 */
export const FButton = install(Button)

/** button 组件实例类型 */
export type ButtonInstance = InstanceType<typeof Button>

/** 导出组件内部类型 */
export * from './src/interface.d'

/** 默认导出组件 */
export default FButton
