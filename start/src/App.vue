<script lang="ts" setup>
  // import { provide } from 'vue'
  import { ref, watch, reactive } from 'vue'

  /** 省份列表 */
  const provinceList = ref(['大时代', '达到', '张三年', '哈哈哈', '的撒大事', '但是'])
  const cityList = ref()

  const form = reactive({
    province: '',
    city: ''
  })

  /** 获取省份列表 */
  const getProvinceList = (): void => {
    fetch(
      'https://restapi.amap.com/v3/config/district?keywords=%E4%B8%AD%E5%9B%BD&subdistrict=1&key=ca2358293d08bfa6028bb8fb1c076130'
    )
      .then(res => res.json())
      .then(data => {
        // provinceList.value = data.districts[0].districts
        console.log(provinceList.value)
      })
  }

  getProvinceList()

  watch(
    () => form.province,
    (newVal?: string): void => {
      fetch(
        `https://restapi.amap.com/v3/config/district?keywords=${newVal}&subdistrict=1&key=ca2358293d08bfa6028bb8fb1c076130`
      )
        .then(res => res.json())
        .then(data => {
          cityList.value = data.districts[0]?.districts
        })
    }
  )
</script>

<template>
  <f-space>
    {{ form.province }}
    <!-- 选择省份 -->
    <f-select v-if="provinceList" v-model="form.province" :width="200">
      <f-option
        v-for="(province, index) in provinceList"
        :key="index"
        :value="province"
        :label="province"
      >
        {{ province }}
      </f-option>
    </f-select>

    <!-- 选择城市 -->
    <f-select v-if="cityList" v-model="form.city">
      <f-option v-for="(city, index) in cityList" :key="index" :value="city.name">
        {{ city.name }}
      </f-option>
    </f-select>
  </f-space>
</template>
