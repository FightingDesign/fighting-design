<script lang="ts" setup>
  import { reactive } from 'vue'

  interface DownloadVolumeItem {
    downloads: number
    end: string
    start: string
    zh: string
  }

  interface DownloadVolume {
    'last-month': DownloadVolumeItem | null
    'last-week': DownloadVolumeItem | null
    'last-day': DownloadVolumeItem | null
  }

  const downloadVolume: DownloadVolume = reactive({
    'last-month': null,
    'last-week': null,
    'last-day': null
  })

  const times = [
    { en: 'last-month', zh: '上个月' },
    { en: 'last-week', zh: '上周' },
    { en: 'last-day', zh: '昨天' }
  ] as const

  times.forEach(item => {
    fetch(`https://api.npmjs.org/downloads/point/${item.en}/fighting-design`)
      .then((res: Response) => res.json())
      .then((res: DownloadVolumeItem) => {
        if (res) {
          res.zh = item.zh
          downloadVolume[item.en as keyof DownloadVolume] = res
        }
      })
      .catch(err => console.log(err))
  })
</script>

<template>
  <table id="downloads-table">
    <thead>
      <tr>
        <th>时间范围</th>
        <th>时间</th>
        <th>下载量</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in downloadVolume" :key="index">
        <template v-if="item">
          <td>{{ item.start }} ~ {{ item.end }}</td>
          <td>{{ item.zh }}</td>
          <td>{{ item.downloads }}</td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
  #downloads-table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    table-layout: fixed;
    text-align: left;
    display: inline-table;
  }
</style>
