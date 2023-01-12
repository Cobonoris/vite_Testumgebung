<script setup lang="ts">

defineProps(['products'])

</script>

<template>
  <h1>List</h1>
  <div class="productList">
    <div class="productList__item" v-for="item in products.products" >
      <div class="productList__item-img">
        <img :src="item.imageURL" alt="test"/>
      </div>
      <div class="productList__item-title">
        {{ item.title }}
      </div>
      <div class="productList__item-preis">
        {{ item.preisEUR }}€
      </div>
    </div>
  </div>
</template>

