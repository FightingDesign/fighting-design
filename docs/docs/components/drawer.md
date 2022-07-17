# Drawer 抽屉

在浏览器中使用抽屉

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-components/drawer)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/drawer.md)

## 基本使用

<f-button type="primary" @click="visible1 = true">show</f-button>
<f-drawer title="Title" v-model:visible="visible1">
fighting-design
</f-drawer>

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/wang-zhixin" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/50623519?v=4" />
</a>

<script setup>
  import { ref } from 'vue'
  const visible1 = ref(false)
  const visible2 = ref(false)
  const visible3 = ref(false)
  const innerVisible = ref(false)
  const close = () => {
    console.log('关闭之前');
  }
  const closeEnd = () => {
    console.log('关闭之后');
  }
</script>
