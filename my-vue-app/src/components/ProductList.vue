<script setup lang="ts">

defineProps(['products'])

</script>

<template>
  <h1>List</h1>
  <div class="productList">
    <div class="productList__item" v-for="item in products" >
      <div class="productList__item-title">
        Lebewesen: {{ item.title }}
      </div>
      <div class="productList__item-legs">
        Anzahl Beine: {{ item.legs }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
