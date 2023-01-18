<script setup lang="ts">
import { Product } from "../index"
import ProductTile from './ProductTile/ProductTile.vue'


defineProps<{ list: Product[] }>()

</script>

<template>
  <h1>List</h1>
  <div class="productList">
    <ProductTile :products="list" />
  </div>
</template>

<style lang="scss">

.productList {
    position: absolute;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  
}

</style>