<script lang="ts" setup></script>

<template>
  <h4>1、空状态</h4>
  <f-ellipsis> </f-ellipsis>
  <h4>2、line-clamp设置行数</h4>
  <f-ellipsis :max-width="150">
    七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远，有没有那么一种永远
    永远不改变，拥抱过的美丽都再也不破碎
  </f-ellipsis>
  <h4></h4>
  <br />
  <f-ellipsis :max-width="150" :line-clamp="2">
    七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远，有没有那么一种永远
    永远不改变，拥抱过的美丽都再也不破碎
  </f-ellipsis>
  <h4>3、max-width: 最大宽度，不设置默认宽度auto</h4>
  <f-ellipsis :line-clamp="1">
    七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远，有没有那么一种永远
    永远不改变，拥抱过的美丽都再也不破碎
  </f-ellipsis>

  <h4>4、toggle-click, 点击展开收缩</h4>
  <f-ellipsis :max-width="300" :line-clamp="2" toggle-click>
    七岁的那一年抓住那只蝉以为能抓住夏天，十七岁的那年吻过她的脸就以为和她能永远，有没有那么一种永远
    永远不改变，拥抱过的美丽都再也不破碎
  </f-ellipsis>
</template>
