<script lang="ts" setup>
  const handleEnd = (): void => {
    data.value.push({
      src: 'https://film-grab.com/wp-content/uploads/2022/07/The-Adjuster-006.jpg',
      name: 'test'
    })
  }
  import { ref } from 'vue'

  const data = ref(
    [
      'https://film-grab.com/wp-content/uploads/2022/07/The-Adjuster-006.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Live-and-Let-Die-061.jpg',
      'https://film-grab.com/wp-content/uploads/2022/07/After-Yang026.jpg',
      'https://film-grab.com/wp-content/uploads/2022/07/The-Worst-Person-in-the-World-001.jpg',
      'https://film-grab.com/wp-content/uploads/2020/10/Zeroville-025.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Bigger-Than-Life-029.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Diamonds-are-Forever-060.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Prisoners-of-Ghostland-002.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Dune-2021-022.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Celeste-005.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/On-Her-Majestys-Secret-Service-023.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/NightmareAlley010.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/Paris-13th010.jpg',
      'https://film-grab.com/wp-content/uploads/2020/10/Taking-Off-019.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/The-Eyes-of-Tammy-Faye-001.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/CmonCmon019.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Frighteners-021.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/You-Only-Live-Twice-003.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/In-Which-We-Serve-008.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/Apollo101_2036.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/InTheEarth035.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/3Iron042.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/Femme-Fatale049.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Thunderball-005.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/The-Card-Counter-032.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/The-Apartment003.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Goldfinger-015.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/His-House-047.jpg',
      'https://film-grab.com/wp-content/uploads/2021/09/Der-Prozess-004.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Dillinger-is-Dead-028.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Domain-007.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/From-Russia-With-Love-002.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Master-Z-052.jpg',
      'https://film-grab.com/wp-content/uploads/2019/10/Friday-the-13th-Part-5-056.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Universal-Soldier-The-Return-003.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/Intrusion016.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/The-Canterbury-Tales-016.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Universal-Soldier-008.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Ip-Man-4-047.jpg',
      'https://film-grab.com/wp-content/uploads/2021/10/Shadow-Film-01.jpg',
      'https://film-grab.com/wp-content/uploads/2021/10/Les-Chants-de-Maldoror-011.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Desert-Hearts-024.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Straight-Time-005.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Ip-Man-3-006.jpg',
      'https://film-grab.com/wp-content/uploads/2021/09/Emperor-Tomato-Ketchup-020.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Black-Widow-009.jpg',
      'https://film-grab.com/wp-content/uploads/2020/10/Border-006.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Green-Inferno-029.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/The-Damned-013.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Ip-Man-2-054.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Passing-001.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Master-of-the-House-003.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Outside-Satan-003.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Black-Orpheus-043.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Ip-Man-001.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Last-Night-In-Soho-023.jpg',
      'https://film-grab.com/wp-content/uploads/2021/09/Explorers-039.jpg',
      'https://film-grab.com/wp-content/uploads/2021/10/Me-and-Earl-028.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Annette-014.jpg',
      'https://film-grab.com/wp-content/uploads/2021/10/The-Rubber-05.jpg',
      'https://film-grab.com/wp-content/uploads/2021/10/Hana-Bi-046.jpg'
    ].map((el) => {
      return {
        src: el,
        name: el.substring(49)
      }
    })
  )
</script>

<template>
  <div style="height: 400px; overflow: auto; width: 100%">
    <f-waterfall :list="data" @scroll-end="handleEnd">
      <template #default="{ row }">
        <div style="height: auto; width: 100%; display: flex" class="pic">
          <img :src="row.src" style="height: auto; width: 100%" />

          <div class="pic-name">{{ row.name }}</div>
        </div>
      </template>
    </f-waterfall>
  </div>
</template>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .pic {
    overflow: hidden;
    transition: all 0.6s;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.4);
      transition: background-color 4s;
      transform: translateY(-100%);
    }

    &:hover {
      &:before {
        transform: translateY(0%);
      }

      .pic-name {
        color: #bbb;
        transform: translateY(0);
      }
    }
  }

  .pic-name {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    color: transparent;
    transform: translateY(100%);
    transition: all 1s;
  }
</style>
