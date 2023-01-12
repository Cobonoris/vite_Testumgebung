<script setup lang="ts">

defineProps(['products'])

</script>

<template>
  <h1>List</h1>
  <div class="productList">
    <div class="productList__item" v-for="item in products" >
      <div class="productList__item-title bold">
        Lebewesen: 
        <span class="content">
          {{ item.title }}
        </span>
      </div>
      <div class="productList__item-legs bold">
        Anzahl Beine: 
        <span class="content">
          {{ item.legs }}
        </span>
      </div>
    </div>
  </div>
</template>

