<script lang="ts" setup>
  import { ref } from 'vue'

  let tabIndex = 2

  const list = ref([
    { label: '第一个', content: '哈哈哈哈', name: '1' },
    { label: '第二个', content: '哈哈哈哈a', name: '2' }
  ])

  const edit = (action: 'remove' | 'add', name: string, index: number): void => {
    console.log(action, name, index)

    switch (action) {
      case 'add':
        {
          const newTabName = `${++tabIndex}`
          list.value.push({
            label: '新的' + newTabName,
            content: '新的标签页' + newTabName,
            name: newTabName
          })
        }
        break
      case 'remove':
        list.value.splice(index, 1)
        break
    }
  }
</script>

<template>
  <f-badge value="11" dot color="black">
    <f-button>default</f-button>
  </f-badge>

  <br />
  <br />

  <f-badge value="12" type="primary">
    <f-button>primary</f-button>
  </f-badge>
  <f-badge value="13" type="success">
    <f-button>success</f-button>
  </f-badge>
  <f-badge value="14" type="warning">
    <f-button>warning</f-button>
  </f-badge>

  <f-avatar src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar round src="https://tianyuhao.cn/images/auto/my.jpg" />

  <f-input type="text" placeholder="请输入...." placeholder-color="red" />
  <f-tabs>
    <div>
      <div>
        <f-tabs-pane name="admin" label="如烟">
          <p>七岁的那一年，抓住那只蝉，以为能抓住夏天；</p>
          <p>十七岁的那年，吻过他的脸，就以为和他能永远。</p>
        </f-tabs-pane>
      </div>
      <f-tabs-pane label="盛夏光年">
        <p>长大 难道是人必经的溃烂。</p>
      </f-tabs-pane>
      <f-tabs-pane label="我心中尚未崩坏的地方">
        <p>就算会有一天，没人与我合唱，至少在我的心中，还有个尚未崩坏的地方。</p>
      </f-tabs-pane>
    </div>
  </f-tabs>
</template>

<style lang="scss"></style>
